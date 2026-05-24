export interface Project {
  id: string;
  title: string;
  headline?: string;
  featured: boolean;
  category: string;
  badge?: string; // e.g. "1st Place Winner", "2nd Place Winner", "Research"
  badgeType: 'gold' | 'silver' | 'blue' | 'neutral';
  description: string;
  bullets?: string[];
  tech: string[];
  actionText?: string;
  actionLink?: string;
  imagePath: string;
  fallbackGradient: string;
}

export const projects: Project[] = [
  {
    id: "cadence",
    title: "Cadence",
    featured: true,
    category: "IoT Device",
    badgeType: "blue",
    description: "Built a full-stack medication tracker combining C++ embedded firmware on an ESP32 with a React web dashboard.",
    bullets: [
      "Built a full-stack medication tracker combining C++ embedded firmware on an ESP32 with a React web dashboard, synchronized in real time via Google Firebase Firestore.",
      "Developed an animated GUI from scratch on a 1.69\" TFT display with animated icons.",
      "iPhone push notifications via Apple Shortcuts, WiFi data sync, offline flash memory persistence, and OTA firmware updates.",
      "Deployed a web dashboard with real-time device sync, habit history, streak heatmaps, and analytics charts using Vercel.",
      "Designing a custom PCB using KiCad and a 3D printed enclosure to house the prototype in a compact consumer product."
    ],
    tech: ["ESP32", "React", "Firebase", "Hardware Design"],
    imagePath: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjBZJwGukeNVXQavThPoTM-VUrzfYhFw0tWGDAuv_MI5E2J2xsIla2WI_auV82qi4M_e4Puk0I4hmUxVnVT7MiXjwX0maMysD4JKQO_vXkpdyP-s96jzO8S5Q_hrc3WyP5Pp6mgTAqTldWIB6Li36LoYoHXIbbgG7i0tWeniGEXcSIhjmUE-4by-kRPdHtP4ua2_a2Rw0QYF-BeiEqBar0tk7l-XWg0sijaGC2M1qlmKwr2xqQJY7L5iVhgdVe5whdabQPo-_SZGtrlQ",
    fallbackGradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    id: "action-2-action",
    title: "Action-2-Action",
    featured: false,
    category: "AI / ML",
    badge: "1st Place Winner",
    badgeType: "gold",
    description: "Hands-free gesture, voice, and eye tracking control system for healthcare, productivity and presentations.",
    tech: ["AI / ML", "Control Systems"],
    actionText: "Link to Project Page",
    actionLink: "https://action2action.framer.website/",
    imagePath: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNRVLAl2N6Tw5Cbzmh3JY4aZkqwliBvyx_ZuyFz4ld2bKyHQng4bSsgf4rouiTFhuW9pOqOBJlDdIb5cqIrL4mp5L5C9wGBkkKV1PrYxBjP8XJERRNywuQFvJvWAThG57HA8RvL_YbIYow8RlQKfElpw0Gf5XIh3z1N2VATPZBtSDlUcFnH9NndvWBXDp24DQ914DxXd7Pv0mMKsJPBBv_UxkB4ZnSqpUHYqpyKBMIeksG5VlevHht2_WoMA5fZT9_7Ye7AWRe3l4",
    fallbackGradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "carter-ai",
    title: "Carter AI",
    featured: false,
    category: "AI / ML",
    badge: "1st Place Winner",
    badgeType: "gold",
    description: "Voice-activated study assistant that acts as your personal TA while you watch lecture videos. Makes lecture videos interactive using voice commands. Has real-time Q&A, tailored quizzes and summaries.",
    tech: ["AI / ML", "Control Systems"],
    imagePath: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgQbbq7w_Ulhr6v25_APDMAW9qryqszYl2a0wfUIiovwCHPW5qVQMJgDm1bqasadlH1QdvVwRZkPgI2UdHpGezY9VufEGG9wKOielJm-CERXDwiDX4SI_yT8Ofnd1Zq2CDXGrUMsj6uaMaV4jV2UKLg-exHSMEE6o1k6BkB8ltw6AAkp8Ly-T3RsZzP-53h1TWU3WnY6j88WpgE5qWuHHeRr7xF3pYOXlT2j-5ftlQqaRus438_yUo4qjivlH_P4Lup4zMpZwLLkQ",
    fallbackGradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: "snapstyle",
    title: "SnapStyle",
    featured: false,
    category: "AR Commerce",
    badge: "1st Place Winner",
    badgeType: "gold",
    description: "Pitched SnapStyle, an e-commerce marketplace for Snapchat letting users virtually try on clothing via AR and buy directly in-app, with market and financial analysis. Pitched to panel of judges from KPMG, Monitor Deloitte, EY, Bain & Company, and BCG.",
    tech: ["SWOT Analysis", "Financial Projections", "Pitch"],
    imagePath: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj_0KOTCiqTmVxXY0pJoV8FTGTXRsJtYUljvER5pvTYaLWF4NOBo0pxbqSP1nhbJciF4d67OU9l1diqbhXduwtqQhzAEILO111JDRhjNt6NmyvdznKZp3EU-nvgiuyCnlITPWG1OvIVOjLrdA8KfQMJbuSlA0hqYAIWWm6LV1XUS1dBGYdynemlBrrMzLwzqL9PU54x2fKxwmxHGpcBBXPXKTQ5u_jx9gsFn4hGBYFTKb459-WWkz8dm8477YwJjpEDSaHqb-M-sU",
    fallbackGradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    id: "sponge-spot",
    title: "Sponge Spot",
    featured: false,
    category: "Web App",
    badge: "2nd Place Winner",
    badgeType: "silver",
    description: "Web app mapping optimal sponge park locations for the City of Toronto to address urban flooding, backed by feasibility and cost-benefit analysis.",
    tech: ["Data Aggregation", "Data Visualization"],
    imagePath: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsALiZ1bGnazcyRrPWomyw-KgwmnKkZLdj5Q9avKFHoBWg-pjIBGwlMEMUjxuJCJm6--pQ8TQOxXOrj6uap1yafJyCiagjRyBOQDKk4xEKwXO-FiCqIG_EpxdvHNOsQMx3siksT5UfwhoSLf4iUOJjPqwJNv77KGe-mJsbA-pJVKPpxCJMisNAIsKPBluNPRgBejRUvr_R0K_7dUkm2qCYt-TIg36w4W_xXoV30CneTRJE913YTttHahsKpvimKZy4-QGnyT3sOP8",
    fallbackGradient: "from-[#2DD4BF]/20 to-[#3B82F6]/20"
  },
  {
    id: "teng",
    title: "Triboelectric Nanogenerator",
    featured: false,
    category: "Research",
    badge: "Competition",
    badgeType: "neutral",
    description: "Designed and constructed a TENG that generated electrical output from mechanical motion. Final prototype produced an output of 3.4 V at 45 Hz, placing 2nd out of 23 teams.",
    tech: [], // No bottom tags shown in the design image for TENG
    imagePath: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_P2LqmaQLyJ-GCc0Yh7SqmAlGa_w6pZYBhRyxyXroMEr6gn1OBqunxic0AGs1XDcu-g46YnaNwRRJAufnJ7g5puH8rY6F5U2V4dec3vUJM7_43o5vekFWjnMAG-Ba7PCH3aJ04BEn3mAWnNl4sQPAReTzSQ5SI-XjHu-XrlxYVf5CpVhLYivkBzpQsWujPIlsTtGi8sj_buaByWB-IhYTj81kyzdSFmTMRYcn-eygCHQIqH4dB2idxRLHWAwNnV3FajTqmUlM_E4",
    fallbackGradient: "from-neutral-500/20 to-slate-500/20"
  }
];
