// TikTok slideshow — "right size, still hurts". Problem-first hook, the
// 55/30/15 weighting as the reveal.
export default {
  kind: "tiktok",
  slug: "tt03-still-hurts",

  slides: [
    { // 1 — hook
      bg: { wash: "ink", blobs: [
        { x: "54%", y: "8%", size: "780px", color: "#B45309", o: 0.22 },
        { x: "-16%", y: "58%", size: "800px", color: "#EF4444", o: 0.18 } ] },
      html: `<div class="stage">
        <div class="kicker">Why it hurts</div>
        <h1>Right size.<br>Still <em>hurts</em><br>at minute 20.</h1>
        <div class="sub big">The size was never the whole story.</div>
      </div>`,
    },
    { // 2 — the weighting
      bg: { wash: "paper", grid: true, blobs: [
        { x: "-14%", y: "10%", size: "680px", color: "#15803D", o: 0.10 },
        { x: "58%", y: "64%", size: "720px", color: "#7E22CE", o: 0.10 } ] },
      html: `<div class="stage">
        <div class="numeral">01</div>
        <h2>Fit is three numbers.</h2>
        <div class="bars">
          <div class="bar"><div class="top"><span class="name">Length</span><span class="amt">55%</span></div>
            <div class="rail"><b style="width:55%;background:#15803D"></b></div></div>
          <div class="bar"><div class="top"><span class="name">Width</span><span class="amt">30%</span></div>
            <div class="rail"><b style="width:30%;background:#1D4ED8"></b></div></div>
          <div class="bar"><div class="top"><span class="name">Volume</span><span class="amt" style="color:var(--purple)">15%</span></div>
            <div class="rail"><b style="width:15%;background:#7E22CE"></b></div></div>
        </div>
        <div class="sub">Length is the only one a size chart can tell you about.</div>
      </div>`,
    },
    { // 3 — the culprit
      bg: { wash: "slate", blobs: [
        { x: "60%", y: "14%", size: "760px", color: "#7E22CE", o: 0.20 },
        { x: "-14%", y: "60%", size: "720px", color: "#1D4ED8", o: 0.14 } ] },
      html: `<div class="stage">
        <div class="numeral" style="color:#C77DFF">02</div>
        <h2>Volume is the one<br>nobody measures.</h2>
        <div class="sub">It's how much foot stacks <strong>above</strong> the sole — your instep. A tape measure can't see it. Neither can a size chart.</div>
        <div class="callout">Two feet the same length can need completely different shoes.</div>
      </div>`,
    },
    { // 4 — symptoms
      bg: { wash: "blush", blobs: [
        { x: "-16%", y: "8%", size: "700px", color: "#EF4444", o: 0.16 },
        { x: "56%", y: "66%", size: "680px", color: "#B45309", o: 0.12 } ] },
      html: `<div class="stage">
        <div class="numeral">03</div>
        <h2>High instep,<br>low-volume shoe.</h2>
        <div class="cards">
          <div class="card row"><span class="lbl">Across the top</span><span class="val">Pressure</span></div>
          <div class="card row"><span class="lbl">Toes</span><span class="val">Numb</span></div>
          <div class="card row"><span class="lbl">Laces</span><span class="val" style="color:var(--red-deep)">Never right</span></div>
        </div>
        <div class="sub">Every one reads as "too small" — so you size up, the heel slips, and it still hurts.</div>
      </div>`,
    },
    { // 5 — proof
      bg: { wash: "mist", blobs: [
        { x: "58%", y: "10%", size: "720px", color: "#0F766E", o: 0.12 },
        { x: "-14%", y: "64%", size: "700px", color: "#1D4ED8", o: 0.10 } ] },
      html: `<div class="stage top" style="padding-top:16px">
        <div class="numeral">04</div>
        <h2>So measure all three.</h2>
        <div class="sub" style="margin-top:24px">Length, width and instep height — from your camera, in about a minute.</div>
        <div style="margin-top:38px;transform:scale(0.60);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/02-analyze/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 6 — CTA
      bg: { wash: "ember", blobs: [
        { x: "-12%", y: "20%", size: "820px", color: "#EF4444", o: 0.24 },
        { x: "58%", y: "62%", size: "700px", color: "#7E22CE", o: 0.14 } ] },
      html: `<div class="stage">
        <div class="cta">
          <div class="mark"><i></i>SoleFit</div>
          <h2 style="margin-top:40px">Length. Width.<br>Instep height.</h2>
          <div class="sub">Every shoe scored as a fit&nbsp;%, at every size it comes in.</div>
          <div class="where">SoleFit — on the App Store</div>
        </div>
      </div>`,
    },
  ],

  caption: `
# tt03 — Right size, still hurts

**Format:** TikTok photo mode · 6 slides · 1080×1920
**Hook slide:** "Right size. Still hurts at minute 20."

## Caption

if your shoes are the right size and still hurt an hour in, it's probably not
the length 😤

fit is three numbers — length, width, volume — and the app weights them
55/30/15. length is the only one a size chart knows about.

volume is the one nobody measures: how much foot stacks ABOVE the sole, aka
your instep. high instep in a low-volume shoe = pressure across the top, numb
toes, laces that are either loose or strangling. all of it reads as "too
small," so you size up, your heel starts slipping, and it still hurts.

look for more depth, not more length.

anyone else been sizing up for years chasing this? 👇

## Hashtags

#shoefit #footpain #highinstep #sneakers #runningshoes #widefeet #footcare
#shoetips #buildinpublic #indieapp #solefit

## Posting notes

- Slide 2 (the 55/30/15 bars) is the hook payoff — don't reorder.
- Works well reposted as an IG carousel; same 1080×1920 files.
`,
};
