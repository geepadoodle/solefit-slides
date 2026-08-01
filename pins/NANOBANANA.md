# Nano Banana prompts — final

One generation per post. Open a FRESH chat each time, attach the matching
`screenshot.png`, paste the prompt, nothing else. The screen-protection line
is baked in (retyped screen text was the failure in round one), the word spec
is identical in all three, and decorations are banned (round one added a
sparkle glyph).

If a result still has mangled screen text, don't argue with it in-thread —
fresh chat, same prompt, re-roll. And whatever comes back, the typography can
be normalized deterministically afterwards (see the last section).

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post. A titanium iPhone 15 Pro
> floats at a slight tilt in a dark charcoal photo studio with a soft glow
> behind it and a deep shadow below it.
>
> The attached screenshot is the phone's screen. Treat every UI element on it
> as a locked layer: copy the pills, brackets, LEFT/RIGHT tags, capture ring,
> chips and status bar exactly — position, wording and spelling — without
> retyping or redrawing them. Replace ONLY the camera view behind that UI
> with a realistic photo: looking straight down at your own feet in white
> crew socks on an oak wood floor, shins entering from the bottom edge, toes
> pointing up and away, natural light.
>
> Then add exactly one graphic element on top: the word "Scan" in the font
> Inter ExtraBold, white, 158 px tall on this canvas, no underline, its first
> letter starting 76 px from the left edge with its baseline 135 px above the
> bottom edge. Same size and position as the other posts in this series.
> Nothing else — no sparkles, stars, logos, watermarks or extra text
> anywhere.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post. A titanium iPhone 15 Pro
> stands almost upright, centered, in a dark charcoal photo studio with a
> soft spotlight glow behind it and a deep shadow below it.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every number, label, gauge bar,
> outline and word keeps its position, wording and spelling. Do not retype,
> redraw or "clean up" anything on the screen.
>
> Then add exactly one graphic element on top: the word "Analyze" in the font
> Inter ExtraBold, white, 158 px tall on this canvas, no underline, its first
> letter starting 76 px from the left edge with its baseline 135 px above the
> bottom edge. Same size and position as the other posts in this series — it
> is a long word, let it run wide, never shrink it. Nothing else — no
> sparkles, stars, logos, watermarks or extra text anywhere.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post. A titanium iPhone 15 Pro
> leans at a slight angle in a dark charcoal photo studio with a soft glow
> behind it, a deep shadow below it, and a faint diagonal floor split in the
> lower right.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every shoe name, brand line,
> row number, size line and fit badge keeps its position, wording and
> spelling. Do not retype, redraw or "clean up" anything on the screen. The
> list is cut off by the bottom of the screen — keep that cut.
>
> Then add exactly one graphic element on top: the word "Choose" in the font
> Inter ExtraBold, white, 158 px tall on this canvas, no underline, its first
> letter starting 76 px from the left edge with its baseline 135 px above the
> bottom edge. Same size and position as the other posts in this series.
> Nothing else — no sparkles, stars, logos, watermarks or extra text
> anywhere.

---

## Checking a result (30 seconds each)

1. Read the screen against the attached screenshot — brand lines (NIKE, not
   MIKE; JORDAN, not JERDAN), "½ size up", "US 10", the fit percentages.
2. The word: white, no underline, starts at the same corner spot as the other
   two, same letter size (Analyze must not be bigger).
3. No sparkle/star glyph anywhere.
4. Dynamic Island small, about a third of the screen width.

Bad screen text → fresh chat, same prompt, re-roll. Bad word only → keep the
image and normalize the type instead (below).

## Type normalization (the deterministic fix)

The words sit on flat dark backdrop in every layout, so they can be patched
without touching the rest: erase the generated word, stamp the real Inter
ExtraBold at 158 px, x=76, baseline y=1215 — identical across all three.
Send the finals back to Claude in this repo and ask for "type normalization";
it's scripted, not generated, so it's exact.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
