# Instagram Stories

Story frames sized 1080×1920 with copy kept clear of Instagram's own chrome
(top ~250px profile row, bottom ~250px reply bar) and a marked band where
poll / question / link stickers go.

| Folder | Set | Frames |
|---|---|---|
| [`st01-which-foot`](st01-which-foot) | "Which of your feet is bigger?" — poll, reveal, rule, CTA | 4 |
| [`st02-scan-walkthrough`](st02-scan-walkthrough) | How the scan works, screen by screen | 5 |

Each folder has the numbered JPGs plus `caption.md` with the posting sequence
(which sticker goes on which frame).

No brand mark is baked in — stories already carry the account handle.

## Notes

- Frames marked "↓ poll sticker goes here ↓" expect the sticker to cover that
  guide; nothing important sits underneath.
- Save `st02` to a **How it works** highlight — it's what new followers open.
- Backgrounds use the same layered wash + blob + grain system as the TikTok
  slideshows, so the two feeds look like one brand.

## Rebuilding

```bash
cd _tools
node build-slides.mjs st01-which-foot
```
