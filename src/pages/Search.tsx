import { Search, History, TrendingUp, X, Filter, Sparkles, Command } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "../lib/utils";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const recentSearches = ["Interstellar", "The Batman", "Oppenheimer", "Dune"];
  const trending = [
    { title: "Succession", views: "2.4M", color: "from-amber-500/20" },
    { title: "The Bear", views: "1.8M", color: "from-rose-500/20" },
    { title: "Last of Us", views: "4.1M", color: "from-indigo-500/20" },
    { title: "Beef", views: "950K", color: "from-emerald-500/20" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 pt-32 md:pt-48 pb-48 md:pb-32 font-sans relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-white/[0.02] rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Search Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <Sparkles size={14} className="text-indigo-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">Universal Discovery</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-4">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Nexus</span>
          </h1>
        </motion.div>

        {/* Global Search Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-24"
        >
          <div className={cn(
            "relative flex items-center bg-white/[0.03] backdrop-blur-[50px] border border-white/5 rounded-[2.5rem] transition-soft shadow-2xl overflow-hidden",
            isFocused ? "bg-white/[0.06] border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] scale-[1.01]" : ""
          )}>
            <div className="absolute left-8 flex items-center gap-4">
              <Search 
                size={22} 
                className={cn(
                  "transition-colors duration-500",
                  isFocused ? "text-white" : "text-neutral-600"
                )} 
              />
              <div className="w-px h-6 bg-white/10" />
            </div>

            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Query sequence, cinematic art, sonic waves..." 
              className="w-full bg-transparent border-none py-8 md:py-10 pl-24 pr-24 text-xl md:text-2xl text-white placeholder:text-neutral-700 focus:outline-none font-medium tracking-tight"
            />

            <div className="absolute right-8 flex items-center gap-4">
              <AnimatePresence>
                {query && (
                  <motion.button 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setQuery("")}
                    className="p-3 bg-white/5 hover:bg-white/20 rounded-2xl transition-soft active:scale-90"
                  >
                    <X size={20} className="text-neutral-400" />
                  </motion.button>
                )}
              </AnimatePresence>
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white/40 uppercase tracking-widest">
                <Command size={12} /> K
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20">
          {/* Recent Operations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between mb-10 px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                  <History size={16} className="text-indigo-400" />
                </div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">Recent Sequences</h3>
              </div>
              <button className="text-[9px] font-black uppercase tracking-widest text-neutral-700 hover:text-white transition-colors">Clear All</button>
            </div>
            <div className="space-y-3">
              {recentSearches.map((item, i) => (
                <motion.button 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="w-full flex items-center justify-between p-6 px-8 bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.03] hover:border-white/10 rounded-[2rem] transition-soft group"
                >
                  <span className="text-neutral-400 font-bold group-hover:text-white transition-soft tracking-tight text-lg italic">{item}</span>
                  <X size={16} className="text-neutral-800 group-hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Trending Nodes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-10 px-4">
              <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                <TrendingUp size={16} className="text-rose-400" />
              </div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">Trending Nodes</h3>
            </div>
            <div className="space-y-4">
              {trending.map((item, i) => (
                <motion.button 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={cn(
                    "w-full flex items-center gap-6 p-6 px-8 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.03] hover:border-white/10 rounded-[2rem] transition-soft group relative overflow-hidden"
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-1000", item.color)} />
                  <span className="text-xs font-black text-neutral-700 group-hover:text-white transition-soft relative z-10 w-8">0{i + 1}</span>
                  <div className="flex-1 text-left relative z-10">
                    <h4 className="text-lg font-black uppercase italic tracking-tight text-white/90 group-hover:text-white transition-soft">{item.title}</h4>
                    <p className="text-[9px] font-black text-neutral-600 uppercase tracking-widest">{item.views} Transmissions</p>
                  </div>
                  <Sparkles size={16} className="text-white/10 group-hover:text-white/40 transition-soft relative z-10" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cinematic Discovery Hint */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-32 p-12 bg-white/[0.02] backdrop-blur-[100px] border border-white/5 rounded-[4rem] text-center relative overflow-hidden group hover:border-white/10 transition-soft"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/5 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-[3s]" />
          <p className="text-neutral-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed font-medium relative z-10 italic">
            "Nexus filters through billions of data points to synchronize your digital entertainment with absolute precision."
          </p>
          <div className="mt-8 flex justify-center gap-4 relative z-10">
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-pulse" />
             <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
