import styles from "../HeroSection.module.css";

export default function HeroSVG() {
  return (
    <svg
      className={styles.bgSvg}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="600" y1="0" x2="600" y2="900" stroke="#3B6D11" strokeWidth="0.5" opacity="0.07" className="anim-grid-v" />
      <line x1="0" y1="450" x2="1440" y2="450" stroke="#3B6D11" strokeWidth="0.5" opacity="0.07" className="anim-grid-h" />

      <g className="anim-diamond-group-1" style={{ transformOrigin: "33px 119px" }}>
        <path fill="#F0F3EE" d="M33-102L-202,133c-20,20-20,52,0,72L33,340c20,20,52,20,72,0L340,105c20-20,20-52,0-72L105-102C85-122,53-122,33-102z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1.5" className="anim-outline-1" d="M40-95L-195,140c-20,20-20,52,0,72L40,347c20,20,52,20,72,0L347,112c20-20,20-52,0-72L112-95C92-115,60-115,40-95z" />
      </g>
      <g className="anim-diamond-group-2" style={{ transformOrigin: "299px 14px" }}>
        <path fill="#3B6D11" className="anim-fill-pulse-1" d="M270,45L210,15c-16-16-16-42,0-58L270-103c16-16,42-16,58,0L388,15c16,16,16,42,0,58L328,131C312,147,286,147,270,131z" transform="translate(0,-30)" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" className="anim-outline-2" d="M274,52L214,22c-16-16-16-42,0-58L274-96c16-16,42-16,58,0L392,22c16,16,16,42,0,58L332,138C316,154,290,154,274,138z" transform="translate(0,-30)" />
      </g>
      <g className="anim-diamond-group-3" style={{ transformOrigin: "-8px 294px" }}>
        <path fill="#C8D4C8" opacity="0.92" d="M-8,390L-72,326c-18-18-18-47,0-65L-8,197c18-18,47-18,65,0L121,261c18,18,18,47,0,65L57,390C39,408,10,408,-8,390z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.7" d="M-4,398L-68,334c-18-18-18-47,0-65L-4,205c18-18,47-18,65,0L125,269c18,18,18,47,0,65L61,398C43,416,14,416,-4,398z" />
      </g>
      <g className="anim-diamond-group-4" style={{ transformOrigin: "237px 282px" }}>
        <path fill="#C0DD97" opacity="0.85" d="M197,376L123,302c-11-11-11-29,0-40L197,188c11-11,29-11,40,0L311,262c11,11,11,29,0,40L237,376C226,387,208,387,197,376z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.65" d="M201,388L127,314c-11-11-11-29,0-40L201,200c11-11,29-11,40,0L315,274c11,11,11,29,0,40L241,388C230,399,212,399,201,388z" />
      </g>
      <g className="anim-diamond-group-5" style={{ transformOrigin: "98px 480px" }}>
        <path fill="#3B6D11" className="anim-fill-pulse-2" d="M98,570L38,510c-16-16-16-43,0-59L98,391c16-16,43-16,59,0L217,451c16,16,16,43,0,59L157,570C141,586,114,586,98,570z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.65" d="M102,590L42,530c-16-16-16-43,0-59L102,411c16-16,43-16,59,0L221,471c16,16,16,43,0,59L161,590C145,606,118,606,102,590z" />
      </g>
      <g className="anim-diamond-mini" style={{ transformOrigin: "315px 229px" }}>
        <path fill="#C8D4C8" opacity="0.8" d="M315,271L289,245c-8-8-8-21,0-29L315,190c8-8,21-8,29,0L370,216c8,8,8,21,0,29L344,271C336,279,323,279,315,271z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.7" d="M317,288L291,262c-8-8-8-21,0-29L317,207c8-8,21-8,29,0L372,233c8,8,8,21,0,29L346,288C338,296,325,296,317,288z" />
      </g>
      <path fill="#3B6D11" opacity="0.7" className="anim-diamond-mini" d="M323,360l-8-8c-4-4-4-11,0-15l8-8c4-4,11-4,15,0l8,8c4,4,4,11,0,15l-8,8C334,364,327,364,323,360z" />
 
      <g className="anim-diamond-group-2" style={{ transformOrigin: "1140px 544px" }}>
        <path fill="#F0F3EE" d="M1140,760L960,580c-20-20-20-52,0-72L1140,328c20-20,52-20,72,0L1392,508c20,20,20,52,0,72L1212,760C1192,780,1160,780,1140,760z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1.5" className="anim-outline-1" d="M1134,774L954,594c-20-20-20-52,0-72L1134,342c20-20,52-20,72,0L1386,522c20,20,20,52,0,72L1206,774C1186,794,1154,794,1134,774z" />
      </g>
      <g className="anim-diamond-group-3" style={{ transformOrigin: "1115px 359px" }}>
        <path fill="#3B6D11" className="anim-fill-pulse-3" d="M1115,468L1038,391c-18-18-18-47,0-65L1115,249c18-18,47-18,65,0L1257,326c18,18,18,47,0,65L1180,468C1162,486,1133,486,1115,468z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.7" d="M1111,488L1034,411c-18-18-18-47,0-65L1111,269c18-18,47-18,65,0L1253,346c18,18,18,47,0,65L1176,488C1158,506,1129,506,1111,488z" />
      </g>
      <g className="anim-diamond-group-6" style={{ transformOrigin: "888px 392px" }}>
        <path fill="#C0DD97" opacity="0.82" d="M888,454L848,414c-12-12-12-32,0-44L888,330c12-12,32-12,44,0L972,370c12,12,12,32,0,44L932,454C920,466,900,466,888,454z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.65" d="M884,472L844,432c-12-12-12-32,0-44L884,348c12-12,32-12,44,0L968,388c12,12,12,32,0,44L928,472C916,484,896,484,884,472z" />
      </g>
      <g className="anim-diamond-group-4" style={{ transformOrigin: "882px 578px" }}>
        <path fill="#C8D4C8" opacity="0.82" d="M882,669L814,601c-18-18-18-47,0-65L882,468c18-18,47-18,65,0L1015,535c18,18,18,47,0,65L947,669C929,687,900,687,882,669z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.6" d="M878,685L810,617c-18-18-18-47,0-65L878,484c18-18,47-18,65,0L1011,551c18,18,18,47,0,65L943,685C925,703,896,703,878,685z" />
      </g>

      
      <g transform="translate(30, -50)">
  <g className="anim-diamond-group-2" style={{ transformOrigin: "1282px 735px" }}>
    {/* Fill with pulse animation */}
    <path fill="#3B6D11" className="anim-fill-pulse-1" d="M1282,820L1226,764c-16-16-16-42,0-58L1282,650c16-16,42-16,58,0L1396,706c16,16,16,42,0,58L1340,820C1324,836,1298,836,1282,820z" />
    
    {/* Outline */}
    <path fill="none" stroke="#3B6D11" strokeWidth="1" className="anim-outline-2" d="M1276,834L1220,778c-16-16-16-42,0-58L1276,664c16-16,42-16,58,0L1390,720c16,16,16,42,0,58L1334,834C1318,850,1292,850,1276,834z" />
  </g>
</g>



      <g className="anim-diamond-mini" style={{ transformOrigin: "998px 425px" }}>
        <path fill="#C8D4C8" opacity="0.88" d="M998,465L972,439c-8-8-8-21,0-29L998,384c8-8,21-8,29,0L1053,410c8,8,8,21,0,29L1027,465C1019,473,1006,473,998,465z" />
      </g>
      <g className="anim-diamond-group-5" style={{ transformOrigin: "1129px 217px" }}>
        <path fill="#C0DD97" opacity="0.78" d="M1129,275L1096,242c-14-14-14-37,0-51L1129,158c14-14,37-14,51,0L1213,191c14,14,14,37,0,51L1180,275C1166,289,1143,289,1129,275z" />
        <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.65" d="M1126,293L1093,260c-14-14-14-37,0-51L1126,176c14-14,37-14,51,0L1210,209c14,14,14,37,0,51L1177,293C1163,307,1140,307,1126,293z" />
      </g>
      <polygon fill="#FF4C3E" className="anim-accent-triangle" points="1033,587 1029,620 1010,600" />
      <ellipse cx="76" cy="119" rx="240" ry="240" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "76px 119px", animation: "trailFade 6s ease-out 1s infinite" }} />
      <ellipse cx="76" cy="119" rx="240" ry="240" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "76px 119px", animation: "trailFade 6s ease-out 3.5s infinite" }} />
      <ellipse cx="1173" cy="544" rx="220" ry="220" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "1173px 544px", animation: "trailFade 7s ease-out 2s infinite" }} />
      <ellipse cx="1173" cy="544" rx="220" ry="220" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0" style={{ transformOrigin: "1173px 544px", animation: "trailFade 7s ease-out 5s infinite" }} />
    </svg>
  );
}