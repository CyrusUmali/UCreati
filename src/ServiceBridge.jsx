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
  // subtle rotated diamond accent — matches the portfolio's SVG diamond language
  diamondA: {
    position: "absolute",
    top: "-60px",
    right: "-50px",
    width: "200px",
    height: "200px",
    borderRadius: "36px",
    background: "rgba(255,255,255,0.04)",
    transform: "rotate(20deg)",
    animation: "floatA 9s ease-in-out infinite",
    pointerEvents: "none",
  },
  diamondB: {
    position: "absolute",
    bottom: "-50px",
    left: "-40px",
    width: "140px",
    height: "140px",
    borderRadius: "28px",
    background: "rgba(192,221,151,0.06)",
    transform: "rotate(-12deg)",
    animation: "floatB 11s ease-in-out 1.5s infinite",
    pointerEvents: "none",
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
      {/* diamond accents reuse the portfolio's existing animation keyframes */}
      <div className="d-float-a" style={S.diamondA} />
      <div className="d-float-b" style={S.diamondB} />

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