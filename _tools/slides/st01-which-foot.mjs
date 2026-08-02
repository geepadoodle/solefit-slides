// Instagram Story set — poll-driven. Frames leave a clear band where the
// poll / question sticker goes, and the top row stays free for the profile
// chrome. No baked-in brand mark: stories carry the account handle already.
export default {
  kind: "story",
  slug: "st01-which-foot",

  slides: [
    { // 1 — hook + poll zone
      bg: { wash: "ember", blobs: [
        { x: "-16%", y: "12%", size: "820px", color: "#EF4444", o: 0.24 },
        { x: "56%", y: "60%", size: "720px", color: "#7E22CE", o: 0.12 } ] },
      html: `<div class="stage top" style="top:300px;bottom:640px">
        <h1 class="sm">Which of your feet is bigger?</h1>
        <div class="sub big">Most people guess wrong.</div>
      </div>
      <div class="foot" style="bottom:560px">↓ poll sticker goes here ↓</div>`,
    },
    { // 2 — the reveal
      bg: { wash: "paper", grid: true, blobs: [
        { x: "58%", y: "8%", size: "660px", color: "#1D4ED8", o: 0.10 },
        { x: "-16%", y: "66%", size: "700px", color: "#EF4444", o: 0.10 } ] },
      html: `<div class="stage" style="bottom:520px">
        <div class="kicker ghost">The answer</div>
        <h2>Almost certainly the right one.</h2>
        <div class="bars">
          <div class="bar"><div class="top"><span class="name">Left</span><span class="amt">26.6 cm</span></div>
            <div class="rail"><b style="width:65%;background:#111113"></b></div></div>
          <div class="bar"><div class="top"><span class="name">Right</span><span class="amt" style="color:var(--red-deep)">27.1 cm</span></div>
            <div class="rail"><b style="width:78%;background:#EF4444"></b></div></div>
        </div>
      </div>`,
    },
    { // 3 — the rule
      bg: { wash: "slate", blobs: [
        { x: "-14%", y: "16%", size: "780px", color: "#0F766E", o: 0.20 },
        { x: "58%", y: "62%", size: "700px", color: "#1D4ED8", o: 0.12 } ] },
      html: `<div class="stage" style="bottom:520px">
        <h2>Always fit the<br>bigger foot.</h2>
        <div class="sub big">Then take up the slack in the smaller one with lacing or an insole. Never the other way round.</div>
      </div>`,
    },
    { // 4 — CTA + link sticker zone
      bg: { wash: "ink", blobs: [
        { x: "56%", y: "14%", size: "800px", color: "#EF4444", o: 0.22 },
        { x: "-16%", y: "62%", size: "720px", color: "#7E22CE", o: 0.12 } ] },
      html: `<div class="stage" style="bottom:640px">
        <div class="cta">
          <div class="mark"><i></i>SoleFit</div>
          <h2 style="margin-top:36px">Measure both<br>in one scan.</h2>
          <div class="sub">Free on iOS.</div>
        </div>
      </div>
      <div class="foot" style="bottom:560px">↓ link sticker goes here ↓</div>`,
    },
  ],

  caption: `
# st01 — Which foot is bigger? (Instagram Story set)

**Format:** 4 story frames · 1080×1920

## How to post

1. **Frame 1** — add a **poll sticker**: "Left" / "Right" in the marked band.
2. **Frame 2** — post a few hours later as the reveal. Optionally screenshot
   the poll result and stick it on.
3. **Frame 3** — the takeaway.
4. **Frame 4** — add the **link sticker** to the App Store in the marked band.

The marked bands ("↓ poll sticker goes here ↓") are guides — cover them with
the sticker, they're positioned so nothing important sits underneath.

## Notes

- Top 250px and bottom 250px stay clear of copy for IG's own chrome.
- Highlight these under a "Fit 101" cover after they expire.
`,
};
