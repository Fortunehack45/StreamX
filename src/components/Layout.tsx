import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";
import { AnimatePresence, motion } from "motion/react";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 md:ml-64 relative">
        <TopNav />
        <main className="flex-1 relative pb-24 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
