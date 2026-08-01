/* Generate the pinned-post scenes with the Gemini image API (Nano Banana),
   using each pin's screenshot.png as the reference image. Words are NOT
   generated — stamp them afterwards with stamp-word.mjs.

   Usage:
     GEMINI_API_KEY=... node gemini-pins.mjs [slug ...] [--n 2]

   Writes candidates to ../pins/<slug>/gemini-<i>.png for review. */

import { readFile, writeFile, readdir } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) {
  console.error("Set GEMINI_API_KEY (create one at https://aistudio.google.com/apikey)");
  process.exit(2);
}

const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";
const argv = process.argv.slice(2);
const nIdx = argv.indexOf("--n");
const N = nIdx === -1 ? 2 : parseInt(argv[nIdx + 1], 10);
const only = argv.filter((a, i) => !a.startsWith("--") && argv[i - 1] !== "--n");

const BLACK = `on a completely black background — pure solid black (#000000), no glow, no spotlight, no gradient, no floor, no shadow, no environment of any kind; only the phone is lit.`;
const SCENE = {
  "01-scan": `A titanium iPhone 15 Pro floats at a slight tilt ${BLACK}`,
  "02-analyze": `A titanium iPhone 15 Pro stands almost upright, centered, angled just slightly, ${BLACK}`,
  "03-choose": `A titanium iPhone 15 Pro leans at a slight angle ${BLACK}`,
};
const SCREEN = {
  "01-scan": `The attached screenshot is the phone's screen. Treat every UI element on it as a locked layer: copy the pills, brackets, LEFT/RIGHT tags, capture ring, chips and status bar exactly — position, wording and spelling — without retyping or redrawing them. Replace ONLY the camera view behind that UI with a realistic photo: looking straight down at your own feet in white crew socks on an oak wood floor, shins entering from the bottom edge, toes pointing up and away, natural light.`,
  "02-analyze": `The attached screenshot is the phone's screen. Treat it as a locked layer: place it on the display exactly as it is — every number, label, gauge bar, outline and word keeps its position, wording and spelling. Do not retype, redraw or "clean up" anything on the screen.`,
  "03-choose": `The attached screenshot is the phone's screen. Treat it as a locked layer: place it on the display exactly as it is — every shoe name, brand line, row number, size line and fit badge keeps its position, wording and spelling. Do not retype, redraw or "clean up" anything on the screen. The list is cut off by the bottom of the screen — keep that cut.`,
};
const TAIL = `The phone sits in the upper two thirds of the frame; the bottom quarter of the image is pure black with nothing in it — text will be added there later. No text, words, captions, logos, sparkles, stars or watermarks anywhere outside the phone screen. Portrait 4:5 aspect ratio, 1080×1350.`;

const slugs = (only.length ? only : Object.keys(SCENE));

for (const slug of slugs) {
  const shot = await readFile(path.join(HERE, "..", "pins", slug, "screenshot.png"));
  const prompt = `Generate an image: a 1080×1350 Instagram post background. ${SCENE[slug]}\n\n${SCREEN[slug]}\n\n${TAIL}`;

  for (let i = 1; i <= N; i++) {
    process.stdout.write(`${slug} #${i} ... `);
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`,
      {
        method: "POST",
        headers: { "x-goog-api-key": KEY, "content-type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [
              { inlineData: { mimeType: "image/png", data: shot.toString("base64") } },
              { text: prompt },
            ],
          }],
          generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "4:5" } },
        }),
      });

    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.log(`HTTP ${res.status}: ${json.error?.message || "unknown error"}`);
      continue;
    }
    const img = json.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData;
    if (!img) {
      console.log(`no image in response (${json.candidates?.[0]?.finishReason || "?"})`);
      continue;
    }
    const out = path.join(HERE, "..", "pins", slug, `gemini-${i}.png`);
    await writeFile(out, Buffer.from(img.data, "base64"));
    console.log(`-> pins/${slug}/gemini-${i}.png`);
  }
}
console.log("\nReview the candidates, then stamp the keepers:\n  node stamp-word.mjs ../pins/01-scan/gemini-1.png Scan ../pins/01-scan/final.jpg");
