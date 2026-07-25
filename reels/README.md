# Reels

Post-ready Instagram Reels for the SoleFit account — same design system as the
carousel slide sets in the numbered folders at the repo root.

| Folder | Hook | Length |
|---|---|---|
| [`r01-not-a-size-10`](r01-not-a-size-10) | "You are not a size 10." | 20.6s |
| [`r02-two-different-feet`](r02-two-different-feet) | "Your left foot is not your right foot." | 21.0s |
| [`r03-its-the-volume`](r03-its-the-volume) | "Right size. Still hurts at minute 20." | 21.4s |

Each folder holds:

- **`reel.mp4`** — 1080×1920, H.264 high / yuv420p, 30fps, faststart, with a
  silent AAC track. Upload as-is; add trending audio in the Reels editor.
- **`cover.jpg`** — 1080×1920 cover frame (the hook, fully revealed).
- **`caption.md`** — caption, hashtags, on-screen text, alt text, and the
  timecodes where the scene cuts land so audio can be matched to them.

All three are silent and text-led on purpose: they read fine muted, they can
carry any audio, and the same frames re-cut into Stories or TikTok without
a re-render.

Copy is kept inside the Reels safe area — nothing that has to be read sits in
the bottom 470px (caption/audio row) or behind the right-hand action rail.

## Rebuilding

The MP4s are generated, not hand-edited. Content lives in `_tools/reels/*.mjs`;
edit the copy there and re-render:

```bash
cd _tools
npm install
node build-reels.mjs                    # all reels
node build-reels.mjs r01-not-a-size-10  # just one
```

Frames are rendered deterministically in headless Chromium (no wall clock), so
the same spec always produces the same video.

## Facts

The numbers on screen come from the app's own fit constants — 1 US size =
1/3 inch = 8.47 mm, a half size = 4.23 mm, the 6 mm asymmetry threshold, and the
55/30/15 length/width/volume scoring blend — so the reels and the app agree.
Update the specs if those constants ever move.
