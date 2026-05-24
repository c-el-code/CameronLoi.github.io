import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, FolderGit2, CheckCircle2, Cpu } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  key?: string | number;
  project: Project;
  layout: "featured" | "grid";
}

export default function ProjectCard({ project, layout }: ProjectCardProps) {
  const [imageError, setImageError] = useState<boolean>(false);

  // Badge styles
  const badgeClasses = {
    gold: "bg-amber-50 border-amber-200/60 text-amber-700 font-bold",
    silver: "bg-slate-100 border-slate-200 text-slate-700 font-semibold",
    blue: "bg-blue-50 border-blue-150 text-blue-700 font-semibold",
    neutral: "bg-stone-50 border-stone-200 text-stone-700 font-semibold uppercase font-mono tracking-wider text-[10px]"
  };

  const isFeatured = layout === "featured";

  // Match corresponding high quality images based on id
  const getPlaceholderImage = (id: string): string => {
    switch (id) {
      case "cadence":
        return "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=850&h=600";
      case "action-2-action":
        return "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=450";
      case "carter-ai":
        return "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600&h=450";
      case "snapstyle":
        return "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=600&h=450";
      case "sponge-spot":
        return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=450";
      case "teng":
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=850&h=600";
      default:
        return "";
    }
  };
  const contentBlock = (
    <div 
      className={`p-4 sm:p-5 flex flex-col justify-between ${
        isFeatured 
          ? "md:col-span-6 flex flex-col justify-center" 
          : "flex-grow"
      }`}
    >
      <div>
        {/* Header row */}
        <div className="flex items-center gap-2 mb-2">
          {project.badge ? (
            <span className={`text-[9px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wider ${badgeClasses[project.badgeType]}`}>
              {project.badge}
            </span>
          ) : (
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-blue-500/95 bg-blue-50/50 px-2 py-0.5 rounded-md border border-blue-100/30">
              {project.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 tracking-tight mb-2 transition-colors text-left">
          {project.title}
        </h3>

        {/* Body items (supports customized lists vs standard blocks) */}
        {project.bullets && project.bullets.length > 0 ? (
          <ul className="space-y-1.5 mb-3">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-slate-500 text-xs sm:text-[13px] leading-relaxed text-left">
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5 animate-pulse" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-3 text-left">
            {project.description}
          </p>
        )}
      </div>

      {/* Footer info: tags & links */}
      <div>
        {/* Tech badges (only render if they exist) */}
        {project.tech && project.tech.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2.5">
            {project.tech.map((t, idx) => (
              <span 
                key={idx} 
                className="font-mono text-[9px] text-slate-500 font-semibold bg-slate-100/70 px-2 py-0.5 rounded-md border border-slate-200/40"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Action Link */}
        {project.actionText && (
          <a
            href={project.actionLink || "#"}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 group/link transition-colors cursor-pointer"
          >
            <span>{project.actionText}</span>
            <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );

  const imageBlock = (
    <div 
      className={`relative overflow-hidden bg-slate-50 shrink-0 select-none ${
        isFeatured 
          ? "md:col-span-6 h-48 sm:h-52 md:h-full border-t md:border-t-0 md:border-l border-slate-200/40" 
          : "h-28 sm:h-32 md:h-36 border-b border-slate-100"
      }`}
    >
      {(!imageError && project.imagePath) ? (
        <img
          src={project.imagePath || getPlaceholderImage(project.id)}
          alt={project.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover select-none transition-transform duration-500 hover:scale-[1.01]"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* High-quality styled gradient fallback as requested for missing assets */
        <div className={`w-full h-full bg-gradient-to-tr ${project.fallbackGradient} flex flex-col items-center justify-center p-6 text-center select-none`}>
          <div className="w-10 h-10 rounded-2xl bg-white/50 backdrop-blur-md border border-white/40 flex items-center justify-center text-slate-500 mb-2 shadow-xs">
            {project.category === "IoT Device" ? <Cpu size={18} /> : <FolderGit2 size={18} />}
          </div>
          <span className="font-display font-bold text-xs text-slate-800 leading-tight">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );

  return (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.15 } }}
      className={`bg-white rounded-2xl border border-slate-200/65 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col ${
        isFeatured 
          ? "md:grid md:grid-cols-12 gap-0 min-h-[290px]" 
          : "h-[390px]"
      }`}
    >
      {isFeatured ? (
        <>
          {contentBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </motion.div>
  );
}
