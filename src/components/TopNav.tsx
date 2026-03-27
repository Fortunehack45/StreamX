import { Search, Bell, Hexagon } from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export function TopNav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 right-0 left-0 md:left-64 h-20 z-50 backdrop-blur-xl flex items-center justify-between px-6 md:px-12 transition-all duration-300",
        "bg-gradient-to-b from-black/90 via-black/60 to-transparent text-white border-b border-white/5 md:border-none"
      )}
    >
      {/* Mobile Logo */}
      <div className="md:hidden flex items-center gap-2 text-white">
        <Hexagon className="fill-white" size={24} />
        <span className="font-black tracking-widest uppercase text-sm">StreamX</span>
      </div>

      <div className="flex items-center gap-2 md:gap-6 ml-auto">
        <div className="relative hidden md:block group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors text-neutral-500 group-focus-within:text-white" size={16} />
          <input 
            type="text" 
            placeholder="Search..." 
            className={cn(
              "border rounded-full py-2 pl-11 pr-4 text-sm focus:outline-none transition-all w-64 focus:w-80 backdrop-blur-md",
              "bg-neutral-900/50 border-white/10 text-white placeholder:text-neutral-500 focus:bg-neutral-800 focus:border-neutral-600"
            )}
          />
        </div>
        <button className="md:hidden transition-colors relative p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10">
          <Search size={20} />
        </button>
        <button className="transition-colors relative p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-black"></span>
        </button>
      </div>
    </motion.header>
  );
}
