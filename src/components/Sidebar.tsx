import { Link, useLocation } from "react-router-dom";
import { Home, Film, Tv, Music, Mic, Download, X } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Movies", path: "/movies", icon: Film },
  { name: "Series", path: "/series", icon: Tv },
  { name: "Music", path: "/audio", icon: Music },
  { name: "Podcasts", path: "/podcasts", icon: Mic },
  { name: "Downloader", path: "/downloader", icon: Download },
];

export function Sidebar() {
  const [showPremiumBanner, setShowPremiumBanner] = useState(true);
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-2rem)] fixed left-4 top-4 bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-[32px] z-40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="h-20 flex items-center px-8 shrink-0">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-white font-black text-2xl tracking-tighter uppercase italic">
            STREAMX<span className="text-red-500">.</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto scrollbar-hide">
        <div className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.3em] mb-8 px-4">Navigation</div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-500 group relative overflow-hidden",
                isActive 
                  ? "text-white bg-white/5 border border-white/10 shadow-[0_4px_20px_rgba(255,255,255,0.05)]" 
                  : "text-neutral-500 hover:text-neutral-300 hover:bg-white/[0.02]"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="sidebarActive"
                  className="absolute left-0 w-1 h-5 bg-white rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <item.icon size={18} className={cn("transition-all duration-500 group-hover:scale-110", isActive ? "text-white" : "text-neutral-500")} />
              <span className="text-sm font-bold tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 shrink-0">
        <AnimatePresence>
          {showPremiumBanner && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl relative overflow-hidden group mb-6"
            >
              <button 
                onClick={() => setShowPremiumBanner(false)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 text-neutral-500 hover:text-white transition-all z-10"
              >
                <X size={14} />
              </button>
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors" />
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-2 text-white">Premium Plan</h4>
              <p className="text-[10px] text-neutral-500 mb-4 leading-relaxed">Experience 4K HDR and spatial audio.</p>
              <button className="w-full py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-all shadow-lg">
                Upgrade Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <Link to="/profile" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-all duration-500 w-full p-2.5 rounded-2xl hover:bg-white/5 group">
          <div className="w-10 h-10 rounded-2xl overflow-hidden bg-neutral-900 shrink-0 border border-white/10 group-hover:border-white/20 transition-all duration-500">
            <img src="https://picsum.photos/seed/avatar/100/100" alt="User" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col items-start overflow-hidden">
            <span className="text-sm font-bold text-white truncate w-full text-left tracking-tight">Fourtua𝕏</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-black">Pro Member</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
