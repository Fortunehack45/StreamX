import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";
import { MusicBar } from "./MusicBar";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronUp, Play, Disc3 } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const [isMusicBarVisible, setIsMusicBarVisible] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 md:ml-[calc(16rem+2rem)] relative">
        <TopBar />
        <main className="flex-1 relative pb-48 md:pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="w-full h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <AnimatePresence>
        {!isMusicBarVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={() => setIsMusicBarVisible(true)}
            className="fixed bottom-[112px] left-6 right-6 md:bottom-8 md:left-auto md:right-8 md:w-80 h-16 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-[24px] px-4 flex items-center justify-between z-40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer active:scale-95 transition-transform group"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center animate-[spin_12s_linear_infinite] shrink-0 shadow-lg relative overflow-hidden">
                <img src="https://picsum.photos/seed/midnight/100/100" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" referrerPolicy="no-referrer" />
                <Disc3 size={16} className="text-white relative z-10" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white text-xs font-bold truncate">Midnight City</span>
                <span className="text-neutral-400 text-[10px] truncate">M83</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <Play size={16} className="text-white fill-white" />
              </div>
              <ChevronUp size={20} className="text-neutral-500 animate-bounce" />
            </div>
          </motion.div>
        )}
        {isMusicBarVisible && (
          <MusicBar onToggle={() => setIsMusicBarVisible(false)} />
        )}
      </AnimatePresence>
      <BottomNav />
    </div>
  );
}
