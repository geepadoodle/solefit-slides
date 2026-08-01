# Nano Banana prompts — final

One generation per post: fresh chat, attach the matching `screenshot.png`,
paste the prompt. The caption word is generated in-image (identical absolute
spec in all three prompts — letter height one eighth of the image height,
bottom-left corner, both gaps half a letter height). Pure black backdrop, no
glow, no shadow.

If the words come back inconsistent between posts, don't re-roll for
typography — send the images back to Claude ("stamp the words") or run
`_tools/stamp-word.mjs` to overwrite them with real Inter at fixed
coordinates; on a pure black backdrop the patch is invisible.

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post background. A titanium
> iPhone 15 Pro floats at a slight tilt on a completely black background —
> pure solid black (#000000), no glow, no spotlight, no gradient, no floor,
> no shadow, no environment of any kind; only the phone is lit. The phone
> sits in the upper two thirds of the frame; the bottom quarter of the image
> is pure black, reserved for the caption word.
>
> The attached screenshot is the phone's screen. Treat every UI element on
> it as a locked layer: copy the pills, brackets, LEFT/RIGHT tags, capture
> ring, chips and status bar exactly — position, wording and spelling —
> without retyping or redrawing them. Replace ONLY the camera view behind
> that UI with a realistic photo: looking straight down at your own feet in
> white crew socks on an oak wood floor, shins entering from the bottom
> edge, toes pointing up and away, natural light.
>
> Then add the caption word "Scan" — the complete word, every letter fully
> visible, drawn IN FRONT of everything so nothing covers any part of it.
> Font: Inter ExtraBold, white, no underline. Size: the capital letter is
> exactly one eighth of the image height tall. Position: bottom-left
> corner of the image — the gap between the first letter and the left edge,
> and the gap between the word and the bottom edge, are both equal to half a
> letter height. Do not enlarge, shrink, or re-center the word.
>
> No other text, logos, sparkles, stars or watermarks anywhere outside the
> phone screen.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post background. A titanium
> iPhone 15 Pro stands almost upright, centered, angled just slightly, on a
> completely black background — pure solid black (#000000), no glow, no
> spotlight, no gradient, no floor, no shadow, no environment of any kind;
> only the phone is lit. The phone sits in the upper two thirds of the
> frame; the bottom quarter of the image is pure black, reserved for the
> caption word.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every number, label, gauge bar,
> outline and word keeps its position, wording and spelling. Do not retype,
> redraw or "clean up" anything on the screen.
>
> Then add the caption word "Analyze" — the complete word, every letter fully
> visible, drawn IN FRONT of everything so nothing covers any part of it.
> Font: Inter ExtraBold, white, no underline. Size: the capital letter is
> exactly one eighth of the image height tall — it is a longer
> word, so at that fixed letter height it simply runs wider. Position: bottom-left
> corner of the image — the gap between the first letter and the left edge,
> and the gap between the word and the bottom edge, are both equal to half a
> letter height. Do not enlarge, shrink, or re-center the word.
>
> No other text, logos, sparkles, stars or watermarks anywhere outside the
> phone screen.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post background. A titanium
> iPhone 15 Pro leans at a slight angle on a completely black background —
> pure solid black (#000000), no glow, no spotlight, no gradient, no floor,
> no shadow, no environment of any kind; only the phone is lit. The phone
> sits in the upper two thirds of the frame; the bottom quarter of the image
> is pure black, reserved for the caption word.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every shoe name, brand line,
> row number, size line and fit badge keeps its position, wording and
> spelling. Do not retype, redraw or "clean up" anything on the screen. The
> list is cut off by the bottom of the screen — keep that cut.
>
> Then add the caption word "Choose" — the complete word, every letter fully
> visible, drawn IN FRONT of everything so nothing covers any part of it.
> Font: Inter ExtraBold, white, no underline. Size: the capital letter is
> exactly one eighth of the image height tall. Position: bottom-left
> corner of the image — the gap between the first letter and the left edge,
> and the gap between the word and the bottom edge, are both equal to half a
> letter height. Do not enlarge, shrink, or re-center the word.
>
> No other text, logos, sparkles, stars or watermarks anywhere outside the
> phone screen.

---

## Checking a Gemini result (30 seconds each)

1. The word: complete, in front of everything, bottom-left corner, letter
   height ~1/8 of image height, no underline, no sparkle/star glyph.
2. Screen text matches the attached screenshot — brand lines (NIKE not MIKE,
   JORDAN not JERDAN), "½ size up", "US 10", the fit percentages.
3. Dynamic Island small, about a third of the screen width.

Screen problems → fresh chat, same prompt, re-roll. Word problems → keep
the image and stamp instead (intro above).

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
