/* Paints the scanner viewfinder: two bare feet seen from above on an oak floor,
   photographic enough to read as a camera frame at Instagram size. Pure canvas,
   seeded PRNG — same pixels every build. Canvas is 1056 x 2312. */

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

  /* ================= foot geometry =================
     Local coords: origin at heel-center, +v down toward the toes.
     Authored for the LEFT foot (inner edge / big toe on +u = screen-right);
     mir=-1 mirrors for the right foot. fw is FULL ball width; u is a fraction
     of fw/2. fl is heel -> toe-base length; toes extend past it. */

  function silhouette(fl, fw, mir, jit) {
    const P = [
      [0.00, -0.040],
      [0.32, -0.018], [0.47, 0.09], [0.55, 0.21],          // inner heel
      [0.50, 0.36], [0.52, 0.52],                          // arch cut
      [0.70, 0.66], [0.94, 0.78], [1.00, 0.88], [0.92, 0.965], // big-toe ball
      [0.50, 1.000], [0.00, 0.995], [-0.50, 0.965],        // toe-base line
      [-0.86, 0.905], [-1.00, 0.80], [-0.94, 0.675],       // pinky ball
      [-0.80, 0.50], [-0.72, 0.32],                        // outer waist
      [-0.52, 0.14], [-0.34, -0.016],
    ];
    return P.map(([u, v], i) => [
      mir * (u + (jit ? (jitterTable[(i + jit) % jitterTable.length] * 0.030) : 0)) * fw * 0.5,
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

  // Short stubby toes that OVERLAP the toe-base line (start inside the foot).
  function toeSet(fl, fw, mir) {
    const T = [
      { u:  0.58, v: 0.960, l: 0.132, w: 0.50, nail: 0.55 },
      { u:  0.26, v: 0.985, l: 0.098, w: 0.29, nail: 0.36 },
      { u:  0.00, v: 0.985, l: 0.088, w: 0.27, nail: 0 },
      { u: -0.25, v: 0.965, l: 0.076, w: 0.24, nail: 0 },
      { u: -0.47, v: 0.938, l: 0.060, w: 0.22, nail: 0 },
    ];
    return T.map(t => ({
      ...t,
      x: mir * t.u * fw * 0.5,
      y: t.v * fl,                    // where the toe emerges from the foot
      l: t.l * fl,                    // visible length past that point
      w: t.w * fw * 0.5 * 0.5,        // half-width of the toe
    }));
  }

  const jitterTable = Array.from({ length: 24 }, () => rnd() * 2 - 1);

  function drawFoot(cx, cy, ang, fl, fw, mir, exposure) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(ang);

    const sil = silhouette(fl, fw, mir, mir > 0 ? 3 : 11);
    const toes = toeSet(fl, fw, mir);
    const tilt = t => mir * t.u * 0.22;      // toes fan slightly

    const toePath = t => {
      // capsule from just inside the foot to the tip
      ctx.moveTo(t.x + t.w, t.y + t.l * 0.25);
      ctx.ellipse(t.x, t.y + t.l * 0.25, t.w, t.l * 0.75, tilt(t), 0, 7);
    };

    // ---- contact shadow
    ctx.save();
    ctx.filter = "blur(20px)";
    ctx.fillStyle = "rgba(40,24,14,0.5)";
    smoothPath(sil.map(([u, v]) => [u * 1.12, v * 1.012 + 10]));
    ctx.fill();
    for (const t of toes) {
      ctx.beginPath();
      ctx.ellipse(t.x * 1.04, t.y + t.l * 0.45 + 8, t.w * 1.5, t.l * 0.75, 0, 0, 7);
      ctx.fill();
    }
    ctx.restore();

    // ---- base skin
    const skinBase = ctx.createLinearGradient(0, 0, 0, fl * 1.15);
    skinBase.addColorStop(0, "#B98F6F");
    skinBase.addColorStop(0.35, "#C69C7B");
    skinBase.addColorStop(0.8, "#CEA283");
    skinBase.addColorStop(1, "#C19272");
    ctx.fillStyle = skinBase;
    smoothPath(sil); ctx.fill();
    for (const t of toes) { ctx.beginPath(); toePath(t); ctx.fill(); }

    // ---- clip for shading
    ctx.save();
    smoothPath(sil);
    for (const t of toes) toePath(t);
    ctx.clip();

    // skin mottle: irregular tone so it doesn't read as plastic
    for (let i = 0; i < 46; i++) {
      const mx = (rnd() * 2 - 1) * fw * 0.6, my = rnd() * fl * 1.05;
      const mr = 14 + rnd() * 44;
      ctx.fillStyle = rnd() < 0.5
        ? `rgba(178,120,88,${0.02 + rnd() * 0.03})`
        : `rgba(238,206,174,${0.02 + rnd() * 0.03})`;
      ctx.beginPath(); ctx.ellipse(mx, my, mr, mr * (0.5 + rnd()), rnd() * 3, 0, 7); ctx.fill();
    }

    // dorsal ridge light: instep -> big toe
    const ridge = ctx.createRadialGradient(
      mir * fw * 0.10, fl * 0.44, 10, mir * fw * 0.10, fl * 0.47, fl * 0.58);
    ridge.addColorStop(0, "rgba(240,205,170,0.40)");
    ridge.addColorStop(0.55, "rgba(240,205,170,0.15)");
    ridge.addColorStop(1, "rgba(240,205,170,0)");
    ctx.fillStyle = ridge;
    ctx.fillRect(-fw, -fl * 0.1, fw * 2, fl * 1.3);

    // lateral falloff
    const fall = ctx.createLinearGradient(mir * fw * 0.5, 0, mir * -fw * 0.55, 0);
    fall.addColorStop(0, "rgba(126,84,58,0)");
    fall.addColorStop(0.6, "rgba(126,84,58,0.07)");
    fall.addColorStop(1, "rgba(114,74,50,0.30)");
    ctx.fillStyle = fall;
    ctx.fillRect(-fw, -fl * 0.1, fw * 2, fl * 1.3);

    // edge occlusion
    ctx.save();
    ctx.filter = "blur(8px)";
    ctx.strokeStyle = "rgba(118,76,50,0.42)";
    ctx.lineWidth = 10;
    smoothPath(sil); ctx.stroke();
    for (const t of toes) { ctx.beginPath(); toePath(t); ctx.stroke(); }
    ctx.restore();

    // extensor tendons to toes 1-4
    ctx.save();
    ctx.filter = "blur(3px)";
    for (let i = 0; i < 4; i++) {
      const t = toes[i];
      ctx.strokeStyle = `rgba(234,199,164,${0.14 - i * 0.026})`;
      ctx.lineWidth = 6.5 - i * 1.1;
      ctx.beginPath();
      ctx.moveTo(mir * fw * 0.02, fl * 0.18);
      ctx.quadraticCurveTo(t.x * 0.5, fl * 0.64, t.x * 0.95, t.y);
      ctx.stroke();
    }
    ctx.restore();

    // shadow wedges between toe bases
    ctx.save();
    ctx.filter = "blur(3px)";
    ctx.fillStyle = "rgba(104,64,42,0.35)";
    for (let i = 0; i < toes.length - 1; i++) {
      const a = toes[i], b = toes[i + 1];
      const gx = (a.x + b.x) / 2, gy = (a.y + b.y) / 2 + Math.min(a.l, b.l) * 0.12;
      ctx.beginPath();
      ctx.ellipse(gx, gy, 5, Math.min(a.l, b.l) * 0.34, 0, 0, 7);
      ctx.fill();
    }
    ctx.restore();

    // per-toe modelling: separation crescent, knuckle, warm tip
    for (const t of toes) {
      ctx.save();
      ctx.filter = "blur(2px)";
      ctx.strokeStyle = "rgba(108,68,46,0.35)";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(t.x, t.y + t.l * 0.25, t.w * 1.0, t.l * 0.73, tilt(t), Math.PI * 0.75, Math.PI * 1.6);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = "rgba(150,100,70,0.16)";
      ctx.beginPath();
      ctx.ellipse(t.x, t.y + t.l * 0.12, t.w * 0.6, t.l * 0.16, 0, 0, 7);
      ctx.fill();
      ctx.save();
      ctx.filter = "blur(5px)";
      ctx.fillStyle = "rgba(186,102,76,0.20)";
      ctx.beginPath();
      ctx.ellipse(t.x, t.y + t.l * 0.78, t.w * 0.8, t.l * 0.30, 0, 0, 7);
      ctx.fill();
      ctx.restore();
    }

    // nails: big + second toe, near the tip
    for (const t of toes.filter(t => t.nail)) {
      const nw = t.w * t.nail, nl = t.l * 0.30, ny = t.y + t.l * 0.66;
      ctx.fillStyle = "rgba(233,203,176,0.75)";
      ctx.beginPath(); ctx.ellipse(t.x, ny, nw, nl, tilt(t), 0, 7); ctx.fill();
      ctx.strokeStyle = "rgba(156,108,80,0.45)";
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.fillStyle = "rgba(255,246,234,0.45)";
      ctx.beginPath();
      ctx.ellipse(t.x - nw * 0.25 * mir, ny - nl * 0.3, nw * 0.34, nl * 0.3, -0.3 * mir, 0, 7);
      ctx.fill();
    }

    if (exposure) { ctx.fillStyle = `rgba(56,36,22,${exposure})`; ctx.fillRect(-fw, -fl * 0.2, fw * 2, fl * 1.5); }

    ctx.restore();   // unclip
    ctx.restore();   // untransform
  }

  /* ---- shin/ankle, drawn over the hindfoot ---- */

  function drawShin(cx, topY, ankleY, wTop, wAnkle, lean) {
    ctx.save();
    ctx.translate(cx, 0);
    ctx.rotate(lean);
    const lg = ctx.createLinearGradient(-wTop / 2, 0, wTop / 2, 0);
    lg.addColorStop(0, "#8D6244");
    lg.addColorStop(0.2, "#B08262");
    lg.addColorStop(0.46, "#C99E7D");
    lg.addColorStop(0.72, "#B8896A");
    lg.addColorStop(1, "#7F573C");
    ctx.fillStyle = lg;
    ctx.beginPath();
    ctx.moveTo(-wTop / 2, topY - 30);
    ctx.bezierCurveTo(-wTop / 2 - 6, topY + (ankleY - topY) * 0.55,
                      -wAnkle / 2 - 10, ankleY - 70, -wAnkle / 2, ankleY);
    ctx.quadraticCurveTo(0, ankleY + 40, wAnkle / 2, ankleY);
    ctx.bezierCurveTo(wAnkle / 2 + 10, ankleY - 70,
                      wTop / 2 + 6, topY + (ankleY - topY) * 0.55, wTop / 2, topY - 30);
    ctx.closePath();
    ctx.fill();

    // ankle crease shadow blending into the foot
    ctx.save();
    ctx.filter = "blur(9px)";
    ctx.fillStyle = "rgba(110,70,46,0.4)";
    ctx.beginPath();
    ctx.ellipse(0, ankleY + 26, wAnkle * 0.62, 24, 0, 0, 7);
    ctx.fill();
    ctx.restore();

    // shin bone highlight
    ctx.save();
    ctx.filter = "blur(7px)";
    ctx.strokeStyle = "rgba(240,208,176,0.38)";
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(-wTop * 0.05, topY);
    ctx.quadraticCurveTo(-wTop * 0.02, (topY + ankleY) / 2, 0, ankleY - 34);
    ctx.stroke();
    ctx.restore();

    // malleolus: soft interior bumps
    for (const sx of [-1, 1]) {
      ctx.save();
      ctx.filter = "blur(6px)";
      ctx.fillStyle = "rgba(238,206,176,0.28)";
      ctx.beginPath();
      ctx.ellipse(sx * wAnkle * 0.30, ankleY - 34, 18, 24, 0, 0, 7);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
  }

  /* ================= compose ================= */

  drawFoot(300, 826, 0.11, 906, 338, +1, 0);
  drawFoot(756, 838, -0.11, 892, 332, -1, 0.04);

  drawShin(332, -90, 934, 262, 186, 0.02);
  drawShin(726, -80, 944, 256, 182, -0.02);

  // one warm glaze over everything so skin and floor share the light
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = "rgba(255,205,162,0.06)";
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
