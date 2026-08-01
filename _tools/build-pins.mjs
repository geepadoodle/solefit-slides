/* Build the pinned-post images: 1080x1350 device shots in Chromium.
   Usage: node build-pins.mjs [slug ...]   (no args = all pins) */

import { readFile, writeFile, mkdir, readdir, rm } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { chromium } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, "..", "pins");

function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const root = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
  if (!existsSync(root)) return undefined;
  return readdirSync(root)
    .filter(d => d.startsWith("chromium-"))
    .map(d => path.join(root, d, "chrome-linux", "chrome"))
    .find(existsSync);
}

const only = process.argv.slice(2);
const specs = [];
for (const f of (await readdir(path.join(HERE, "pins"))).filter(f => f.endsWith(".mjs")).sort()) {
  const spec = (await import(pathToFileURL(path.join(HERE, "pins", f)))).default;
  if (!only.length || only.includes(spec.slug)) specs.push(spec);
}

const paint = await readFile(path.join(HERE, "paint-feet.js"), "utf8");

const page = await (await chromium.launch({
  executablePath: findChromium(),
  args: ["--force-color-profile=srgb", "--font-render-hinting=none"],
})).newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });

for (const spec of specs) {
  const d = spec.device;
  const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="pins-scene.css"></head><body>
<script>${paint}</script>
<div class="scene">
  <div class="glow"></div>
  <div class="wedge ${spec.wedge || ""}"></div>
  <svg class="grain" width="1080" height="1350"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2"/></filter><rect width="1080" height="1350" filter="url(#n)"/></svg>
</div>
<div class="contact" style="bottom:${spec.contact.bottom};margin-left:${spec.contact.shift}"></div>
<div class="stage3d">
  <div class="device" style="--rx:${d.rx};--ry:${d.ry};--rz:${d.rz};--tx:${d.tx};--ty:${d.ty}">
    <i class="power"></i><i class="volu"></i><i class="vold"></i><i class="mute"></i>
    <div class="screen"><div class="ui">${spec.screen}</div></div>
    <div class="island"></div>
    <div class="glass"></div>
  </div>
</div>
<div class="word">${spec.word}</div>
</body></html>`;

  const file = path.join(HERE, `.pin-${spec.slug}.html`);
  await writeFile(file, html);

  await page.goto(pathToFileURL(file).href);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);

  const dir = path.join(OUT, spec.slug);
  await mkdir(dir, { recursive: true });
  await page.screenshot({ path: path.join(dir, "pin.jpg"), type: "jpeg", quality: 93 });
  await writeFile(path.join(dir, "caption.md"), spec.caption.trimStart());
  await rm(file);
  console.log(`${spec.slug}  ok`);
}

await page.context().browser().close();
