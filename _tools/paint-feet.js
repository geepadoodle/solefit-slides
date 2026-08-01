/* Paints the scanner viewfinder: two feet in white crew socks on an oak floor,
   seen from above — matches the app's own guidance ("bare feet or thin socks,
   hard floor"). Pure canvas, seeded PRNG — same pixels every build.
   Canvas is 1056 x 2312. */

function paintFeet(canvas, seed = 7) {
  const W = canvas.width, H = canvas.height;
  const ctx = canvas.getContext("2d");

  let s = seed >>> 0;                                   // mulberry32
  const rnd = () => {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  /* ================= floor ================= */

  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#6E5138");
  g.addColorStop(0.42, "#8A6A49");
  g.addColorStop(0.75, "#967553");
  g.addColorStop(1, "#755A40");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  const plankW = 186;
  for (let px = -70; px < W; px += plankW) {
    ctx.fillStyle = "rgba(62,42,26,0.6)";
    ctx.fillRect(px, 0, 3, H);
    ctx.fillStyle = "rgba(232,203,166,0.10)";
    ctx.fillRect(px + 3, 0, 2, H);
    for (let i = 0; i < 24; i++) {
      const gx = px + 12 + rnd() * (plankW - 24);
      const amp = 2 + 5 * rnd();
      const tone = rnd();
      ctx.strokeStyle = tone < 0.72
        ? `rgba(88,60,38,${0.05 + 0.1 * rnd()})`
        : `rgba(224,194,156,${0.04 + 0.07 * rnd()})`;
      ctx.lineWidth = 1 + 2.6 * rnd();
      ctx.beginPath();
      ctx.moveTo(gx, -20);
      for (let yy = 0; yy <= H + 20; yy += 30)
        ctx.lineTo(gx + Math.sin((yy + i * 47) * 0.008 + i * 1.7) * amp, yy);
      ctx.stroke();
    }
    if (rnd() < 0.55) {
      const kx = px + plankW * (0.25 + 0.5 * rnd()), ky = H * rnd(), kr = 10 + 14 * rnd();
      const kg = ctx.createRadialGradient(kx, ky, 1, kx, ky, kr * 1.8);
      kg.addColorStop(0, "rgba(66,44,28,0.45)");
      kg.addColorStop(0.55, "rgba(66,44,28,0.16)");
      kg.addColorStop(1, "rgba(66,44,28,0)");
      ctx.fillStyle = kg;
      ctx.beginPath(); ctx.ellipse(kx, ky, kr, kr * 1.6, 0, 0, 7); ctx.fill();
    }
  }

  /* ================= sock geometry =================
     Local coords: origin at heel-center, +v down toward the toes. Authored for
     the LEFT foot (big-toe side on +u); mir=-1 mirrors. fl runs heel -> sock
     tip; fw is full ball width. Fabric rounds everything: one smooth cap
     instead of toes, a softer arch, a slightly puffy edge. */

  const jitterTable = Array.from({ length: 24 }, () => rnd() * 2 - 1);

  function sockOutline(fl, fw, mir, jit) {
    const P = [
      [0.00, -0.030],
      [0.34, -0.014], [0.50, 0.08], [0.56, 0.20],           // inner heel
      [0.60, 0.36], [0.62, 0.52],                           // soft arch
      [0.74, 0.65], [0.96, 0.77],                           // big-toe ball
      [1.00, 0.86], [0.95, 0.94],                           // cap, inner corner
      [0.74, 1.000], [0.42, 1.035], [0.04, 1.040],          // cap apex (big-toe side longest)
      [-0.36, 1.015], [-0.70, 0.960], [-0.92, 0.885],       // cap, outer corner
      [-1.00, 0.79], [-0.94, 0.665],                        // pinky ball
      [-0.80, 0.49], [-0.72, 0.31],                         // outer waist
      [-0.52, 0.12], [-0.32, -0.010],
    ];
    return P.map(([u, v], i) => [
      mir * (u + jitterTable[(i + jit) % jitterTable.length] * 0.022) * fw * 0.5,
      v * fl,
    ]);
  }

  function smoothPath(pts) {
    ctx.beginPath();
    const n = pts.length;
    ctx.moveTo((pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2);
    for (let i = 0; i < n; i++) {
      const p = pts[i], q = pts[(i + 1) % n];
      ctx.quadraticCurveTo(p[0], p[1], (p[0] + q[0]) / 2, (p[1] + q[1]) / 2);
    }
    ctx.closePath();
  }

  function drawSockFoot(cx, cy, ang, fl, fw, mir, exposure) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ang);

    const sil = sockOutline(fl, fw, mir, mir > 0 ? 3 : 11);

    // ---- contact shadow
    ctx.save();
    ctx.filter = "blur(22px)";
    ctx.fillStyle = "rgba(38,23,13,0.52)";
    smoothPath(sil.map(([u, v]) => [u * 1.10, v * 1.012 + 12]));
    ctx.fill();
    ctx.restore();

    // ---- fabric base
    const base = ctx.createLinearGradient(0, 0, 0, fl * 1.05);
    base.addColorStop(0, "#DFDBD4");
    base.addColorStop(0.4, "#EAE7E1");
    base.addColorStop(0.85, "#F0EDE8");
    base.addColorStop(1, "#E4E0D9");
    ctx.fillStyle = base;
    smoothPath(sil);
    ctx.fill();

    // ---- clipped shading
    ctx.save();
    smoothPath(sil);
    ctx.clip();

    // fabric mottle
    for (let i = 0; i < 40; i++) {
      const mx = (rnd() * 2 - 1) * fw * 0.6, my = rnd() * fl * 1.05;
      const mr = 16 + rnd() * 46;
      ctx.fillStyle = rnd() < 0.5
        ? `rgba(168,161,150,${0.02 + rnd() * 0.028})`
        : `rgba(255,254,250,${0.03 + rnd() * 0.03})`;
      ctx.beginPath(); ctx.ellipse(mx, my, mr, mr * (0.5 + rnd()), rnd() * 3, 0, 7); ctx.fill();
    }

    // dorsal highlight down the instep ridge
    const ridge = ctx.createRadialGradient(
      mir * fw * 0.08, fl * 0.45, 10, mir * fw * 0.08, fl * 0.48, fl * 0.6);
    ridge.addColorStop(0, "rgba(255,254,250,0.5)");
    ridge.addColorStop(0.55, "rgba(255,254,250,0.16)");
    ridge.addColorStop(1, "rgba(255,254,250,0)");
    ctx.fillStyle = ridge;
    ctx.fillRect(-fw, -fl * 0.1, fw * 2, fl * 1.25);

    // lateral falloff away from the light
    const fall = ctx.createLinearGradient(mir * fw * 0.5, 0, mir * -fw * 0.55, 0);
    fall.addColorStop(0, "rgba(150,143,132,0)");
    fall.addColorStop(0.6, "rgba(150,143,132,0.10)");
    fall.addColorStop(1, "rgba(134,127,116,0.34)");
    ctx.fillStyle = fall;
    ctx.fillRect(-fw, -fl * 0.1, fw * 2, fl * 1.25);

    // edge occlusion
    ctx.save();
    ctx.filter = "blur(9px)";
    ctx.strokeStyle = "rgba(140,132,120,0.5)";
    ctx.lineWidth = 12;
    smoothPath(sil);
    ctx.stroke();
    ctx.restore();

    // knit wales: fine lines running the length of the foot, bowing with the form
    ctx.save();
    ctx.filter = "blur(0.6px)";
    for (let i = -9; i <= 9; i++) {
      const u0 = i / 10;
      ctx.strokeStyle = i % 2
        ? `rgba(154,147,136,${0.055 + 0.02 * rnd()})`
        : `rgba(252,251,247,${0.05 + 0.02 * rnd()})`;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      for (let v = -0.02; v <= 1.02; v += 0.04) {
        // wales spread over the ball, gather at heel and cap
        const spread = 0.62 + 0.42 * Math.sin(Math.PI * Math.min(1, Math.max(0, v / 0.86)));
        const x = mir * u0 * spread * fw * 0.5;
        const y = v * fl;
        v <= -0.019 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.restore();

    // toe ridges under the fabric — where the big toe and toe row push up
    ctx.save();
    ctx.filter = "blur(6px)";
    ctx.strokeStyle = "rgba(146,138,126,0.30)";
    ctx.lineWidth = 5;
    ctx.beginPath();       // crease along the inside of the big toe
    ctx.moveTo(mir * fw * 0.19, fl * 0.87);
    ctx.quadraticCurveTo(mir * fw * 0.16, fl * 0.95, mir * fw * 0.10, fl * 1.005);
    ctx.stroke();
    ctx.strokeStyle = "rgba(146,138,126,0.20)";
    ctx.beginPath();       // fainter second-toe hint
    ctx.moveTo(mir * -fw * 0.06, fl * 0.93);
    ctx.quadraticCurveTo(mir * -fw * 0.08, fl * 0.985, mir * -fw * 0.10, fl * 1.015);
    ctx.stroke();
    // knuckle bump highlight on the big toe
    ctx.fillStyle = "rgba(255,254,250,0.30)";
    ctx.beginPath();
    ctx.ellipse(mir * fw * 0.30, fl * 0.90, fw * 0.13, fl * 0.055, mir * 0.3, 0, 7);
    ctx.fill();
    ctx.restore();

    // toe seam: stitch line arcing over the cap
    ctx.save();
    ctx.filter = "blur(1.2px)";
    ctx.strokeStyle = "rgba(148,140,128,0.5)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(mir * fw * 0.44, fl * 0.905);
    ctx.quadraticCurveTo(mir * fw * 0.06, fl * 0.985, mir * -fw * 0.40, fl * 0.905);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,254,250,0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(mir * fw * 0.43, fl * 0.916);
    ctx.quadraticCurveTo(mir * fw * 0.06, fl * 0.996, mir * -fw * 0.39, fl * 0.916);
    ctx.stroke();
    ctx.restore();

    // instep wrinkles: fabric gathers in front of the ankle
    ctx.save();
    ctx.filter = "blur(4px)";
    for (const [v, a] of [[0.20, 0.20], [0.30, 0.15], [0.41, 0.10]]) {
      ctx.strokeStyle = `rgba(140,132,120,${a})`;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(mir * -fw * 0.30, fl * (v + 0.015));
      ctx.quadraticCurveTo(0, fl * (v - 0.022), mir * fw * 0.32, fl * (v + 0.012));
      ctx.stroke();
      ctx.strokeStyle = `rgba(255,254,250,${a * 1.15})`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(mir * -fw * 0.28, fl * (v + 0.035));
      ctx.quadraticCurveTo(0, fl * (v - 0.002), mir * fw * 0.30, fl * (v + 0.032));
      ctx.stroke();
    }
    ctx.restore();

    if (exposure) { ctx.fillStyle = `rgba(60,52,40,${exposure})`; ctx.fillRect(-fw, -fl * 0.1, fw * 2, fl * 1.3); }

    ctx.restore();   // unclip
    ctx.restore();   // untransform
  }

  /* ---- leg (skin) + ribbed sock cuff over the ankle ---- */

  function drawLeg(cx, topY, cuffY, wTop, wCuff, lean) {
    ctx.save();
    ctx.translate(cx, 0);
    ctx.rotate(lean);

    // shin skin from off-frame down into the cuff
    const lg = ctx.createLinearGradient(-wTop / 2, 0, wTop / 2, 0);
    lg.addColorStop(0, "#8D6244");
    lg.addColorStop(0.2, "#B08262");
    lg.addColorStop(0.46, "#C99E7D");
    lg.addColorStop(0.72, "#B8896A");
    lg.addColorStop(1, "#7F573C");
    ctx.fillStyle = lg;
    ctx.beginPath();
    ctx.moveTo(-wTop / 2, topY);
    ctx.bezierCurveTo(-wTop / 2 - 6, topY + (cuffY - topY) * 0.55,
                      -wCuff / 2 - 4, cuffY - 80, -wCuff / 2 + 6, cuffY + 8);
    ctx.lineTo(wCuff / 2 - 6, cuffY + 8);
    ctx.bezierCurveTo(wCuff / 2 + 4, cuffY - 80,
                      wTop / 2 + 6, topY + (cuffY - topY) * 0.55, wTop / 2, topY);
    ctx.closePath();
    ctx.fill();

    // shin bone highlight
    ctx.save();
    ctx.filter = "blur(7px)";
    ctx.strokeStyle = "rgba(240,208,176,0.38)";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(-wTop * 0.05, topY + 10);
    ctx.quadraticCurveTo(-wTop * 0.02, (topY + cuffY) / 2, 0, cuffY - 40);
    ctx.stroke();
    ctx.restore();

    // ---- ribbed cuff
    const ch = 150;                      // cuff height
    const cw = wCuff + 52;               // cuff wraps wider than the leg
    const cy0 = cuffY - ch;

    ctx.save();
    ctx.beginPath();
    ctx.roundRect(-cw / 2, cy0, cw, ch, [34, 34, 44, 44]);
    const cg = ctx.createLinearGradient(-cw / 2, 0, cw / 2, 0);
    cg.addColorStop(0, "#CFCAC1");
    cg.addColorStop(0.28, "#EFECE7");
    cg.addColorStop(0.55, "#F4F2EE");
    cg.addColorStop(0.8, "#E2DED7");
    cg.addColorStop(1, "#C4BFB5");
    ctx.fillStyle = cg;
    ctx.fill();
    ctx.clip();

    // vertical ribs
    for (let x = -cw / 2 + 6; x < cw / 2; x += 11) {
      ctx.fillStyle = "rgba(150,143,132,0.30)";
      ctx.fillRect(x, cy0, 3.4, ch);
      ctx.fillStyle = "rgba(255,254,250,0.5)";
      ctx.fillRect(x + 3.4, cy0, 2.4, ch);
    }
    // cuff top fold shadow + rolled edge
    ctx.fillStyle = "rgba(120,113,102,0.30)";
    ctx.fillRect(-cw / 2, cy0, cw, 14);
    ctx.fillStyle = "rgba(255,254,250,0.55)";
    ctx.fillRect(-cw / 2, cy0 + 14, cw, 8);
    // skin shadow cast into the cuff opening
    ctx.save();
    ctx.filter = "blur(8px)";
    ctx.fillStyle = "rgba(96,74,54,0.28)";
    ctx.beginPath();
    ctx.ellipse(0, cy0 + 8, wCuff * 0.4, 16, 0, 0, 7);
    ctx.fill();
    ctx.restore();
    ctx.restore();

    // cuff casts a soft shadow onto the sock below it
    ctx.save();
    ctx.filter = "blur(10px)";
    ctx.fillStyle = "rgba(120,112,100,0.30)";
    ctx.beginPath();
    ctx.ellipse(0, cuffY + 16, cw * 0.42, 20, 0, 0, 7);
    ctx.fill();
    ctx.restore();

    ctx.restore();
  }

  /* ================= compose ================= */

  const PI = Math.PI;
  drawSockFoot(312, 1560, PI - 0.09, 806, 356, -1, 0);
  drawSockFoot(746, 1572, PI + 0.09, 792, 350, +1, 0.04);

  ctx.save();                    // legs: local flip so they enter from below
  ctx.translate(0, H);
  ctx.scale(1, -1);
  drawLeg(330, -90, H - 1602, 240, 180, -0.02);
  drawLeg(730, -80, H - 1614, 234, 176, 0.02);
  ctx.restore();

  // one warm glaze over everything so fabric, skin and floor share the light
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = "rgba(255,205,162,0.05)";
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  /* ---- camera finish ---- */

  const lp = ctx.createRadialGradient(W * 0.5, H * 0.56, 60, W * 0.5, H * 0.58, W * 1.05);
  lp.addColorStop(0, "rgba(255,235,206,0.07)");
  lp.addColorStop(0.62, "rgba(255,235,206,0)");
  lp.addColorStop(1, "rgba(14,9,5,0.5)");
  ctx.fillStyle = lp;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = "rgba(28,40,70,0.05)";
  ctx.fillRect(0, 0, W, H);

  const tile = document.createElement("canvas");
  tile.width = tile.height = 128;
  const tctx = tile.getContext("2d");
  const im = tctx.createImageData(128, 128);
  for (let i = 0; i < im.data.length; i += 4) {
    const v = 128 + (rnd() - 0.5) * 60;
    im.data[i] = im.data[i + 1] = im.data[i + 2] = v;
    im.data[i + 3] = 26;
  }
  tctx.putImageData(im, 0, 0);
  ctx.save();
  ctx.globalCompositeOperation = "overlay";
  ctx.fillStyle = ctx.createPattern(tile, "repeat");
  ctx.fillRect(0, 0, W, H);
  ctx.restore();
  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  ctx.fillStyle = ctx.createPattern(tile, "repeat");
  ctx.globalAlpha = 0.5;
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  ctx.save();
  ctx.filter = "blur(0.8px)";
  ctx.drawImage(canvas, 0, 0);
  ctx.restore();
}
