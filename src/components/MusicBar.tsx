import { Play, Heart, MoreHorizontal, Shuffle, SkipBack, SkipForward, Repeat, Disc3, ListMusic, Mic2, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface MusicBarProps {
  onToggle: () => void;
}

export function MusicBar({ onToggle }: MusicBarProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-32 md:bottom-6 left-2 right-2 md:left-[280px] md:right-6 h-16 md:h-20 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl px-3 md:px-6 flex items-center justify-between z-40 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="flex items-center gap-2 md:gap-4 w-1/2 md:w-1/3 overflow-hidden">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center animate-[spin_10s_linear_infinite] shrink-0 shadow-lg relative overflow-hidden">
          <img src="https://picsum.photos/seed/midnight/100/100" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" referrerPolicy="no-referrer" />
          <Disc3 size={16} className="text-white md:w-6 md:h-6 relative z-10" />
          <div className="absolute inset-0 border-4 border-black/20 rounded-full" />
        </div>
        <div className="flex flex-col justify-center overflow-hidden min-w-0">
          <div className="text-white text-xs md:text-sm font-bold hover:underline cursor-pointer tracking-tight truncate">Midnight City</div>
          <div className="text-[10px] md:text-xs text-neutral-400 hover:underline cursor-pointer truncate">M83</div>
        </div>
        <button className="hidden md:block ml-2 text-neutral-400 hover:text-white transition-colors shrink-0">
          <Heart size={16} />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1 md:w-1/3 ml-auto md:ml-0">
        <div className="flex items-center gap-3 md:gap-6">
          <button className="hidden md:block text-neutral-400 hover:text-white transition-colors"><Shuffle size={14} /></button>
          <button className="text-neutral-400 hover:text-white transition-colors"><SkipBack size={16} className="fill-current md:w-[18px] md:h-[18px]" /></button>
          <button className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <Play size={14} className="text-black fill-black ml-0.5 md:w-5 md:h-5" />
          </button>
          <button className="text-neutral-400 hover:text-white transition-colors"><SkipForward size={16} className="fill-current md:w-[18px] md:h-[18px]" /></button>
          <button className="hidden md:block text-neutral-400 hover:text-white transition-colors"><Repeat size={14} /></button>
        </div>
        <div className="hidden md:flex w-full max-w-md items-center gap-3 mt-1.5">
          <span className="text-[10px] text-neutral-400 font-mono font-medium">1:24</span>
          <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden group cursor-pointer relative">
            <div className="h-full bg-white/50 group-hover:bg-indigo-400 w-1/3 relative transition-colors"></div>
          </div>
          <span className="text-[10px] text-neutral-400 font-mono font-medium">4:03</span>
        </div>
      </div>
      
      <div className="flex w-1/3 justify-end items-center gap-2 md:gap-4">
        <button className="hidden md:block text-neutral-400 hover:text-white transition-colors"><Mic2 size={16} /></button>
        <button className="hidden md:block text-neutral-400 hover:text-white transition-colors"><ListMusic size={16} /></button>
        <button className="hidden md:block text-neutral-400 hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
        <button onClick={onToggle} className="text-neutral-400 hover:text-white transition-colors md:ml-2">
          <ChevronDown size={18} />
        </button>
        <div className="hidden md:block w-24 h-1.5 bg-white/10 rounded-full overflow-hidden group cursor-pointer ml-2">
          <div className="h-full bg-white/50 group-hover:bg-indigo-400 w-2/3 transition-colors"></div>
        </div>
      </div>
    </motion.div>
  );
}
