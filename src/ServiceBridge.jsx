import { useEffect, useRef } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

/* ── inline styles scoped to this component only ── */
const S = {
  section: {
    position: "relative",
    background: "#3b6d11",
    padding: "4rem 3.5rem",
    overflow: "hidden",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
    flexWrap: "wrap",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    maxWidth: "520px",
  },
  eyebrow: {
    fontFamily: "'Space Mono', monospace",
    fontSize: "9px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(192,221,151,0.65)",
  },
  heading: {
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: 800,
    color: "#EAF3DE",
    lineHeight: 1.2,
    letterSpacing: "-0.025em",
    margin: 0,
  },
  sub: {
    fontSize: "13.5px",
    fontWeight: 300,
    color: "rgba(192,221,151,0.8)",
    lineHeight: 1.7,
    margin: 0,
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "13px 26px",
    background: "#EAF3DE",
    color: "#2C4A1E",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "13px",
    textDecoration: "none",
    letterSpacing: "-0.01em",
    flexShrink: 0,
    transition: "background 0.2s, transform 0.2s",
    cursor: "pointer",
    border: "none",
  },
};

// Same rounded-diamond ("squircle") path used for the works-divider
// accents — fill layer + a slightly larger stroke layer, both centred
// in a shared viewBox so either can be scaled freely via width/height.
const DIAMOND_FILL_D =
  "M197,376L123,302c-11-11-11-29,0-40L197,188c11-11,29-11,40,0L311,262c11,11,11,29,0,40L237,376C226,387,208,387,197,376z";
const DIAMOND_OUTLINE_D =
  "M201,388L127,314c-11-11-11-29,0-40L201,200c11-11,29-11,40,0L315,274c11,11,11,29,0,40L241,388C230,399,212,399,201,388z";

// groupClass drives the float (anim-diamond-group-*), fillClass the
// shimmer (anim-fill-pulse-*), outlineClass the line pulse (anim-outline-*)
// — all defined once in index.css.
function DiamondAccent({ style, fill, stroke, groupClass, fillClass, outlineClass }) {
  return (
    <svg viewBox="115 180 210 210" style={style} className={groupClass}>
      <path fill={fill} className={fillClass} d={DIAMOND_FILL_D} />
      <path
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        className={outlineClass}
        d={DIAMOND_OUTLINE_D}
      />
    </svg>
  );
}

export default function ServiceBridge() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div style={S.section}>
      {/* diamond accents — reuse the squircle path + shared float/pulse
          animation classes from index.css */}
      <DiamondAccent
        style={{
          position: "absolute",
          top: "-60px",
          right: "-50px",
          width: "200px",
          height: "200px",
          transform: "rotate(20deg)",
          pointerEvents: "none",
        }}
        fill="rgba(255,255,255,0.14)"
        stroke="rgba(255,255,255,0.4)"
        groupClass="anim-diamond-group-1"
        fillClass="anim-fill-pulse-2"
        outlineClass="anim-outline-2"
      />
      <DiamondAccent
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-40px",
          width: "140px",
          height: "140px",
          transform: "rotate(-12deg)",
          pointerEvents: "none",
        }}
        fill="rgba(192,221,151,0.22)"
        stroke="rgba(192,221,151,0.45)"
        groupClass="anim-diamond-group-2"
        fillClass="anim-fill-pulse-1"
        outlineClass="anim-outline-1"
      />

      <div style={S.inner} className="reveal" ref={ref}>
        <div style={S.left}>
          <span style={S.eyebrow}>What I bring</span>
          <h2 style={S.heading}>I build things end-to-end.</h2>
          <p style={S.sub}>
            From Figma to deployed — no handoff needed.
            One developer, full ownership, zero friction.
          </p>
        </div>

        {/* <a
          href="#services"
          style={S.cta}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#fff";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#EAF3DE";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          See my services
          <IconArrowNarrowRight size={14} />
        </a> */}
      </div>
    </div>
  );
}