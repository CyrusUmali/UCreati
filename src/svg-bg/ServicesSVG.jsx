export default function ServicesSVG() {
    return (
      <svg
        className="bg-svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      >
        {/* subtle grid lines */}
        <line x1="480" y1="0" x2="480" y2="800" stroke="#3B6D11" strokeWidth="0.5" opacity="0.06" className="d-grid-v" />
        <line x1="960" y1="0" x2="960" y2="800" stroke="#3B6D11" strokeWidth="0.5" opacity="0.04" className="d-grid-v" />
        <line x1="0" y1="400" x2="1440" y2="400" stroke="#3B6D11" strokeWidth="0.5" opacity="0.06" className="d-grid-h" />
  
        {/* LEFT CLUSTER */}
        <g className="d-float-a" style={{ transformOrigin: "0px 100px" }}>
          <path fill="#F0F3EE" d="M-30,260 L-190,100 c-18-18-18-46,0-64 L-30,-60 c18-18,46-18,64,0 L194,164 c18,18,18,46,0,64 L34,392 C16,410,-12,410,-30,392 Z" opacity="0.9" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1.5" className="d-outline-a"
            d="M-26,272 L-186,112 c-18-18-18-46,0-64 L-26,-48 c18-18,46-18,64,0 L198,176 c18,18,18,46,0,64 L38,404 C20,422,-8,422,-26,404 Z" />
        </g>
  
        <g className="d-float-c" style={{ transformOrigin: "80px 420px" }}>
          <path fill="#3B6D11" className="d-fill-b"
            d="M80,510 L22,452 c-15-15-15-40,0-55 L80,339 c15-15,40-15,55,0 L193,397 c15,15,15,40,0,55 L135,510 C120,525,95,525,80,510 Z" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.55"
            d="M76,526 L18,468 c-15-15-15-40,0-55 L76,355 c15-15,40-15,55,0 L189,413 c15,15,15,40,0,55 L131,526 C116,541,91,541,76,526 Z" />
        </g>
  
        <g className="d-mini" style={{ transformOrigin: "220px 310px" }}>
          <path fill="#C0DD97" opacity="0.8"
            d="M220,356 L194,330 c-8-8-8-21,0-29 L220,275 c8-8,21-8,29,0 L275,301 c8,8,8,21,0,29 L249,356 C241,364,228,364,220,356 Z" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.6"
            d="M218,372 L192,346 c-8-8-8-21,0-29 L218,291 c8-8,21-8,29,0 L273,317 c8,8,8,21,0,29 L247,372 C239,380,226,380,218,372 Z" />
        </g>
  
        <path fill="#3B6D11" opacity="0.65" className="d-mini"
          d="M310,480 L302,472 c-4-4-4-10,0-14 L310,450 c4-4,10-4,14,0 L332,458 c4,4,4,10,0,14 L324,480 C320,484,314,484,310,480 Z" />
  
        {/* RIGHT CLUSTER */}
        <g className="d-float-b" style={{ transformOrigin: "1380px 480px" }}>
          <path fill="#F0F3EE"
            d="M1380,680 L1210,510 c-18-18-18-48,0-66 L1380,274 c18-18,48-18,66,0 L1616,450 c18,18,18,48,0,66 L1446,680 C1428,698,1398,698,1380,680 Z" opacity="0.95" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1.5" className="d-outline-b"
            d="M1374,694 L1204,524 c-18-18-18-48,0-66 L1374,288 c18-18,48-18,66,0 L1610,464 c18,18,18,48,0,66 L1440,694 C1422,712,1392,712,1374,694 Z" />
        </g>
  
        <g className="d-float-e" style={{ transformOrigin: "1160px 220px" }}>
          <path fill="#3B6D11" className="d-fill-c"
            d="M1160,310 L1090,240 c-16-16-16-42,0-58 L1160,112 c16-16,42-16,58,0 L1288,170 c16,16,16,42,0,58 L1218,310 C1202,326,1176,326,1160,310 Z" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.6"
            d="M1156,326 L1086,256 c-16-16-16-42,0-58 L1156,128 c16-16,42-16,58,0 L1284,186 c16,16,16,42,0,58 L1214,326 C1198,342,1172,342,1156,326 Z" />
        </g>
  
        <g className="d-drift" style={{ transformOrigin: "940px 380px" }}>
          <path fill="#C0DD97" opacity="0.75"
            d="M940,450 L896,406 c-12-12-12-32,0-44 L940,318 c12-12,32-12,44,0 L1028,362 c12,12,12,32,0,44 L984,450 C972,462,952,462,940,450 Z" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.55"
            d="M936,466 L892,422 c-12-12-12-32,0-44 L936,334 c12-12,32-12,44,0 L1024,378 c12,12,12,32,0,44 L980,466 C968,478,948,478,936,466 Z" />
        </g>
  
        <g className="d-mini" style={{ transformOrigin: "1070px 560px" }}>
          <path fill="#C8D4C8" opacity="0.82"
            d="M1070,605 L1044,579 c-8-8-8-21,0-29 L1070,524 c8-8,21-8,29,0 L1125,550 c8,8,8,21,0,29 L1099,605 C1091,613,1078,613,1070,605 Z" />
        </g>
  
        <polygon fill="#FF4C3E" className="d-accent" points="1050,530 1046,558 1030,542" />
  
        {/* ripple rings — left */}
        <ellipse cx="0" cy="100" rx="200" ry="200" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "0px 100px", animation: "trailFade 6s ease-out 0.5s infinite" }} />
        <ellipse cx="0" cy="100" rx="200" ry="200" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "0px 100px", animation: "trailFade 6s ease-out 3s infinite" }} />
  
        {/* ripple rings — right */}
        <ellipse cx="1440" cy="480" rx="190" ry="190" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "1440px 480px", animation: "trailFade 7s ease-out 1.5s infinite" }} />
        <ellipse cx="1440" cy="480" rx="190" ry="190" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "1440px 480px", animation: "trailFade 7s ease-out 4.5s infinite" }} />
      </svg>
    );
  }