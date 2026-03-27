import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";
import { MusicBar } from "./MusicBar";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ChevronUp } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const [isMusicBarVisible, setIsMusicBarVisible] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 relative">
        <TopBar />
        <main className="flex-1 relative pb-24 md:pt-20">
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
        {isMusicBarVisible ? (
          <MusicBar onToggle={() => setIsMusicBarVisible(false)} />
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMusicBarVisible(true)}
            className="fixed bottom-24 md:bottom-6 right-4 md:right-6 p-2.5 md:p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-white z-50 hover:bg-white/20 transition-all shadow-lg"
          >
            <ChevronUp size={18} className="md:w-5 md:h-5" />
          </motion.button>
        )}
      </AnimatePresence>
      <BottomNav />
    </div>
  );
}
