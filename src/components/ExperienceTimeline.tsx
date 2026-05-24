import React, { useState } from "react";
import { motion } from "motion/react";
import { experiences, ExperienceItem } from "../data/experience";

function CompanyLogo({ id, companyName, logoUrl }: { id: string; companyName: string; logoUrl?: string }) {
  const [imgError, setImgError] = useState(false);

  if (logoUrl && !imgError) {
    return (
      <img 
        src={logoUrl} 
        alt={`${companyName} logo`}
        className="w-10 h-10 rounded-lg object-contain bg-white border border-slate-200/80 p-0.5 shrink-0"
        onError={() => setImgError(true)}
        referrerPolicy="no-referrer"
      />
    );
  }

  // Pre-styled corporate color branding fallbacks in case images have not been uploaded yet
  let fallbackBg = "bg-slate-100 text-slate-600";
  let fallbackText = companyName.charAt(0);

  if (id === "voestalpine") {
    fallbackBg = "bg-blue-650 text-white font-extrabold";
    fallbackText = "VA";
  } else if (id === "startup-ecosystem") {
    fallbackBg = "bg-rose-600 text-white font-extrabold";
    fallbackText = "SE";
  } else if (id === "md-pharma") {
    fallbackBg = "bg-sky-500 text-white font-extrabold";
    fallbackText = "MD";
  } else if (id === "formula-nano") {
    fallbackBg = "bg-red-650 text-white font-extrabold";
    fallbackText = "FN";
  }

  return (
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-black tracking-wider shrink-0 uppercase select-none ${fallbackBg}`}>
      {fallbackText}
    </div>
  );
}

export default function ExperienceTimeline() {
  // Theme styling dictionaries based on coop versus student club types from diagram
  const getCardTheme = (badgeColor: "blue" | "orange" | "amber") => {
    switch (badgeColor) {
      case "blue":
        return {
          borderAccent: "border-l-4 border-l-blue-500",
          badgeClass: "bg-blue-50 text-blue-700 border-blue-200/50",
          dotColor: "bg-blue-500 ring-blue-100",
          tagStyle: "bg-blue-50/60 hover:bg-blue-100 border-blue-200/40 text-blue-700"
        };
      case "orange":
      case "amber":
        return {
          borderAccent: "border-l-4 border-l-amber-500",
          badgeClass: "bg-amber-50 text-amber-700 border-amber-200/50",
          dotColor: "bg-amber-500 ring-amber-100",
          tagStyle: "bg-amber-50/60 hover:bg-amber-100 border-amber-200/40 text-amber-700"
        };
      default:
        return {
          borderAccent: "border-l-4 border-l-slate-400",
          badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
          dotColor: "bg-slate-400 ring-slate-100",
          tagStyle: "bg-slate-50 border-slate-200 text-slate-700 font-medium"
        };
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto py-6 pl-8 sm:pl-10">
      {/* Timeline track line running vertically */}
      <div 
        className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500/20 via-slate-200 to-amber-500/20"
        aria-hidden="true"
      />

      <div className="space-y-6 relative">
        {experiences.map((experience: ExperienceItem, idx: number) => {
          const theme = getCardTheme(experience.badgeColor);
          
          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group text-left"
            >
              {/* Core Timeline Dot Node */}
              <div 
                className={`absolute -left-[23px] sm:-left-[31px] top-5 w-3.5 h-3.5 rounded-full ${theme.dotColor} ring-4 transition-transform duration-300 group-hover:scale-125 z-10`}
              />

              <div 
                className={`bg-white rounded-2xl shadow-xs hover:shadow-md border border-slate-200/60 p-4 sm:p-5 transition-shadow ${theme.borderAccent}`}
              >
                {/* Header Block: Title and Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <CompanyLogo 
                      id={experience.id} 
                      companyName={experience.company} 
                      logoUrl={experience.logoUrl} 
                    />
                    <h4 className="font-display font-extrabold text-base text-slate-900 tracking-tight">
                      {experience.company}
                    </h4>
                  </div>
                  <span className={`inline-self-start sm:inline-self-auto text-[9px] px-2 py-0.5 rounded-full border shrink-0 font-bold ${theme.badgeClass}`}>
                    {experience.badge}
                  </span>
                </div>

                {/* Subtitle Block: Role and Duration */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs mb-3 gap-1 text-slate-500">
                  <span className="font-sans font-semibold text-slate-600 text-left">
                    {experience.role}
                  </span>
                  <span className="font-mono text-[10px] text-slate-400">
                    {experience.duration}
                  </span>
                </div>

                {/* Body: Bullet Descriptions */}
                <ul className="space-y-1.5 mb-4 pl-3.5 list-disc text-slate-500 text-xs leading-relaxed marker:text-slate-400 text-left">
                  {experience.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-slate-700 transition-colors">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tags (optional) */}
                {experience.tags && experience.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {experience.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[9px] px-2 py-0.5 rounded-md border font-medium ${theme.tagStyle} transition-colors`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}