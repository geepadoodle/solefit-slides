export default {
  slug: "r02-two-different-feet",
  title: "Your left foot is not your right foot",
  counter: "FIT 101",
  coverAt: 2.4,

  scenes: [
    {
      dur: 3.2,
      html: `
        <div class="stage">
          <div class="kicker a" data-anim="pop" data-in="0.05">Both feet</div>
          <h1 class="sm a" data-in="0.30">Your left foot<br>is not your<br><em>right foot</em>.</h1>
          <p class="lead tight a" data-in="0.85">And you buy shoes like it is.</p>
        </div>`,
    },
    {
      dur: 4.2,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">1</div>
          <h2 class="a" data-in="0.22">Matching feet are rare.</h2>
          <p class="tight a" data-in="0.58">Length, width and instep almost never land in the same place on both sides. You’ve just never measured them in the same sitting.</p>
          <div class="callout a" data-in="1.10">A shop measures one foot. Usually the one you put up first.</div>
        </div>`,
    },
    {
      dur: 5.0,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">2</div>
          <h2 class="a" data-in="0.22">5&nbsp;mm is not nothing.</h2>
          <div class="bars">
            <div class="bar a" data-in="0.62">
              <div class="top"><span class="name">Left</span><span class="amt">26.6 cm</span></div>
              <div class="rail"><div class="fill a" data-anim="bar" data-w="65" data-in="0.72" data-dur="0.8"></div></div>
            </div>
            <div class="bar accent a" data-in="0.92">
              <div class="top"><span class="name">Right</span><span class="amt">27.1 cm</span></div>
              <div class="rail"><div class="fill a" data-anim="bar" data-w="78" data-in="1.02" data-dur="0.8"></div></div>
            </div>
          </div>
          <div class="callout a" data-in="1.85">A half size is 4.2&nbsp;mm. That gap is bigger than a half size.</div>
        </div>`,
    },
    {
      dur: 4.4,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">3</div>
          <h2 class="a" data-in="0.22">6&nbsp;mm is the line.</h2>
          <p class="tight a" data-in="0.58">Past 6&nbsp;mm SoleFit stops treating you as one foot and calls the asymmetry out — because at that point one shoe fits and the other is guessing.</p>
          <div class="callout a" data-in="1.15">Fit the bigger foot. Every time.</div>
        </div>`,
    },
    {
      dur: 4.2,
      chrome: false,
      html: `
        <div class="stage">
          <div class="cta">
            <div class="mark a" data-anim="pop" data-in="0.05"><i></i>SoleFit</div>
            <h2 class="a" data-in="0.32">One scan.<br>Both feet.<br>Real numbers.</h2>
            <p class="tight a" data-in="0.85">Left and right are measured in a single session, so the difference between them is measured — not assumed.</p>
            <div class="where a" data-in="1.30">SoleFit — on iOS</div>
          </div>
        </div>`,
    },
  ],

  caption: `
# r02 — Your left foot is not your right foot

**Hook (0–3s):** “Your left foot is not your right foot.”
**Length:** ~21s · 1080×1920 · 30fps · silent (add trending audio in-app)

## Caption

Your left foot is not your right foot 🦶

Length, width and instep almost never land in the same place on both sides — most people just never measure them in the same sitting. A shop measures one foot, usually whichever one you put up first, and that number becomes “your size” for the next decade.

Here’s the part that matters: a half size is 4.2 mm. So a 5 mm difference between your feet is already more than a half size. SoleFit flags the asymmetry past 6 mm, because at that point one shoe is fitting and the other is guessing.

The fix is boring and it works: **fit the bigger foot**, then take up the slack in the smaller one with lacing or an insole. Never the other way round.

Go stand on a piece of paper and trace both. Which one’s bigger? 👇

## Hashtags

#solefit #shoefit #shoesize #footcare #sneakers #sneakerhead #runningshoes #running #widefeet #kicks #sizeguide #shoeshopping #podiatry #footpain #shoetips

## On-screen text (for the accessibility caption / repurposing)

1. Your left foot is not your right foot.
2. Matching feet are rare — you’ve never measured both at once.
3. Left 26.6 cm / Right 27.1 cm. A half size is 4.2 mm.
4. Past 6 mm SoleFit calls it out. Fit the bigger foot.
5. One scan. Both feet. Real numbers.

## Audio

Silent by design. Scene cuts land at 3.2s, 7.4s, 12.4s and 16.8s — drop the
audio’s accents there.

## Alt text

White vertical slides in SoleFit’s design system showing two bars, a left foot
at 26.6 cm and a right foot at 27.1 cm, explaining that a half shoe size is
4.2 mm so the gap between someone’s feet can exceed a half size, and that you
should always fit the bigger foot.

## Notes

- Cover frame: \`cover.jpg\`.
- 6 mm is the app’s own asymmetry threshold and 4.23 mm its half-size step, so
  the reel matches what a scan actually reports.
- Pairs well as a follow-up to r01 — same series, same “FIT 101” tag.
`,
};
