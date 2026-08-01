# Nano Banana prompts — final (word stamped afterwards)

A diffusion model cannot draw the same word at the same size three times —
so we no longer ask it to. Gemini generates the three scenes with the
bottom-left EMPTY; the word is stamped afterwards by a script using the real
Inter ExtraBold font at fixed coordinates, so the type is byte-identical
across the set.

Workflow:
1. Fresh chat per image → attach the matching `screenshot.png` → paste the
   prompt below.
2. Collect the three results (no words on them).
3. Stamp the words — either send the three images back to Claude in this
   repo ("stamp the words"), or run:

   ```bash
   cd _tools
   node stamp-word.mjs gemini-scan.png    Scan    ../pins/01-scan/final.jpg
   node stamp-word.mjs gemini-analyze.png Analyze ../pins/02-analyze/final.jpg
   node stamp-word.mjs gemini-choose.png  Choose  ../pins/03-choose/final.jpg
   ```

   The script scales to any input size (158 px Inter ExtraBold at 1080×1350,
   proportional otherwise) — identical font, size, and first-letter position
   on all three, guaranteed.

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post background. A titanium
> iPhone 15 Pro floats at a slight tilt in a dark charcoal photo studio with
> a soft glow behind it and a deep shadow below it. The phone sits in the
> upper two thirds of the frame; the bottom quarter of the image is empty
> dark backdrop with nothing in it — text will be added there later.
>
> The attached screenshot is the phone's screen. Treat every UI element on
> it as a locked layer: copy the pills, brackets, LEFT/RIGHT tags, capture
> ring, chips and status bar exactly — position, wording and spelling —
> without retyping or redrawing them. Replace ONLY the camera view behind
> that UI with a realistic photo: looking straight down at your own feet in
> white crew socks on an oak wood floor, shins entering from the bottom
> edge, toes pointing up and away, natural light.
>
> No text, words, captions, logos, sparkles, stars or watermarks anywhere
> outside the phone screen.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post background. A titanium
> iPhone 15 Pro stands almost upright, centered, in a dark charcoal photo
> studio with a soft spotlight glow behind it and a deep shadow below it.
> The phone sits in the upper two thirds of the frame; the bottom quarter of
> the image is empty dark backdrop with nothing in it — text will be added
> there later.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every number, label, gauge bar,
> outline and word keeps its position, wording and spelling. Do not retype,
> redraw or "clean up" anything on the screen.
>
> No text, words, captions, logos, sparkles, stars or watermarks anywhere
> outside the phone screen.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post background. A titanium
> iPhone 15 Pro leans at a slight angle in a dark charcoal photo studio with
> a soft glow behind it, a deep shadow below it, and a faint diagonal floor
> split in the lower right. The phone sits in the upper two thirds of the
> frame; the bottom quarter of the image is empty dark backdrop with nothing
> in it — text will be added there later.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every shoe name, brand line,
> row number, size line and fit badge keeps its position, wording and
> spelling. Do not retype, redraw or "clean up" anything on the screen. The
> list is cut off by the bottom of the screen — keep that cut.
>
> No text, words, captions, logos, sparkles, stars or watermarks anywhere
> outside the phone screen.

---

## Checking a Gemini result (30 seconds each)

1. Bottom quarter empty — no word, no sparkle/star glyph, nothing.
2. Screen text matches the attached screenshot — brand lines (NIKE not MIKE,
   JORDAN not JERDAN), "½ size up", "US 10", the fit percentages.
3. Dynamic Island small, about a third of the screen width.

Anything off → fresh chat, same prompt, re-roll. Then stamp the words
(workflow above) — typography is never a reason to re-roll again.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
