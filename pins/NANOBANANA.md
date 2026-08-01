# Generating the pinned posts with Nano Banana

Three generations, one screenshot each. Attach the `screenshot.png` from the
matching pin folder (or a real capture from the app — better when you have
one) and paste the full prompt below. Ask for **1080×1350 (4:5 portrait)**;
if the tool won't, generate portrait and crop.

After every generation, zoom in and check: screen text unchanged (every
digit, every shoe name), Dynamic Island small (~⅓ of screen width), the big
word spelled right, no invented UI. Retyping screen text is the model's most
common failure — if it drifts, re-run with "Keep the attached screenshot
pixel-exact on the display. Only generate the phone body and the scene
around it."

---

## Prompt 1 — Scan  (attach `01-scan/screenshot.png`)

> Create a 1080×1350 (4:5 portrait) Instagram post: a premium app-marketing
> device shot in a dark studio.
>
> Scene: near-black charcoal studio (#0D0D10), a soft gray key-light glow
> behind the phone, a subtle diagonal concrete-floor wedge in the lower-left,
> fine film grain — high-end product photography.
>
> Device: a titanium iPhone 15 Pro floating at a noticeable 3D angle — tilted
> about 10 degrees with visible perspective, like it's leaning. Photoreal:
> thin bezels, correctly small Dynamic Island (about one third of the screen
> width), side buttons, soft screen glare, deep contact shadow.
>
> The attached image is the phone's screen, and it defines the UI overlay
> ONLY. Completely replace the illustrated camera view behind the UI with a
> photorealistic iPhone camera frame: a true first-person view — the
> photographer holds the phone at chest height pointing straight down at
> their OWN two feet in white crew socks on an oak hardwood floor.
> Orientation matters: shins enter the frame from the BOTTOM edge (nearest
> the camera) and the toes point AWAY, toward the top of the frame. Feet
> slightly splayed, soft indoor light, gentle shadows under the feet, real
> fabric wrinkles and knit texture, subtle sensor grain. It must look like a
> real photo, not a render.
>
> On top of that photo, reproduce the UI overlay from the attachment exactly:
> status bar, "LiDAR · BOTH FEET" pill, "Hold steady — capturing both feet"
> pill, white corner brackets, LEFT ✓ and RIGHT ✓ tags, the capture ring, and
> the LiDAR / Face ID depth / Photos chips — same positions, same text.
>
> Typography on the post: one large white word, "Scan", bold geometric sans
> (like Inter ExtraBold), bottom-left, underlined, partially overlapping the
> phone's lower edge. No other text, no logos, no watermarks, no hands.

If the feet still look synthetic, split it: first generate only the photo
("first-person iPhone photo looking straight down at my own feet in white
crew socks on an oak floor — toes pointing away toward the top of frame,
shins entering from the bottom, natural light — realistic, no UI"), then
attach that photo AND the screenshot: "use the first image as the camera
view, overlay the UI from the second exactly." A real 5-second photo of
actual feet beats both.

---

## Prompt 2 — Analyze  (attach `02-analyze/screenshot.png`)

> Create a 1080×1350 (4:5 portrait) Instagram post: a premium app-marketing
> device shot in a dark studio.
>
> Scene: near-black charcoal studio (#0D0D10) with a soft spotlight glow
> centered behind the phone — no floor wedge, pure dark backdrop, fine film
> grain, high-end product photography.
>
> Device: a titanium iPhone 15 Pro standing nearly upright, only a slight
> turn, centered. Photoreal: thin bezels, correctly small Dynamic Island
> (about one third of the screen width), side buttons, soft screen glare,
> deep contact shadow.
>
> The attached image is the phone's screen. Place it on the display exactly
> as provided — do not redraw, restyle, retype, or "improve" any of it.
> Every word, number, footprint outline, icon and layout must remain
> pixel-identical to the attachment, including "26.6 × 9.8 cm",
> "27.1 × 10.0 cm", the metric tiles ("US 10", "100 mm · D", "5 mm",
> "High", "63 mm", "Tapered") and the toes-up foot outlines.
>
> Typography on the post: one large white word, "Analyze", bold geometric
> sans (like Inter ExtraBold), bottom-left, underlined, partially overlapping
> the phone's lower edge. No other text, no logos, no watermarks, no hands.

---

## Prompt 3 — Choose  (attach `03-choose/screenshot.png`)

> Create a 1080×1350 (4:5 portrait) Instagram post: a premium app-marketing
> device shot in a dark studio.
>
> Scene: near-black charcoal studio (#0D0D10), a soft gray key-light glow
> behind the phone, a subtle diagonal floor split in the lower-right, fine
> film grain — high-end product photography.
>
> Device: a titanium iPhone 15 Pro leaning about 7 degrees with the
> perspective turned slightly left. Photoreal: thin bezels, correctly small
> Dynamic Island (about one third of the screen width), side buttons, soft
> screen glare, deep contact shadow.
>
> The attached image is the phone's screen. Place it on the display exactly
> as provided — do not redraw, restyle, retype, or "improve" any of it.
> Every shoe name (Pegasus 41, Ultraboost Light, Air Jordan 1 High OG,
> Clifton 9, Dunk Low, 990v6, Samba OG, Blazer Mid '77), the row numbers
> 1 through 8, every "% fit" badge, every size line and the chip row must
> remain pixel-identical to the attachment — the list runs past the bottom
> of the screen, keep that.
>
> Typography on the post: one large white word, "Choose", bold geometric
> sans (like Inter ExtraBold), bottom-left, underlined, partially overlapping
> the phone's lower edge. No other text, no logos, no watermarks, no hands.

---

## Capturing real screenshots instead (better input when possible)

- **Choose**: the "Best for your feet" ranking, in the simulator (⌘S saves a PNG).
- **Analyze**: Profile → scan history → a scan report, ideally with an
  asymmetry flag.
- **Scan**: needs a real device (the simulator has no camera) — which also
  gets you real feet in the viewfinder, making prompt 1's replacement step
  unnecessary.

## Posting

Captions and hashtags are in each pin folder's `caption.md`. Pin order:
**Choose first, then Analyze, then Scan** — Instagram puts the newest pin
leftmost, so the grid reads Scan → Analyze → Choose.
