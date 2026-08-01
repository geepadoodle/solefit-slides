// Pin 3 — "Choose": BestFitView as the app actually renders it — sheet chrome
// ("Close" / inline title), category chips, Brand + Sort menu rows, ranked rows
// with the real FitBadge (colored dot + "94% fit" in ink).
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

    <!-- sheet nav: Close · inline title -->
    <div style="display:flex;align-items:center;margin-top:92px;padding:0 48px;height:80px">
      <span style="font-size:34px;color:#111113;width:220px">Close</span>
      <span style="flex:1;text-align:center;font-size:34px;font-weight:600">Best for your feet</span>
      <span style="width:220px"></span>
    </div>

    <!-- category chips -->
    <div style="display:flex;gap:16px;padding:16px 32px 0;overflow:hidden">
      <span class="chip on">All</span>
      <span class="chip">Running</span>
      <span class="chip">Basketball</span>
      <span class="chip">Lifestyle</span>
      <span class="chip">Skate</span>
      <span class="chip">Trail</span>
    </div>

    <!-- Brand / Sort menu rows -->
    <div style="display:flex;align-items:center;padding:20px 32px 0">
      <span style="font-size:30px;color:#6B6B70">Brand</span>
      <span style="margin-left:auto;display:flex;align-items:center;gap:8px;font-size:30px;font-weight:600;color:#111113">All brands
        <svg width="20" height="26" viewBox="0 0 10 13"><path d="M5 1 8 4.6H2L5 1Zm0 11L2 8.4h6L5 12Z" fill="#111113"/></svg>
      </span>
    </div>
    <div style="display:flex;align-items:center;padding:14px 32px 0">
      <span style="font-size:30px;color:#6B6B70">Sort</span>
      <span style="margin-left:auto;display:flex;align-items:center;gap:8px;font-size:30px;font-weight:600;color:#111113">Best fit
        <svg width="20" height="26" viewBox="0 0 10 13"><path d="M5 1 8 4.6H2L5 1Zm0 11L2 8.4h6L5 12Z" fill="#111113"/></svg>
      </span>
    </div>

    <div id="rows" style="display:flex;flex-direction:column;gap:18px;padding:24px 32px 0"></div>

    <div class="homebar"></div>

    <style>
      .chip { font-size:27px;font-weight:600;color:#6B6B70;background:#F2F2F4;border-radius:999px;padding:14px 30px;white-space:nowrap; }
      .chip.on { background:#111113;color:#fff; }
      .row { display:flex;align-items:center;gap:24px;background:#fff;border:2px solid #E6E6E9;border-radius:34px;padding:30px 30px; }
      .rank { width:46px;flex:none;text-align:center;font-size:38px;font-weight:700;color:#8A8A8F;font-variant-numeric:tabular-nums; }
      .rank.top { color:#111113; }
      .thumb { width:152px;height:118px;border-radius:20px;background:#fff;border:2px solid #F2F2F4;flex:none;overflow:hidden;display:flex;align-items:center;justify-content:center; }
      .thumb img { width:92%;height:92%;object-fit:contain;filter:grayscale(1); }
      .brand { font-size:22px;font-weight:800;letter-spacing:0.08em;color:#6B6B70; }
      .nm { font-size:33px;font-weight:700;letter-spacing:-0.01em;margin-top:3px; }
      .size { font-size:26px;font-weight:600;color:#6B6B70;margin-top:5px; }
      .size.up { color:#B45309; }
      .fitbadge { margin-left:auto;flex:none;display:flex;align-items:center;gap:20px;
                  background:rgba(242,242,244,0.92);border:1.5px solid rgba(230,230,233,0.9);
                  border-radius:999px;padding:14px 28px; }
      .fitbadge i { width:12px;height:12px;border-radius:999px;flex:none; }
      .fitbadge b { font-size:27px;font-weight:700;color:#111113;white-space:nowrap;letter-spacing:0.01em; }
    </style>
    <script>
      const shoes = [
        { n:"Pegasus 41",       b:"NIKE",        img:"assets/running.jpg",   size:"Your size: US 10",        pct:94 },
        { n:"Ultraboost Light", b:"ADIDAS",      img:"assets/running.jpg",   size:"Your size: US 10",        pct:91 },
        { n:"Air Jordan 1 High OG", b:"JORDAN",  img:"assets/lifestyle.jpg", size:"½ size up · US 10.5", up:1, pct:89 },
        { n:"Clifton 9",        b:"HOKA",        img:"assets/running.jpg",   size:"Your size: US 10",        pct:88 },
        { n:"Dunk Low",         b:"NIKE",        img:"assets/skate.jpg",     size:"Your size: US 10",        pct:86 },
        { n:"990v6",            b:"NEW BALANCE", img:"assets/lifestyle.jpg", size:"Your size: US 10 (2E)",   pct:84 },
        { n:"Samba OG",         b:"ADIDAS",      img:"assets/lifestyle.jpg", size:"½ size up · US 10.5", up:1, pct:76 },
        { n:"Blazer Mid '77",   b:"NIKE",        img:"assets/lifestyle.jpg", size:"Your size: US 10",        pct:73 },
        { n:"Old Skool",        b:"VANS",        img:"assets/skate.jpg",     size:"Your size: US 10",        pct:71 },
      ];
      const fitColor = p => p >= 88 ? "#15803D" : p >= 74 ? "#3F7F14" : p >= 58 ? "#B45309" : "#DC2626";
      document.getElementById("rows").innerHTML = shoes.map((x, i) => \`
        <div class="row">
          <div class="rank \${i === 0 ? "top" : ""}">\${i + 1}</div>
          <div class="thumb"><img src="\${x.img}"></div>
          <div>
            <div class="brand">\${x.b}</div>
            <div class="nm">\${x.n}</div>
            <div class="size \${x.up ? "up" : ""}">\${x.size}</div>
          </div>
          <div class="fitbadge"><i style="background:\${fitColor(x.pct)}"></i><b>\${x.pct}% fit</b></div>
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

A phone leaning on a dark studio floor showing SoleFit's "Best for your feet"
ranking: a numbered list of shoes scored for one person's scan — 1 Pegasus 41
at 94% fit, 2 Ultraboost Light 91%, 3 Air Jordan 1 89% needing a half size up,
4 Clifton 9, 5 Dunk Low, 6 990v6 in a 2E width, 7 Samba OG, 8 Blazer Mid '77,
with row 9 sliced off by the bottom of the screen mid-scroll — each with a product photo and a
fit-percentage badge. The word "Choose" is written large at the bottom left.
`,
};
