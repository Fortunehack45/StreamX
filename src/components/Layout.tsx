import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";
import { MusicBar } from "./MusicBar";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronUp, Play, Disc3, Music } from "lucide-react";

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
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => setIsMusicBarVisible(true)}
            className="fixed bottom-[112px] right-6 md:bottom-8 md:right-8 w-14 h-14 bg-white/10 backdrop-blur-3xl border border-white/10 rounded-full flex items-center justify-center z-40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:bg-white/20 active:scale-90 transition-all group"
            title="Show Music Player"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 animate-pulse" />
              <Music size={24} className="text-white group-hover:scale-110 transition-transform relative z-10" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-black rounded-full" />
            </div>
          </motion.button>
        )}
        {isMusicBarVisible && (
          <MusicBar onToggle={() => setIsMusicBarVisible(false)} />
        )}
      </AnimatePresence>
      <BottomNav />
    </div>
  );
}
