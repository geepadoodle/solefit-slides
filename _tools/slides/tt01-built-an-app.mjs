// TikTok slideshow — the build-in-public hook. Backgrounds alternate
// dark → light → tinted so the set never reads as a white wall.
export default {
  kind: "tiktok",
  slug: "tt01-built-an-app",

  slides: [
    { // 1 — hook, dark
      bg: { wash: "ink", blobs: [
        { x: "-14%", y: "6%", size: "760px", color: "#EF4444", o: 0.20 },
        { x: "52%", y: "58%", size: "820px", color: "#1D4ED8", o: 0.12 } ] },
      html: `<div class="stage">
        <div class="kicker">Built this</div>
        <h1>I made an app that <em>scans your feet</em>.</h1>
        <div class="sub big">Because "I'm usually a 10" is not a measurement.</div>
      </div>`,
    },
    { // 2 — the problem, warm light
      bg: { wash: "blush", blobs: [
        { x: "58%", y: "-8%", size: "700px", color: "#EF4444", o: 0.16 },
        { x: "-18%", y: "62%", size: "760px", color: "#B45309", o: 0.10 } ] },
      html: `<div class="stage">
        <div class="numeral">01</div>
        <h2>Shoe sizes are made up.</h2>
        <div class="sub">A size isn't your foot — it's a label on the mould the shoe was built around. Every brand carves its own.</div>
        <div class="callout">One full US size is 8.5&nbsp;mm. A half size is 4.2&nbsp;mm. You can feel 4&nbsp;mm.</div>
      </div>`,
    },
    { // 3 — the scan, dark slate + device
      bg: { wash: "slate", blobs: [
        { x: "-10%", y: "20%", size: "800px", color: "#0F766E", o: 0.18 },
        { x: "60%", y: "66%", size: "700px", color: "#EF4444", o: 0.12 } ] },
      html: `<div class="stage top" style="padding-top:20px">
        <div class="numeral" style="color:#FF7A70">02</div>
        <h2>So the phone measures them.</h2>
        <div class="sub" style="margin-top:26px">Both feet, one pass. The same AR tech Apple's Measure app uses.</div>
        <div style="margin-top:44px;transform:scale(0.62);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/01-scan/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 4 — the numbers, light + grid
      bg: { wash: "paper", grid: true, blobs: [
        { x: "62%", y: "-6%", size: "620px", color: "#0F766E", o: 0.10 },
        { x: "-16%", y: "68%", size: "700px", color: "#1D4ED8", o: 0.08 } ] },
      html: `<div class="stage">
        <div class="numeral">03</div>
        <h2>Then it's just numbers.</h2>
        <div class="cards">
          <div class="card row"><span class="lbl">Left foot</span><span class="val">26.6 cm</span></div>
          <div class="card row"><span class="lbl">Right foot</span><span class="val" style="color:var(--amber)">27.1 cm</span></div>
          <div class="card row"><span class="lbl">Difference</span><span class="val" style="color:var(--amber)">5 mm</span></div>
        </div>
        <div class="sub">Your feet aren't twins. A half size is 4.2&nbsp;mm — most people are past that and never knew.</div>
      </div>`,
    },
    { // 5 — payoff, mist + device
      bg: { wash: "mist", blobs: [
        { x: "-14%", y: "10%", size: "700px", color: "#1D4ED8", o: 0.12 },
        { x: "56%", y: "60%", size: "760px", color: "#7E22CE", o: 0.10 } ] },
      html: `<div class="stage top" style="padding-top:20px">
        <div class="numeral">04</div>
        <h2>Every shoe gets a score.</h2>
        <div class="sub" style="margin-top:26px">Length, width and volume — weighted the way misfit actually hurts.</div>
        <div style="margin-top:40px;transform:scale(0.62);transform-origin:top center">
          <div class="device"><div class="screen"><img src="../pins/03-choose/screenshot.png"></div>
          <div class="island"></div><div class="glass"></div></div>
        </div>
      </div>`,
    },
    { // 6 — CTA, ember
      bg: { wash: "ember", blobs: [
        { x: "-12%", y: "16%", size: "820px", color: "#EF4444", o: 0.26 },
        { x: "58%", y: "64%", size: "700px", color: "#B45309", o: 0.14 } ] },
      html: `<div class="stage">
        <div class="cta">
          <div class="mark"><i></i>SoleFit</div>
          <h2 style="margin-top:40px">Scan once.<br>Buy the right size<br>everywhere.</h2>
          <div class="sub">Free on iOS. Takes about a minute.</div>
          <div class="where">SoleFit — on the App Store</div>
        </div>
      </div>`,
    },
  ],

  caption: `
# tt01 — I built an app that scans your feet

**Format:** TikTok photo mode (slideshow) · 6 slides · 1080×1920
**Hook slide:** "I made an app that scans your feet."

## Caption

i got tired of buying shoes that fit in the store and hurt by week two, so i
built an app that actually measures your feet 👟

it uses the phone's AR camera to measure both feet at once — length, width,
instep — then scores every shoe against YOUR numbers instead of "true to
size" reviews from strangers.

the thing that surprised me most: almost nobody's feet match. a half size is
4.2 mm, and most people are past that between left and right.

building this in public — part 1

## Hashtags

#buildinpublic #indieapp #appdeveloper #solofounder #shoefit #sneakers
#sneakerhead #shoesize #ios #swiftui #startup #apps

## Posting notes

- TikTok photo mode: upload all 6 as photos, pick a trending low-key sound.
- Slide 1 is the scroll-stopper — leave it on screen ~2s in the editor.
- Keep the caption short in-app; the slides carry the story.
- Backgrounds alternate dark → warm → dark → light → cool → ember so the
  set has rhythm when swiped.
`,
};
