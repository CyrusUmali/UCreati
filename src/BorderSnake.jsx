import { useEffect, useRef } from "react";

function BorderSnake({
  segments = 9,
  inset = 10,
  spacing = 24,
  speed = 0.8,
  baseSize = 16,
  color = "#3B6D11",
  zIndex = 350,
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
      seg.style.position = "absolute";
      seg.style.top = "0";
      seg.style.left = "0";
      seg.style.width = size + "px";
      seg.style.height = size + "px";
      seg.style.background = color;
      seg.style.borderRadius = "35%";
      seg.style.boxShadow = "0 4px 10px -4px rgba(31,48,40,0.3)";
      seg.style.opacity = Math.max(0.08, 1 - i * 0.105);
      seg.style.pointerEvents = "none";
      seg.style.willChange = "transform";
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
      const w = window.innerWidth;
      const h = window.innerHeight;
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
  }, [segments, inset, spacing, speed, baseSize, color]);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex }}
    />
  );
}

export { BorderSnake };

export default function BorderSnakeDemo() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{ background: "#FAFAF8", color: "#1F3028" }}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      <BorderSnake
        segments={isMobile ? 5 : 9}
        speed={isMobile ? 0.4 : 0.8}
        baseSize={isMobile ? 9 : 16}
        inset={isMobile ? 6 : 10}
        color={isMobile ? "rgba(59, 109, 17, 0.55)" : "#3B6D11"}
      />

      <div className="text-center px-6 max-w-md">
        <p
          style={{ fontFamily: "monospace", color: "#639922", letterSpacing: "0.2em" }}
          className="text-xs uppercase mb-4"
        >
          Border Snake
        </p>
        <h1 className="text-4xl font-extrabold mb-3" style={{ color: "#1F3028" }}>
          Drop this anywhere
        </h1>
        <p className="text-sm leading-relaxed" style={{ color: "#3B6D11" }}>
          A self-contained overlay that traces the viewport edge with a trail of
          rounded cubes — straight along each side, turning at the corners.
          Import <code>BorderSnake</code> and render it once near the root of your app.
        </p>
      </div>
    </div>
  );
}