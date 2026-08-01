# Nano Banana prompts — final

One generation per post. Open a FRESH chat each time, attach the matching
`screenshot.png`, paste the prompt, nothing else.

Placement note: image models cannot follow pixel coordinates ("x=76px"
produced a giant word behind the phone). These prompts describe placement
the way the model actually understands it — corner, margins, width span,
and stacking order — stated identically in all three.

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post. A titanium iPhone 15 Pro
> floats at a slight tilt in a dark charcoal photo studio with a soft glow
> behind it and a deep shadow below it. The phone sits in the upper two
> thirds of the frame, leaving the bottom strip of the image clear.
>
> The attached screenshot is the phone's screen. Treat every UI element on it
> as a locked layer: copy the pills, brackets, LEFT/RIGHT tags, capture ring,
> chips and status bar exactly — position, wording and spelling — without
> retyping or redrawing them. Replace ONLY the camera view behind that UI
> with a realistic photo: looking straight down at your own feet in white
> crew socks on an oak wood floor, shins entering from the bottom edge, toes
> pointing up and away, natural light.
>
> Finally add the caption word "Scan" — the complete word, every letter fully
> visible, drawn IN FRONT of everything so nothing covers any part of it.
> Font Inter ExtraBold, white, no underline. Position: the bottom-left corner
> of the image, a small margin (about one letter-width) from the left edge
> and the same margin up from the bottom edge. Size: the word spans about one
> third of the image width — a caption in the corner, NOT a giant backdrop
> word. Absolutely nothing else in the frame: no sparkle or star glyph in any
> corner, no logos, no watermarks, no extra text.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post. A titanium iPhone 15 Pro
> stands almost upright, centered, in a dark charcoal photo studio with a
> soft spotlight glow behind it and a deep shadow below it. The phone sits in
> the upper two thirds of the frame, leaving the bottom strip of the image
> clear.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every number, label, gauge bar,
> outline and word keeps its position, wording and spelling. Do not retype,
> redraw or "clean up" anything on the screen.
>
> Finally add the caption word "Analyze" — the complete word, every letter
> fully visible, drawn IN FRONT of everything so nothing covers any part of
> it. Font Inter ExtraBold, white, no underline. Position: the bottom-left
> corner of the image, a small margin (about one letter-width) from the left
> edge and the same margin up from the bottom edge. Size: the SAME letter
> height as the words on the other posts in this series — because it is a
> longer word it spans about half the image width; never enlarge or shrink
> the letters. A caption in the corner, NOT a giant backdrop word. Absolutely
> nothing else in the frame: no sparkle or star glyph in any corner, no
> logos, no watermarks, no extra text.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Generate an image: a 1080×1350 Instagram post. A titanium iPhone 15 Pro
> leans at a slight angle in a dark charcoal photo studio with a soft glow
> behind it, a deep shadow below it, and a faint diagonal floor split in the
> lower right. The phone sits in the upper two thirds of the frame, leaving
> the bottom strip of the image clear.
>
> The attached screenshot is the phone's screen. Treat it as a locked layer:
> place it on the display exactly as it is — every shoe name, brand line,
> row number, size line and fit badge keeps its position, wording and
> spelling. Do not retype, redraw or "clean up" anything on the screen. The
> list is cut off by the bottom of the screen — keep that cut.
>
> Finally add the caption word "Choose" — the complete word, every letter
> fully visible, drawn IN FRONT of everything so nothing covers any part of
> it. Font Inter ExtraBold, white, no underline. Position: the bottom-left
> corner of the image, a small margin (about one letter-width) from the left
> edge and the same margin up from the bottom edge. Size: the word spans
> about one third of the image width, the same letter height as the other
> posts in this series — a caption in the corner, NOT a giant backdrop word.
> Absolutely nothing else in the frame: no sparkle or star glyph in any
> corner, no logos, no watermarks, no extra text.

---

## Checking a result (30 seconds each)

1. The word: complete, in front of everything, bottom-left corner, roughly
   the same letter height across all three, no underline.
2. Screen text matches the attached screenshot — brand lines (NIKE not MIKE,
   JORDAN not JERDAN), "½ size up", "US 10", the fit percentages.
3. No sparkle/star glyph anywhere.
4. Dynamic Island small, about a third of the screen width.

Anything off → fresh chat, same prompt, re-roll. Words drift → keep the best
images and normalize the type deterministically (below) instead of
re-rolling for typography.

## Type normalization (the guaranteed fix)

The caption words sit over flat dark backdrop, so they can be replaced
exactly: erase the generated word, stamp real Inter ExtraBold at the same
size and corner position across all three images. Send the finals back to
Claude in this repo and ask for "type normalization" — it's scripted, not
generated, so the result is pixel-identical across the set.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
