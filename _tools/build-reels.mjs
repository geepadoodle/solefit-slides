/* Build SoleFit reels: render deterministic frames in Chromium, encode to
   Reels-spec MP4 (1080x1920, H.264 high, yuv420p, silent AAC track).
   Usage:  node build-reels.mjs [slug ...]      (no args = every reel) */

import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { chromium } from "playwright";
import ffmpeg from "ffmpeg-static";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = path.join(HERE, "..", "reels");
const FPS = 30;

const write = (stream, buf) =>
  stream.write(buf) ? Promise.resolve() : new Promise(r => stream.once("drain", r));

async function loadSpecs(only) {
  const files = (await readdir(path.join(HERE, "reels")))
    .filter(f => f.endsWith(".mjs"))
    .sort();
  const specs = [];
  for (const f of files) {
    const spec = (await import(pathToFileURL(path.join(HERE, "reels", f)))).default;
    if (!only.length || only.includes(spec.slug)) specs.push(spec);
  }
  return specs;
}

async function buildHtml(spec) {
  const tpl = await readFile(path.join(HERE, "template.html"), "utf8");
  const scenes = spec.scenes
    .map(s => `<section class="scene" data-dur="${s.dur}"${s.chrome === false ? ' data-chrome="off"' : ""}>${s.html}</section>`)
    .join("\n");
  const html = tpl
    .replace("{{TITLE}}", spec.title)
    .replace("{{COUNTER}}", spec.counter ?? "")
    .replace("{{SCENES}}", scenes);
  const file = path.join(HERE, `.frame-${spec.slug}.html`);
  await writeFile(file, html);
  return file;
}

function encoder(outFile) {
  const args = [
    "-y", "-loglevel", "error",
    "-f", "image2pipe", "-c:v", "mjpeg", "-framerate", String(FPS), "-i", "pipe:0",
    // A silent track: some upload paths choke on a video-only MP4, and it gives
    // the editor something to swap the trending audio onto.
    "-f", "lavfi", "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
    "-map", "0:v", "-map", "1:a",
    "-c:v", "libx264", "-preset", "slow", "-crf", "19",
    "-pix_fmt", "yuv420p", "-profile:v", "high", "-level", "4.1",
    "-g", String(FPS * 2), "-r", String(FPS),
    "-c:a", "aac", "-b:a", "128k", "-shortest",
    "-movflags", "+faststart",
    outFile,
  ];
  const p = spawn(ffmpeg, args, { stdio: ["pipe", "ignore", "pipe"] });
  let err = "";
  p.stderr.on("data", d => (err += d));
  p.on("error", e => { err += e.message; });
  return {
    stdin: p.stdin,
    done: new Promise((res, rej) =>
      p.on("close", code => (code === 0 ? res() : rej(new Error(err || `ffmpeg exited ${code}`))))),
  };
}

/* Prefer a Chromium that's already on the machine (CI images often ship one that
   doesn't match this Playwright's pinned build) before falling back to the
   bundled download. */
function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
  if (!existsSync(root)) return undefined;
  return readdirSync(root)
    .filter(d => d.startsWith("chromium-"))
    .map(d => path.join(root, d, "chrome-linux", "chrome"))
    .find(existsSync);
}

const browser = await chromium.launch({
  executablePath: findChromium(),
  args: ["--force-color-profile=srgb", "--font-render-hinting=none"],
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });

for (const spec of await loadSpecs(process.argv.slice(2))) {
  const file = await buildHtml(spec);
  const dir = path.join(OUT_ROOT, spec.slug);
  await mkdir(dir, { recursive: true });

  await page.goto(pathToFileURL(file).href);
  await page.evaluate(() => document.fonts.ready);

  const total = await page.evaluate(() => window.TOTAL);
  const frames = Math.round(total * FPS);

  const enc = encoder(path.join(dir, "reel.mp4"));
  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.seek(t), i / FPS);
    await write(enc.stdin, await page.screenshot({ type: "jpeg", quality: 95 }));
  }
  enc.stdin.end();
  await enc.done;

  await page.evaluate(t => window.seek(t), spec.coverAt);
  await page.screenshot({ path: path.join(dir, "cover.jpg"), type: "jpeg", quality: 92 });
  await writeFile(path.join(dir, "caption.md"), spec.caption.trimStart());
  await rm(file);

  console.log(`${spec.slug}  ${total.toFixed(1)}s  ${frames} frames`);
}

await browser.close();
