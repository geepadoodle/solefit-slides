export default {
  slug: "r01-not-a-size-10",
  title: "You are not a size 10",
  counter: "FIT 101",
  coverAt: 2.2,

  scenes: [
    {
      dur: 3.0,
      html: `
        <div class="stage">
          <div class="kicker a" data-anim="pop" data-in="0.05">Size truth</div>
          <h1 class="a" data-in="0.30">You are not<br>a size <em>10</em>.</h1>
          <p class="lead tight a" data-in="0.78">Nobody is. It was never a measurement of your foot.</p>
        </div>`,
    },
    {
      dur: 4.0,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">1</div>
          <h2 class="a" data-in="0.22">It measures the shoe.</h2>
          <p class="tight a" data-in="0.58">A size is a label on a <strong>last</strong> — the foot-shaped mould a shoe is built around. Every brand carves its own.</p>
          <div class="callout a" data-in="1.05">Same feet. Different last. Different number on the box.</div>
        </div>`,
    },
    {
      dur: 4.6,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">2</div>
          <h2 class="a" data-in="0.22">How big is one size?</h2>
          <div class="stat a" data-anim="pop" data-in="0.62" style="margin-top:40px">
            <span class="a" data-anim="count" data-in="0.62" data-dur="0.9"
                  data-from="0" data-to="8.5" data-dec="1">8.5</span><u> mm</u>
          </div>
          <div class="statlabel a" data-in="1.20">the whole gap between a 9 and a 10</div>
          <p class="tight a" data-in="1.60">A third of an inch. Half that for a half size — and you can feel 4&nbsp;mm.</p>
        </div>`,
    },
    {
      dur: 4.8,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">3</div>
          <h2 class="a" data-in="0.22">Same feet, three answers.</h2>
          <div class="rows">
            <div class="row a" data-in="0.62"><span class="k">Runner</span><span class="v">10.5</span></div>
            <div class="row a" data-in="0.82"><span class="k">Basketball</span><span class="v">10</span></div>
            <div class="row a" data-in="1.02"><span class="k">Dress shoe</span><span class="v">9.5</span></div>
            <div class="row hi a" data-in="1.30"><span class="k">Your foot</span><span class="v">26.8 cm</span></div>
          </div>
          <p class="tight a" data-in="1.75">Runners get more toe room, dress shoes less. Only the last row is a fact.</p>
        </div>`,
    },
    {
      dur: 4.2,
      chrome: false,
      html: `
        <div class="stage">
          <div class="cta">
            <div class="mark a" data-anim="pop" data-in="0.05"><i></i>SoleFit</div>
            <h2 class="a" data-in="0.32">Scan once.<br>Get your size<br>in every brand.</h2>
            <p class="tight a" data-in="0.85">Your camera measures both feet. SoleFit turns that into a size, a fit&nbsp;%, and every size the shoe comes in.</p>
            <div class="where a" data-in="1.30">SoleFit — on iOS</div>
          </div>
        </div>`,
    },
  ],

  caption: `
# r01 — You are not a size 10

**Hook (0–3s):** “You are not a size 10.”
**Length:** ~20s · 1080×1920 · 30fps · silent (add trending audio in-app)

## Caption

You are not a size 10. Nobody is 👟

A shoe size isn’t a measurement of your foot — it’s a label on the **last**, the foot-shaped mould the shoe was built around. Every brand carves its own, and the category changes it again before brand even enters the picture: a road runner is cut with more toe room than a basketball shoe, a dress shoe with less.

One full US size is 8.5 mm. A half size is 4.2 mm. You can feel 4 mm — which is exactly why “I’m usually a 10” keeps letting you down.

Your feet have one number that doesn’t move: their actual length. Measure that once and every size chart becomes a conversion, not a guess.

That’s the whole idea behind SoleFit — scan your feet with the camera, get a fit % and the size to buy in anything.

What’s the worst size surprise you’ve had? 👇

## Hashtags

#solefit #shoefit #shoesize #sneakers #sneakerhead #kicks #runningshoes #running #widefeet #footcare #sizeguide #shoeshopping #fitcheck #sneakercommunity #shoetips

## On-screen text (for the accessibility caption / repurposing)

1. You are not a size 10. Nobody is.
2. It measures the shoe — a size is a label on a last.
3. One size is 8.5 mm. Half that for a half size.
4. Same feet, three answers: runner 10.5 / basketball 10 / dress 9.5.
5. Scan once. Get your size in every brand.

## Audio

Silent by design. Pick a low-key trending audio in the Reels editor — the reel
is text-led, so anything beat-driven and non-vocal works. Beat drops land well
at 3.0s, 7.0s, 11.6s and 16.4s (the scene cuts).

## Alt text

White vertical slides in SoleFit’s design system explaining that a shoe size
measures the shoe’s last rather than your foot: one US size equals 8.5 mm, and
the same foot maps to a 10.5 runner, a 10 basketball shoe and a 9.5 dress shoe.

## Notes

- Cover frame: \`cover.jpg\` (the hook, fully revealed).
- All copy sits inside the Reels safe area — nothing important in the bottom
  470px or behind the right-hand action rail.
- Numbers come from the app’s own fit constants (1 US size = 1/3 inch = 8.47 mm,
  half size = 4.23 mm, per-category toe allowance), so the reel and the app agree.
`,
};
