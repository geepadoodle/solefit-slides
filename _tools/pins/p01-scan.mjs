// Pin 1 — "Scan": the AR scanner mid-capture, both feet locked.
export default {
  slug: "01-scan",
  word: "Scan",
  wedge: "left",
  device: { rx: "7deg", ry: "16deg", rz: "-9deg", tx: "36px", ty: "-14px" },
  contact: { bottom: "150px", shift: "10px" },

  screen: `
    <canvas id="feet" width="1056" height="2312"
            style="position:absolute;inset:0;width:1056px;height:2312px"></canvas>

    <div class="statusbar lite" style="position:relative">
      <span>9:41</span>
      <span class="right">
        <svg width="40" height="26" viewBox="0 0 20 13"><g fill="#fff"><rect x="0" y="8" width="3" height="5" rx="1"/><rect x="5" y="6" width="3" height="7" rx="1"/><rect x="10" y="3" width="3" height="10" rx="1"/><rect x="15" y="0" width="3" height="13" rx="1"/></g></svg>
        <svg width="36" height="26" viewBox="0 0 18 13"><path fill="#fff" d="M9 11.5 6.6 9.1a3.4 3.4 0 0 1 4.8 0L9 11.5Zm4.1-4.1a6.2 6.2 0 0 0-8.2 0L3.2 5.7a8.6 8.6 0 0 1 11.6 0l-1.7 1.7ZM9 0c3.2 0 6.2 1.2 8.5 3.4l-1.7 1.7A9.6 9.6 0 0 0 9 2.4a9.6 9.6 0 0 0-6.8 2.7L.5 3.4A12 12 0 0 1 9 0Z"/></svg>
        <svg width="54" height="26" viewBox="0 0 27 13"><rect x="0.5" y="0.5" width="21" height="12" rx="3.5" fill="none" stroke="#fff" stroke-opacity="0.5"/><rect x="2" y="2" width="15" height="9" rx="2" fill="#fff"/><path d="M23.5 4.5v4a2.2 2.2 0 0 0 0-4Z" fill="#fff" fill-opacity="0.5"/></svg>
      </span>
    </div>

    <div style="position:relative;display:flex;justify-content:space-between;align-items:center;padding:110px 48px 0">
      <div style="display:flex;align-items:center;gap:14px;background:rgba(0,0,0,0.45);backdrop-filter:blur(6px);border-radius:999px;padding:14px 30px">
        <span style="width:14px;height:14px;border-radius:999px;background:#3DDC97"></span>
        <span style="color:#fff;font-size:26px;font-weight:700;letter-spacing:0.08em">LiDAR&nbsp;·&nbsp;BOTH FEET</span>
      </div>
      <div style="display:flex;gap:16px">
        <span style="width:64px;height:64px;border-radius:999px;background:rgba(0,0,0,0.45);color:#fff;font-size:30px;font-weight:600;display:flex;align-items:center;justify-content:center">?</span>
        <span style="width:64px;height:64px;border-radius:999px;background:rgba(0,0,0,0.45);color:#fff;font-size:30px;font-weight:800;display:flex;align-items:center;justify-content:center;letter-spacing:0.1em">···</span>
      </div>
    </div>

    <!-- both-feet capture gate -->
    <div class="brk" style="left:96px;top:600px;width:864px;height:1120px"></div>
    <div class="lockpill" style="left:230px;top:1772px">LEFT&nbsp;&nbsp;✓</div>
    <div class="lockpill" style="left:606px;top:1782px">RIGHT&nbsp;&nbsp;✓</div>

    <!-- capture state -->
    <div style="position:absolute;left:0;right:0;top:440px;display:flex;justify-content:center">
      <div style="background:rgba(0,0,0,0.5);backdrop-filter:blur(8px);color:#fff;font-size:30px;font-weight:600;padding:18px 40px;border-radius:999px">
        Hold steady — capturing both feet
      </div>
    </div>
    <div style="position:absolute;left:0;right:0;top:2016px;display:flex;justify-content:center">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle cx="75" cy="75" r="66" fill="none" stroke="rgba(255,255,255,0.35)" stroke-width="7"/>
        <circle cx="75" cy="75" r="66" fill="none" stroke="#fff" stroke-width="7"
                stroke-linecap="round" stroke-dasharray="415" stroke-dashoffset="130"
                transform="rotate(-90 75 75)"/>
        <circle cx="75" cy="75" r="44" fill="rgba(255,255,255,0.92)"/>
      </svg>
    </div>

    <!-- capture-mode switcher -->
    <div style="position:absolute;left:0;right:0;bottom:104px;display:flex;justify-content:center;gap:18px">
      <span class="mode on">LiDAR</span>
      <span class="mode">Face ID depth</span>
      <span class="mode">Photos</span>
    </div>
    <div style="position:absolute;left:50%;bottom:40px;width:270px;height:10px;margin-left:-135px;border-radius:999px;background:rgba(255,255,255,0.9)"></div>

    <style>
      .brk { position:absolute; }
      .brk::before, .brk::after,
      .brk > b::before, .brk > b::after { content:""; position:absolute; width:64px; height:64px; border:6px solid rgba(255,255,255,0.95); }
      .brk::before { left:0; top:0; border-right:0; border-bottom:0; border-top-left-radius:26px; }
      .brk::after  { right:0; top:0; border-left:0; border-bottom:0; border-top-right-radius:26px; }
      .brk > b::before { left:0; bottom:0; border-right:0; border-top:0; border-bottom-left-radius:26px; }
      .brk > b::after  { right:0; bottom:0; border-left:0; border-top:0; border-bottom-right-radius:26px; }
      .lockpill { position:absolute; background:rgba(0,0,0,0.5); color:#fff; font-size:26px; font-weight:700;
                  letter-spacing:0.12em; padding:12px 28px; border-radius:999px; }
      .mode { background:rgba(0,0,0,0.45); backdrop-filter:blur(6px); color:rgba(255,255,255,0.85);
              font-size:27px; font-weight:600; padding:16px 34px; border-radius:999px; }
      .mode.on { background:rgba(255,255,255,0.94); color:#111113; font-weight:700; }
    </style>
    <script>
      document.querySelectorAll(".brk").forEach(b => b.appendChild(document.createElement("b")));
      paintFeet(document.getElementById("feet"), 7);
    </script>`,

  caption: `
# Pin 1 — Scan

Post THIRD (pin last) so the profile grid reads Scan → Analyze → Choose.

## Caption

Point your camera down. That's the whole setup 👟

SoleFit measures both feet in one pass — length, width, and your left/right
difference — using the same AR tech as Apple's Measure app. LiDAR iPhones add
instep height on top.

No mat, no paper tracing, no guessing.

Scan → Analyze → Choose. This is step one.

#solefit #footscan #shoefit #sneakers #lidar #shoetech #perfectfit #shoesize

## Alt text

A phone at an angle on a dark studio floor, its screen showing the SoleFit
scanner mid-capture: a first-person view down at two feet in white socks on an oak floor, white lock
brackets around each foot, a capture ring, and LiDAR / Face ID depth / Photos
mode chips. The word "Scan" is written large at the bottom left.
`,
};
