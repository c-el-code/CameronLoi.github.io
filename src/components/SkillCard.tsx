import { motion } from "motion/react";
import { Laptop, Code2, Wrench, ShieldCheck, Cpu, Microscope } from "lucide-react";
import { technicalSkills } from "../data/skills";

export default function SkillCard() {
  return (
    <div className="space-y-6 select-none">
      
      {/* Top row: Languages and Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Languages Container (40% width approx) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 bg-white rounded-3xl border border-slate-200/60 p-6 flex flex-col gap-4 text-left"
        >
          {/* Top Row: Icon and Header */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100/55 flex items-center justify-center text-blue-500 shrink-0">
              <Code2 size={24} />
            </div>
            <h4 className="font-display font-extrabold text-xl text-slate-900">Languages</h4>
          </div>

          {/* Buttons underneath */}
          <div className="flex flex-wrap gap-2 w-full">
            {technicalSkills.languages.map((lang, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50 transition-colors"
               >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools Container (60% width approx) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-7 bg-white rounded-3xl border border-slate-200/60 p-6 flex flex-col gap-4 text-left"
        >
          {/* Top Row: Icon and Header */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/55 flex items-center justify-center text-orange-500 shrink-0">
              <Wrench size={24} />
            </div>
            <h4 className="font-display font-extrabold text-xl text-slate-900">Tools</h4>
          </div>

          {/* Buttons underneath */}
          <div className="flex flex-wrap gap-2 w-full">
            {technicalSkills.tools.map((tool, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-700 hover:border-slate-300 hover:bg-slate-100/50 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Middle row: Full Width Laboratory Panel */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-8"
      >
        {/* Left Side: Header & Lab Icon aligned to the left side-by-side */}
        <div className="lg:col-span-4 flex flex-row items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100/55 flex items-center justify-center text-emerald-500 shrink-0">
            <Microscope size={24} />
          </div>
          <div>
            <h4 className="font-display font-extrabold text-xl text-slate-900 mb-0.5">Laboratory</h4>
            <p className="font-sans text-xs text-slate-500 font-medium">
              University Lab Experience
            </p>
          </div>
        </div>

        {/* Right Side: Columnar Data grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-l lg:border-l border-slate-100 pl-0 lg:pl-8">
          
          {/* Column 1: Electronics Section */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
              Electronics
            </span>
            <div className="space-y-4">
              {technicalSkills.laboratory.electronics.map((item, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-bold text-slate-700 block mb-0.5">{item.label}</span>
                  <span className="text-slate-500 leading-relaxed block">{item.skills}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Material Characterization */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
              Materials Testing & Characterization
            </span>
            <div className="space-y-3.5">
              {technicalSkills.laboratory.materials.map((m, idx) => (
                <div key={idx} className="text-xs text-slate-500 leading-relaxed">
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Other Machining */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-mono tracking-wider font-bold text-slate-400 uppercase">
              Other
            </span>
            <div className="space-y-3.5">
              {technicalSkills.laboratory.other.map((o, idx) => (
                <div key={idx} className="text-xs text-slate-500 leading-relaxed">
                  {o}
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

      {/* Bottom row: Certifications horizontal bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-3xl border border-slate-200/60 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/55 flex items-center justify-center text-indigo-500 shrink-0">
            <ShieldCheck size={24} />
          </div>
          <h4 className="font-display font-extrabold text-xl text-slate-900">Certifications</h4>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2 w-full md:justify-end text-left">
          {technicalSkills.certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
