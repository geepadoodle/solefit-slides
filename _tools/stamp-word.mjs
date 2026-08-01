/* Stamp the series word onto a generated post image — real Inter ExtraBold at
   fixed proportional coordinates, so every post in the set matches exactly.

   Usage: node stamp-word.mjs <input-image> <Word> [output]
   e.g.:  node stamp-word.mjs gemini-scan.png Scan ../pins/01-scan/final.jpg

   Coordinates match the rendered pins: at 1080×1350 the word is 158 px Inter
   ExtraBold at left 72 px, bottom 96 px. Any input size scales proportionally
   by height. */

import { readFile, writeFile, rm } from "node:fs/promises";
import { existsSync, readdirSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import { chromium } from "playwright";

const [input, word, output] = process.argv.slice(2);
if (!input || !word) {
  console.error("usage: node stamp-word.mjs <input-image> <Word> [output]");
  process.exit(2);
}
const HERE = path.dirname(fileURLToPath(import.meta.url));
const out = output || input.replace(/(\.[a-z]+)$/i, `-${word.toLowerCase()}$1`);

const chrome = readdirSync(process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers")
  .filter(d => d.startsWith("chromium-"))
  .map(d => path.join("/opt/pw-browsers", d, "chrome-linux", "chrome"))
  .find(existsSync);

const imgB64 = (await readFile(path.resolve(input))).toString("base64");
const ext = path.extname(input).slice(1).replace("jpg", "jpeg");

const browser = await chromium.launch({ executablePath: chrome, args: ["--force-color-profile=srgb"] });
const page = await browser.newPage();

// read the input's natural size first
await page.setContent(`<img id="i" src="data:image/${ext};base64,${imgB64}">`);
const { w, h } = await page.evaluate(() => {
  const i = document.getElementById("i");
  return { w: i.naturalWidth, h: i.naturalHeight };
});

const k = h / 1350;                       // proportional scale
// embed the font — an in-memory page cannot load file:// fonts
const fontB64 = (await readFile(path.join(HERE, "fonts", "Inter-ExtraBold.ttf"))).toString("base64");

await page.setViewportSize({ width: w, height: h });
await page.setContent(`<!doctype html><html><head><style>
  @font-face { font-family: Inter; font-weight: 800;
               src: url(data:font/ttf;base64,${fontB64}) format("truetype"); }
  * { margin: 0; }
  body { width: ${w}px; height: ${h}px; overflow: hidden; }
  img  { position: absolute; inset: 0; width: 100%; height: 100%; }
  .word {
    position: absolute; left: ${72 * k}px; bottom: ${96 * k}px;
    font: 800 ${158 * k}px Inter, sans-serif;
    letter-spacing: -0.025em; line-height: 1.06; color: #fff;
    text-shadow: 0 ${12 * k}px ${44 * k}px rgba(0,0,0,0.55);
  }
</style></head><body>
  <img src="data:image/${ext};base64,${imgB64}">
  <div class="word">${word}</div>
</body></html>`);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(150);

await page.screenshot({
  path: out,
  type: out.match(/\.png$/i) ? "png" : "jpeg",
  ...(out.match(/\.png$/i) ? {} : { quality: 93 }),
});
await browser.close();
console.log(`${out}  (${w}x${h}, word ${Math.round(158 * k)}px at x=${Math.round(72 * k)})`);
