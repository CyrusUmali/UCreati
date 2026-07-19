export default function WorksSVG() {
    return (
      <svg
        className="works-bg-svg"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          .glh{stroke-dasharray:6 4;animation:gridSlide 10s linear infinite}
          .glv{stroke-dasharray:6 4;animation:gridSlide 14s linear infinite}
          .dg1{animation:floatA 9s ease-in-out infinite;opacity:0.85}
          .dg2{animation:floatB 11s ease-in-out infinite;opacity:0.8}
          .dg3{animation:floatC 7s ease-in-out 1s infinite;opacity:0.8}
          .dg4{animation:floatA 8s ease-in-out 3s infinite;opacity:0.75}
          .dg5{animation:floatB 10s ease-in-out 0.5s infinite;opacity:0.75}
          .fp1{animation:pulseOpacity 6s ease-in-out infinite}
          .fp2{animation:pulseOpacity 5s ease-in-out 2s infinite}
          .fp3{animation:pulseOpacity 7s ease-in-out 1s infinite}
          .at{animation:accentPulse 3s ease-in-out infinite}
          @keyframes gridSlide{from{stroke-dashoffset:60}to{stroke-dashoffset:0}}
          @keyframes floatA{0%,100%{transform:translateY(0) rotate(0deg)}33%{transform:translateY(-14px) rotate(2deg)}66%{transform:translateY(6px) rotate(-1.5deg)}}
          @keyframes floatB{0%,100%{transform:translateY(0) rotate(0deg)}40%{transform:translateY(10px) rotate(-2deg)}80%{transform:translateY(-8px) rotate(1deg)}}
          @keyframes floatC{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
          @keyframes pulseOpacity{0%,100%{opacity:0.35}50%{opacity:0.75}}
          @keyframes accentPulse{0%,100%{opacity:0.35}50%{opacity:0.9}}
          @keyframes trailFade{0%{opacity:0;transform:scale(0.5)}20%{opacity:0.45}100%{opacity:0;transform:scale(1.8)}}
        `}</style>
        {/* Grid lines */}
        <line x1="480" y1="0" x2="480" y2="900" stroke="var(--primary)" strokeWidth="0.5" opacity="0.05" className="glv" />
        <line x1="0" y1="450" x2="1200" y2="450" stroke="var(--primary)" strokeWidth="0.5" opacity="0.05" className="glh" />
        <g transform="translate(50, 180)">
          <g className="dg1" style={{ transformOrigin: "1080px 60px", transform: "translate(40px, 20px)" }}>
            <path fill="var(--surface)" d="M1080,190L940,50c-18-18-18-46,0-64L1080,-70c18-18,46-18,64,0L1284,50c18,18,18,46,0,64L1144,190C1126,208,1098,208,1080,190z" />
            <path fill="none" stroke="var(--primary)" strokeWidth="1.2" className="fp1" d="M1076,206L936,66c-18-18-18-46,0-64L1076,-86c18-18,46-18,64,0L1280,34c18,18,18,46,0,64L1140,206C1122,224,1094,224,1076,206z" />
          </g>
          <g className="dg2" style={{ transformOrigin: "975px 230px", transform: "translate(20px, 0px)" }}>
            <path fill="var(--primary)" className="fp2" d="M975,308L912,245c-16-16-16-42,0-58L975,124c16-16,42-16,58,0L1096,187c16,16,16,42,0,58L1033,308C1017,324,991,324,975,308z" />
            <path fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.5" d="M972,326L909,263c-16-16-16-42,0-58L972,142c16-16,42-16,58,0L1093,205c16,16,16,42,0,58L1030,326C1014,342,988,342,972,326z" />
          </g>
          <g className="dg3" style={{ transformOrigin: "1140px 360px", transform: "translate(30px, -10px)" }}>
            <path fill="var(--primary-p)" opacity="0.8" d="M1140,415L1104,379c-13-13-13-35,0-48L1140,295c13-13,35-13,48,0L1224,331c13,13,13,35,0,48L1188,415C1175,428,1153,428,1140,415z" />
            <path fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.5" d="M1137,434L1101,398c-13-13-13-35,0-48L1137,314c13-13,35-13,48,0L1221,350c13,13,13,35,0,48L1185,434C1172,447,1150,447,1137,434z" />
          </g>
          {/* <polygon fill="var(--accent)" className="at" points="1050,360 1046,386 1030,370" style={{ transform: "translate(60px, -20px)" }} /> */}
        </g>
        <g className="dg4" style={{ transformOrigin: "50px 680px", transform: "translate(-20px, 10px)" }}>
          <path fill="var(--surface)" d="M50,800L-60,690c-16-16-16-42,0-58L50,522c16-16,42-16,58,0L168,580c16,16,16,42,0,58L108,800C92,816,66,816,50,800z" />
          <path fill="none" stroke="var(--primary)" strokeWidth="1.2" className="fp3" d="M46,818L-64,708c-16-16-16-42,0-58L46,540c16-16,42-16,58,0L164,598c16,16,16,42,0,58L104,818C88,834,62,834,46,818z" />
        </g>
        <g className="dg5" style={{ transformOrigin: "175px 540px", transform: "translate(-30px, 20px)" }}>
          <path fill="var(--primary-p)" opacity="0.75" d="M175,596L143,564c-12-12-12-31,0-43L175,489c12-12,31-12,43,0L260,521c12,12,12,31,0,43L218,596C206,608,187,608,175,596z" />
        </g>
        <ellipse cx="1090" cy="230" rx="160" ry="160" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "1090px 130px", animation: "trailFade 6s ease-out 1s infinite", transform: "translate(30px, 10px)" }} />
        <ellipse cx="70" cy="660" rx="130" ry="130" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "70px 660px", animation: "trailFade 7s ease-out 2.5s infinite", transform: "translate(-20px, 10px)" }} />
      </svg>
    );
  }