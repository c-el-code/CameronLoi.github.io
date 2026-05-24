export interface LaboratorySkillSection {
  category: string;
  items: {
    label: string;
    skills: string;
  }[];
}

export interface TechnicalSkills {
  languages: string[];
  tools: string[];
  laboratory: {
    electronics: {
      label: string;
      skills: string;
    }[];
    materials: string[];
    other: string[];
  };
  certifications: string[];
}

export const technicalSkills: TechnicalSkills = {
  languages: ["Python", "MATLAB", "Proficient in French"],
  tools: [
    "CAD (SolidWorks)",
    "Microsoft Office",
    "Power BI",
    "Firebase",
    "Vercel",
    "Git",
    "KiCad"
  ],
  laboratory: {
    electronics: [
      {
        label: "Circuits",
        skills: "oscilloscopes, multimeters, function generators"
      },
      {
        label: "Semiconductor",
        skills: "diodes, FEDs, MOSFETs"
      }
    ],
    materials: [
      "Tensile/impact testing, TGA, DSC, 3D printing",
      "UV-Vis, FTIR, SEM, Raman, XRD, Ellipsometry"
    ],
    other: [
      "Machining: milling machine, lathe",
      "Organic chemistry wet labs"
    ]
  },
  certifications: ["WHMIS 2015", "Machine Shop", "First Aid/CPR"]
};
