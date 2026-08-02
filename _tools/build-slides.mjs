/* Build vertical slide sets — TikTok photo-mode slideshows and Instagram
   Stories. Each spec in _tools/slides/*.mjs renders one folder of 1080x1920
   JPGs plus its caption file.

   Usage: node build-slides.mjs [slug ...]   (no args = every set) */

import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { chromium } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = { tiktok: path.join(HERE, "..", "tiktok"), story: path.join(HERE, "..", "stories") };

function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
  if (!existsSync(root)) return undefined;
  return readdirSync(root).filter(d => d.startsWith("chromium-"))
    .map(d => path.join(root, d, "chrome-linux", "chrome")).find(existsSync);
}

/* Layered background: base wash + soft color blobs + grain (+ optional grid).
   Every slide gets depth; no set repeats the same wash twice in a row. */
function background(bg) {
  const { wash = "paper", blobs = [], grid = false, vignette = true } = bg || {};
  const dark = ["ink", "slate", "ember"].includes(wash);
  const parts = [`<div class="bg ${wash}"></div>`];
  for (const b of blobs) {
    parts.push(`<div class="blob" style="left:${b.x};top:${b.y};width:${b.size};height:${b.size};` +
               `background:${b.color};opacity:${b.o ?? 0.5}"></div>`);
  }
  if (grid) parts.push(`<div class="gridlines"></div>`);
  parts.push(`<svg class="grain" width="1080" height="1920">` +
             `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3"/></filter>` +
             `<rect width="1080" height="1920" filter="url(#n)"/></svg>`);
  if (vignette) parts.push(`<div class="vign"></div>`);
  return { html: parts.join(""), dark };
}

const only = process.argv.slice(2);
const specs = [];
for (const f of (await readdir(path.join(HERE, "slides"))).filter(f => f.endsWith(".mjs")).sort()) {
  const spec = (await import(pathToFileURL(path.join(HERE, "slides", f)))).default;
  if (!only.length || only.includes(spec.slug)) specs.push(spec);
}

const browser = await chromium.launch({
  executablePath: findChromium(),
  args: ["--force-color-profile=srgb", "--font-render-hinting=none"],
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });

for (const spec of specs) {
  const dir = path.join(ROOT[spec.kind] ?? ROOT.tiktok, spec.slug);
  await mkdir(dir, { recursive: true });
  const n = spec.slides.length;

  for (let i = 0; i < n; i++) {
    const s = spec.slides[i];
    const bg = background(s.bg);
    const chrome = spec.kind === "story"
      ? ""                                        // stories stay clean for stickers
      : `<div class="brand"><i></i>SoleFit</div>
         <div class="idx">${String(i + 1).padStart(2, "0")} / ${String(n).padStart(2, "0")}</div>`;

    const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="slides-scene.css"></head>
<body class="${bg.dark ? "dark" : ""}">
<div class="slide">${bg.html}</div>
${chrome}
${s.html}
</body></html>`;

    const file = path.join(HERE, `.slide-tmp.html`);
    await writeFile(file, html);
    await page.goto(pathToFileURL(file).href);
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(120);
    await page.screenshot({
      path: path.join(dir, `${String(i + 1).padStart(2, "0")}.jpg`),
      type: "jpeg", quality: 93,
    });
    await rm(file);
  }

  await writeFile(path.join(dir, "caption.md"), spec.caption.trimStart());
  console.log(`${spec.kind}/${spec.slug}  ${n} slides`);
}

await browser.close();
