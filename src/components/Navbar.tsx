import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if backdrop filter should activate
      setIsScrolled(window.scrollY > 20);

      // Track current section for item highlighting
      const scrollPosition = window.scrollY + 200;
      
      const sections = ["projects", "experience", "skills", "contact"];
      let currentSection = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      // Fallback for bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ top: offsetTop > 0 ? offsetTop : 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2 md:p-3 transition-all duration-300">
      <nav 
        id="navbar"
        className={`w-full max-w-5xl flex items-center justify-between py-2 px-6 md:px-8 rounded-full border border-slate-200/60 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-lg shadow-sm" 
            : "bg-white/60 backdrop-blur-sm shadow-xs"
        }`}
      >
        {/* Left Navbar: Brand */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img 
            alt="Camel Logo" 
            className="w-8 h-8 rounded-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUCjYSgYPgkLLZUs2WCOB50sr2pXGS8HXhtniwLM58Wtl7m92q7_mtJkhopD6wegq3FCmogApLWxizaoVi0XZ-CN-YWWazUW8ueuekOFlD6PYLJuLTjbZmyq6UdZuorsdNP5vgZTRJcb65EWYXHRXHIgd61iHaoenEQIIfwFV2t7NbONd4FQ1VXZwyb-FboF9c12sJ54OHVpRm6CB9ZIBpnGM_cO5Gg6rD4bF2zIT2PUt1Riz2EFZ6aQc5w8qvg7VVdh1YQq1xUiQ"
          />
          <span className="font-display font-semibold tracking-tight text-slate-900 text-lg md:text-xl">
            Cam L
          </span>
        </a>

        {/* Right Navbar: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full hover:text-blue-650 ${
                  isActive ? "text-blue-600 font-semibold" : "text-slate-500/90"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-blue-50/80 border border-blue-100/30 rounded-full -z-10"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Mobile menu trigger */}
        <button 
          id="mobile-menu-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-1.5 focus:outline-hidden md:hidden text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-colors"
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 p-6 rounded-3xl shadow-xl flex flex-col gap-4 md:hidden z-40"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive 
                      ? "bg-blue-50/80 text-blue-600" 
                      : "text-slate-600 hover:bg-slate-50/50"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`w-1.5 h-1.5 rounded-full transition-transform ${isActive ? "bg-blue-500 scale-100" : "bg-transparent scale-0"}`} />
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
