import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FlaskConical, Code2, Sparkles, Binary } from "lucide-react";

export default function Hero() {
  const fullText = "Nanotechnology  Engineer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    
    const startTyping = () => {
      let index = 0;
      setDisplayedText("");
      clearInterval(typingInterval);
      typingInterval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) {
          clearInterval(typingInterval);
        }
      }, 75);
    };

    // Start immediately
    startTyping();

    // Repeat every 6.5 seconds
    const loopInterval = setInterval(() => {
      startTyping();
    }, 6500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(loopInterval);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-radial from-slate-50 to-slate-100"
    >
      {/* Decorative Subtle Grid Background */}
      <div className="absolute inset-0 bg-linear-to-b from-white/10 via-slate-500/5 to-transparent pointer-events-none -none" />
      <div 
        className="absolute top-1/4 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" 
        style={{ content: "" }}
      />
      <div 
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" 
        style={{ content: "" }}
      />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center relative z-10">
        
        {/* Left Side: Copy */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-slate-900 tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-2"
          >
            Hi, I'm <br />
            <span className="text-slate-900">Cameron Loi</span>
          </motion.h1>

          {/* Subheading: "Nanotechnology Engineer" with typing animation */}
          <div className="h-10 md:h-12 flex items-center mb-6 block w-full">
            <div className="font-display font-bold text-2xl md:text-3xl text-[#3B82F6] flex items-center tracking-tight">
              <span>{displayedText}</span>
              <span className="w-1 h-6 md:h-8 bg-[#3B82F6] ml-1.5 animate-pulse inline-block self-center" />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-sans text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mb-4"
          >
            Student at the University of Waterloo with experience in materials characterization and electronic systems. I enjoy building things that span from hardware to software and pitching ideas that sit at the intersection of technology and business.
          </motion.p>
        </div>

        {/* Right Side: Profile Image with Floating UI Cards */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 select-none">
            
            {/* Main Picture Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white bg-slate-200 relative group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaB9b27H3oOEd08_y17hcUWHlXTcFG-afQXClkFLuO_M-lPxyaMKOM20RKchS8MvQv-3nIhbfdLSAfydWGia5bK1wjWr9fJdrg93lUn6q1KC3NLI0KTeXoUqQt5jNWCBPLNN_syiOY0vqPiI54-vZChLdLCq34oDMmMLxs0JGWbGidgVGN9OKfS8_WAskkRfBbKolFnudjiok2hDA9TRTM_-kkVz3rtCl7hwpQXpBsPwjj9cSeCR31mKZHra5l_6lDwV_HxOWXHdI"
                alt="Cameron Loi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Mesh decoration */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Card 1: Experience in Material Science (Beaker Icon, Top Right Corner) */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-4 -right-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/60 shadow-lg flex items-center gap-3 max-w-[200px]"
              style={{ x: 10, y: -10 }}
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 border border-orange-200/30">
                <FlaskConical size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-500 font-medium tracking-tight uppercase">Experience in</span>
                <span className="text-xs text-slate-800 font-bold leading-tight">Material Science</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Skills Hardware & Software (Code Icon, Bottom Left Corner) */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 -left-10 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/60 shadow-lg flex items-center gap-3 max-w-[210px]"
              style={{ x: -10, y: 10 }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 shrink-0 border border-blue-200/30">
                <Code2 size={18} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-500 font-medium tracking-tight uppercase">Skills</span>
                <span className="text-xs text-slate-800 font-bold leading-tight">Hardware & Software</span>
              </div>
            </motion.div>

            {/* Micro Nano accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 text-slate-300 opacity-40 hidden sm:block pointer-events-none"
            >
              <Binary size={40} className="stroke-1" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
