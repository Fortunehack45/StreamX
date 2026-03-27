import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BottomNav } from "./BottomNav";
import { MusicBar } from "./MusicBar";
import { AnimatePresence, motion } from "motion/react";

export function Layout() {
  const location = useLocation();

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
      <MusicBar />
      <BottomNav />
    </div>
  );
}
