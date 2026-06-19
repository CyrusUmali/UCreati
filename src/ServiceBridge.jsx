import { useEffect, useRef, useState } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import "./ServiceBridge.css";

const t = {
  surface:  "#f0f3ee",
  border:   "#c8d4c8",
  primary:  "#3b6d11",
  primaryD: "#27500a",
};

// Same rounded-diamond ("squircle") path used in the works-divider accents.
const DIAMOND_FILL_D =
  "M197,376L123,302c-11-11-11-29,0-40L197,188c11-11,29-11,40,0L311,262c11,11,11,29,0,40L237,376C226,387,208,387,197,376z";
const DIAMOND_OUTLINE_D =
  "M201,388L127,314c-11-11-11-29,0-40L201,200c11-11,29-11,40,0L315,274c11,11,11,29,0,40L241,388C230,399,212,399,201,388z";

function DiamondAccent({ style, fill, stroke, groupClass, fillClass, outlineClass }) {
  return (
    <svg viewBox="115 180 250 250" style={style} className={groupClass}>
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
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sb-wrap ${inView ? "is-in-view" : ""}`}>
      <div ref={sectionRef} className="sb-section">

        <svg
          className="sb-bg-svg"
          viewBox="0 0 1100 280"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="450" y1="0" x2="450" y2="280" stroke={t.primary} strokeWidth="0.5" opacity="0.07" />
          <line x1="0" y1="140" x2="1100" y2="140" stroke={t.primary} strokeWidth="0.5" opacity="0.07" />

          <ellipse cx="980" cy="40" rx="120" ry="120"
            fill="none" stroke={t.primary} strokeWidth="0.5" opacity="0"
            style={{ transformOrigin: "980px 40px", animation: "trailFade 6s ease-out 2s infinite" }} />
        </svg>

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
          fill={t.surface}
          stroke={t.primary}
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
          fill={t.border}
          stroke={t.primary}
          groupClass="anim-diamond-group-2"
          fillClass="anim-fill-pulse-1"
          outlineClass="anim-outline-1"
        />
        <DiamondAccent
          style={{
            position: "absolute",
            top: "50%",
            left: "62%",
            width: "70px",
            height: "70px",
            transform: "translateY(-50%) rotate(8deg)",
            pointerEvents: "none",
          }}
          fill={t.primary}
          stroke={t.primary}
          groupClass="anim-diamond-group-5"
          fillClass="anim-fill-pulse-3"
          outlineClass="anim-outline-1"
        />

        <div className="sb-rule-left" />

        <div className="sb-inner">
          <div className="sb-left">
            <div className="sb-eyebrow">
              <span className="sb-eline" />
              <span className="sb-edot" />
              What I Bring
              <span className="sb-eline" />
            </div>

            <h2 className="sb-heading">
              <span className="sb-heading-wipe">I build things</span>{" "}
              <em className="sb-heading-outline">
                <span className="sb-heading-wipe sb-heading-wipe-2">end-to-end.</span>
              </em>
            </h2>

            <p className="sb-sub">
              From Figma to deployed — no handoff needed.
              One developer, <strong>full ownership</strong>, zero friction.
            </p>
          </div>

          <a href="#services" className="sb-cta">
            See my services
            <IconArrowNarrowRight size={14} />
          </a>
        </div>

        <div className="sb-bottom-bar" />
        <div className="sb-bottom-diamond" />
      </div>
    </div>
  );
}