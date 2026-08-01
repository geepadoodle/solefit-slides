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

- The scanner's feet are painted (original artwork, no stock license) —
  deterministic canvas in `_tools/paint-feet.js`, same pixels every build.
- The Analyze outlines are the same dorsal geometry the scanner paints, so the
  two posts visibly agree.
- The Choose thumbnails are the app's real grayscale catalog placeholders, and
  every number obeys the app's actual fit ramp (88+ green "Perfect/Great",
  74–88 "Great/Good") with real seed-catalog names and prices.
- Rebuild after editing `_tools/pins/*.mjs`:

```bash
cd _tools && node build-pins.mjs          # all three
node build-pins.mjs 01-scan               # just one
```
