# Polish prompts — realism pass over the finished pins

These take the **finished post** (`pins/<slug>/pin.jpg`) as input, not the
screenshot. Everything in those files is already correct — the caption word's
font, size and position, the pure black background, the phone's placement and
margins, the app interface. The only weakness is that the phone is a CSS
render and (on Scan) the feet are painted.

So these prompts change exactly two things — the phone hardware, and the feet
— and lock everything else.

Fresh chat per image. Attach the pin, paste the prompt.

---

## Polish 1 — Scan  (attach `pins/01-scan/pin.jpg`)

> Make this image photorealistic. Keep the composition exactly as it is and
> change only two things: the phone hardware, and the photo inside the
> camera viewfinder on the screen.
>
> Rebuild ONLY the phone hardware so it looks like a real photograph of a
> natural titanium iPhone 15 Pro: brushed-titanium frame with fine directional
> grain, a soft specular highlight running along the polished edge, correctly
> proportioned thin bezels, real machined side buttons, the glass front
> catching a faint studio reflection, and the screen reading as emissive —
> glowing slightly under the glass rather than pasted flat. Add subtle
> photographic depth of field so the far edge of the device falls just barely
> out of focus, plus natural sensor grain. It must be indistinguishable from a
> real studio product photo, not a 3D render or a mockup.
>
> Replace the illustrated feet in the camera viewfinder with a REAL
> photograph, matched to the same framing: a first-person view looking
> straight down at two feet in white cotton crew socks on an oak hardwood
> floor. The shins enter from the bottom edge of the screen with real skin
> texture and fine hair above the sock cuffs; the toes point away toward the
> top. Real ribbed knit weave and soft creases in the cotton, real wood grain
> with visible plank seams, soft indoor window light, believable contact
> shadows under the feet, slight camera grain. It must look like a genuine
> iPhone camera frame — no illustration, no 3D render.
>
> Keep every UI overlay on that screen exactly where it is and exactly as
> worded: the status bar, the "LiDAR · BOTH FEET" pill, the "Hold steady —
> capturing both feet" pill, the white corner brackets, the LEFT and RIGHT
> tags, the capture ring and the LiDAR / Face ID depth / Photos chips.
>
> Change NOTHING else. The word at the bottom left keeps its exact font,
> weight, size, position and spacing. The background stays pure solid black
> (#000000) with no glow, gradient, shadow or floor. The phone keeps its exact
> position, angle, size and margins — do not move, rotate, rescale or re-crop
> it, and keep the whole device inside the frame. Every pixel of the app
> interface on the screen stays identical: same layout, same wording, same
> spelling, same numbers, same colors. Do not retype, redraw, restyle or
> "clean up" any part of the interface. Output the same 1080×1350 framing.

---

## Polish 2 — Analyze  (attach `pins/02-analyze/pin.jpg`)

> Make this image photorealistic. Keep the composition exactly as it is and
> change only one thing: the phone hardware.
>
> Rebuild ONLY the phone hardware so it looks like a real photograph of a
> natural titanium iPhone 15 Pro: brushed-titanium frame with fine directional
> grain, a soft specular highlight running along the polished edge, correctly
> proportioned thin bezels, real machined side buttons, the glass front
> catching a faint studio reflection, and the screen reading as emissive —
> glowing slightly under the glass rather than pasted flat. Add subtle
> photographic depth of field so the far edge of the device falls just barely
> out of focus, plus natural sensor grain. It must be indistinguishable from a
> real studio product photo, not a 3D render or a mockup.
>
> Change NOTHING else. The word at the bottom left keeps its exact font,
> weight, size, position and spacing. The background stays pure solid black
> (#000000) with no glow, gradient, shadow or floor. The phone keeps its exact
> position, angle, size and margins — do not move, rotate, rescale or re-crop
> it, and keep the whole device inside the frame. Every pixel of the app
> interface on the screen stays identical: same layout, same wording, same
> spelling, same numbers, same colors. Do not retype, redraw, restyle or
> "clean up" any part of the interface. Output the same 1080×1350 framing.
>
> In particular the scan report on the screen — the two foot outlines, the
> measurements, the size/width/asymmetry tiles, and the four colored
> percentile gauges with their captions — must survive completely untouched,
> pixel for pixel.

---

## Polish 3 — Choose  (attach `pins/03-choose/pin.jpg`)

> Make this image photorealistic. Keep the composition exactly as it is and
> change only one thing: the phone hardware.
>
> Rebuild ONLY the phone hardware so it looks like a real photograph of a
> natural titanium iPhone 15 Pro: brushed-titanium frame with fine directional
> grain, a soft specular highlight running along the polished edge, correctly
> proportioned thin bezels, real machined side buttons, the glass front
> catching a faint studio reflection, and the screen reading as emissive —
> glowing slightly under the glass rather than pasted flat. Add subtle
> photographic depth of field so the far edge of the device falls just barely
> out of focus, plus natural sensor grain. It must be indistinguishable from a
> real studio product photo, not a 3D render or a mockup.
>
> Change NOTHING else. The word at the bottom left keeps its exact font,
> weight, size, position and spacing. The background stays pure solid black
> (#000000) with no glow, gradient, shadow or floor. The phone keeps its exact
> position, angle, size and margins — do not move, rotate, rescale or re-crop
> it, and keep the whole device inside the frame. Every pixel of the app
> interface on the screen stays identical: same layout, same wording, same
> spelling, same numbers, same colors. Do not retype, redraw, restyle or
> "clean up" any part of the interface. Output the same 1080×1350 framing.
>
> In particular the ranked shoe list on the screen — every row number, brand
> line, shoe name, size line and fit-percentage badge, and the row cut off at
> the bottom edge of the screen — must survive completely untouched, pixel
> for pixel.

---

## Checking the result

1. The word: same font, same size, same spot as the input. Compare directly.
2. Background still pure black, no glow or shadow crept in.
3. Whole phone still in frame, same angle and size, nothing cropped.
4. Screen text unchanged — spot-check shoe names, percentages, measurements.
5. Scan only: the feet look photographed, not drawn.

If the word or the screen text shifted, re-roll in a fresh chat. If only the
word is off, send the image back to Claude and ask to **restamp the word** —
that puts Inter SemiBold back at the exact coordinates.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
