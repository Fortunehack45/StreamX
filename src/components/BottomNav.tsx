import { Home, Film, Tv, Music, Mic, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const navItems = [
  { icon: Home, path: "/", label: "Home" },
  { icon: Film, path: "/movies", label: "Movies" },
  { icon: Tv, path: "/series", label: "Series" },
  { icon: Music, path: "/audio", label: "Audio" },
  { icon: Mic, path: "/podcasts", label: "Podcasts" },
  { icon: Download, path: "/downloader", label: "Save" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-8 left-6 right-6 z-50">
      <div className="bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-[32px] px-3 py-3 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-x-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative flex items-center justify-center h-12 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                isActive ? "px-6 bg-white/10 shadow-[0_8px_20px_rgba(255,255,255,0.05)]" : "w-12 hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute inset-0 bg-white/5 rounded-2xl border border-white/10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="flex items-center gap-3 relative z-10">
                <Icon 
                  size={20} 
                  className={cn(
                    "transition-all duration-500", 
                    isActive ? "text-white scale-110" : "text-neutral-500 group-hover:text-neutral-300"
                  )} 
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0, x: -10 }}
                      animate={{ opacity: 1, width: "auto", x: 0 }}
                      exit={{ opacity: 0, width: 0, x: -10 }}
                      className="text-[11px] font-black uppercase tracking-widest text-white overflow-hidden whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
