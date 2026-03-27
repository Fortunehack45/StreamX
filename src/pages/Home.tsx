import { motion } from "motion/react";
import { Play, Plus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MediaCard } from "../components/MediaCard";
import { MediaCardSkeleton } from "../components/MediaCardSkeleton";
import { useState, useEffect } from "react";

const trendingMovies = [
  { id: 1, title: "Cyberpunk: Edgerunners", image: "https://picsum.photos/seed/cyber/800/1200", rating: "4.9", year: "2026", genre: "Sci-Fi", summary: "When humanity's last hope rests on a crew of misfits, they must navigate the treacherous outer rim to find a new home.", linkTo: "/movies/1" },
  { id: 2, title: "The Last Horizon", image: "https://picsum.photos/seed/horizon/800/1200", rating: "4.7", year: "2025", genre: "Thriller", summary: "A deep space exploration vessel encounters an anomaly that challenges everything they know about physics and reality.", linkTo: "/movies/2" },
  { id: 3, title: "Neon Dreams", image: "https://picsum.photos/seed/neon/800/1200", rating: "4.8", year: "2026", genre: "Cyberpunk", summary: "In a city where memories can be bought and sold, a detective must solve a murder that never happened.", linkTo: "/movies/3" },
  { id: 4, title: "Quantum Paradox", image: "https://picsum.photos/seed/quantum/800/1200", rating: "4.6", year: "2024", genre: "Action", summary: "Time travel is real, but the cost is higher than anyone imagined. One man must fix the timeline before it collapses.", linkTo: "/movies/4" },
];

const topPicks = [
  { id: 7, title: "Solar Flare", image: "https://picsum.photos/seed/solar/800/1200", rating: "4.8", year: "2026", genre: "Sci-Fi", summary: "A massive solar flare threatens Earth, and a team of scientists must find a way to shield the planet.", linkTo: "/movies/7" },
  { id: 8, title: "The Silent Code", image: "https://picsum.photos/seed/code/800/1200", rating: "4.6", year: "2025", genre: "Thriller", summary: "A hacker discovers a hidden code in the global financial system that could bring down the world economy.", linkTo: "/movies/8" },
  { id: 9, title: "Crimson Sky", image: "https://picsum.photos/seed/crimson/800/1200", rating: "4.7", year: "2026", genre: "Action", summary: "Fighter pilots must defend the last remaining human settlement from an unknown aerial threat.", linkTo: "/movies/9" },
  { id: 10, title: "Lost in Translation", image: "https://picsum.photos/seed/lost/800/1200", rating: "4.9", year: "2024", genre: "Drama", summary: "Two strangers form an unlikely bond while navigating a foreign city and their own personal crises.", linkTo: "/movies/10" },
];

const trendingPodcasts = [
  { id: 101, title: "The Daily Tech", image: "https://picsum.photos/seed/tech/800/1200", rating: "4.9", year: "2026", genre: "Technology", summary: "Stay ahead of the curve with the latest in tech, AI, and innovation.", linkTo: "/podcasts/101" },
  { id: 102, title: "Crime Scene", image: "https://picsum.photos/seed/crime/800/1200", rating: "4.7", year: "2025", genre: "True Crime", summary: "Uncovering the world's most mysterious unsolved cases.", linkTo: "/podcasts/102" },
  { id: 103, title: "Mindset Matters", image: "https://picsum.photos/seed/mindset/800/1200", rating: "4.8", year: "2026", genre: "Self-Help", summary: "Unlock your potential with expert advice on mental health and growth.", linkTo: "/podcasts/103" },
  { id: 104, title: "History Unveiled", image: "https://picsum.photos/seed/history/800/1200", rating: "4.6", year: "2024", genre: "History", summary: "Exploring the hidden stories that shaped our world.", linkTo: "/podcasts/104" },
];

const topMusic = [
  { id: 201, title: "Midnight Echoes", image: "https://picsum.photos/seed/echoes-music/800/1200", rating: "4.9", year: "2026", genre: "Synthwave", summary: "A journey through neon-lit streets and retro-futuristic landscapes.", linkTo: "/audio/201" },
  { id: 202, title: "Urban Pulse", image: "https://picsum.photos/seed/urban/800/1200", rating: "4.7", year: "2025", genre: "Lo-Fi", summary: "Chill beats for late-night study sessions or relaxation.", linkTo: "/audio/202" },
  { id: 203, title: "Celestial Harmonies", image: "https://picsum.photos/seed/celestial/800/1200", rating: "4.8", year: "2026", genre: "Ambient", summary: "Ethereal soundscapes that transport you to the stars.", linkTo: "/audio/203" },
  { id: 204, title: "Electric Soul", image: "https://picsum.photos/seed/soul/800/1200", rating: "4.6", year: "2024", genre: "Electronic", summary: "A fusion of soul and electronic beats that will move your spirit.", linkTo: "/audio/204" },
];

const continueWatching = [
  { id: 11, title: "Stranger Things", image: "https://picsum.photos/seed/stranger/800/450", progress: 65, ep: "S2:E4", linkTo: "/series/11" },
  { id: 12, title: "The Witcher", image: "https://picsum.photos/seed/witcher/800/450", progress: 30, ep: "S1:E2", linkTo: "/series/12" },
  { id: 13, title: "Arcane", image: "https://picsum.photos/seed/arcane/800/450", progress: 85, ep: "S1:E9", linkTo: "/series/13" },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-48 md:pb-32 font-sans">
      
      {/* Featured Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full min-h-[75vh] md:min-h-[90vh] flex flex-col justify-end overflow-hidden mb-12 md:mb-20 group"
      >
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/hero-movie/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative p-6 md:p-20 pt-28 md:pt-40 pb-20 md:pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-black bg-white px-4 py-1.5 rounded-sm">Exclusive Premiere</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black tracking-tighter text-white mb-6 leading-[0.8] uppercase">
              The Cosmic <span className="italic text-white/50">Frontier</span>
            </h1>
            <p className="text-white/60 text-sm md:text-xl mb-10 line-clamp-3 md:line-clamp-none max-w-2xl font-bold leading-relaxed tracking-tight">
              When humanity's last hope rests on a crew of misfits, they must navigate the treacherous outer rim to find a new home. A visually stunning sci-fi epic that redefines the genre.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/movies/1" className="flex items-center justify-center gap-4 px-10 md:px-14 py-4 md:py-5 bg-white text-black rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-105 transform duration-300">
                <Play size={20} className="fill-black" /> Play Now
              </Link>
              <button className="flex items-center justify-center gap-4 px-10 md:px-14 py-4 md:py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:bg-white/20 transition-all hover:scale-105 transform duration-300">
                <Plus size={20} /> My List
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="space-y-20 md:space-y-32 px-6 md:px-20">
        
        {/* Trending Now */}
        <section>
          <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Trending <span className="text-white/20">Now</span></h2>
            <Link to="/movies" className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              Explore All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : trendingMovies.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* Continue Watching */}
        <section>
          <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Continue <span className="text-white/20">Watching</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {continueWatching.map((item, i) => (
              <Link to={item.linkTo} key={item.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, ease: "easeOut" }}
                  className="group relative cursor-pointer bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 shadow-lg hover:shadow-2xl"
                >
                  <div className="aspect-video bg-neutral-900 overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 scale-100 md:scale-90 md:group-hover:scale-100 backdrop-blur-md bg-black/30 md:bg-transparent">
                        <Play size={24} className="text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white font-black text-sm md:text-base uppercase tracking-tight">{item.title}</h3>
                      <span className="text-neutral-500 text-[10px] font-black uppercase tracking-widest">{item.ep}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 relative rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full bg-white transition-all duration-1000 ease-out" style={{ width: `${item.progress}%` }}></div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Podcasts */}
        <section>
          <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Top <span className="text-white/20">Podcasts</span></h2>
            <Link to="/podcasts" className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              Listen Now <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : trendingPodcasts.map((podcast, i) => (
                  <MediaCard key={podcast.id} {...podcast} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* Top Music */}
        <section>
          <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Music <span className="text-white/20">Charts</span></h2>
            <Link to="/audio" className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              Play All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : topMusic.map((track, i) => (
                  <MediaCard key={track.id} {...track} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* Top Picks */}
        <section>
          <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Top Picks <span className="text-white/20">For You</span></h2>
            <span className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-colors flex items-center gap-2">
              View All <ChevronRight size={16} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : topPicks.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

      </div>
    </div>
  );
}
