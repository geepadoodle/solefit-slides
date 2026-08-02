// Instagram Story set — the 60-second walkthrough. Screens carry it;
// copy stays short because stories get ~2 seconds each.
export default {
  kind: "story",
  slug: "st02-scan-walkthrough",

  slides: [
    { // 1 — setup
      bg: { wash: "ink", blobs: [
        { x: "-14%", y: "14%", size: "800px", color: "#EF4444", o: 0.20 },
        { x: "58%", y: "62%", size: "720px", color: "#0F766E", o: 0.12 } ] },
      html: `<div class="stage" style="bottom:560px">
        <div class="kicker">60 seconds</div>
        <h1 class="sm">How the scan actually works.</h1>
        <div class="sub big">Bare feet or thin socks. Hard floor. That's the setup.</div>
      </div>`,
    },
    { // 2 — scan screen
      bg: { wash: "slate", blobs: [
        { x: "56%", y: "10%", size: "740px", color: "#0F766E", o: 0.18 },
        { x: "-14%", y: "64%", size: "700px", color: "#EF4444", o: 0.12 } ] },
      html: `<div class="stage top" style="top:260px;bottom:400px">
        <h3>1 — Point the camera down at both feet.</h3>
        <div style="margin-top:30px;transform:scale(0.58);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/01-scan/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 3 — report screen
      bg: { wash: "mist", blobs: [
        { x: "-14%", y: "10%", size: "700px", color: "#1D4ED8", o: 0.12 },
        { x: "58%", y: "64%", size: "700px", color: "#7E22CE", o: 0.10 } ] },
      html: `<div class="stage top" style="top:260px;bottom:400px">
        <h3>2 — Get every number, per foot.</h3>
        <div style="margin-top:30px;transform:scale(0.58);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/02-analyze/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 4 — ranking screen
      bg: { wash: "oat", blobs: [
        { x: "58%", y: "8%", size: "700px", color: "#B45309", o: 0.14 },
        { x: "-16%", y: "66%", size: "700px", color: "#15803D", o: 0.10 } ] },
      html: `<div class="stage top" style="top:260px;bottom:400px">
        <h3>3 — Every shoe, scored for those feet.</h3>
        <div style="margin-top:30px;transform:scale(0.58);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/03-choose/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 5 — CTA
      bg: { wash: "ember", blobs: [
        { x: "-12%", y: "18%", size: "820px", color: "#EF4444", o: 0.24 },
        { x: "58%", y: "60%", size: "700px", color: "#1D4ED8", o: 0.12 } ] },
      html: `<div class="stage" style="bottom:640px">
        <div class="cta">
          <div class="mark"><i></i>SoleFit</div>
          <h2 style="margin-top:36px">Try it on<br>your own feet.</h2>
          <div class="sub">Free on iOS.</div>
        </div>
      </div>
      <div class="foot" style="bottom:560px">↓ link sticker goes here ↓</div>`,
    },
  ],

  caption: `
# st02 — How the scan works (Instagram Story set)

**Format:** 5 story frames · 1080×1920

## How to post

Post all five back to back. Frame 5 takes the **link sticker** in the marked
band. Optionally add a "Scan my feet" quiz or question sticker on frame 1 to
drive replies.

## Notes

- Screens sit in the middle band so IG's top chrome and reply bar never
  cover them.
- Save to a "How it works" highlight — this is the set new followers watch.
`,
};
