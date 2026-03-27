import { motion } from "motion/react";
import { Play, Plus, ChevronRight } from "lucide-react";
import { MediaCard } from "../components/MediaCard";

const trendingMovies = [
  { id: 1, title: "Cyberpunk: Edgerunners", image: "https://picsum.photos/seed/cyber/800/1200", rating: "4.9", year: "2026", genre: "Sci-Fi", summary: "When humanity's last hope rests on a crew of misfits, they must navigate the treacherous outer rim to find a new home." },
  { id: 2, title: "The Last Horizon", image: "https://picsum.photos/seed/horizon/800/1200", rating: "4.7", year: "2025", genre: "Thriller", summary: "A deep space exploration vessel encounters an anomaly that challenges everything they know about physics and reality." },
  { id: 3, title: "Neon Dreams", image: "https://picsum.photos/seed/neon/800/1200", rating: "4.8", year: "2026", genre: "Cyberpunk", summary: "In a city where memories can be bought and sold, a detective must solve a murder that never happened." },
  { id: 4, title: "Quantum Paradox", image: "https://picsum.photos/seed/quantum/800/1200", rating: "4.6", year: "2024", genre: "Action", summary: "Time travel is real, but the cost is higher than anyone imagined. One man must fix the timeline before it collapses." },
  { id: 5, title: "Midnight City", image: "https://picsum.photos/seed/midnight/800/1200", rating: "4.5", year: "2026", genre: "Drama", summary: "The intertwining lives of five strangers during a massive blackout in the world's most technologically advanced city." },
  { id: 6, title: "Echoes of Time", image: "https://picsum.photos/seed/echoes/800/1200", rating: "4.4", year: "2023", genre: "Mystery", summary: "An ancient artifact is discovered that allows people to hear conversations from the past, uncovering dark secrets." },
];

const topPicks = [
  { id: 7, title: "Solar Flare", image: "https://picsum.photos/seed/solar/800/1200", rating: "4.8", year: "2026", genre: "Sci-Fi", summary: "A massive solar flare threatens Earth, and a team of scientists must find a way to shield the planet." },
  { id: 8, title: "The Silent Code", image: "https://picsum.photos/seed/code/800/1200", rating: "4.6", year: "2025", genre: "Thriller", summary: "A hacker discovers a hidden code in the global financial system that could bring down the world economy." },
  { id: 9, title: "Crimson Sky", image: "https://picsum.photos/seed/crimson/800/1200", rating: "4.7", year: "2026", genre: "Action", summary: "Fighter pilots must defend the last remaining human settlement from an unknown aerial threat." },
  { id: 10, title: "Lost in Translation", image: "https://picsum.photos/seed/lost/800/1200", rating: "4.9", year: "2024", genre: "Drama", summary: "Two strangers form an unlikely bond while navigating a foreign city and their own personal crises." },
];

const continueWatching = [
  { id: 11, title: "Stranger Things", image: "https://picsum.photos/seed/stranger/800/450", progress: 65, ep: "S2:E4" },
  { id: 12, title: "The Witcher", image: "https://picsum.photos/seed/witcher/800/450", progress: 30, ep: "S1:E2" },
  { id: 13, title: "Arcane", image: "https://picsum.photos/seed/arcane/800/450", progress: 85, ep: "S1:E9" },
];

export function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pb-24 font-sans">
      
      {/* Featured Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden mb-12 md:mb-16 group"
      >
        <img 
          src="https://picsum.photos/seed/hero-movie/1920/1080" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-16 flex flex-col justify-end z-10 pt-28">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-black bg-white px-3 py-1 rounded-sm">Exclusive Premiere</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-light text-white mb-4 md:mb-6 tracking-tight leading-[0.9]">
              The Cosmic <span className="italic">Frontier</span>
            </h1>
            <p className="text-white/70 text-sm md:text-lg mb-8 md:mb-10 line-clamp-3 md:line-clamp-none max-w-2xl font-medium leading-relaxed">
              When humanity's last hope rests on a crew of misfits, they must navigate the treacherous outer rim to find a new home. A visually stunning sci-fi epic that redefines the genre.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-white text-black rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transform duration-300">
                <Play size={18} className="fill-current" /> Play
              </button>
              <button className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors hover:scale-105 transform duration-300">
                <Plus size={18} /> My List
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="space-y-12 md:space-y-16 px-4 md:px-12">
        
        {/* Trending Now */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Trending <span className="italic text-white/50">Now</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              Explore <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingMovies.slice(0, 4).map((movie, i) => (
              <MediaCard key={movie.id} {...movie} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* Continue Watching */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Continue <span className="italic text-white/50">Watching</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {continueWatching.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, ease: "easeOut" }}
                className="group relative cursor-pointer bg-neutral-900/50 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <div className="aspect-video bg-neutral-900 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 scale-100 md:scale-90 md:group-hover:scale-100 backdrop-blur-sm bg-black/30 md:bg-transparent">
                      <Play size={20} className="text-white fill-white ml-1 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-sm md:text-base">{item.title}</h3>
                    <span className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest">{item.ep}</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 relative rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-500" style={{ width: `${item.progress}%` }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Picks */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Top Picks <span className="italic text-white/50">For You</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {topPicks.map((movie, i) => (
              <MediaCard key={movie.id} {...movie} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* Award Winning */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Award <span className="italic text-white/50">Winning</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingMovies.slice(2, 6).map((movie, i) => (
              <MediaCard key={movie.id} {...movie} delay={i * 0.1} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
