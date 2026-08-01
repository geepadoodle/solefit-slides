// Pin 2 — "Analyze": the scan report, measurements + verdict.
export default {
  slug: "02-analyze",
  word: "Analyze",
  wedge: "none",
  device: { rx: "3deg", ry: "-8deg", rz: "2deg", tx: "56px", ty: "0px" },
  contact: { bottom: "196px", shift: "36px" },

  screen: `
    <div class="statusbar">
      <span>9:41</span>
      <span class="right">
        <svg width="40" height="26" viewBox="0 0 20 13"><g fill="#111113"><rect x="0" y="8" width="3" height="5" rx="1"/><rect x="5" y="6" width="3" height="7" rx="1"/><rect x="10" y="3" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="13" rx="1"/></g></svg>
        <svg width="36" height="26" viewBox="0 0 18 13"><path fill="#111113" d="M9 11.5 6.6 9.1a3.4 3.4 0 0 1 4.8 0L9 11.5Zm4.1-4.1a6.2 6.2 0 0 0-8.2 0L3.2 5.7a8.6 8.6 0 0 1 11.6 0l-1.7 1.7ZM9 0c3.2 0 6.2 1.2 8.5 3.4l-1.7 1.7A9.6 9.6 0 0 0 9 2.4a9.6 9.6 0 0 0-6.8 2.7L.5 3.4A12 12 0 0 1 9 0Z"/></svg>
        <svg width="54" height="26" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="21" height="12" rx="3.5" fill="none" stroke="#111113" stroke-opacity="0.4"/><rect x="2" y="2" width="15" height="9" rx="2" fill="#111113"/><path d="M23.5 4.5v4a2.2 2.2 0 0 0 0-4Z" fill="#111113" fill-opacity="0.4"/></svg>
      </span>
    </div>

    <div class="navrow" style="position:relative;margin-top:96px;padding-left:56px;padding-right:56px">
      <span class="back" style="display:flex;align-items:center;gap:10px">
        <svg width="24" height="42" viewBox="0 0 12 21"><path d="M10 1.5 2 10.5l8 9" fill="none" stroke="#111113" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span style="font-size:34px">Scans</span>
      </span>
      <span class="spacer"></span>
      <span class="title" style="font-size:36px;position:absolute;left:0;right:0;text-align:center;pointer-events:none">Scan report</span>
      <svg class="icon" width="38" height="46" viewBox="0 0 17 21"><g fill="none" stroke="#6B6B70" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 1v12M4.5 4.5 8.5 1l4 3.5"/><path d="M2.5 9.5H1.5v10h14v-10h-1"/></g></svg>
    </div>

    <div style="padding:24px 44px 0">
      <div style="background:#fff;border:2px solid #E6E6E9;border-radius:48px;padding:44px 48px 38px">

        <div style="display:flex;justify-content:space-between;align-items:baseline">
          <span style="font-size:27px;font-weight:800;letter-spacing:0.18em;color:#6B6B70">SCAN REPORT</span>
          <span style="font-size:27px;color:#8A8A8F">Jul 31, 9:41&nbsp;PM</span>
        </div>

        <div style="display:flex;gap:28px;margin-top:28px;align-items:flex-start">
          <svg width="60" height="60" viewBox="0 0 26 26"><circle cx="13" cy="13" r="12" fill="#15803D"/><path d="m7.5 13.5 3.5 3.5 7-7.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div>
            <div style="font-size:44px;font-weight:700;letter-spacing:-0.02em">Clean capture</div>
            <div style="font-size:29px;color:#6B6B70;margin-top:6px;line-height:1.3">Both feet in one frame — the numbers are solid.</div>
          </div>
        </div>

        <div style="display:flex;gap:44px;margin-top:28px">
          <div style="flex:1;text-align:center">
            <div style="font-size:25px;font-weight:800;letter-spacing:0.16em;color:#6B6B70">LEFT</div>
            <canvas id="fL" width="280" height="340" style="width:280px;height:340px;margin:8px 0 0"></canvas>
            <div style="font-size:34px;font-weight:700">26.6 × 9.8 cm</div>
            <div style="font-size:25px;color:#8A8A8F;margin-top:6px">266×98·61 mm</div>
          </div>
          <div style="flex:1;text-align:center">
            <div style="font-size:25px;font-weight:800;letter-spacing:0.16em;color:#6B6B70">RIGHT</div>
            <canvas id="fR" width="280" height="340" style="width:280px;height:340px;margin:8px 0 0"></canvas>
            <div style="font-size:34px;font-weight:700">27.1 × 10.0 cm</div>
            <div style="font-size:25px;color:#8A8A8F;margin-top:6px">271×100·63 mm</div>
          </div>
        </div>

        <div style="display:flex;gap:20px;margin-top:32px">
          <div class="tile"><div class="tl">YOUR SIZE</div><div class="tv">US 10</div></div>
          <div class="tile"><div class="tl">WIDTH</div><div class="tv">100&nbsp;mm</div></div>
          <div class="tile warn"><div class="tl">ASYMMETRY</div><div class="tv">5&nbsp;mm</div></div>
        </div>
        <style>
          .tile { flex:1; background:#F2F2F4; border-radius:28px; padding:26px 30px; }
          .tile.warn { background:rgba(180,83,9,0.10); }
          .tile.warn .tl, .tile.warn .tv { color:#B45309; }
          .tl { font-size:22px; font-weight:800; letter-spacing:0.13em; color:#6B6B70; }
          .tv { font-size:42px; font-weight:800; margin-top:9px; white-space:nowrap; }
          .frow { padding:24px 0 22px; }
          .frow + .frow { border-top:2px solid #E6E6E9; }
          .frow .top { display:flex; align-items:baseline; }
          .frow .lb { font-size:22px; font-weight:800; letter-spacing:0.15em; color:#6B6B70; }
          .frow .pv { margin-left:14px; font-size:20px; color:#8A8A8F; }
          .frow .vl { margin-left:auto; font-size:29px; font-weight:600; color:#111113; }
          .gauge { position:relative; height:14px; border-radius:999px; background:#E8E8EC; margin-top:20px; }
          .gauge b { position:absolute; left:0; top:0; bottom:0; border-radius:999px; }
          .gauge i { position:absolute; top:50%; width:26px; height:26px; margin:-13px 0 0 -13px;
                     border-radius:999px; border:5px solid #fff;
                     box-shadow:0 2px 8px rgba(0,0,0,0.3); }
          .pcap { display:flex; justify-content:space-between; margin-top:14px;
                  font-size:21px; color:#8A8A8F; }
          .pcap b { font-weight:700; }
        </style>

        <div style="display:flex;align-items:center;gap:14px;margin-top:44px">
          <span style="width:8px;height:30px;border-radius:999px;background:#0F766E"></span>
          <span style="font-size:24px;font-weight:800;letter-spacing:0.15em;color:#6B6B70">YOUR FEET&nbsp;&nbsp;·&nbsp;&nbsp;VS THE FEET DATABASE</span>
        </div>

        <div class="frow">
          <div class="top"><span class="lb">WIDTH</span><span class="pv">measured</span><span class="vl">Standard width</span></div>
          <div class="gauge"><b style="width:58%;background:#15803D"></b><i style="left:58%;background:#15803D"></i></div>
          <div class="pcap"><span>wider than <b style="color:#15803D">58%</b> of scans</span><span>P58</span></div>
        </div>
        <div class="frow">
          <div class="top"><span class="lb">ARCH</span><span class="pv">measured</span><span class="vl">High arch</span></div>
          <div class="gauge"><b style="width:85%;background:#0F766E"></b><i style="left:85%;background:#0F766E"></i></div>
          <div class="pcap"><span>higher than <b style="color:#0F766E">85%</b> of scans</span><span>P85</span></div>
        </div>
        <div class="frow">
          <div class="top"><span class="lb">INSTEP</span><span class="pv">measured</span><span class="vl">63 mm · high volume</span></div>
          <div class="gauge"><b style="width:81%;background:#1D4ED8"></b><i style="left:81%;background:#1D4ED8"></i></div>
          <div class="pcap"><span>more volume than <b style="color:#1D4ED8">81%</b> of scans</span><span>P81</span></div>
        </div>
        <div class="frow">
          <div class="top"><span class="lb">TOE BOX</span><span class="pv">measured</span><span class="vl">Tapered toes</span></div>
          <div class="gauge"><b style="width:34%;background:#7E22CE"></b><i style="left:34%;background:#7E22CE"></i></div>
          <div class="pcap"><span>narrower taper than <b style="color:#7E22CE">66%</b> of scans</span><span>P34</span></div>
        </div>

        <div style="height:2px;background:#E6E6E9;margin:26px 0 22px"></div>
        <div style="font-size:24px;color:#8A8A8F">LiDAR scan · quality 0.92 · both feet, one session</div>
      </div>
    </div>

    <div class="tabbar">
      <div class="col">
        <div class="slot"><svg width="40" height="40" viewBox="0 0 24 24"><path d="M12 2.6 2.5 10.5V21h6.6v-6h5.8v6h6.6V10.5Z" fill="#8A8A8F"/></svg></div>
        <div class="lbl">For You</div>
      </div>
      <div class="col">
        <div class="slot"><svg width="58" height="58" viewBox="0 0 24 24"><g fill="none" stroke="#8A8A8F" stroke-width="2.4" stroke-linecap="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/></g></svg></div>
        <div class="lbl">Scan</div>
      </div>
      <div class="col">
        <div class="slot"><div class="pill"><svg width="40" height="40" viewBox="0 0 24 24"><g fill="#111113"><circle cx="12" cy="7.2" r="4.2"/><path d="M3.6 21c.4-4.2 3.9-7 8.4-7s8 2.8 8.4 7Z"/></g></svg></div></div>
        <div class="lbl on">Profile</div>
      </div>
    </div>
    <div class="homebar"></div>

    <script>
      // Same dorsal outline the scanner paints, traced at report scale.
      function reportFoot(id, mir, fl, fw) {
        const P = [[0,-0.04],[0.32,-0.018],[0.47,0.09],[0.55,0.21],[0.5,0.36],[0.52,0.52],
          [0.7,0.66],[0.94,0.78],[1,0.88],[0.92,0.965],[0.5,1],[0,0.995],[-0.5,0.965],
          [-0.86,0.905],[-1,0.8],[-0.94,0.675],[-0.8,0.5],[-0.72,0.32],[-0.52,0.14],[-0.34,-0.016]];
        const toes = [[0.58,0.96,0.132,0.5],[0.26,0.985,0.098,0.29],[0,0.985,0.088,0.27],
                      [-0.25,0.965,0.076,0.24],[-0.47,0.938,0.06,0.22]];
        const c = document.getElementById(id), ctx = c.getContext("2d");
        ctx.translate(0, c.height);   // toes up — same orientation as the scan
        ctx.scale(1, -1);
        const cx = c.width/2, cy = 30;
        const pts = P.map(([u,v]) => [cx + mir*u*fw/2, cy + v*fl]);
        ctx.lineJoin = ctx.lineCap = "round";
        ctx.beginPath();
        const n = pts.length;
        ctx.moveTo((pts[0][0]+pts[n-1][0])/2,(pts[0][1]+pts[n-1][1])/2);
        for (let i=0;i<n;i++){const p=pts[i],q=pts[(i+1)%n];
          ctx.quadraticCurveTo(p[0],p[1],(p[0]+q[0])/2,(p[1]+q[1])/2);}
        ctx.closePath();
        for (const [u,v,l,w] of toes) {
          const tx = cx + mir*u*fw/2, ty = cy + v*fl, tl = l*fl, tw = w*fw/4;
          ctx.moveTo(tx+tw, ty+tl*0.3);
          ctx.ellipse(tx, ty+tl*0.3, tw, tl*0.72, mir*u*0.22, 0, 7);
        }
        ctx.fillStyle = "#F2F2F4"; ctx.fill();
        ctx.strokeStyle = "#111113"; ctx.lineWidth = 3.4; ctx.stroke();
      }
      reportFoot("fL", 1, 272, 116);
      reportFoot("fR", -1, 279, 119);
    </script>`,

  caption: `
# Pin 2 — Analyze

Post SECOND (pin second) so the profile grid reads Scan → Analyze → Choose.

## Caption

This is what your feet actually are 📐

Length, width, instep height, arch — per foot, in millimetres. Not "probably
a 10." The report calls out the things a shoebox never will, like the 5 mm
between your left and right (a half size is 4.2 mm — most people are past
that and don't know it).

Rule the report enforces: fit the bigger foot.

Scan → Analyze → Choose. This is step two.

#solefit #shoefit #footmeasurement #shoesize #widefeet #higharch #sneakers #fitcheck

## Alt text

A phone on a dark studio backdrop showing a SoleFit scan report: a green
"Clean capture" verdict, two traced toes-up foot outlines with measurements —
left 26.6 by 9.8 cm, right 27.1 by 10 cm — tiles for size US 10, width
100 mm and a 5 mm asymmetry flag, then a "Your feet vs the feet database"
table with bright color-coded percentile gauges — green width at P58, teal arch at P85,
blue 63 mm high-volume instep at P81, purple tapered toe box at P34. The word "Analyze"
is written large at the bottom left.
`,
};
