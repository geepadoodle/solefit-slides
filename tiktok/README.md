# TikTok slideshows

Photo-mode slideshows (no video) — the format app founders use on TikTok:
a hook slide that stops the scroll, a few payoff slides, a CTA. Upload the
JPGs as photos and pick a sound in the app.

| Folder | Hook | Slides |
|---|---|---|
| [`tt01-built-an-app`](tt01-built-an-app) | "I made an app that scans your feet." | 6 |
| [`tt02-two-different-feet`](tt02-two-different-feet) | "Your left foot is not your right foot." | 6 |
| [`tt03-still-hurts`](tt03-still-hurts) | "Right size. Still hurts at minute 20." | 6 |

Each folder holds `01.jpg … 06.jpg` (1080×1920) and a `caption.md` with the
caption, hashtags and posting notes.

## The look

Backgrounds are layered, not flat: a base wash, two soft color blobs, film
grain, a vignette, and on data slides a masked grid. Every set alternates
dark → warm → light → cool so it has rhythm when swiped, and no slideshow is
a white wall. Washes available in `_tools/slides-scene.css`:

- light — `paper`, `oat`, `mist`, `blush`
- dark — `ink`, `slate`, `ember`

Screenshot slides drop the real app screens into a device frame; those come
from `pins/*/screenshot.png`.

## Posting

1. TikTok → **+** → **Photo** → select all slides in order.
2. Pick a low-key trending sound; leave slide 1 up ~2s.
3. Paste the caption from `caption.md`, trim to taste.
4. Same files repost fine as an Instagram carousel (1080×1920 crops to 4:5
   on the grid, so keep key copy centered).

## Rebuilding

Content lives in `_tools/slides/tt*.mjs`.

```bash
cd _tools
node build-slides.mjs                       # everything
node build-slides.mjs tt02-two-different-feet  # one set
```
