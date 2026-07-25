export default {
  slug: "r03-its-the-volume",
  title: "Right size, still hurts",
  counter: "FIT 101",
  coverAt: 2.4,

  scenes: [
    {
      dur: 3.2,
      html: `
        <div class="stage">
          <div class="kicker a" data-anim="pop" data-in="0.05">Why it hurts</div>
          <h1 class="a" data-in="0.30">Right size.<br>Still <em>hurts</em><br>at minute 20.</h1>
          <p class="lead tight a" data-in="0.85">The size was never the whole story.</p>
        </div>`,
    },
    {
      dur: 4.6,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">1</div>
          <h2 class="a" data-in="0.22">Fit is three numbers.</h2>
          <div class="bars">
            <div class="bar a" data-in="0.60">
              <div class="top"><span class="name">Length</span><span class="amt">55%</span></div>
              <div class="rail"><div class="fill a" data-anim="bar" data-w="55" data-in="0.70" data-dur="0.7"></div></div>
            </div>
            <div class="bar a" data-in="0.85">
              <div class="top"><span class="name">Width</span><span class="amt">30%</span></div>
              <div class="rail"><div class="fill a" data-anim="bar" data-w="30" data-in="0.95" data-dur="0.7"></div></div>
            </div>
            <div class="bar accent a" data-in="1.10">
              <div class="top"><span class="name">Volume</span><span class="amt">15%</span></div>
              <div class="rail"><div class="fill a" data-anim="bar" data-w="15" data-in="1.20" data-dur="0.7"></div></div>
            </div>
          </div>
          <p class="tight a" data-in="1.95">That’s the actual weighting behind a SoleFit fit&nbsp;%.</p>
        </div>`,
    },
    {
      dur: 4.6,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">2</div>
          <h2 class="a" data-in="0.22">Volume is the one<br>nobody measures.</h2>
          <p class="tight a" data-in="0.62">It’s how much foot stacks <strong>above</strong> the sole — your instep. A tape measure can’t see it. Neither can a size chart.</p>
          <div class="callout a" data-in="1.15">Two feet the same length can need completely different shoes.</div>
        </div>`,
    },
    {
      dur: 4.8,
      html: `
        <div class="stage">
          <div class="numeral a" data-anim="pop" data-in="0.05">3</div>
          <h2 class="a" data-in="0.22">High instep,<br>low-volume shoe.</h2>
          <div class="rows">
            <div class="row a" data-in="0.62"><span class="k">Across the top</span><span class="v">Pressure</span></div>
            <div class="row a" data-in="0.82"><span class="k">Toes</span><span class="v">Numb</span></div>
            <div class="row hi a" data-in="1.02"><span class="k">Laces</span><span class="v">Never right</span></div>
          </div>
          <p class="tight a" data-in="1.45">Every one of those reads as &ldquo;too small.&rdquo; The length was fine the whole time.</p>
        </div>`,
    },
    {
      dur: 4.2,
      chrome: false,
      html: `
        <div class="stage">
          <div class="cta">
            <div class="mark a" data-anim="pop" data-in="0.05"><i></i>SoleFit</div>
            <h2 class="a" data-in="0.32">Length. Width.<br>Instep height.</h2>
            <p class="tight a" data-in="0.85">Measured with your camera — LiDAR adds the instep — then any shoe rated as a fit&nbsp;%, at every size it comes in.</p>
            <div class="where a" data-in="1.30">SoleFit — on iOS</div>
          </div>
        </div>`,
    },
  ],

  caption: `
# r03 — Right size, still hurts

**Hook (0–3s):** “Right size. Still hurts at minute 20.”
**Length:** ~21s · 1080×1920 · 30fps · silent (add trending audio in-app)

## Caption

Right size. Still hurts at minute 20 😤

Fit isn’t one number, it’s three — and SoleFit weights them 55% length, 30% width, 15% volume. Length is the one everybody buys on, and it’s the only one a size chart can tell you about.

**Volume** is the one nobody measures. It’s how much foot stacks *above* the sole — your instep. Two feet the exact same length can need completely different shoes because of it.

High instep in a low-volume shoe feels like: pressure across the top, toes going numb, laces that are either loose or strangling with nothing in between. Every one of those reads as “these are too small,” so you size up, the shoe gets longer, your heel starts slipping, and it still hurts. The length was fine the whole time.

If that’s you, look for a shoe with more depth or an adjustable/wider lacing setup before you touch the size.

Anyone else been sizing up for years chasing this? 👇

## Hashtags

#solefit #shoefit #footpain #highinstep #footcare #sneakers #sneakerhead #runningshoes #running #widefeet #kicks #shoetips #sizeguide #shoeshopping #podiatry

## On-screen text (for the accessibility caption / repurposing)

1. Right size. Still hurts at minute 20.
2. Fit is three numbers: length 55%, width 30%, volume 15%.
3. Volume is the one nobody measures — it’s your instep.
4. High instep + low-volume shoe = pressure, numb toes, laces never right.
5. Length. Width. Instep height. Measured with your camera.

## Audio

Silent by design. Scene cuts land at 3.2s, 7.8s, 12.4s and 17.2s.

## Alt text

White vertical slides in SoleFit’s design system showing fit split into three
weighted bars — length 55%, width 30%, volume 15% — and explaining that volume,
the height of your instep above the sole, is the unmeasured cause of shoes that
hurt despite being the right length.

## Notes

- Cover frame: \`cover.jpg\`.
- The 55/30/15 split is the app’s real scoring blend (\`wLength\`, \`wWidth\`,
  \`wVolume\`), so the claim holds up if anyone checks.
- Strongest of the three for saves — it names a problem people already have.
`,
};
