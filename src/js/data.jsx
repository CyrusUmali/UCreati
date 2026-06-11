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


export   const PenIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);


// In your js/data.js file, update PROJECT_TYPES:

export const PROJECT_TYPES = {
  agriculture: {
    label: "AgriTech",
    color: "#1c3d2c",
    bg: "#eaf5ef",
    border: "#c5e0d0",
    dotColor: "#2d6a4f",
    countBg: "#d4e8db",
    countText: "#1c3d2c"
  },
  developer: {
    label: "Developer",
    color: "#1a2e52",
    bg: "#e8eef8",
    border: "#c5d5e8",
    dotColor: "#2c4c7c",
    countBg: "#d4e0f0",
    countText: "#1a2e52"
  },
  creative: {
    label: "Creative",
    color: "#5c1a3a",
    bg: "#f8e8f0",
    border: "#e8c5d5",
    dotColor: "#8b3a5a",
    countBg: "#f0d4e4",
    countText: "#5c1a3a"
  },
  // ADD THESE NEW TYPES:
  game: {
    label: "Games",
    color: "#1a4a5c",
    bg: "#e0f0f5",
    border: "#c5dce5",
    dotColor: "#2a6a7c",
    countBg: "#d4e8f0",
    countText: "#1a4a5c"
  },
  library: {
    label: "Library",
    color: "#5c1a3a",
    bg: "#f8e8f0",
    border: "#e8c5d5",
    dotColor: "#8b3a5a",
    countBg: "#f0d4e4",
    countText: "#5c1a3a"
  },
  ecommerce: {
    label: "E-Commerce",
    color: "#2d5a3b",
    bg: "#eaf4e6",
    border: "#c5e0d0",
    dotColor: "#3a7a4f",
    countBg: "#d4e8db",
    countText: "#2d5a3b"
  }
};

// ─── Projects Data ─────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: "agritrack", name: "AgriTrack", short: "AgriTrack",
    type: "agriculture", color: "#1c3d2c", bg: "#eaf5ef",
    tagline: "Farm management for local government units",
    desc: "AgriTrack gives municipal agriculture offices a single platform to register farms, track crop production, and report data to the Department of Agriculture — replacing paper-based records with live dashboards and exportable reports.",
    tags: ["5 modules", "Municipal-level", "DA-compliant", "Barangay mapping", "Multi-crop"],
    Icon: HomeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/Agritrack_",
    slides: [
      {
        label: "Dashboard Overview",
        desc: "Municipal overview — farm counts, yield totals, sector distribution, and live weather at a glance.",
        hue: "140deg", screenLabel: "AgriTrack · Dashboard",
        image: "/agritrack/agritrack.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
      },
      {
        label: "Satellite Farm Map",
        desc: "Every registered farm plotted on satellite imagery with polygon boundaries, crop type, and weather data.",
        hue: "155deg", screenLabel: "AgriTrack · Mapa",
        image: "/agritrack/agritrack (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
      },
      {
        label: "Production Analytics",
        desc: "Per-farm yearly and monthly yield charts, exportable as Excel or PDF for official DA reporting.",
        hue: "35deg", screenLabel: "AgriTrack · Mga Ani",
        image: "/agritrack/agritrack (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>,
      },
      {
        label: "Barangay Heat Map",
        desc: "Color-coded choropleth map showing yield performance across every barangay — high, medium, and low zones.",
        hue: "200deg", screenLabel: "AgriTrack · Barangay Map",
        image: "/agritrack/agritrack (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
      },
      {
        label: "Farm Details & Records",
        desc: "Full farm profile — owner, location, sector, area, crop list, and production history all in one panel.",
        hue: "280deg", screenLabel: "AgriTrack · Mga Sakahan",
        image: "/agritrack/agritrack (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
      },
    ],
  },
  {
    id: "codeborn", name: "CodeBorn", short: "CodeBorn",
    type: "game", color: "#1a2e52", bg: "#e8eef8",
    tagline: "2D RPG game where coding meets combat",
    desc: "CodeBorn is a 2D RPG game built with RPG Game Maker for a school project. Players fight digital mobs and solve coding problems to progress — blending turn-based combat with programming challenges that teach logic, syntax, and problem-solving.",
    tags: ["2D RPG", "School project", "Coding combat", "Turn-based", "Educational"],
    Icon: CodeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/Codeborn-Web-D",
    slides: [
      {
        label: "Gameplay Combat",
        desc: "Battle digital mobs by solving coding problems — each correct answer deals damage, wrong answers give enemies an opening.",
        hue: "220deg", screenLabel: "CodeBorn · Battle",
        image: "/codeborn/codeborn.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" /></svg>,
      },
      {
        label: "Coding Challenges",
        desc: "Syntax puzzles, logic problems, and debugging exercises that scale with player level — from variables to algorithms.",
        hue: "235deg", screenLabel: "CodeBorn · Challenges",
        image: "/codeborn/codeborn (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
      },
      {
        label: "Character Progression",
        desc: "Level up your character, unlock new abilities, and earn codex entries for solving programming concepts.",
        hue: "210deg", screenLabel: "CodeBorn · Progress",
        image: "/codeborn/codeborn (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" /></svg>,
      },
      {
        label: "Enemy Bestiary",
        desc: "Each mob represents a common bug type — NullPointer, Infinite Loop, SyntaxError — with unique attack patterns.",
        hue: "200deg", screenLabel: "CodeBorn · Bestiary",
        image: "/codeborn/codeborn (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
      },
      {
        label: "World Map",
        desc: "Explore dungeons, hubs, and arenas — each area introduces new coding concepts and tougher enemies.",
        hue: "245deg", screenLabel: "CodeBorn · Map",
        image: "/codeborn/codeborn (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>,
      },
    ],
  },
  {
    id: "novelnexus", name: "NovelNexus", short: "NovelNexus",
    type: "library", color: "#5c1a3a", bg: "#f8e8f0",
    tagline: "Subscription-based library management system",
    desc: "NovelNexus is a subscription-based library management system that handles member subscriptions, book borrowing, digital lending, and automated late fees — designed for modern libraries transitioning to hybrid physical-digital collections.",
    tags: ["Subscription-based", "Library management", "Digital lending", "Automated billing", "Member portal"],
    Icon: PenIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/NovelNexus",
    slides: [
      {
        label: "Member Dashboard",
        desc: "Members view their subscription tier, active loans, due dates, and borrowing history all in one place.",
        hue: "330deg", screenLabel: "NovelNexus · Members",
        image: "/novelnexus/novelnexus.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
      },
      {
        label: "Catalog Management",
        desc: "Librarians can add, update, and categorize books — physical copies and digital titles with license tracking.",
        hue: "315deg", screenLabel: "NovelNexus · Catalog",
        image: "/novelnexus/novelnexus (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
      },
      {
        label: "Subscription Tiers",
        desc: "Basic, Premium, and Institutional tiers — each with different borrowing limits, digital access, and perks.",
        hue: "345deg", screenLabel: "NovelNexus · Plans",
        image: "/novelnexus/novelnexus (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="2" y1="12" x2="22" y2="12" /><circle cx="6" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="18" cy="12" r="2" /></svg>,
      },
      {
        label: "Automated Circulation",
        desc: "Self-checkout kiosks, email due-date reminders, and automatic late fee calculation with online payment.",
        hue: "300deg", screenLabel: "NovelNexus · Circulation",
        image: "/novelnexus/novelnexus (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z" /></svg>,
      },
      {
        label: "Reports & Analytics",
        desc: "Popular titles, circulation trends, membership growth, and revenue reports for library administration.",
        hue: "320deg", screenLabel: "NovelNexus · Reports",
        image: "/novelnexus/novelnexus (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></svg>,
      },
    ],
  },
  {
    id: "aeroblast", name: "AeroBlast", short: "AeroBlast",
    type: "game", color: "#1a4a5c", bg: "#e0f0f5",
    tagline: "First-year 2D top-down airplane shooter game",
    desc: "AeroBlast is the first game I ever made — a 2D top-down airplane shooter built with Windows Forms during my first year of college. Control a fighter jet, dodge enemy fire, and blast through waves of enemies in this classic arcade-style shooter.",
    tags: ["Windows Forms", "First game", "2D shooter", "Arcade-style", "Top-down"],
    Icon: CodeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/ParangEverwing",
    slides: [
      {
        label: "Arcade Gameplay",
        desc: "Classic top-down shooter action — pilot your jet, dodge enemy bullets, and clear wave after wave.",
        hue: "190deg", screenLabel: "AeroBlast · Gameplay",
        image: "/aeroblast/aeroblast.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polygon points="12,2 15,9 22,9 16,14 19,22 12,17 5,22 8,14 2,9 9,9 12,2" /></svg>,
      },
      {
        label: "Power-Ups",
        desc: "Collect weapon upgrades, shields, and health packs dropped by destroyed enemies.",
        hue: "45deg", screenLabel: "AeroBlast · Power-ups",
        image: "/aeroblast/aeroblast (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>,
      },
      {
        label: "Boss Battles",
        desc: "End-of-level boss fights with unique attack patterns and weak points to target.",
        hue: "350deg", screenLabel: "AeroBlast · Boss",
        image: "/aeroblast/aeroblast (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
      },
      {
        label: "Score & Leaderboard",
        desc: "Track your high score locally and compete for the top spot on each playthrough.",
        hue: "280deg", screenLabel: "AeroBlast · Scores",
        image: "/aeroblast/aeroblast (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
      },
      {
        label: "Enemy Variants",
        desc: "Different enemy types — scouts, bombers, kamikaze drones — each requiring different tactics.",
        hue: "120deg", screenLabel: "AeroBlast · Enemies",
        image: "/aeroblast/aeroblast (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><circle cx="8" cy="8" r="1.5" /><circle cx="16" cy="8" r="1.5" /><path d="M8 16a4 4 0 018 0" /></svg>,
      },
    ],
  },
  {
    id: "alpshop", name: "Alpshop", short: "Alpshop",
    type: "ecommerce", color: "#2d5a3b", bg: "#eaf4e6",
    tagline: "Full-featured e-commerce platform",
    desc: "Alpshop is a complete e-commerce solution with product catalog, shopping cart, user authentication, order management, and payment gateway integration — built for small to medium businesses to start selling online.",
    tags: ["E-commerce", "Product catalog", "Cart & checkout", "Payment gateway", "Order management"],
    Icon: HomeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/ALPSHOP",
    slides: [
      {
        label: "Product Catalog",
        desc: "Browse products with filtering by category, price, and ratings — detailed product pages with reviews.",
        hue: "140deg", screenLabel: "Alpshop · Catalog",
        image: "/alpshop/alpshop.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><rect x="3" y="6" width="18" height="15" rx="2" /><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>,
      },
      {
        label: "Shopping Cart",
        desc: "Add/remove items, update quantities, save for later, and see real-time subtotals.",
        hue: "25deg", screenLabel: "Alpshop · Cart",
        image: "/alpshop/alpshop (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>,
      },
      {
        label: "Checkout Flow",
        desc: "Streamlined checkout with address entry, shipping options, and multiple payment methods.",
        hue: "200deg", screenLabel: "Alpshop · Checkout",
        image: "/alpshop/alpshop (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M20 12V8H4v12h12" /><polyline points="18 2 22 6 18 10" /><line x1="2" y1="14" x2="8" y2="14" /></svg>,
      },
      {
        label: "Admin Dashboard",
        desc: "Manage products, track orders, view customer data, and generate sales reports.",
        hue: "300deg", screenLabel: "Alpshop · Admin",
        image: "/alpshop/alpshop (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
      },
      {
        label: "Order Tracking",
        desc: "Customers can track their orders from confirmation to delivery with status updates.",
        hue: "35deg", screenLabel: "Alpshop · Orders",
        image: "/alpshop/alpshop (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" /></svg>,
      },
    ],
  },
  {
    id: "primeroad", name: "Primeroad", short: "Primeroad",
    type: "ecommerce", color: "#3a2a5c", bg: "#f0e8f8",
    tagline: "Premium car e-commerce platform",
    desc: "Primeroad is a specialized car e-commerce platform for browsing, comparing, and purchasing vehicles — featuring detailed car listings, financing calculators, virtual showroom, and dealer integration.",
    tags: ["Car e-commerce", "Vehicle listings", "Financing tools", "Dealer portal", "Compare cars"],
    Icon: PenIcon,
    viewType: "mobile",
    github: "https://github.com/CyrusUmali/PrimeRoadMotors",
    slides: [
      {
        label: "Car Listings",
        desc: "Browse new and used cars with advanced filters — make, model, year, price range, mileage, and more.",
        hue: "260deg", screenLabel: "Primeroad · Listings",
        image: "/primeroad/primeroad.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M16 21v-4M8 21v-4" /><line x1="2" y1="11" x2="22" y2="11" /></svg>,
      },
      {
        label: "Compare Tool",
        desc: "Side-by-side comparison of multiple vehicles — specs, features, pricing, and reviews.",
        hue: "245deg", screenLabel: "Primeroad · Compare",
        image: "/primeroad/primeroad (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="14" y2="12" /><line x1="4" y1="18" x2="10" y2="18" /><polygon points="16,15 22,18 16,21 16,15" /></svg>,
      },
      {
        label: "Financing Calculator",
        desc: "Calculate monthly payments, interest rates, and loan terms instantly based on car price and down payment.",
        hue: "200deg", screenLabel: "Primeroad · Finance",
        image: "/primeroad/primeroad (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /><circle cx="16" cy="15" r="1" /><circle cx="8" cy="15" r="1" /></svg>,
      },
      {
        label: "Virtual Showroom",
        desc: "360-degree car views, high-res galleries, and detailed spec sheets for each model.",
        hue: "280deg", screenLabel: "Primeroad · Showroom",
        image: "/primeroad/primeroad (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg>,
      },
      {
        label: "Dealer Dashboard",
        desc: "Dealers can manage inventory, respond to inquiries, and track sales performance.",
        hue: "310deg", screenLabel: "Primeroad · Dealer",
        image: "/primeroad/primeroad (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M3 3h18v18H3z" /><line x1="9" y1="9" x2="15" y2="15" /><line x1="15" y1="9" x2="9" y2="15" /></svg>,
      },
    ],
  },
];









  export const skills = [
    { name: "Creative Dev",       pct: 95, delay: "0.5s"  },
    { name: "UI / UX Design",     pct: 88, delay: "0.65s" },
    { name: "Motion & Interaction", pct: 92, delay: "0.8s" },
    { name: "3D & WebGL",         pct: 74, delay: "0.95s" },
    { name: "Design Systems",     pct: 85, delay: "1.1s"  },
  ];
  
  export const tags = [
    "React", "Three.js", "GSAP", "Figma",
    "TypeScript", "WebGL", "Framer", "Next.js",
    "Blender", "CSS / SVG",
  ];


  export const BUDGET_OPTIONS = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Let's talk"];