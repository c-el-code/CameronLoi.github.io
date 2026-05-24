import { motion } from "motion/react";
import { Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      id="contact" 
      className="bg-white border-t border-slate-200/50 py-12 md:py-16 mt-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Avatar, Name & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left select-none">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shadow-xs bg-slate-100 shrink-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaB9b27H3oOEd08_y17hcUWHlXTcFG-afQXClkFLuO_M-lPxyaMKOM20RKchS8MvQv-3nIhbfdLSAfydWGia5bK1wjWr9fJdrg93lUn6q1KC3NLI0KTeXoUqQt5jNWCBPLNN_syiOY0vqPiI54-vZChLdLCq34oDMmMLxs0JGWbGidgVGN9OKfS8_WAskkRfBbKolFnudjiok2hDA9TRTM_-kkVz3rtCl7hwpQXpBsPwjj9cSeCR31mKZHra5l_6lDwV_HxOWXHdI"
              alt="Cameron Loi avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-extrabold text-base text-slate-950">
              Cameron Loi
            </span>
          </div>
        </div>

        {/* Right Side: Social links & Scroll To Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            
            {/* LinkedIn Link */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/cameron-loi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 hover:border-blue-200/50 transition-colors shadow-xs"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </motion.a>

            {/* Email Link: pointed to real user email */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:camerondotel@gmail.com"
              className="w-10 h-10 rounded-full border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-rose-600 hover:bg-rose-50/50 hover:border-rose-200/50 transition-colors shadow-xs"
              aria-label="Send email"
            >
              <Mail size={18} />
            </motion.a>

          </div>

          <div className="h-6 w-px bg-slate-200" aria-hidden="true" />

          {/* Scroll To Top Button */}
          <motion.button
            whileHover={{ y: -2 }}
            onClick={handleScrollToTop}
            className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-full hover:text-slate-900 shadow-xs transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
