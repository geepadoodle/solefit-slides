/* Deterministic timeline. The renderer calls seek(t) once per frame and
   screenshots — no requestAnimationFrame, no wall-clock, so a rebuild is
   byte-for-byte reproducible. */

(() => {
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const outCubic = p => 1 - Math.pow(1 - p, 3);
  const outBack = p => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2);
  };

  const scenes = [...document.querySelectorAll(".scene")];
  let clock = 0;
  const spans = scenes.map(s => {
    const dur = parseFloat(s.dataset.dur);
    const span = { el: s, start: clock, dur };
    clock += dur;
    return span;
  });
  const total = clock;

  function applyEl(el, lt) {
    const t0 = parseFloat(el.dataset.in || "0");
    const dur = parseFloat(el.dataset.dur || "0.44");
    const p = clamp((lt - t0) / dur, 0, 1);
    const anim = el.dataset.anim || "rise";

    switch (anim) {
      case "rise": {
        const e = outCubic(p);
        el.style.opacity = p <= 0 ? 0 : Math.min(1, p / 0.55);
        el.style.transform = `translateY(${(1 - e) * 54}px)`;
        break;
      }
      case "pop": {
        const e = outBack(p);
        el.style.opacity = p <= 0 ? 0 : Math.min(1, p / 0.35);
        el.style.transform = `scale(${0.86 + e * 0.14})`;
        break;
      }
      case "fade": {
        el.style.opacity = outCubic(p);
        break;
      }
      case "wipe": {
        const e = outCubic(p);
        el.style.opacity = p <= 0 ? 0 : 1;
        el.style.clipPath = `inset(0 ${(1 - e) * 100}% 0 0)`;
        break;
      }
      case "bar": {
        const e = outCubic(p);
        el.style.width = `${e * parseFloat(el.dataset.w)}%`;
        break;
      }
      case "count": {
        const from = parseFloat(el.dataset.from || "0");
        const to = parseFloat(el.dataset.to);
        const dec = parseInt(el.dataset.dec || "0", 10);
        const e = outCubic(p);
        el.textContent = (from + (to - from) * e).toFixed(dec) + (el.dataset.suffix || "");
        break;
      }
    }
  }

  const chrome = [...document.querySelectorAll(".brand, .counter")];

  window.seek = t => {
    const now = clamp(t, 0, total - 0.0001);
    for (const s of spans) {
      const live = now >= s.start && now < s.start + s.dur;
      s.el.classList.toggle("on", live);
      if (!live) continue;

      // The sign-off scene carries its own lockup — two wordmarks is one too many.
      const hide = s.el.dataset.chrome === "off";
      for (const c of chrome) c.style.opacity = hide ? 0 : 1;

      const lt = now - s.start;
      const stage = s.el.querySelector(".stage");
      if (stage) stage.style.transform = `scale(${1 + 0.022 * (lt / s.dur)})`;
      for (const el of s.el.querySelectorAll(".a")) applyEl(el, lt);
    }
    const prog = document.querySelector(".track b");
    if (prog) prog.style.width = `${(now / total) * 100}%`;
  };

  window.TOTAL = total;
  window.seek(0);
})();
