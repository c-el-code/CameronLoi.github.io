import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
  align = "left"
}: SectionWrapperProps) {
  const isCentered = align === "center";

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth apple-style cubic-bezier
      className={`py-12 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 ${className}`}
    >
      <div className={`mb-6 md:mb-8 flex flex-col ${isCentered ? "items-center text-center" : "items-start text-left"}`}>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="font-sans text-slate-500 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div>{children}</div>
    </motion.section>
  );
}
