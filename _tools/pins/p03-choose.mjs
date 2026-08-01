// Pin 3 — "Choose": the catalog ranked by fit for these feet.
export default {
  slug: "03-choose",
  word: "Choose",
  wedge: "",
  device: { rx: "6deg", ry: "-15deg", rz: "7deg", tx: "44px", ty: "-10px" },
  contact: { bottom: "146px", shift: "26px" },

  screen: `
    <div class="statusbar">
      <span>9:41</span>
      <span class="right">
        <svg width="40" height="26" viewBox="0 0 20 13"><g fill="#111113"><rect x="0" y="8" width="3" height="5" rx="1"/><rect x="5" y="6" width="3" height="7" rx="1"/><rect x="10" y="3" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="13" rx="1"/></g></svg>
        <svg width="36" height="26" viewBox="0 0 18 13"><path fill="#111113" d="M9 11.5 6.6 9.1a3.4 3.4 0 0 1 4.8 0L9 11.5Zm4.1-4.1a6.2 6.2 0 0 0-8.2 0L3.2 5.7a8.6 8.6 0 0 1 11.6 0l-1.7 1.7ZM9 0c3.2 0 6.2 1.2 8.5 3.4l-1.7 1.7A9.6 9.6 0 0 0 9 2.4a9.6 9.6 0 0 0-6.8 2.7L.5 3.4A12 12 0 0 1 9 0Z"/></svg>
        <svg width="54" height="26" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="21" height="12" rx="3.5" fill="none" stroke="#111113" stroke-opacity="0.4"/><rect x="2" y="2" width="15" height="9" rx="2" fill="#111113"/><path d="M23.5 4.5v4a2.2 2.2 0 0 0 0-4Z" fill="#111113" fill-opacity="0.4"/></svg>
      </span>
    </div>

    <div class="bigtitle" style="padding-top:120px">Best fit</div>
    <div style="font-size:26px;color:#6B6B70;padding:8px 48px 0">Every shoe, rated for your scan</div>

    <div style="display:flex;gap:16px;padding:30px 48px 6px">
      <span class="chip on">Best fit</span>
      <span class="chip">Worst fit</span>
      <span class="chip">Price ↓</span>
      <span class="chip">Running</span>
    </div>

    <div id="rows" style="display:flex;flex-direction:column;gap:20px;padding:26px 40px 0"></div>

    <div style="font-size:22px;color:#8A8A8F;padding:26px 48px 0">Sizes shown are for the bigger foot — your right.</div>

    <style>
      .chip { font-size:26px;font-weight:600;color:#6B6B70;background:#F2F2F4;border-radius:999px;padding:14px 30px; }
      .chip.on { background:#111113;color:#fff;font-weight:700; }
      .row { display:flex;align-items:center;gap:28px;background:#fff;border:2px solid #E6E6E9;border-radius:36px;padding:24px 34px 24px 24px; }
      .thumb { position:relative;width:150px;height:150px;border-radius:24px;background:#fff;flex:none;overflow:hidden;border:2px solid #F2F2F4; }
      .thumb img { width:100%;height:100%;object-fit:cover;filter:grayscale(1); }
      .rank { position:absolute;left:-2px;top:-2px;width:50px;height:50px;border-radius:24px 0 24px 0;background:#111113;color:#fff;
              font-size:24px;font-weight:800;display:flex;align-items:center;justify-content:center; }
      .nm { font-size:33px;font-weight:700;letter-spacing:-0.01em; }
      .sub { font-size:26px;color:#6B6B70;margin-top:6px; }
      .size { font-size:26px;color:#111113;font-weight:600;margin-top:6px; }
      .pct { margin-left:auto;text-align:right;flex:none; }
      .pct b { font-size:50px;font-weight:800;letter-spacing:-0.03em;display:block; }
      .pct span { font-size:24px;font-weight:700;letter-spacing:0.06em; }
    </style>
    <script>
      const shoes = [
        { n:"Pegasus 41",        s:"Nike · $140",        img:"assets/running.jpg",   size:"US 10",   pct:94, rank:1 },
        { n:"Ultraboost Light",  s:"Adidas · $190",      img:"assets/running.jpg",   size:"US 10",   pct:91, rank:2 },
        { n:"Air Jordan 1 High OG", s:"Jordan · $180",   img:"assets/lifestyle.jpg", size:"US 10.5", pct:89, rank:3 },
        { n:"Clifton 9",         s:"Hoka · $145",        img:"assets/running.jpg",   size:"US 10",   pct:88 },
        { n:"Dunk Low",          s:"Nike · $115",        img:"assets/skate.jpg",     size:"US 10",   pct:86 },
        { n:"990v6",             s:"New Balance · $200", img:"assets/lifestyle.jpg", size:"US 10 2E", pct:84 },
        { n:"Samba OG",          s:"Adidas · $100",      img:"assets/lifestyle.jpg", size:"US 10.5", pct:76 },
      ];
      const fitColor = p => p >= 88 ? "#15803D" : p >= 74 ? "#3F7F14" : p >= 58 ? "#B45309" : "#DC2626";
      const fitLabel = p => p >= 90 ? "Perfect fit" : p >= 80 ? "Great fit" : p >= 68 ? "Good fit" : "Okay fit";
      document.getElementById("rows").innerHTML = shoes.map(x => \`
        <div class="row">
          <div class="thumb"><img src="\${x.img}">\${x.rank ? \`<div class="rank">\${x.rank}</div>\` : ""}</div>
          <div>
            <div class="nm">\${x.n}</div>
            <div class="sub">\${x.s}</div>
            <div class="size">Your size · \${x.size}</div>
          </div>
          <div class="pct" style="color:\${fitColor(x.pct)}">
            <b>\${x.pct}%</b><span>\${fitLabel(x.pct)}</span>
          </div>
        </div>\`).join("");
    </script>`,

  caption: `
# Pin 3 — Choose

Post FIRST (pin first) so the profile grid reads Scan → Analyze → Choose.

## Caption

Every shoe, scored for YOUR feet 🎯

After the scan, the whole catalog gets a fit % — not "true to size" reviews
from people whose feet aren't yours. Length, width and volume, weighted the
way misfit actually hurts, plus the exact size to buy per shoe. Sometimes
that's a 10, sometimes a 10.5, sometimes a 2E — in the same closet.

The ranking is honest, too: shoes that run against your foot shape score low
even at their best size, and the app says so.

Scan → Analyze → Choose. Step three: buy once, keep them.

#solefit #shoefit #sneakers #sneakerhead #shoeshopping #perfectfit #kicks #runningshoes

## Alt text

A phone leaning on a dark studio floor showing SoleFit's "Best fit" list:
shoes ranked for one person's scan — Pegasus 41 at 94% perfect fit in US 10,
Ultraboost Light 91%, Air Jordan 1 at 89% in US 10.5, Dunk Low 86%, 990v6 84%
in a 2E width, Samba OG 76% — each with a grayscale product photo, price, and
the size to buy. The word "Choose" is written large at the bottom left.
`,
};
