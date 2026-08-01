# Generating the pinned posts with Nano Banana

Three generations, one screenshot each. Attach the `screenshot.png` from the
matching pin folder and paste the prompt — nothing else. Keep prompts SHORT:
long spec-heavy prompts flip Gemini into describing/analyzing the image
instead of generating. Lead with the edit command, keep it under ~120 words,
and escalate with the add-on lines only if a specific thing goes wrong.

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Edit this image into a 1080×1350 Instagram post. Show this phone screen on
> a titanium iPhone 15 Pro floating at a slight tilt in a dark charcoal
> photo studio, soft glow behind it, deep shadow under it. Replace only the
> camera view behind the UI with a realistic photo: looking straight down at
> your own feet in white crew socks on an oak wood floor, shins entering
> from the bottom of the screen, toes pointing up and away. Keep every UI
> element (pills, brackets, chips, ring) exactly where it is. Add one big
> white word "Scan" in Inter ExtraBold, 158 px, no underline, bottom-left —
> first letter 7% from the left edge, baseline 10% above the bottom. Nothing
> else in the frame.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Edit this image into a 1080×1350 Instagram post. Show this phone screen,
> completely unchanged, on a titanium iPhone 15 Pro standing almost upright
> in a dark charcoal photo studio, soft spotlight glow behind it, deep
> shadow under it. Do not redraw or retype anything on the screen. Add one
> big white word "Analyze" in Inter ExtraBold, 158 px, no underline,
> bottom-left — first letter 7% from the left edge, baseline 10% above the
> bottom, same letter size as the other posts in this series. Nothing else
> in the frame.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Edit this image into a 1080×1350 Instagram post. Show this phone screen,
> completely unchanged, on a titanium iPhone 15 Pro leaning at a slight
> angle in a dark charcoal photo studio, soft glow behind it, deep shadow
> under it, a faint diagonal floor split in the lower-right. Do not redraw
> or retype anything on the screen — the list is cut off at the bottom,
> keep that. Add one big white word "Choose" in Inter ExtraBold, 158 px, no
> underline, bottom-left — first letter 7% from the left edge, baseline 10%
> above the bottom. Nothing else in the frame.

---

## If something specific goes wrong, add ONE of these lines and re-run

- Screen text got retyped or mangled:
  "The screen must stay pixel-identical to the attached image — generate
  only the phone body, scene and word."
- Word in the wrong place or wrong size:
  "The word starts at x=76 px, baseline y=1215 px, 158 px Inter ExtraBold,
  on the 1080×1350 canvas."
- Dynamic Island too big:
  "The Dynamic Island is small — about one third of the screen width."
- Feet look fake (prompt 1):
  "The camera view must look like a real iPhone photo, not a render — real
  sock fabric, real wood grain, natural light."
- Model still only analyzes instead of generating:
  start the prompt with "Generate an image:" — and send the prompt and the
  attachment in the SAME message, with no other conversation before it.

## Two-step fallback for the Scan feet

Generate the photo alone first: "Photo looking straight down at my own feet
in white crew socks on an oak floor, toes pointing away, shins entering from
the bottom, natural light, no UI." Then attach that photo AND the
screenshot: "Put the first image behind the UI of the second, keep all UI
exactly." A real 5-second photo of actual feet beats both.

## Capturing real screenshots instead (better input when possible)

- **Choose**: the "Best for your feet" ranking, in the simulator (⌘S saves a PNG).
- **Analyze**: Profile → scan history → a scan report.
- **Scan**: needs a real device (the simulator has no camera) — which also
  gets you real feet in the viewfinder, no replacement step needed.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
