// TikTok slideshow — the asymmetry hook. Our strongest-testing idea,
// rebuilt for photo mode with a data-led middle.
export default {
  kind: "tiktok",
  slug: "tt02-two-different-feet",

  slides: [
    { // 1 — hook
      bg: { wash: "ember", blobs: [
        { x: "-16%", y: "10%", size: "840px", color: "#EF4444", o: 0.24 },
        { x: "56%", y: "62%", size: "720px", color: "#7E22CE", o: 0.12 } ] },
      html: `<div class="stage">
        <div class="kicker">Both feet</div>
        <h1 class="sm">Your left foot is not your <em>right foot</em>.</h1>
        <div class="sub big">And you buy shoes like it is.</div>
      </div>`,
    },
    { // 2 — the claim
      bg: { wash: "oat", blobs: [
        { x: "60%", y: "-6%", size: "660px", color: "#B45309", o: 0.14 },
        { x: "-18%", y: "64%", size: "740px", color: "#15803D", o: 0.09 } ] },
      html: `<div class="stage">
        <div class="numeral">01</div>
        <h2>Matching feet are rare.</h2>
        <div class="sub">Length, width and instep almost never land in the same place on both sides. You've just never measured them in one sitting.</div>
        <div class="callout">A shop measures one foot. Usually whichever you put up first.</div>
      </div>`,
    },
    { // 3 — the data
      bg: { wash: "paper", grid: true, blobs: [
        { x: "-14%", y: "8%", size: "660px", color: "#1D4ED8", o: 0.10 },
        { x: "58%", y: "66%", size: "700px", color: "#EF4444", o: 0.10 } ] },
      html: `<div class="stage">
        <div class="numeral">02</div>
        <h2>5&nbsp;mm is not nothing.</h2>
        <div class="bars">
          <div class="bar">
            <div class="top"><span class="name">Left</span><span class="amt">26.6 cm</span></div>
            <div class="rail"><b style="width:65%;background:#111113"></b></div>
          </div>
          <div class="bar">
            <div class="top"><span class="name">Right</span><span class="amt" style="color:var(--red-deep)">27.1 cm</span></div>
            <div class="rail"><b style="width:78%;background:#EF4444"></b></div>
          </div>
        </div>
        <div class="callout">A half size is 4.2&nbsp;mm. That gap is bigger than a half size.</div>
      </div>`,
    },
    { // 4 — the threshold
      bg: { wash: "slate", blobs: [
        { x: "58%", y: "12%", size: "780px", color: "#0F766E", o: 0.20 },
        { x: "-16%", y: "62%", size: "700px", color: "#1D4ED8", o: 0.12 } ] },
      html: `<div class="stage">
        <div class="numeral" style="color:#FF7A70">03</div>
        <h2>6&nbsp;mm is where it matters.</h2>
        <div class="sub">Past 6&nbsp;mm the app stops treating you as one foot and flags it — because at that point one shoe fits and the other is guessing.</div>
        <div class="chips">
          <span class="chip on">Fit the bigger foot</span>
          <span class="chip">Lace the smaller one tighter</span>
          <span class="chip">Never average them</span>
        </div>
      </div>`,
    },
    { // 5 — proof
      bg: { wash: "mist", blobs: [
        { x: "-12%", y: "14%", size: "720px", color: "#7E22CE", o: 0.11 },
        { x: "60%", y: "62%", size: "700px", color: "#0F766E", o: 0.10 } ] },
      html: `<div class="stage top" style="padding-top:16px">
        <div class="numeral">04</div>
        <h2>One scan tells you.</h2>
        <div class="sub" style="margin-top:24px">Both feet measured in one session — so the difference is measured, not assumed.</div>
        <div style="margin-top:38px;transform:scale(0.60);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/02-analyze/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 6 — CTA
      bg: { wash: "ink", blobs: [
        { x: "-14%", y: "18%", size: "800px", color: "#EF4444", o: 0.22 },
        { x: "56%", y: "60%", size: "740px", color: "#1D4ED8", o: 0.12 } ] },
      html: `<div class="stage">
        <div class="cta">
          <div class="mark"><i></i>SoleFit</div>
          <h2 style="margin-top:40px">Measure both.<br>Buy for the<br>bigger one.</h2>
          <div class="sub">Free on iOS. About a minute.</div>
          <div class="where">SoleFit — on the App Store</div>
        </div>
      </div>`,
    },
  ],

  caption: `
# tt02 — Your left foot is not your right foot

**Format:** TikTok photo mode · 6 slides · 1080×1920
**Hook slide:** "Your left foot is not your right foot."

## Caption

go stand on a piece of paper and trace both feet. i'll wait 🦶

almost nobody is symmetrical — length, width and instep rarely land in the
same place on both sides. a half size is only 4.2 mm, so a 5 mm gap between
your feet is already more than a half size.

the fix is boring and it works: fit the bigger foot, then take up the slack
in the smaller one with lacing or an insole. never the other way round.

which one's bigger on you? 👇

## Hashtags

#shoefit #sneakers #sneakerhead #footcare #shoesize #widefeet #runningshoes
#podiatry #buildinpublic #indieapp #solefit

## Posting notes

- Slide 3 (the bars) is the save-bait — that's the slide people screenshot.
- Ask the question in the caption; comments drive this format.
`,
};
