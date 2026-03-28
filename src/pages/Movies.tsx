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
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-12 pt-28 md:pt-40 font-sans pb-48 md:pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 md:mb-12 flex items-end justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
            Cinema
          </h1>
          <p className="text-neutral-400 mt-1 md:mt-2 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs">Explore the best of global cinema</p>
        </div>
      </motion.div>
      
      {/* Bento Grid Featured */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min md:auto-rows-[300px] mb-12 md:mb-16">
        
        {/* Featured Large */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-3 row-span-1 md:row-span-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group cursor-pointer min-h-[400px] md:min-h-0 border border-white/5 hover:border-white/10 transition-soft"
        >
          <img src="https://picsum.photos/seed/movie1/1200/800" className="w-full h-full object-cover transition-soft duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-6 md:p-16 flex flex-col justify-end">
            <div className="flex gap-3 mb-4 md:mb-6">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">Action</span>
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">2026</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-none uppercase">THE VANGUARD</h2>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <button className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-soft shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                <Play size={24} className="fill-black ml-1.5 md:w-8 md:h-8" />
              </button>
              <button className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-soft hover:scale-110">
                <Plus size={24} className="md:w-8 md:h-8" />
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Small Cards */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 md:col-span-1 md:row-span-2 h-full">
          {[2, 3].map((i, index) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer bg-neutral-900 border border-white/5 h-full transition-soft"
            >
              <img src={`https://picsum.photos/seed/movie${i}/400/600`} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-soft duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <div className="group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-sm md:text-2xl font-black mb-1 md:mb-3 leading-tight uppercase tracking-tight">Cinematic {i}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] md:text-sm text-yellow-500 font-black tracking-widest uppercase">
                      <Star size={12} className="fill-yellow-500 md:w-4 md:h-4" /> 4.{i}
                    </div>
                    <ChevronRight size={16} className="text-white md:w-5 md:h-5 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="space-y-16 md:space-y-32">
        
        {/* Sections: Hollywood, Bollywood, K-Drama, etc. */}
        {[
          { title: "Hollywood", sub: "Blockbusters", data: hollywoodMovies },
          { title: "Bollywood", sub: "Hits", data: bollywoodMovies },
          { title: "K-Drama", sub: "Favorites", data: kDramas },
          { title: "Action &", sub: "Adventure", data: actionMovies },
          { title: "Laugh Out", sub: "Loud", data: comedyMovies },
        ].map((section, idx) => (
          <section key={section.title}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-8 md:mb-12 border-b border-white/5 pb-6"
            >
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{section.title} <span className="text-white/20 whitespace-pre">{section.sub}</span></h2>
              <span className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-snappy flex items-center gap-2 group">
                View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {isLoading 
                ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
                : section.data.map((movie, i) => (
                    <MediaCard key={movie.id} {...movie} linkTo={`/movies/${movie.id}`} delay={i * 0.05} />
                  ))
              }
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
