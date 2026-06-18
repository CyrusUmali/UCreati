import styles from "../AboutSection.module.css";

export default function AboutSVGMobile() {
  return (
    <svg
      className={styles.bgSvgMobile}
      viewBox="0 0 390 700"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>{`
        .anim-pulse-1 { animation: mbPulse 4s ease-in-out infinite; }
        .anim-pulse-2 { animation: mbPulse 4s ease-in-out 1.5s infinite; }
        .anim-pulse-3 { animation: mbPulse 4s ease-in-out 2.5s infinite; }
        .anim-float-1 { animation: mbFloatY 6s ease-in-out infinite; }
        .anim-float-2 { animation: mbFloatY 6s ease-in-out 2s infinite; }
        .anim-float-3 { animation: mbFloatY 7s ease-in-out 1s infinite; }
        .anim-trail-1 { animation: mbTrailFade 6s ease-out 1s infinite; }
        .anim-trail-2 { animation: mbTrailFade 6s ease-out 4s infinite; }
        @keyframes mbPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes mbFloatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes mbTrailFade { 0%{opacity:0} 60%{opacity:0.07} 100%{opacity:0} }
      `}</style>


      {/* Trailing ellipse bottom-left */}
      <ellipse cx="50" cy="590" rx="90" ry="90" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0" className="anim-trail-2" />
    </svg>
  );
}