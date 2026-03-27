import { Search, History, TrendingUp, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "../lib/utils";

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const recentSearches = ["Interstellar", "The Batman", "Oppenheimer", "Dune"];
  const trending = ["Succession", "The Bear", "Last of Us", "Beef"];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 pt-28 md:pt-40 pb-48 md:pb-32 font-sans relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group"
        >
          <div className={cn(
            "relative flex items-center bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
            isFocused ? "bg-white/10 border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.5)] scale-[1.02]" : ""
          )}>
            <Search 
              size={24} 
              className={cn(
                "absolute left-6 transition-colors duration-300",
                isFocused ? "text-white" : "text-neutral-500"
              )} 
            />
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search movies, series, music..." 
              className="w-full bg-transparent border-none py-6 pl-16 pr-16 text-xl text-white placeholder:text-neutral-600 focus:outline-none"
            />
            {query && (
              <button 
                onClick={() => setQuery("")}
                className="absolute right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} className="text-neutral-400" />
              </button>
            )}
          </div>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Recent Searches */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6 px-2">
              <History size={18} className="text-neutral-500" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Recent Searches</h3>
            </div>
            <div className="space-y-2">
              {recentSearches.map((item, i) => (
                <button 
                  key={i}
                  className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group"
                >
                  <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                  <X size={14} className="text-neutral-600 group-hover:text-red-400 transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Trending */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-6 px-2">
              <TrendingUp size={18} className="text-neutral-500" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400">Trending Now</h3>
            </div>
            <div className="space-y-2">
              {trending.map((item, i) => (
                <button 
                  key={i}
                  className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all group"
                >
                  <span className="text-xs font-bold text-neutral-600 group-hover:text-white transition-colors">0{i + 1}</span>
                  <span className="text-neutral-300 group-hover:text-white transition-colors">{item}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-white/5 backdrop-blur-xl border border-white/5 rounded-[40px]">
            <p className="text-neutral-500 text-sm max-w-xs mx-auto leading-relaxed">
              Discover millions of movies, TV shows and people. Explore now.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
