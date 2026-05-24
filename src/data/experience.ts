export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  badge: "Co-op" | "Club" | "Design Team";
  badgeColor: "blue" | "orange" | "amber";
  bullets: string[];
  tags?: string[];
  logoUrl?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "voestalpine",
    company: "Voestalpine Additive Manufacturing Center",
    role: "Research Assistant & Materials Characterization Intern",
    duration: "Jan 2026 - Apr 2026",
    badge: "Co-op",
    badgeColor: "blue",
    bullets: [
      "Materials characterization of Laser Powder Bed Fusion (LPBF) printed metal parts including: tensile testing, Rockwell hardness (HRC), optical microscopy, etching, and porosity analysis to classify defects and assess mechanical performance.",
      "Produced 205 customer-facing reports and recalculated yield strength data across 110 tensile samples to ensure accuracy of mechanical properties.",
      "Led 5 R&D projects validating new materials and machine upgrades via materials characterization, build quality mapping, and data analysis. Presented findings to senior leadership with one recommendation approved for adoption.",
      "Developed and deployed 4 Excel automations that are used in production of data processing workflows, reducing manual analysis errors and saving 8 hours/week.",
      "Wrote a comprehensive LPBF crash course for future interns that spans the full end-to-end process: machine operation, process parameters, materials/alloys, powder production, defect types, post processing, and an industry SWOT analysis."
    ],
    tags: ["Materials Characterization", "Reports", "Excel Automations", "R&D"],
    logoUrl: "/logos/voestalpine.jpg"
  },
  {
    id: "startup-ecosystem",
    company: "Startup Ecosystem Canada - UW Chapter",
    role: "Founder / Co-President",
    duration: "Oct 2025 - Present",
    badge: "Club",
    badgeColor: "orange",
    bullets: [
      "Founding and leading the establishment of the UW club, building its organizational structure from the ground up.",
      "Organizing hackathons and events to connect student entrepreneurs with SEC's network of investors, and industry leaders."
    ],
    logoUrl: "/logos/sec.jpg"
  },
  {
    id: "md-pharma",
    company: "MD Pharma",
    role: "Data Analytics & Market Research Student Consultant",
    duration: "Jun 2025 - Jul 2025",
    badge: "Co-op",
    badgeColor: "blue",
    bullets: [
      "Conducted competitor analysis of leading wellness platforms and designed a Gen Z survey, using Power BI to analyze results and develop dashboards to identify branding strategies, trends, and market insights."
    ],
    logoUrl: "/logos/mdpharma.png"
  },
  {
    id: "formula-nano",
    company: "Formula Nano Design Team",
    role: "Researcher",
    duration: "Sep 2024 - Dec 2025",
    badge: "Design Team",
    badgeColor: "orange",
    bullets: [
      "Researched vacuum and cryogenic systems for a home-built Scanning Tunneling Microscope (STM).",
      "Modelled molecules and applied computational methods to predict their NMR spectra data.",
      "Fabricated parts using machine shop tools."
    ],
    logoUrl: "/logos/formulanano.jpg"
  }
];
