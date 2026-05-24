import { motion } from "motion/react";
import { Linkedin, Mail, ArrowUp, MessageCircle } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-white border-t border-slate-200/50 mt-20">

      {/* ── Connect With Me Section ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50/80 via-slate-50 to-indigo-50/60 border border-blue-100/50 px-8 py-12 md:px-14 md:py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />

          {/* Left: heading + description */}
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center text-white shadow-sm shrink-0">
                <MessageCircle size={17} />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-500/90">
                Get in touch
              </span>
            </div>

            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Let's connect!
            </h3>
          </div>

          {/* Right: action buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:camerondotel@gmail.com"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded-2xl shadow-sm transition-colors"
            >
              <Mail size={16} />
              Send an email
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/cameron-loi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-2xl border border-slate-200/80 shadow-xs transition-colors"
            >
              <Linkedin size={16} className="text-blue-600" />
              Connect on LinkedIn
            </motion.a>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-slate-100 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Avatar + Name */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left select-none">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-xs bg-slate-100 shrink-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaB9b27H3oOEd08_y17hcUWHlXTcFG-afQXClkFLuO_M-lPxyaMKOM20RKchS8MvQv-3nIhbfdLSAfydWGia5bK1wjWr9fJdrg93lUn6q1KC3NLI0KTeXoUqQt5jNWCBPLNN_syiOY0vqPiI54-vZChLdLCq34oDMmMLxs0JGWbGidgVGN9OKfS8_WAskkRfBbKolFnudjiok2hDA9TRTM_-kkVz3rtCl7hwpQXpBsPwjj9cSeCR31mKZHra5l_6lDwV_HxOWXHdI"
                alt="Cameron Loi avatar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-extrabold text-sm text-slate-950">
                Cameron Loi
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Nanotechnology Engineer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              onClick={handleScrollToTop}
              className="p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-full hover:text-slate-900 shadow-xs transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={15} />
            </motion.button>
          </div>

        </div>
      </div>

    </footer>
  );
}
