export default function ContactBgSVG() {
    return (
      <svg
        className="contact-bg-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* grid lines */}
        <line x1="480" y1="0" x2="480" y2="900" stroke="#3B6D11" strokeWidth="0.5" opacity="0.06" className="anim-grid-v" />
        <line x1="0" y1="420" x2="1440" y2="420" stroke="#3B6D11" strokeWidth="0.5" opacity="0.06" className="anim-grid-h" />
  
        {/* ── LEFT CLUSTER ── */}
        <g transform="translate(-200, 50)">
          <g className="anim-diamond-group-1" style={{ transformOrigin: "118px 220px" }}>
            <path fill="#F0F3EE" d="M28,4L-207,239c-20,20-20,52,0,72L28,546c20,20,52,20,72,0L335,311c20-20,20-52,0-72L100,4C80-16,48-16,28,4z" />
            <path fill="none" stroke="#3B6D11" strokeWidth="1.5" className="anim-outline-1" d="M34,11L-201,246c-20,20-20,52,0,72L34,553c20,20,52,20,72,0L341,318c20-20,20-52,0-72L106,11C86-9,54-9,34,11z" />
          </g>
          <g className="anim-diamond-group-3" style={{ transformOrigin: "-12px 288px" }}>
            <path fill="#C8D4C8" opacity="0.9" d="M-12,386L-76,322c-18-18-18-47,0-65L-12,193c18-18,47-18,65,0L117,257c18,18,18,47,0,65L53,386C35,404,6,404,-12,386z" />
          </g>
          <g className="anim-diamond-group-4" style={{ transformOrigin: "230px 278px" }}>
            <path fill="#C0DD97" opacity="0.85" d="M192,372L118,298c-11-11-11-29,0-40L192,184c11-11,29-11,40,0L306,258c11,11,11,29,0,40L232,372C221,383,203,383,192,372z" />
            <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.6" d="M196,384L122,310c-11-11-11-29,0-40L196,196c11-11,29-11,40,0L310,270c11,11,11,29,0,40L236,384C225,395,207,395,196,384z" />
          </g>
          <g className="anim-diamond-group-5" style={{ transformOrigin: "90px 474px" }}>
            <path fill="#3B6D11" className="anim-fill-pulse-2" d="M90,564L30,504c-16-16-16-43,0-59L90,385c16-16,43-16,59,0L209,445c16,16,16,43,0,59L149,564C133,580,106,580,90,564z" />
          </g>
          <g className="anim-diamond-mini" style={{ transformOrigin: "308px 224px" }}>
            <path fill="#C8D4C8" opacity="0.8" d="M308,266L282,240c-8-8-8-21,0-29L308,185c8-8,21-8,29,0L363,211c8,8,8,21,0,29L337,266C329,274,316,274,308,266z" />
          </g>
          <path fill="#3B6D11" opacity="0.65" className="anim-diamond-mini" d="M316,356l-8-8c-4-4-4-11,0-15l8-8c4-4,11-4,15,0l8,8c4,4,4,11,0,15l-8,8C331,360,320,360,316,356z" />
        </g>
  
        {/* ── RIGHT CLUSTER ── */}
        <g className="anim-diamond-group-2" style={{ transformOrigin: "1135px 538px" }}>
          <path fill="#F0F3EE" d="M1135,754L955,574c-20-20-20-52,0-72L1135,322c20-20,52-20,72,0L1387,502c20,20,20,52,0,72L1207,754C1187,774,1155,774,1135,754z" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1.5" className="anim-outline-1" d="M1129,768L949,588c-20-20-20-52,0-72L1129,336c20-20,52-20,72,0L1381,516c20,20,20,52,0,72L1201,768C1181,788,1149,788,1129,768z" />
        </g>
        <g className="anim-diamond-group-3" style={{ transformOrigin: "1110px 354px" }}>
          <path fill="#3B6D11" className="anim-fill-pulse-3" d="M1110,462L1033,385c-18-18-18-47,0-65L1110,243c18-18,47-18,65,0L1252,320c18,18,18,47,0,65L1175,462C1157,480,1128,480,1110,462z" />
        </g>
        <g className="anim-diamond-group-6" style={{ transformOrigin: "882px 388px" }}>
          <path fill="#C0DD97" opacity="0.8" d="M882,450L842,410c-12-12-12-32,0-44L882,326c12-12,32-12,44,0L966,366c12,12,12,32,0,44L926,450C914,462,894,462,882,450z" />
          <path fill="none" stroke="#3B6D11" strokeWidth="1" opacity="0.6" d="M878,468L838,428c-12-12-12-32,0-44L878,344c12-12,32-12,44,0L962,384c12,12,12,32,0,44L922,468C910,480,890,480,878,468z" />
        </g>
        <g className="anim-diamond-group-4" style={{ transformOrigin: "877px 572px" }}>
          <path fill="#C8D4C8" opacity="0.8" d="M877,663L809,595c-18-18-18-47,0-65L877,462c18-18,47-18,65,0L1009,529c18,18,18,47,0,65L941,663C923,681,895,681,877,663z" />
        </g>
        <g className="anim-diamond-group-1" style={{ transformOrigin: "1278px 730px" }}>
          <path fill="#F0F3EE" opacity="0.97" d="M1278,816L1222,760c-16-16-16-42,0-58L1278,646c16-16,42-16,58,0L1392,702c16,16,16,42,0,58L1336,816C1320,832,1294,832,1278,816z" />
        </g>
        <g className="anim-diamond-mini" style={{ transformOrigin: "993px 420px" }}>
          <path fill="#C8D4C8" opacity="0.85" d="M993,460L967,434c-8-8-8-21,0-29L993,379c8-8,21-8,29,0L1048,405c8,8,8,21,0,29L1022,460C1014,468,1001,468,993,460z" />
        </g>
        <g className="anim-diamond-group-5" style={{ transformOrigin: "1124px 213px" }}>
          <path fill="#C0DD97" opacity="0.78" d="M1124,271L1091,238c-14-14-14-37,0-51L1124,154c14-14,37-14,51,0L1208,187c14,14,14,37,0,51L1175,271C1161,285,1138,285,1124,271z" />
        </g>
  
        {/* accent triangles — reuses .anim-accent-triangle from index.css */}
        <polygon fill="#FF4C3E" className="anim-accent-triangle" points="1028,582 1024,615 1005,595" />
        <polygon fill="#FF4C3E" className="anim-accent-triangle" opacity="0.6" points="195,460 191,485 175,470" style={{ animationDelay: "1.2s" }} />
  
        {/* ripple trails */}
        <ellipse cx="70" cy="110" rx="230" ry="230" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "70px 110px", animation: "trailFade 6s ease-out 1s infinite" }} />
        <ellipse cx="1168" cy="538" rx="215" ry="215" fill="none" stroke="#3B6D11" strokeWidth="0.5" opacity="0"
          style={{ transformOrigin: "1168px 538px", animation: "trailFade 7s ease-out 2.5s infinite" }} />
      </svg>
    );
  }