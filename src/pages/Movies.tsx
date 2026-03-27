import { motion } from "motion/react";
import { Play, Star, Plus, ChevronRight } from "lucide-react";
import { MediaCard } from "../components/MediaCard";
import { MediaCardSkeleton } from "../components/MediaCardSkeleton";
import { useState, useEffect } from "react";

const hollywoodMovies = [
  { id: 1, title: "The Quantum Protocol", image: "https://picsum.photos/seed/hollywood1/800/1200", rating: "4.8", year: "2026", genre: "Action", summary: "A rogue agent must stop a global conspiracy before a new quantum weapon is unleashed." },
  { id: 2, title: "Neon Nights", image: "https://picsum.photos/seed/hollywood2/800/1200", rating: "4.5", year: "2025", genre: "Thriller", summary: "In a city that never sleeps, a detective uncovers a dark secret hidden in the neon lights." },
  { id: 3, title: "Beyond the Stars", image: "https://picsum.photos/seed/hollywood3/800/1200", rating: "4.9", year: "2026", genre: "Sci-Fi", summary: "Humanity's first interstellar mission encounters an alien intelligence that changes everything." },
  { id: 4, title: "The Last Stand", image: "https://picsum.photos/seed/hollywood4/800/1200", rating: "4.6", year: "2024", genre: "Drama", summary: "A small town sheriff must defend his home against a ruthless cartel." },
];

const bollywoodMovies = [
  { id: 5, title: "Mumbai Dreams", image: "https://picsum.photos/seed/bollywood1/800/1200", rating: "4.7", year: "2026", genre: "Romance", summary: "Two aspiring actors fall in love while navigating the cutthroat world of Bollywood." },
  { id: 6, title: "The Don's Legacy", image: "https://picsum.photos/seed/bollywood2/800/1200", rating: "4.8", year: "2025", genre: "Action", summary: "The son of a notorious crime boss must choose between his family's legacy and his own path." },
  { id: 7, title: "Festival of Colors", image: "https://picsum.photos/seed/bollywood3/800/1200", rating: "4.5", year: "2026", genre: "Comedy", summary: "A chaotic family reunion during Holi leads to hilarious misunderstandings and heartwarming moments." },
  { id: 8, title: "Warrior Princess", image: "https://picsum.photos/seed/bollywood4/800/1200", rating: "4.9", year: "2024", genre: "Historical", summary: "The epic tale of a legendary queen who fought to protect her kingdom from invaders." },
];

const kDramas = [
  { id: 9, title: "Seoul Searching", image: "https://picsum.photos/seed/kdrama1/800/1200", rating: "4.9", year: "2026", genre: "Romance", summary: "A tech CEO and a struggling artist find love in the bustling streets of Seoul." },
  { id: 10, title: "The Heir's Secret", image: "https://picsum.photos/seed/kdrama2/800/1200", rating: "4.7", year: "2025", genre: "Drama", summary: "A hidden heir to a massive conglomerate must navigate corporate espionage and family betrayal." },
  { id: 11, title: "Midnight Diner", image: "https://picsum.photos/seed/kdrama3/800/1200", rating: "4.8", year: "2026", genre: "Slice of Life", summary: "A mysterious chef serves up comfort food and life advice to his late-night patrons." },
  { id: 12, title: "Ghost Detectives", image: "https://picsum.photos/seed/kdrama4/800/1200", rating: "4.6", year: "2024", genre: "Fantasy", summary: "A team of investigators solves crimes committed by supernatural entities." },
];

const actionMovies = [
  { id: 13, title: "Velocity", image: "https://picsum.photos/seed/action1/800/1200", rating: "4.5", year: "2026", genre: "Action", summary: "A high-speed chase across Europe to recover a stolen prototype." },
  { id: 14, title: "The Mercenary", image: "https://picsum.photos/seed/action2/800/1200", rating: "4.7", year: "2025", genre: "Action", summary: "A retired mercenary is pulled back into the game for one last mission." },
  { id: 15, title: "Explosive Force", image: "https://picsum.photos/seed/action3/800/1200", rating: "4.6", year: "2026", genre: "Action", summary: "A bomb disposal expert must outsmart a mastermind who has rigged the city." },
  { id: 16, title: "Shadow Ops", image: "https://picsum.photos/seed/action4/800/1200", rating: "4.8", year: "2024", genre: "Action", summary: "An elite covert team executes impossible missions behind enemy lines." },
];

const comedyMovies = [
  { id: 17, title: "The Weekend Getaway", image: "https://picsum.photos/seed/comedy1/800/1200", rating: "4.4", year: "2026", genre: "Comedy", summary: "A relaxing weekend trip turns into a disaster of epic proportions." },
  { id: 18, title: "Office Politics", image: "https://picsum.photos/seed/comedy2/800/1200", rating: "4.6", year: "2025", genre: "Comedy", summary: "Coworkers compete for a promotion in the most absurd ways possible." },
  { id: 19, title: "My Crazy Family", image: "https://picsum.photos/seed/comedy3/800/1200", rating: "4.5", year: "2026", genre: "Comedy", summary: "A man introduces his fiancée to his eccentric and overwhelming family." },
  { id: 20, title: "The Roommate", image: "https://picsum.photos/seed/comedy4/800/1200", rating: "4.7", year: "2024", genre: "Comedy", summary: "Two polar opposites are forced to live together, leading to hilarious clashes." },
];

export function Movies() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-12 pt-4 md:pt-8 font-sans pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 md:mb-12 flex items-end justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
            Cinema
          </h1>
          <p className="text-neutral-400 mt-1 md:mt-2 font-medium tracking-wide text-xs md:text-sm">Explore the best of global cinema</p>
        </div>
      </motion.div>
      
      {/* Bento Grid Featured */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] mb-12 md:mb-16">
        
        {/* Featured Large */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-3 row-span-1 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer"
        >
          <img src="https://picsum.photos/seed/movie1/1200/800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 md:p-12 flex flex-col justify-end">
            <div className="flex gap-2 mb-2 md:mb-4">
              <span className="px-2 md:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[9px] md:text-xs font-bold uppercase tracking-wider">Action</span>
              <span className="px-2 md:px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[9px] md:text-xs font-bold uppercase tracking-wider">2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-3 md:mb-6 tracking-tighter leading-none">THE VANGUARD</h2>
            <div className="flex items-center gap-3 md:gap-4">
              <button className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <Play size={16} className="fill-black ml-1 md:w-6 md:h-6" />
              </button>
              <button className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                <Plus size={16} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Small Cards */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 md:col-span-1 md:row-span-2 h-full">
          {[2, 3].map((i, index) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer bg-neutral-900 h-full"
            >
              <img src={`https://picsum.photos/seed/movie${i}/400/600`} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 md:opacity-80 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xs md:text-xl font-bold mb-1 md:mb-2 leading-tight truncate">Cinematic {i}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-yellow-500 font-bold">
                      <Star size={10} className="fill-yellow-500 md:w-3.5 md:h-3.5" /> 4.{i}
                    </div>
                    <ChevronRight size={12} className="text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity md:w-4 md:h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="space-y-12 md:space-y-16">
        
        {/* Hollywood Blockbusters */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Hollywood <span className="italic text-white/50">Blockbusters</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : hollywoodMovies.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} linkTo={`/movies/${movie.id}`} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* Bollywood Hits */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Bollywood <span className="italic text-white/50">Hits</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : bollywoodMovies.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} linkTo={`/movies/${movie.id}`} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* K-Dramas */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">K-Drama <span className="italic text-white/50">Favorites</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : kDramas.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} linkTo={`/movies/${movie.id}`} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* Action & Adventure */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Action & <span className="italic text-white/50">Adventure</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : actionMovies.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} linkTo={`/movies/${movie.id}`} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

        {/* Comedy */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Laugh Out <span className="italic text-white/50">Loud</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
              : comedyMovies.map((movie, i) => (
                  <MediaCard key={movie.id} {...movie} linkTo={`/movies/${movie.id}`} delay={i * 0.1} />
                ))
            }
          </div>
        </section>

      </div>
    </div>
  );
}
