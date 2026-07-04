/* eslint-disable react-refresh/only-export-components */
// ─── Icons ────────────────────────────────────────────────────────────────────

export const HomeIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

export const PulseIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

export const MapIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

export const DollarIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);




// ─── Icons ────────────────────────────────────────────────────────────────────

export const CodeIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);


export const PenIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);


// In your js/data.js file, update PROJECT_TYPES:

export const PROJECT_TYPES = {
  featured: {
    label: "Featured",
    color: "#1c3d2c",
    bg: "#eaf5ef",
    border: "#c5e0d0",
    dotColor: "#2d6a4f",
    countBg: "#d4e8db",
    countText: "#1c3d2c"
  },
  ml: {
    label: "ML/AI",
    color: "#2b6e4f",
    bg: "#eaf8f0",
    border: "#c5e8d5",
    dotColor: "#3a8a5f",
    countBg: "#d4eedf",
    countText: "#2b6e4f"
  },
  productivity: {
    label: "Productivity",
    color: "#5c1a3a",
    bg: "#f8e8f0",
    border: "#e8c5d5",
    dotColor: "#8b3a5a",
    countBg: "#f0d4e4",
    countText: "#5c1a3a"
  },
  game: {
    label: "Games",
    color: "#1a4a5c",
    bg: "#e0f0f5",
    border: "#c5dce5",
    dotColor: "#2a6a7c",
    countBg: "#d4e8f0",
    countText: "#1a4a5c"
  },
  academic: {
    label: "Academic",
    color: "#5c1a3a",
    bg: "#f8e8f0",
    border: "#e8c5d5",
    dotColor: "#8b3a5a",
    countBg: "#f0d4e4",
    countText: "#5c1a3a"
  },
};

// ─── Projects Data ─────────────────────────────────────────────────────────────

export const PROJECTS = [



    {
      id: "agritrack", name: "AgriTrack", short: "AgriTrack",
      type: "featured", color: "#1c3d2c", bg: "#eaf5ef",
      tagline: "Farm management for local government units",
      desc: "AgriTrack gives municipal agriculture offices a single platform to register farms, track crop production, and report data to the Department of Agriculture replacing paper-based records with live dashboards and exportable reports. Built with Flutter for web, Android, and Windows.",
      tags: ["5 modules", "Municipal-level", "DA-compliant", "Barangay mapping", "Multi-crop", "Flutter", "Cross-platform"],
      viewType: "desktop",
      demo: "https://agritracklp.vercel.app/",
      github: "https://github.com/CyrusUmali/Agritrack_",
      slides: [
        {
          label: "Agritrack Login Page",
          desc: "Secure login portal for accessing the AgriTrack system, enabling authorized users to manage agricultural data, monitor farm records, and view analytics.",
          hue: "140deg",
          screenLabel: "AgriTrack · Login",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783141908/77285e20-2d64-4c01-87e2-dd6321f2473e.png",
        },
        {
          label: "Dashboard Overview",
          desc: "Central command for San Pablo City agriculture total farm counts, crop yield summaries, sector distribution, and key metrics at a glance.",
          hue: "140deg", screenLabel: "AgriTrack · Dashboard",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781755813/agritrack_dideql.png",
        },
        {
          label: "Sector Data Analytics",
          desc: "Breakdown of production data by sector compare yield performance across different farm types and crop categories.",
          hue: "155deg", screenLabel: "AgriTrack · Sector Analytics",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781755814/agritrack_1_iqx7b0.png",
        },
        {
          label: "Barangay Yield Heat Map",
          desc: "Color-coded choropleth map tracking yield trends per barangay for specific crops identify high and low performing areas at a glance.",
          hue: "35deg", screenLabel: "AgriTrack · Heat Map",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781755815/agritrack_2_qud5to.png",
        },
        {
          label: "Farm Information Modal",
          desc: "Detailed farm profile with owner details, location, crop list, and built-in production analytics all accessible in one modal view.",
          hue: "200deg", screenLabel: "AgriTrack · Farm Details",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781755815/agritrack_2_qud5to.png",
        },
        {
          label: "Mapped Farm (Selected)",
          desc: "Satellite view showing a specific farm's polygon boundary appears when you tap any farm on the map. Displays crop type and area data inline.",
          hue: "280deg", screenLabel: "AgriTrack · Farm Select",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781755824/agritrack_4_vkjx8q.png",
        },
        {
          label: "Map View (Default)",
          desc: "Full satellite map interface before farm selection all registered farms visible as interactive polygons across San Pablo City's agricultural lands.",
          hue: "150deg", screenLabel: "AgriTrack · Map Explorer",
          image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781755828/agritrack_5_raofmd.png",
        },
      ],
    },


  {
    id: "codeborn", name: "CodeBorn", short: "CodeBorn",
    type: "game", color: "#1a2e52", bg: "#e8eef8",
    tagline: "2D RPG game where coding meets combat",
    desc: "CodeBorn is a 2D RPG game built with RPG Game Maker for a school project. Players fight digital mobs and solve coding problems to progress blending turn-based combat with programming challenges that teach logic, syntax, and problem-solving.",
    tags: ["2D RPG", "School project", "Coding combat", "Turn-based", "Educational"],
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/Codeborn-Web-D",
    slides: [
      {
        label: "Title Screen",
        desc: "The gateway into the digital abyss a late-night coder's last stop before reality bends.",
        hue: "220deg", screenLabel: "CodeBorn · Title",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756050/codeborn_vz7lv2.png",
      },
      {
        label: "Before the Collapse",
        desc: "A tired programmer, deep in a late-night coding session unaware that reality is about to glitch.",
        hue: "235deg", screenLabel: "CodeBorn · Prologue",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756045/codeborn_1_gm84dj.png",
      },
      {
        label: "The Blackout",
        desc: "Exhaustion takes over the screen flickers, the world dissolves, and the coder is pulled into another dimension.",
        hue: "210deg", screenLabel: "CodeBorn · Collapse",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756059/codeborn_2_tljpo2.png",
      },
      {
        label: "The Guide",
        desc: "Awakening in a strange, corrupted world, a digital guide explains the truth: solve coding challenges or face turn-based combat. Only by clearing glitches can you move forward.",
        hue: "200deg", screenLabel: "CodeBorn · Awakening",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756045/codeborn_3_m1m2aw.png",
      },
      {
        label: "Glitched World",
        desc: "Explore an unstable dimension filled with distortions each area locked until you solve its coding puzzle.",
        hue: "245deg", screenLabel: "CodeBorn · Exploration",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756062/codeborn_4_ks4ge1.png",
      },
      {
        label: "Failed Code · Turn-Based Combat",
        desc: "A wrong answer triggers an old-school turn-based RPG battle fight digital mobs the hard way until you can retry the challenge.",
        hue: "200deg", screenLabel: "CodeBorn · Combat Fallback",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756066/codeborn_5_tchgj2.png", // kept as placeholder; you can replace with actual combat screenshot
      },
    ],
  },
  {
    id: "novelnexus", name: "NovelNexus", short: "NovelNexus",
    type: "featured", color: "#5c1a3a", bg: "#f8e8f0",
    tagline: "Subscription-based library management system",
    desc: "NovelNexus is a subscription-based library management system built with PHP and Stripe. It handles member subscriptions, book borrowing, digital lending, and automated late fees designed for modern libraries transitioning to hybrid physical-digital collections.",
    tags: ["Subscription-based", "Library management", "Digital lending", "Automated billing", "Member portal", "PHP", "Stripe"],
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/NovelNexus",
    slides: [
      {
        label: "Landing Page",
        desc: "Hero section introducing NovelNexus subscription plans, features, and call-to-action for new members.",
        hue: "330deg", screenLabel: "NovelNexus · Landing",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756214/novelnexus_jij9hy.png",
      },
      {
        label: "Landing Page · Book Showcase",
        desc: "Bottom section of the landing page featuring available books, popular picks, and newest additions.",
        hue: "345deg", screenLabel: "NovelNexus · Book Showcase",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756211/novelnexus_2_ngxlqf.png",
      },
      {
        label: "Login Page",
        desc: "Member and admin authentication gateway with email/password and subscription status validation.",
        hue: "300deg", screenLabel: "NovelNexus · Login",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756214/novelnexus_3_liwnnj.png",
      },

      {
        label: "Admin Dashboard (KPI View)",
        desc: "Alternative admin view focused on key performance indicators popular books ranking and overdue books tracking.",
        hue: "325deg", screenLabel: "NovelNexus · Admin KPIs",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756217/novelnexus_7_ncmdzv.png",
      },

      {
        label: "Admin Dashboard (Overview)",
        desc: "Payment reports, book category distribution, popular titles, book availability status, and key analytics all in one view.",
        hue: "315deg", screenLabel: "NovelNexus · Admin Dashboard",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756206/novelnexus_1_p01iea.png",
      },

      {
        label: "User (Dark Mode)",
        desc: "Member's home view after login available books, current loans, due dates, and subscription status in dark mode.",
        hue: "320deg", screenLabel: "NovelNexus · Member View",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756217/novelnexus_4_eopp0a.png",
      },
      {
        label: "Search Books",
        desc: "Advanced search page with filters by title, author, genre, and availability results shown instantly.",
        hue: "310deg", screenLabel: "NovelNexus · Search",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756213/novelnexus_5_p3mamp.png",
      },
      {
        label: "Book Details Page",
        desc: "Full book view with borrow/add to shelf actions, detailed info, user reviews, ratings, and personalized recommendations.",
        hue: "335deg", screenLabel: "NovelNexus · Book Page",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756212/novelnexus_6_xarwan.png",
      },

    ],
  },


  {
    "id": "lspuportal",
    "name": "LSPU Portal",
    "short": "LSPU Portal",
    "type": "academic",
    "color": "#1a4d2e",
    "bg": "#f0f7f3",
    "tagline": "Student portal interface clone for learning React & CSS",
    "desc": "LSPU Portal is a React-based student information system interface clone created as a personal learning project to master React.js and advanced CSS techniques. The project replicates a university portal with features including student dashboard, course curriculum, subject lists, grade management, and faculty directory. Built with React, Tailwind CSS, and React Router for navigation.",
    "tags": ["React", "Tailwind CSS", "React Router", "Student Portal", "CSS Practice", "UI Clone", "Personal Project"],
    "viewType": "desktop",
    "demo": "https://cyrusumali.github.io/LSPU-PORTAL/",
    "github": "https://github.com/CyrusUmali/LSPU-PORTAL",
    "slides": [
      {
        "label": "Login Page",
        "desc": "Portal login interface with university branding, username/password fields, and role selection for different user types.",
        "hue": "140deg",
        "screenLabel": "LSPU Portal · Login",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001249/Screenshot_828_dpvshj.png"
      },
      {
        "label": "Student Dashboard",
        "desc": "Main dashboard showing academic summary including annual fee breakdown, upcoming events, and quick access cards to key features.",
        "hue": "160deg",
        "screenLabel": "LSPU Portal · Dashboard",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001237/Screenshot_829_qmtc9w.png"
      },
      {
        "label": "Student Profile",
        "desc": "Personal information page displaying student details including ID, program, year level, contact information, and profile photo.",
        "hue": "200deg",
        "screenLabel": "LSPU Portal · Profile",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001234/Screenshot_834_cmekjs.png"
      },
      {
        "label": "Course Curriculum",
        "desc": "Complete program curriculum showing all subjects organized by year and semester with units, prerequisites, and course codes.",
        "hue": "220deg",
        "screenLabel": "LSPU Portal · Curriculum",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001231/Screenshot_832_n0xlyv.png"
      },
      {
        "label": "Subject List",
        "desc": "Enrolled subjects for the current academic term displaying schedule, instructor, room, and credit units for each course.",
        "hue": "260deg",
        "screenLabel": "LSPU Portal · Subjects",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001230/Screenshot_831_e2a5uv.png"
      },
      {
        "label": "Exam Master",
        "desc": "Grade management page showing student grades across all subjects with subject codes, credit units, and computed GPA.",
        "hue": "280deg",
        "screenLabel": "LSPU Portal · Grades",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001230/Screenshot_833_jxgu7i.png"
      },
      {
        "label": "Faculty List",
        "desc": "Directory of instructors showing faculty members, their subject assignments, and specialization areas.",
        "hue": "300deg",
        "screenLabel": "LSPU Portal · Faculty",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1783001229/Screenshot_830_crkgrf.png"
      }
    ]
  },


  {
    id: "primeroadmotors",
    name: "Prime Road Motors",
    short: "PrimeRoad",
    type: "academic",
    color: "#1a2a4a",
    bg: "#f0f4fa",
    demo: "https://prime-road-motors-g3.vercel.app/",
    tagline: "Premium car e-commerce & test drive platform",
    desc: "Prime Road Motors is a full-featured car e-commerce platform built during our OJT internship with a randomly assigned team. The platform enables users to browse vehicles, filter by make/model/price, schedule test drives, and manage appointments. Built with React for the frontend and Node.js for the backend API.",
    tags: ["E-commerce", "Vehicle listings", "Test drive scheduler", "Team project", "React", "Node.js", "Random team"],
    viewType: "desktop",
    github: "https://github.com/yourusername/primeroadmotors",
    slides: [
      {
        label: "Landing Page",
        desc: "Hero section showcasing featured vehicles with a clean, premium design that reflects the brand's luxury positioning.",
        hue: "210deg",
        screenLabel: "Prime Road · Home",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781757131/primeroad_p9af6t.png",
      },
      {
        label: "Featured Vehicles",
        desc: "Curated selection of premium vehicles displayed with key specs, pricing, and quick view options for browsing.",
        hue: "220deg",
        screenLabel: "Prime Road · Features",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781757135/primeroad_1_aembtt.png",
      },
      {
        label: "All Vehicles with Filters",
        desc: "Complete inventory with make, model, year, and price filters to help users find their perfect vehicle quickly.",
        hue: "200deg",
        screenLabel: "Prime Road · Inventory",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781757241/primeroad_3_wqtwvx.png",
      },
      {
        label: "Car Preview & Test Drive",
        desc: "Detailed vehicle view with specs, photos, and a test drive scheduler that lets users book appointments directly.",
        hue: "190deg",
        screenLabel: "Prime Road · Schedule Drive",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781757240/primeroad_4_pf5mpe.png",
      },
      {
        label: "Scheduled Test Drives",
        desc: "User dashboard showing upcoming test drive appointments with date, time, and vehicle details for easy management.",
        hue: "180deg",
        screenLabel: "Prime Road · My Drives",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781757237/primeroad_2_zqeorh.png",
      },
      {
        label: "Contact Us",
        desc: "Dealer contact information with inquiry form for sales, service, and general questions about the dealership.",
        hue: "170deg",
        screenLabel: "Prime Road · Contact",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781757125/primeroad_5_erkpa0.png",
      },
    ],
  },

  {
    id: "aeroblast", name: "AeroBlast", short: "AeroBlast",
    type: "game", color: "#1a4a5c", bg: "#e0f0f5",
    tagline: "First-year 2D top-down airplane shooter game",
    desc: "AeroBlast is the first game I ever made a 2D top-down airplane shooter built with Windows Forms using SharpDev during my first year of college. Control a fighter jet, dodge enemy fire, and blast through waves of enemies in this classic arcade-style shooter.",
    tags: ["Windows Forms", "SharpDev", "First game", "2D shooter", "Arcade-style", "Top-down"],
    Icon: CodeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/ParangEverwing",

    slides: [
      {
        label: "Title Screen",
        desc: "Classic arcade-style title screen with start prompt the gateway into AeroBlast's action.",
        hue: "190deg", screenLabel: "AeroBlast · Title",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781765275/aeroblast_j4f1ex.png",
      },
      {
        label: "Scenario Selection",
        desc: "Choose your battlefield night mode or morning mode, each with different visibility and atmosphere.",
        hue: "45deg", screenLabel: "AeroBlast · Choose Scenario",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781765275/aeroblast_1_r1j4le.png",
      },
      {
        label: "Aircraft Selection (Night Mode)",
        desc: "Pick your fighter jet under the night setting each aircraft has unique handling and firepower.",
        hue: "350deg", screenLabel: "AeroBlast · Night Selection",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781765275/aeroblast_2_fblixx.png",
      },
      {
        label: "Aircraft Selection (Day Mode)",
        desc: "Choose your aircraft in daytime brightness same roster, different visual theme.",
        hue: "280deg", screenLabel: "AeroBlast · Day Selection",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781765275/aeroblast_3_wftsmz.png",
      },
      {
        label: "Game Start",
        desc: "Press Enter to play your jet is in the air, enemies approach, and the shooting begins.",
        hue: "120deg", screenLabel: "AeroBlast · Ready to Fight",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781765275/aeroblast_4_aofh6x.png",
      },
      {
        label: "Game Over",
        desc: "Final screen showing your score and a prompt to restart try to beat your best run.",
        hue: "200deg", screenLabel: "AeroBlast · Game Over",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781765275/aeroblast_5_hqeky7.png",
      },
    ],
  },



  {
    "id": "tailwindquiz",
    "name": "Tailwind Quiz Game",
    "short": "Tailwind Quiz",
    "type": "academic",
    "color": "#2c3e7a",
    "bg": "#eef3fc",
    "tagline": "Timed quiz game with dynamic scoring",
    "desc": "QuizWiz is a timed quiz game where players choose difficulty and number of questions, answer against the clock, and get scored based on speed, difficulty, and streak. Built with PHP, MongoDB Atlas, and Tailwind CSS as a group project for a web development course.",
    "tags": ["Tailwind", "PHP", "MongoDB Atlas", "Timed quiz", "Dynamic scoring", "Leaderboard", "Group project"],
    "viewType": "desktop",
    "demo": "https://tailwind-quiz-game.onrender.com",
    "github": "https://github.com/CyrusUmali/Tailwind-Quiz-Game/tree/main",
    "slides": [
      {
        "label": "Landing Page",
        "desc": "Entry point with Login and View Leaderboard buttons. Clean Tailwind-styled interface.",
        "hue": "220deg",
        "screenLabel": "QuizWiz · Landing",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781949980/Screenshot_812_sejjwe.png"
      },
      {
        "label": "Login Modal",
        "desc": "Simple login overlay with username field and enter button to start the game.",
        "hue": "240deg",
        "screenLabel": "QuizWiz · Login",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781949975/Screenshot_813_tfzvvj.png"
      },

      {
        "label": "Game Screen",
        "desc": "Active quiz interface showing the question, answer options, timer, current score, and progress bar.",
        "hue": "160deg",
        "screenLabel": "QuizWiz · Playing",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781949969/Screenshot_816_fiahzf.png"
      },
      {
        "label": "Score Breakdown",
        "desc": "Detailed scoring summary showing points from speed bonus, difficulty multiplier, and streak rewards.",
        "hue": "140deg",
        "screenLabel": "QuizWiz · Results",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781949980/Screenshot_818_hgazol.png"
      },
      {
        "label": "Leaderboard",
        "desc": "Global rankings displaying top players with their total scores and average accuracy.",
        "hue": "280deg",
        "screenLabel": "QuizWiz · Leaderboard",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781949977/Screenshot_819_ztp1j3.png"
      }
    ]
  },

  {
    id: "alpshop", name: "Alpshop", short: "Alpshop",
    type: "featured", color: "#2d5a3b", bg: "#eaf4e6",
    tagline: "Full-featured e-commerce platform",
    desc: "Alpshop is my first full-stack project, built during my second year of college for a client who sells fashion items on Facebook. It's a complete e-commerce solution with product catalog, shopping cart, user authentication, order management, and payment gateway integration designed to help small fashion businesses start selling online.",
    tags: ["E-commerce", "First full-stack", "Fashion", "Product catalog", "Cart & checkout", "Payment gateway", "Order management"],
    Icon: HomeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/ALPSHOP",
    slides: [
      {
        label: "Landing Page",
        desc: "Hero section showcasing featured fashion items, brand story, and call-to-action for new shoppers.",
        hue: "140deg", screenLabel: "Alpshop · Landing",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756434/alpshop_wk2ofl.png",
      },
      {
        label: "Product Preview",
        desc: "Quick view of fashion item details price, variants (size/color), and add-to-cart option.",
        hue: "25deg", screenLabel: "Alpshop · Product Preview",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756427/alpshop_1_uzk3od.png",
      },
      {
        label: "Empty Cart + Login Prompt",
        desc: "Shopping cart page showing empty state prompts users to log in to view and manage their cart items.",
        hue: "200deg", screenLabel: "Alpshop · Empty Cart",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756426/alpshop_2_xfovvp.png",
      },
      {
        label: "Login Page",
        desc: "Customer authentication gateway sign in or create an account to start shopping.",
        hue: "300deg", screenLabel: "Alpshop · Login",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756426/alpshop_3_km40ha.png",
      },
      {
        label: "Shop Categories & New Arrivals",
        desc: "Browse by fashion category (tops, bottoms, dresses, etc.) plus a banner highlighting newly added items.",
        hue: "35deg", screenLabel: "Alpshop · Categories",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756432/alpshop_4_mqr9rb.png",
      },
      {
        label: "All Products View",
        desc: "Complete catalog grid showing all available fashion items with filters and sorting options.",
        hue: "150deg", screenLabel: "Alpshop · All Products",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756434/alpshop_5_p0weeq.png",
      },
    ],
  },


  {
    id: "cytdlp", name: "Cytdlp", short: "Cytdlp",
    type: "academic", color: "#2a1f0e", bg: "#fdf3e7",
    tagline: "Pull video or audio from any link",
    desc: "Cytdlp is a mobile app that lets you paste any video URL and download it in your chosen format — up to 4K MP4 or extracted MP3 audio. Built on a local Python/Flask backend bundled with yt-dlp, it supports YouTube, SoundCloud, Twitter, and thousands of other sites. Files save directly to your device storage with no cloud middleman.",
    tags: ["yt-dlp", "Flask", "Capacitor", "Android", "4K", "MP3", "YouTube", "Offline"],
    viewType: "mobile",
    github: "https://github.com/CyrusUmali/cytdlp",
    demo: "https://cyrusumali.github.io/cytdlp/",
    slides: [
      {
        label: "Splash Screen",
        desc: "Custom loading screen that polls the local Flask server on startup — EQ animation and status dot give live feedback while the Python runtime initializes.",
        hue: "30deg", screenLabel: "Cytdlp · Startup",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1782301781/c41f72c7-d3e1-4d74-84cf-c3d93588a747_cv3aig.jpg",
      },
      {
        label: "URL Input & Recent Downloads",
        desc: "Main screen after startup — paste any video link to look it up, with a recent downloads panel showing thumbnails and file info from the current session.",
        hue: "35deg", screenLabel: "Cytdlp · Home",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1782301780/bb071bca-4071-4ee6-b8f6-fbc43132b015_dy5va1.jpg",
      },
      {
        label: "Format Picker",
        desc: "After lookup, choose between Video or Audio Only tabs — resolution options from 360p up to 4K are shown with estimated file sizes. One tap queues the download.",
        hue: "28deg", screenLabel: "Cytdlp · Format Select",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1782301781/ca130943-98bb-4119-b2ac-46fabb0f2382_voocop.jpg",
      },
      {
        label: "Format Picker — Alt Video",
        desc: "Same format picker flow with a different URL — demonstrating multi-site support. Resolution and audio options adapt to whatever the source platform provides.",
        hue: "25deg", screenLabel: "Cytdlp · Format Select",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1782301782/0c5e0c28-772b-49ba-8e41-1b2556ae96e0_zohlon.jpg",
      },
    ],
  },

  {
    id: "contactsapp",
    name: "Contacts",
    short: "Contacts",
    type: "academic",
    color: "#2563eb",
    bg: "#eff6ff",
    tagline: "Smart contact management powered by Flutter & Firebase",
    desc: "Contacts is a contact management application built with Flutter and Firebase Firestore in around 2 days. It allows users to securely store, organize, search, and manage personal and professional contacts across devices in real time.",
    tags: [
      "Flutter",
      "Firebase",
      "Contact Management",
      "Cloud Sync",
      "Mobile App"
    ],
    viewType: "mobile",
    github: "https://github.com/CyrusUmali/contact_manager",
    slides: [
      {
        label: "Login Page",
        desc: "Authentication gateway sign in with email and password to access your saved contacts.",
        hue: "220deg",
        screenLabel: "Contacts · Login",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756541/contacts_vxu7he.jpg",
      },


      {
        label: "Create Account View",
        desc: "New user registration sign up with email, password, and profile details to start managing contacts.",
        hue: "260deg",
        screenLabel: "Contacts · Sign Up",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756544/contacts_3_hsv0j3.jpg",
      },
      {
        label: "Add Contact Page",
        desc: "Create new contacts by entering name, phone number, email, address, and optional profile photo.",
        hue: "200deg",
        screenLabel: "Contacts · Add Contact",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756546/contacts_5_vaollm.jpg",
      },
      {
        label: "Add Contact (Prefilled Data)",
        desc: "Contact creation form with example data filled in demonstrates fields like name, phone, email, and notes.",
        hue: "240deg",
        screenLabel: "Contacts · Add with Data",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756546/contacts_5_vaollm.jpg",
      },
      {
        label: "All Contacts View",
        desc: "Complete contact list with search bar, filter options, and sorting by name or date added.",
        hue: "180deg",
        screenLabel: "Contacts · Contact List",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756543/contacts_2_tfbyyg.jpg",
      },
      {
        label: "Upcoming Birthdays",
        desc: "Smart view showing contacts with upcoming birthdays never miss a friend's or client's special day.",
        hue: "300deg",
        screenLabel: "Contacts · Birthdays",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756545/contacts_4_httyuo.jpg",
      },

    ],
  },


  {
    "id": "quizapp",
    "name": "Quiz Game",
    "short": "Quiz",
    "type": "academic",
    "color": "#7c3aed",
    "bg": "#ede9fe",
    "tagline": "Full-stack quiz platform with React, Node.js, MySQL & Google Auth",
    "desc": "A full-stack quiz application built with React Vite on the frontend, Node.js Express on the backend, and MySQL for data persistence. Features Google OAuth authentication, quiz creation, real-time scoring, and answer review. One of my first full-stack projects with learning experiences in authentication, state management, and API design.",
    "tags": [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Google Auth",
      "Full Stack",
      "Vite"
    ],
    "viewType": "mobile",
    "github": "https://github.com/CyrusUmali/Quizziz",
    "demo": "https://quizziz-client-fsez.onrender.com/",
    "slides": [
      {
        "label": "Home & Authentication",
        "desc": "Welcome screen with login and signup options. Users can authenticate using email/password or Google OAuth.",
        "hue": "260deg",
        "screenLabel": "Quiz · Welcome",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955652/Annotation_2026-06-20_181420_y4hcy1.png"
      },
      {
        "label": "Sign Up Page",
        "desc": "New user registration form with email, password, and name fields. Google OAuth also available as an alternative sign-up method.",
        "hue": "280deg",
        "screenLabel": "Quiz · Sign Up",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955652/Annotation_2026-06-20_181441_uvhhxs.png"
      },
      {
        "label": "Login Page",
        "desc": "Secure login screen for returning users. Credentials are validated against the MySQL database.",
        "hue": "240deg",
        "screenLabel": "Quiz · Login",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955653/Annotation_2026-06-20_181506_sxablh.png"
      },
      {
        "label": "Dashboard",
        "desc": "Post-login dashboard showing available quiz categories. Users can start a quiz or create their own custom quiz.",
        "hue": "220deg",
        "screenLabel": "Quiz · Dashboard",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955653/Annotation_2026-06-20_192721_plexas.png"
      },
      {
        "label": "Quiz Selection",
        "desc": "Browse and select from available quiz subjects. Each quiz displays its title, category, and question count.",
        "hue": "200deg",
        "screenLabel": "Quiz · Select Subject",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955653/Annotation_2026-06-20_192744_r4b23q.png"
      },
      {
        "label": "Answering Questions",
        "desc": "Interactive quiz interface showing a question with multiple choice options. Correct answers are highlighted for immediate feedback.",
        "hue": "180deg",
        "screenLabel": "Quiz · Playing",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955653/Annotation_2026-06-20_192820_d3bznv.png"
      },
      {
        "label": "Quiz Results",
        "desc": "Final score display after completing a quiz. Shows total correct answers with options to play again or return to dashboard.",
        "hue": "160deg",
        "screenLabel": "Quiz · Results",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955652/Annotation_2026-06-20_193002_f8yefw.png"
      },
      {
        "label": "Answer Review",
        "desc": "Detailed breakdown of all questions showing the user's selected answer alongside the correct answer for learning purposes.",
        "hue": "140deg",
        "screenLabel": "Quiz · Review Answers",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955652/Annotation_2026-06-20_193052_b4lm7k.png"
      },
      {
        "label": "Create Quiz",
        "desc": "Quiz creation interface where users can add questions, set correct answers, and define multiple choice options for each question.",
        "hue": "120deg",
        "screenLabel": "Quiz · Create",
        "image": "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781955652/Annotation_2026-06-20_193221_ipmflc.png"
      }
    ]
  }
  ,
  {
    id: "bulkquil",
    name: "BulkQuil",
    short: "BulkQuil",
    type: "featured",
    color: "#2c3e66",
    bg: "#edf2fa",
    tagline: "Interactive EPUB cleaning and editing tool",
    desc: "BulkQuil is a React-based EPUB editor built to solve a specific problem residual HTML elements left behind by webtoepub tools that still get read by text-to-speech apps. The app provides an interactive interface where you can preview EPUB pages, click on unwanted elements, and remove similar elements across the entire book. These selections become rules that automatically apply to other pages. You can also edit CSS, change covers, and batch replace text.",
    tags: ["React", "EPUB Editor", "Text-to-speech clean", "CSS editing", "Batch replace", "Rule-based cleaning"],
    demo: "https://bulk-quil.vercel.app/",
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/BulkQuil",
    slides: [
      {
        label: "Landing Page · Upload Area",
        desc: "Main entry point drag and drop or browse to upload an EPUB file for cleaning and editing.",
        hue: "220deg",
        screenLabel: "BulkQuil · Upload",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756653/bulkquil_zawaug.png",
      },
      {
        label: "Features Overview",
        desc: "Scroll section highlighting what BulkQuil can do remove residual elements, set cleaning rules, edit CSS, batch replace, and change covers.",
        hue: "200deg",
        screenLabel: "BulkQuil · Features",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756652/bulkquil_1_r8qpio.png",
      },
      {
        label: "Help Guide",
        desc: "Step-by-step instructions on how to use the interactive editor from selecting elements to applying rules across pages.",
        hue: "180deg",
        screenLabel: "BulkQuil · Guide",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756660/bulkquil_2_h1y92y.png",
      },
      {
        label: "Element Action Bar",
        desc: "When you tap an element in the EPUB preview, an action bar appears options to remove similar elements, keep only this, or highlight it in the element tree.",
        hue: "260deg",
        screenLabel: "BulkQuil · Element Actions",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756655/bulkquil_3_fvwftx.png",
      },
      {
        label: "Element Tree View",
        desc: "Tapping the tree option reveals the full HTML element tree on the right side navigate and select elements directly from the structure.",
        hue: "300deg",
        screenLabel: "BulkQuil · Element Tree",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756655/bulkquil_4_hjtynm.png",
      },
      {
        label: "CSS Settings",
        desc: "Custom stylesheet editor modify the EPUB's appearance by adding or editing CSS rules in real time.",
        hue: "240deg",
        screenLabel: "BulkQuil · CSS Editor",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756650/bulkquil_5_t4nefm.png",
      },
    ],
  },

  {
    id: "aicrop", name: "Agritrack AI", short: "Agritrack AI",
    type: "ml",
    color: "#2b6e4f", bg: "#eaf8f0",
    tagline: "ML-powered crop recommendation for San Pablo City farmers",
    desc: "Agritrack AI is a machine learning system trained on real soil data from farm fields across San Pablo City. Using Random Forest (the best-performing model among multiple algorithms tested), it recommends optimal crops based on environmental parameters helping farmers make data-driven planting decisions with 85%+ accuracy.",
    tags: ["Random Forest", "Flutter frontend", "Python ML", "Gemini API"],
    github: "https://github.com/CyrusUmali/AiCROP", Icon: PenIcon,
    viewType: "mobile",
    slides: [
      {
        label: "Environmental Parameters",
        desc: "Farmers enter soil data nitrogen, phosphorus, potassium, pH, temperature, humidity, and rainfall or connect Bluetooth soil testers for automatic readings.",
        hue: "145deg", screenLabel: "Agritrack AI · Input Parameters",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756759/aicrop_rncs0z.png",
      },
      {
        label: "How It Works",
        desc: "A modal explaining the ML pipeline from soil data collection in San Pablo fields to model training and real-time inference.",
        hue: "160deg", screenLabel: "Agritrack AI · AI Model",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756760/aicrop_1_sezvg3.png",
      },
      {
        label: "Crop Recommendations",
        desc: "Top 3 recommended crops with confidence scores, plus alternative options based on similar soil profiles in the training data.",
        hue: "135deg", screenLabel: "Agritrack AI · Recommendations",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756762/aicrop_2_zfewwp.png",
      },
      {
        label: "Crop Compatibility Check",
        desc: "Select a specific crop and enter environmental conditions to check compatibility shows a confidence breakdown where parameter analysis contributes 70% of the final score.",
        hue: "155deg", screenLabel: "Agritrack AI · Compatibility",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756763/aicrop_3_h46ovx.png",
      },
      {
        label: "Parameter Analysis",
        desc: "Detailed breakdown of each soil parameter shows whether current levels are optimal, insufficient, or excessive for the selected crop.",
        hue: "140deg", screenLabel: "Agritrack AI · Parameter Analysis",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756764/aicrop_4_ayiqhw.png",
      },
      {
        label: "AI-Powered Improvements",
        desc: "Gemini API generates actionable suggestions what the farmer can do to improve soil conditions for growing their desired crop, from fertilization to irrigation adjustments.",
        hue: "170deg", screenLabel: "Agritrack AI · Gemini Suggestions",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756758/aicrop_5_j3oztc.png",
      },
    ],
  },

  {
    id: "pirate-treasure", name: "Pirate Treasure Hunt", short: "Treasure Hunt",
    type: "game", color: "#2a6b6b", bg: "#e8f4f4",
    tagline: "Spring Boot expedition game with session-based persistence",
    desc: "A pirate treasure hunt game built with Spring Boot users choose expedition areas, set sail, and discover treasure (or misfortune). Features session management to track wealth between requests, POST route handling, and redirect patterns. The UI is inspired by Genshin Impact's expedition interface with Beidou as the main character.",
    tags: ["Spring Boot", "Session management", "POST routes", "Mini-game", "Genshin-inspired"],
    github: "https://github.com/CyrusUmali/Beidou-Treasure-Hunt",
    slides: [
      {
        label: "Expedition Selection",
        desc: "Choose which area to explore each location shows predicted outcomes, duration, and potential rewards. Right panel displays 'Set Sail' with area description.",
        hue: "180deg", screenLabel: "Treasure Hunt · Expedition",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756860/pirate_rxyuod.png",
      },
      {
        label: "Sailing Animation",
        desc: "A short sailing animation plays after selecting an expedition building anticipation before revealing the outcome.",
        hue: "190deg", screenLabel: "Treasure Hunt · Sailing",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756853/pirate_1_ev8wyw.png",
      },
      {
        label: "Treasure Found!",
        desc: "Success modal featuring chibi Beidou laughing treasure amount added to your session-stored wealth.",
        hue: "45deg", screenLabel: "Treasure Hunt · Success",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756854/pirate_2_sw5srb.png",
      },
      {
        label: "Expedition Failed",
        desc: "Failure modal with chibi Beidou crying you lose some wealth or return empty-handed.",
        hue: "350deg", screenLabel: "Treasure Hunt · Failed",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756855/pirate_3_aqdlaq.png",
      },
      {
        label: "Marooned Screen",
        desc: "Special penalty state if you lose too much wealth or fail too many expeditions, you get marooned and must restart your journey.",
        hue: "200deg", screenLabel: "Treasure Hunt · Marooned",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756857/pirate_4_cpitjw.png",
      },
    ],
  },

  {
    id: "jjk-selector", name: "JJK Character Selector", short: "JJK Selector",
    type: "academic", color: "#7a1f2c", bg: "#fcf0f2",
    tagline: "Dynamic character selection UI with real-time updates",
    desc: "A Jujutsu Kaisen character selector built for a frontend assignment demonstrating data attributes, event handling, and dynamic UI updates. Users click on any character card to see their name and portrait appear in the main display area, with visual feedback for the currently selected character.",
    tags: ["Data attributes", "Event handling", "Dynamic UI", "DOM manipulation", "2-3 hour build"],
    github: "https://github.com/yourusername/jjk-character-selector",
    slides: [
      {
        label: "Character Grid",
        desc: "All selectable characters displayed in a responsive grid each card stores character data in data attributes (name, image, description).",
        hue: "350deg", screenLabel: "JJK Selector · Character Grid",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756966/jjk_2_cwr0jp.png",
      },
      {
        label: "Selection Highlight",
        desc: "Visual cue (border glow, shadow, or background change) indicates which character is currently selected.",
        hue: "340deg", screenLabel: "JJK Selector · Selected State",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756968/jjk_4_cgevua.png",
      },
      {
        label: "Main Display Area",
        desc: "Selected character's name and larger image dynamically appear in the main display panel upon selection.",
        hue: "355deg", screenLabel: "JJK Selector · Display",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756967/jjk_3_wvmogu.png",
      },
      {
        label: "Character Details",
        desc: "Additional info (cursed technique, grade, or fun fact) appears alongside the character's portrait.",
        hue: "345deg", screenLabel: "JJK Selector · Details",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756960/jjk_bghvsd.png",
      },
      {
        label: "Real-time Updates",
        desc: "Every click triggers immediate UI changes no page reload, just smooth, dynamic interaction.",
        hue: "335deg", screenLabel: "JJK Selector · Interactive",
        image: "https://res.cloudinary.com/dk41ykxsq/image/upload/v1781756961/jjk_1_ttkc0v.png",
      },
    ],
  }










];









export const skills = [
  { name: "Creative Dev", pct: 95, delay: "0.5s" },
  { name: "UI / UX Design", pct: 88, delay: "0.65s" },
  { name: "Motion & Interaction", pct: 92, delay: "0.8s" },
  { name: "3D & WebGL", pct: 74, delay: "0.95s" },
  { name: "Design Systems", pct: 85, delay: "1.1s" },
];

export const tags = [
  "React/React Native", "Flutter", "MySQL", "Figma",
  "JavaScript", "Firebase", "Python", "Php",
  "SpringBoot", "Tailwind", "GitHub", "Node.js", "Supabase", "AI/ML"
];


export const BUDGET_OPTIONS = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Let's talk"];