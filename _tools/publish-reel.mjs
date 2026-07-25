/* Publish a reel from reels/<slug>/ to Instagram via the Content Publishing API.
   Three steps: create a media container pointing at a public URL, poll until
   Meta has finished ingesting it, then publish the container.

   Usage:
     node publish-reel.mjs <slug> [<slug> ...] [options]

   Options:
     --dry-run        preflight only: resolve URLs, check they're fetchable and
                      the right content type, build the caption. No credentials
                      needed, nothing is posted. Run this first.
     --ref <git-ref>  branch or tag the assets are served from (default: the
                      current branch)
     --share-to-feed  also show the reel on the profile grid (default: on)
     --no-share-to-feed
     --no-cover       let Instagram pick the cover instead of using cover.jpg

   Environment:
     IG_USER_ID       the Instagram *professional* account id (not the username,
                      not the Facebook page id)
     IG_ACCESS_TOKEN  long-lived token with instagram_content_publish
     IG_API_BASE      default graph.facebook.com; use graph.instagram.com if you
                      set the app up with Instagram Login rather than a linked
                      Facebook Page
     IG_API_VERSION   default v21.0

   See reels/PUBLISHING.md for the one-time account setup. */

import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.join(HERE, "..");

const GH_OWNER = "geepadoodle";
const GH_REPO = "solefit-slides";

const API_BASE = process.env.IG_API_BASE || "graph.facebook.com";
const API_VERSION = process.env.IG_API_VERSION || "v21.0";

// Meta's limits, checked locally so a bad caption fails here and not halfway
// through an upload.
const CAPTION_MAX = 2200;
const HASHTAG_MAX = 30;

const argv = process.argv.slice(2);
const flag = name => argv.includes(name);
const opt = name => {
  const i = argv.indexOf(name);
  return i === -1 ? undefined : argv[i + 1];
};
const slugs = argv.filter((a, i) => !a.startsWith("--") && argv[i - 1] !== "--ref");

const DRY = flag("--dry-run");
const USE_COVER = !flag("--no-cover");
const SHARE_TO_FEED = !flag("--no-share-to-feed");

if (!slugs.length) {
  console.error("usage: node publish-reel.mjs <slug> [...] [--dry-run] [--ref <git-ref>]");
  process.exit(2);
}

const ref = opt("--ref") ||
  execFileSync("git", ["-C", REPO, "rev-parse", "--abbrev-ref", "HEAD"], { encoding: "utf8" }).trim();

/* jsDelivr rather than raw.githubusercontent: raw serves .mp4 as
   application/octet-stream with nosniff, and Meta's ingestion wants video/mp4.
   Same files, same commit, correct Content-Type. */
const cdn = file =>
  `https://cdn.jsdelivr.net/gh/${GH_OWNER}/${GH_REPO}@${encodeURIComponent(ref).replace(/%2F/g, "/")}/reels/${file}`;

/* ---------- caption ---------- */

function sections(md) {
  const out = {};
  for (const part of md.split(/^## /m).slice(1)) {
    const nl = part.indexOf("\n");
    out[part.slice(0, nl).trim()] = part.slice(nl + 1).trim();
  }
  return out;
}

// Instagram captions are plain text — markdown emphasis would post as literal
// asterisks.
const stripMarkdown = s => s.replace(/\*\*(.+?)\*\*/gs, "$1").replace(/\*(.+?)\*/gs, "$1");

async function buildCaption(slug) {
  const md = sections(await readFile(path.join(REPO, "reels", slug, "caption.md"), "utf8"));
  const body = stripMarkdown(md.Caption ?? "");
  const tags = (md.Hashtags ?? "").split("\n").filter(l => l.trim().startsWith("#")).join(" ").trim();
  if (!body) throw new Error(`${slug}: no "## Caption" section in caption.md`);

  const caption = `${body}\n\n${tags}`.trim();
  const count = (caption.match(/#\w/g) || []).length;
  if (caption.length > CAPTION_MAX) {
    throw new Error(`${slug}: caption is ${caption.length} chars, Instagram allows ${CAPTION_MAX}`);
  }
  if (count > HASHTAG_MAX) {
    throw new Error(`${slug}: ${count} hashtags, Instagram allows ${HASHTAG_MAX}`);
  }
  return { caption, chars: caption.length, hashtags: count };
}

/* ---------- preflight ---------- */

async function head(url, wantType) {
  const res = await fetch(url, { method: "HEAD", redirect: "follow" });
  const type = res.headers.get("content-type") || "";
  const size = Number(res.headers.get("content-length") || 0);
  if (!res.ok) throw new Error(`${url}\n  -> HTTP ${res.status}. Is the branch pushed and the repo public?`);
  if (wantType && !type.startsWith(wantType)) {
    throw new Error(`${url}\n  -> Content-Type is "${type}", Meta needs ${wantType}*. Ingestion will fail.`);
  }
  return { type, size };
}

/* ---------- Graph API ---------- */

function credentials() {
  const id = process.env.IG_USER_ID;
  const token = process.env.IG_ACCESS_TOKEN;
  if (!id || !token) {
    throw new Error(
      "IG_USER_ID and IG_ACCESS_TOKEN must be set to publish.\n" +
      "Run with --dry-run to preflight without them, or see reels/PUBLISHING.md.");
  }
  return { id, token };
}

async function api(method, endpoint, params, token) {
  const url = new URL(`https://${API_BASE}/${API_VERSION}/${endpoint}`);
  const body = new URLSearchParams({ ...params, access_token: token });
  const res = method === "GET"
    ? await fetch(`${url}?${body}`)
    : await fetch(url, { method, body });

  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) {
    const e = json.error || {};
    // error_user_msg is the human-readable one Meta returns for publishing
    // rejections (aspect ratio, duration, unreachable URL); it's the useful one.
    throw new Error(
      `Graph API ${method} ${endpoint} failed (HTTP ${res.status})\n` +
      `  ${e.error_user_msg || e.message || JSON.stringify(json)}` +
      (e.code ? `\n  code ${e.code}${e.error_subcode ? `/${e.error_subcode}` : ""}` : ""));
  }
  return json;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function waitForIngest(containerId, token) {
  // Meta downloads and transcodes the video before it can be published; a ~20s
  // reel is usually ready inside a minute, but the API gives no guarantee.
  const deadline = Date.now() + 10 * 60_000;
  let last = "";
  while (Date.now() < deadline) {
    const { status_code, status } = await api(
      "GET", containerId, { fields: "status_code,status" }, token);
    if (status_code !== last) {
      process.stdout.write(`\n  ${status_code}${status ? ` — ${status}` : ""}`);
      last = status_code;
    } else {
      process.stdout.write(".");
    }
    if (status_code === "FINISHED") { process.stdout.write("\n"); return; }
    if (status_code === "ERROR" || status_code === "EXPIRED") {
      throw new Error(`\ningest ${status_code}: ${status || "no detail returned"}`);
    }
    await sleep(5000);
  }
  throw new Error("\ningest timed out after 10 minutes");
}

/* ---------- main ---------- */

console.log(`ref: ${ref}${DRY ? "   (dry run — nothing will be posted)" : ""}\n`);

let failed = 0;
for (const slug of slugs) {
  try {
    const videoUrl = cdn(`${slug}/reel.mp4`);
    const coverUrl = cdn(`${slug}/cover.jpg`);

    const { caption, chars, hashtags } = await buildCaption(slug);
    const video = await head(videoUrl, "video/mp4");
    const cover = USE_COVER ? await head(coverUrl, "image/") : null;

    console.log(`${slug}`);
    console.log(`  video    ${videoUrl}`);
    console.log(`           ${video.type}, ${(video.size / 1e6).toFixed(1)} MB`);
    if (cover) console.log(`  cover    ${cover.type}, ${(cover.size / 1e6).toFixed(1)} MB`);
    console.log(`  caption  ${chars} chars, ${hashtags} hashtags`);
    console.log(`  feed     ${SHARE_TO_FEED ? "also on the profile grid" : "reels tab only"}`);

    if (DRY) { console.log("  ok (dry run)\n"); continue; }

    const { id, token } = credentials();

    process.stdout.write("  creating container");
    const container = await api("POST", `${id}/media`, {
      media_type: "REELS",
      video_url: videoUrl,
      caption,
      share_to_feed: String(SHARE_TO_FEED),
      ...(cover ? { cover_url: coverUrl } : {}),
    }, token);
    process.stdout.write(` -> ${container.id}`);

    await waitForIngest(container.id, token);

    const published = await api("POST", `${id}/media_publish`, { creation_id: container.id }, token);
    const { permalink } = await api("GET", published.id, { fields: "permalink" }, token)
      .catch(() => ({ permalink: "(permalink unavailable)" }));

    console.log(`  published ${published.id}`);
    console.log(`  ${permalink}\n`);
  } catch (err) {
    failed++;
    console.error(`${slug}\n  ${err.message}\n`);
  }
}

process.exit(failed ? 1 : 0);
