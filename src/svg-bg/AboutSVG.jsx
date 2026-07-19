import styles from "../AboutSection.module.css";

export default function AboutSVG() {
  return (
    <svg
      className={styles.bgSvg}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="500" y1="0" x2="500" y2="800" stroke="var(--primary)" strokeWidth="0.5" opacity="0.06" className="anim-grid-v" />
      <line x1="0" y1="400" x2="1200" y2="400" stroke="var(--primary)" strokeWidth="0.5" opacity="0.06" className="anim-grid-h" />

      {/* Increased translation from 120 to 200 to move everything further down */}
      <g transform="translate(80, 320)">
        <g className="anim-diamond-group-1" style={{ transformOrigin: "1050px 80px" }}>
          <path fill="var(--surface)" d="M1050,200L920,70c-18-18-18-46,0-64L1050,-60c18-18,46-18,64,0L1244,70c18,18,18,46,0,64L1114,200C1096,218,1068,218,1050,200z" />
          <path fill="none" stroke="var(--primary)" strokeWidth="1.2" className="anim-fill-pulse-1" d="M1046,214L916,84c-18-18-18-46,0-64L1046,-74c18-18,46-18,64,0L1240,56c18,18,18,46,0,64L1110,214C1092,232,1064,232,1046,214z" />
        </g>
        <g className="anim-diamond-group-2" style={{ transformOrigin: "970px 210px" }}>
          <path fill="var(--primary)" className="anim-fill-pulse-2" d="M970,290L910,230c-16-16-16-42,0-58L970,112c16-16,42-16,58,0L1088,170c16,16,16,42,0,58L1028,290C1012,306,986,306,970,290z" />
          <path fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.6" d="M966,308L906,248c-16-16-16-42,0-58L966,130c16-16,42-16,58,0L1084,188c16,16,16,42,0,58L1024,308C1008,324,982,324,966,308z" />
        </g>
        <g className="anim-diamond-group-3" style={{ transformOrigin: "1130px 320px" }}>
          <path fill="var(--primary-p)" opacity="0.85" d="M1130,380L1094,344c-14-14-14-36,0-50L1130,258c14-14,36-14,50,0L1216,294c14,14,14,36,0,50L1180,380C1166,394,1144,394,1130,380z" />
          <path fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.55" d="M1127,398L1091,362c-14-14-14-36,0-50L1127,276c14-14,36-14,50,0L1213,312c14,14,14,36,0,50L1177,398C1163,412,1141,412,1127,398z" />
        </g>
      </g>

      {/* <polygon fill="var(--accent)" className="anim-accent-triangle" points="1058,342 1054,368 1038,352" /> */}

      <g transform="translate(0, -300)">
        <g className="anim-diamond-group-4" style={{ transformOrigin: "76px 588px" }}>
          <path fill="var(--surface)" d="M-54,556L77,426c18-18,46-18,64,0L207,556c18,18,18,46,0,64L77,750c-18,18,-46,18,-64,0L-54,620C-72,602,-72,574,-54,556z" />
          <path fill="none" stroke="var(--primary)" strokeWidth="1.2" className="anim-fill-pulse-3" d="M-68,552L63,422c18-18,46-18,64,0L221,552c18,18,18,46,0,64L91,746c-18,18,-46,18,-64,0L-68,616C-86,598,-86,570,-68,552z" />
        </g>
        <g className="anim-diamond-group-5" style={{ transformOrigin: "170px 500px" }}>
          <path fill="var(--primary-p)" opacity="0.8" d="M170,558L138,526c-12-12-12-31,0-43L170,451c12-12,31-12,43,0L255,483c12,12,12,31,0,43L213,558C201,570,182,570,170,558z" />
          <path fill="none" stroke="var(--primary)" strokeWidth="1" opacity="0.6" d="M167,576L135,544c-12-12-12-31,0-43L167,469c12-12,31-12,43,0L252,501c12,12,12,31,0,43L210,576C198,588,179,588,167,576z" />
        </g>
        <g className="anim-diamond-group-2" style={{ transformOrigin: "279px 418px" }}>
          <path fill="var(--primary)" className="anim-fill-pulse-1" opacity="0.7" d="M279,478L249,448c-10-10-10-26,0-36L279,382c10-10,26-10,36,0L351,412c10,10,10,26,0,36L315,478C305,488,289,488,279,478z" />
        </g>
      </g>
      {/* Trailing ellipses - adjusted positions to match the moved diamonds */}
      <ellipse cx="1160" cy="320" rx="160" ry="160" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "1160px 320px", animation: "trailFade 6s ease-out 1s infinite" }} />
      <ellipse cx="1160" cy="520" rx="160" ry="160" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "1160px 520px", animation: "trailFade 6s ease-out 4s infinite" }} />
      <ellipse cx="0" cy="300" rx="140" ry="140" fill="none" stroke="var(--primary)" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "80px 300px", animation: "trailFade 7s ease-out 2.5s infinite" }} />
    </svg>
  );
}