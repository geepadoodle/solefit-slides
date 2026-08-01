# Nano Banana prompts — final

Four requirements, and one of them can't come from the model:

- **Black background** — in the prompts.
- **Photorealistic phone + screen** — in the prompts.
- **Same font, size and position for the word in all three** — NOT possible
  from three independent generations. The prompts therefore leave the
  bottom-left empty, and the word is stamped afterwards with the real
  Inter ExtraBold file at fixed coordinates. On a pure black backdrop the
  stamp is seamless.

## Workflow

1. Fresh chat per post → attach the matching `screenshot.png` → paste the
   prompt. You get three photoreal, word-less images.
2. Send those three back to Claude in this repo: **"stamp the words"**.
   (Or run it yourself: `cd _tools && node stamp-word.mjs <image> Scan
   ../pins/01-scan/final.jpg`, etc.)
3. Three finished posts with byte-identical typography.

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Generate an image: a 1080×1350 photorealistic product photograph. A
> titanium iPhone 15 Pro floats at a slight tilt against a completely black
> background — pure solid black (#000000), no glow, no spotlight, no
> gradient, no floor, no shadow, no environment; only the phone is lit.
> It must read as a genuine studio product PHOTOGRAPH, not a 3D render or
> illustration: shot on a 85mm lens, shallow depth of field with the far edge
> of the phone falling very slightly out of focus, fine brushed-metal grain
> visible on the titanium frame, a soft specular highlight running along one
> polished edge, faint dust-free glass with a barely-visible reflection, and
> natural sensor grain across the whole frame. Indistinguishable from a real
> photo taken by a product photographer.
>
> The phone occupies the upper two thirds of the frame. The bottom quarter of
> the image is pure flat black, completely empty.
>
> The attached screenshot is the phone's screen. Keep every UI element on it
> exactly as it is — the status bar, the "LiDAR · BOTH FEET" pill, the "Hold
> steady" pill, the white corner brackets, the LEFT and RIGHT tags, the
> capture ring and the mode chips — same position, same wording, same
> spelling, no retyping and no redrawing. The screen is emissive: it glows
> faintly and sits under glass with a subtle reflection.
>
> Replace the camera-viewfinder area behind the UI with a PHOTOREALISTIC
> photograph — this part must look like a real iPhone camera frame, not an
> illustration: real human feet in white cotton crew socks standing on a real
> oak hardwood floor. Real skin visible on the shins above the sock cuffs with
> natural skin texture and fine hair, real ribbed knit weave and soft creases
> in the cotton, real wood grain with visible plank seams, soft natural indoor
> window light with believable contact shadows under the feet, slight camera
> grain and a shallow focus falloff toward the top of the frame. First-person
> view: the shins enter from the BOTTOM edge of the screen and the toes point
> away toward the top. If any part of the attached screenshot's feet looks
> drawn or illustrated, discard it entirely and generate a real photograph in
> its place.
>
> No text, words, captions, logos, sparkles, stars or watermarks anywhere
> outside the phone screen. The bottom quarter stays empty black.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Generate an image: a 1080×1350 photorealistic product photograph. A
> titanium iPhone 15 Pro stands almost upright, centered, angled just
> slightly, against a completely black background — pure solid black
> (#000000), no glow, no spotlight, no gradient, no floor, no shadow, no
> environment; only the phone is lit.
> It must read as a genuine studio product PHOTOGRAPH, not a 3D render or
> illustration: shot on a 85mm lens, shallow depth of field with the far edge
> of the phone falling very slightly out of focus, fine brushed-metal grain
> visible on the titanium frame, a soft specular highlight running along one
> polished edge, faint dust-free glass with a barely-visible reflection, and
> natural sensor grain across the whole frame. Indistinguishable from a real
> photo taken by a product photographer.
>
> The phone occupies the upper two thirds of the frame. The bottom quarter of
> the image is pure flat black, completely empty.
>
> The attached screenshot is the phone's screen. Place it on the display
> exactly as it is — every number, label, gauge bar, foot outline and word
> keeps its position, wording and spelling. Do not retype, redraw or "clean
> up" anything on the screen. The screen is emissive: it glows faintly and
> sits under glass with a subtle reflection, and the white interface casts no
> light onto the black background.
>
> No text, words, captions, logos, sparkles, stars or watermarks anywhere
> outside the phone screen. The bottom quarter stays empty black.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Generate an image: a 1080×1350 photorealistic product photograph. A
> titanium iPhone 15 Pro leans at a slight angle against a completely black
> background — pure solid black (#000000), no glow, no spotlight, no
> gradient, no floor, no shadow, no environment; only the phone is lit.
> It must read as a genuine studio product PHOTOGRAPH, not a 3D render or
> illustration: shot on a 85mm lens, shallow depth of field with the far edge
> of the phone falling very slightly out of focus, fine brushed-metal grain
> visible on the titanium frame, a soft specular highlight running along one
> polished edge, faint dust-free glass with a barely-visible reflection, and
> natural sensor grain across the whole frame. Indistinguishable from a real
> photo taken by a product photographer.
>
> The phone occupies the upper two thirds of the frame. The bottom quarter of
> the image is pure flat black, completely empty.
>
> The attached screenshot is the phone's screen. Place it on the display
> exactly as it is — every shoe name, brand line, row number, size line and
> fit badge keeps its position, wording and spelling. Do not retype, redraw
> or "clean up" anything on the screen. The list is cut off by the bottom of
> the screen — keep that cut. The screen is emissive: it glows faintly and
> sits under glass with a subtle reflection.
>
> No text, words, captions, logos, sparkles, stars or watermarks anywhere
> outside the phone screen. The bottom quarter stays empty black.

---

## Checking a result

1. Bottom quarter completely empty — no word, no sparkle/star glyph.
2. Background truly black, no glow or shadow.
3. Screen text matches the attachment — brand lines (NIKE not MIKE, JORDAN
   not JERDAN), "½ size up", "US 10", the fit percentages.
4. Scan only: the feet are a real photograph — skin texture on the shins,
   real knit weave, real wood grain. If they look drawn, re-roll.
5. Phone reads as a photo: metal grain, edge highlight, slight focus falloff.

Anything off → fresh chat, same prompt, re-roll. Typography is never a
reason to re-roll — that comes from the stamp.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
