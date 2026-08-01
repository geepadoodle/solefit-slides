# Generating the pinned posts with Nano Banana (Gemini image editing)

Workflow: capture three real screenshots from the app, then feed each one to
Nano Banana with a prompt below. The model builds the scene (dark studio,
angled iPhone, big word) around your screenshot instead of inventing the UI —
that's the whole point: the screen content stays real.

## 1. Capture the screenshots

In Xcode, run SoleFit on a simulator (or device) and grab these three screens
(⌘S in the simulator saves a PNG):

| For | Screen in the app |
|---|---|
| Scan | The scan flow mid-capture — camera pointed down at your feet (bare feet or thin socks, wood/hard floor), with the lock brackets and mode chips visible. Needs a real device — the simulator has no camera. |
| Analyze | Profile → scan history → a scan report (the "SCAN REPORT" card with both footprints and measurements). |
| Choose | The "Best for your feet" ranking (fit-ranked list with the % fit badges). |

Tips for cleaner posts:
- Set the clock to 9:41 if you care (Settings in sim, or crop keeps it anyway).
- Portrait orientation, full-screen, no debug overlays.
- Use a scan with a visible asymmetry flag for Analyze — it's the interesting part.

## 1b. No app build handy? Use the bundled screenshots

Each pin folder already contains a `screenshot.png` — the same screens the
rendered pins use, exported at 1056×2312 like a real capture. They work as
Nano Banana input as-is.

For the scanner one, you can go a step further: its camera view is
illustrated, and Nano Banana is good at re-photographing it. Attach
`01-scan/screenshot.png` and add:

> Additionally, make the camera viewfinder content photorealistic: a real
> overhead photo of two feet in white crew socks standing on an oak wood
> floor, warm indoor light. Keep every UI element — status bar, "LiDAR ·
> BOTH FEET" pill, "Hold steady" pill, corner brackets, LEFT ✓ / RIGHT ✓
> tags, capture ring, and the LiDAR / Face ID depth / Photos chips —
> exactly as they are in the attachment, same positions and text.

## 2. The prompts

Attach ONE screenshot per generation. Ask for **1080×1350 (4:5 portrait)**.
The line about not altering the screen is the one that matters — repeat it if
the model takes liberties.

### Shared scene (all three)

> Create a 1080×1350 (4:5 portrait) Instagram post: a premium app-marketing
> device shot in a dark studio.
>
> Scene: near-black charcoal studio (#0D0D10) with a soft gray key light glow
> behind the phone and a subtle diagonal concrete-floor wedge in one corner.
> Fine film grain, high-end product-photography lighting.
>
> Device: a titanium iPhone 15 Pro floating at a slight 3D angle, photoreal —
> thin bezels, correctly small Dynamic Island, side buttons, soft screen
> glare, deep contact shadow below.
>
> The attached image is the phone's screen. Place it on the display exactly
> as provided — do not redraw, restyle, retype, or "improve" any of it. Every
> word, number, icon and layout must remain pixel-identical to the attachment.
>
> Typography: one large white word in a bold geometric sans (like Inter
> ExtraBold), bottom-left, underlined, partially overlapping the phone's lower
> edge. Small "● SoleFit" wordmark top-left — white text, red dot.
>
> No other text, no watermarks, no extra objects, no hands.

### Per-post additions

**Scan** (attach the scanner screenshot):
> The word is "Scan". Tilt the phone noticeably — rotated ~10° with visible
> 3D perspective, like it's leaning. Floor wedge in the lower-left.

**Analyze** (attach the scan-report screenshot):
> The word is "Analyze". Phone nearly upright with only a slight turn,
> centered, spotlight glow behind it. No floor wedge — pure dark backdrop.

**Choose** (attach the ranking screenshot):
> The word is "Choose". Phone leaning ~7° the other way, perspective turned
> slightly left. Diagonal floor split in the lower-right.

## 3. Check the output before posting

Nano Banana WILL sometimes rewrite screen text — it's the most common failure.
Zoom in and verify against your screenshot:

- every fit % and measurement digit matches
- shoe names spelled exactly (Pegasus 41, Ultraboost Light, 990v6…)
- the Dynamic Island is small (~⅓ of screen width), not a fat pill
- no invented UI (extra buttons, wrong tab bar)
- the big word is spelled correctly and underlined

If the screen drifted, re-run with: "Keep the attached screenshot pixel-exact
on the display. Only generate the phone body and the scene around it."

Aspect ratio note: if the tool won't do 4:5 natively, generate square or
portrait and crop to 1080×1350 — keep the word and phone inside the middle
4:5 region.

## 4. Posting

Same as the rendered pins — captions and hashtags are in each pin folder's
`caption.md`, and the pinning order (Choose first, then Analyze, then Scan)
is in [`README.md`](README.md).
