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
  { icon: Download, path: "/downloader", label: "Downloader" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      <div className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-x-auto scrollbar-hide">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "relative p-3 flex items-center justify-center h-12 rounded-full flex-shrink-0 transition-all duration-300",
                isActive ? "px-5 bg-white/10" : "w-12"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <div className="flex items-center gap-2 relative z-10">
                <Icon 
                  size={20} 
                  className={cn(
                    "transition-all duration-300", 
                    isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                  )} 
                />
                <AnimatePresence>
                  {isActive && (
                    <motion.span 
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="text-xs font-bold text-white tracking-wide overflow-hidden whitespace-nowrap"
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
