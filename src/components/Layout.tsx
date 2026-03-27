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
  const [isMusicBarVisible, setIsMusicBarVisible] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 relative">
        <TopBar />
        <main className="flex-1 relative pb-48 md:pb-24">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setIsMusicBarVisible(true)}
            className="fixed bottom-[72px] left-0 right-0 md:hidden h-16 bg-white/5 backdrop-blur-3xl border-t border-white/10 px-4 flex items-center justify-between z-40 shadow-2xl cursor-pointer active:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center animate-[spin_12s_linear_infinite] shrink-0 shadow-lg relative overflow-hidden">
                <img src="https://picsum.photos/seed/midnight/100/100" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" referrerPolicy="no-referrer" />
                <Disc3 size={16} className="text-white relative z-10" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-white text-xs font-bold truncate">Midnight City</span>
                <span className="text-neutral-400 text-[10px] truncate">M83</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Play size={20} className="text-white fill-white" />
              </button>
              <div className="w-8 h-8 flex items-center justify-center">
                <ChevronUp size={20} className="text-neutral-500 animate-bounce" />
              </div>
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
