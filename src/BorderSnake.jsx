// BorderSnake.jsx — scoped version
import { useEffect, useRef } from "react";

function BorderSnake({
  segments = 9,
  inset = 10,
  spacing = 24,
  speed = 0.8,
  baseSize = 16,
  color = "#3B6D11",
  zIndex = 350,
  containerRef, 
}) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const segs = [];
    for (let i = 0; i < segments; i++) {
      const seg = document.createElement("div");
      const size = Math.max(5, baseSize - i * 1.4);
      seg.style.cssText = `
        position: absolute; top: 0; left: 0;
        width: ${size}px; height: ${size}px;
        background: ${color}; border-radius: 35%;
        box-shadow: 0 4px 10px -4px rgba(31,48,40,0.3);
        opacity: ${Math.max(0.08, 1 - i * 0.105)};
        pointer-events: none; will-change: transform;
      `;
      wrap.appendChild(seg);
      segs.push({ el: seg, size });
    }

    let progress = 0;
    let raf;

    function pointAt(d, w, h) {
      const rw = w - inset * 2;
      const rh = h - inset * 2;
      const P = 2 * (rw + rh);
      d = ((d % P) + P) % P;
      if (d < rw) return { x: inset + d, y: inset };
      d -= rw;
      if (d < rh) return { x: w - inset, y: inset + d };
      d -= rh;
      if (d < rw) return { x: w - inset - d, y: h - inset };
      d -= rw;
      return { x: inset, y: h - inset - d };
    }

    function step() {
      // 👇 measure the hero, not the window
      const target = containerRef?.current ?? wrap.parentElement;
      const w = target.offsetWidth;
      const h = target.offsetHeight;

      progress += speed;
      for (let i = 0; i < segs.length; i++) {
        const p = pointAt(progress - i * spacing, w, h);
        const size = segs[i].size;
        segs[i].el.style.transform = `translate(${p.x - size / 2}px, ${p.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      segs.forEach((s) => s.el.remove());
    };
  }, [segments, inset, spacing, speed, baseSize, color, containerRef]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{
        position: "absolute", // 👈 was "fixed"
        inset: 0,
        pointerEvents: "none",
        zIndex,
      }}
    />
  );
}

export { BorderSnake };