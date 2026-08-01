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

**The scanner one is special.** Its camera view is illustrated, and it looks
it — do NOT ask the model to keep it. The attachment's job is only to define
the UI overlay; the feet must be generated fresh. Attach
`01-scan/screenshot.png` and add:

> The attached image defines the UI overlay ONLY. Completely replace the
> illustrated camera view behind the UI with a photorealistic iPhone camera
> frame: shot from chest height pointing straight down at the photographer's
> own two feet in white crew socks, standing on an oak hardwood floor.
> Natural perspective — shins foreshortened entering from the top of frame,
> feet slightly splayed, soft indoor window light, gentle shadows under the
> feet, believable fabric wrinkles and sock texture, subtle sensor grain.
> It must look like a real photo, not a render.
>
> On top of that photo, reproduce the UI overlay from the attachment exactly:
> status bar, "LiDAR · BOTH FEET" pill, "Hold steady — capturing both feet"
> pill, white corner brackets, LEFT ✓ and RIGHT ✓ tags, the capture ring, and
> the LiDAR / Face ID depth / Photos chips — same positions, same text.

If the result still looks synthetic, generate in two steps: first ask for
just the photo ("overhead iPhone photo of my own feet in white crew socks on
oak floor, looking straight down, natural light — realistic, no UI"), pick
the best one, then attach BOTH that photo and the screenshot: "use the first
image as the camera view, overlay the UI from the second exactly." Smaller
asks, better odds. The honest gold standard remains a real 5-second photo of
actual feet — any phone, looking down — used the same way.

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
