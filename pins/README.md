# Pinned posts

Three 1080×1350 (4:5) device shots for the top of the SoleFit Instagram grid —
dark studio, angled iPhone, one word each: **Scan · Analyze · Choose**.

| Folder | Word | Screen |
|---|---|---|
| [`01-scan`](01-scan) | Scan | AR scanner mid-capture, both feet locked |
| [`02-analyze`](02-analyze) | Analyze | Scan report — outlines, measurements, asymmetry |
| [`03-choose`](03-choose) | Choose | Best-fit ranking with per-shoe fit % and size |

Each folder: `pin.jpg` (the post) and `caption.md` (caption, hashtags, alt text).

## Pinning order

Instagram shows the most recently pinned post first (leftmost). To make the
grid read **Scan → Analyze → Choose** left-to-right:

1. Post and pin **03-choose** first
2. then **02-analyze**
3. then **01-scan** last

## Notes

- The screens mirror the app's real SwiftUI, not a loose imitation: Choose is
  `BestFitView`'s sheet (Close / "Best for your feet", category chips,
  Brand + Sort menu rows, rank numerals, and the real `FitBadge` — colored dot
  + "94% fit" in ink); Analyze is the scan-report card over the app's floating
  capsule tab bar (For You · Scan · Profile); Scan is the capture flow with its
  LiDAR / Face ID depth / Photos switcher.
- The scanner shows feet in socks — matching the app's own guidance ("bare
  feet or thin socks") — painted deterministically in `_tools/paint-feet.js`;
  original artwork, no stock license.
- Thumbnails are the app's real grayscale catalog placeholders; names, prices
  and every score follow the seed catalog and the actual fit ramp.
- Rebuild after editing `_tools/pins/*.mjs`:

```bash
cd _tools && node build-pins.mjs          # all three
node build-pins.mjs 01-scan               # just one
```
