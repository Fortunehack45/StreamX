import { motion } from "motion/react";
import { Play, Plus, ChevronRight } from "lucide-react";
import { MediaCard } from "../components/MediaCard";

const trendingSeries = [
  { id: 1, title: "The Anomaly", image: "https://picsum.photos/seed/anomaly/800/1200", rating: "4.9", year: "2026", genre: "Sci-Fi", summary: "A mysterious signal from deep space triggers a global event that alters human DNA." },
  { id: 2, title: "Deep Dive", image: "https://picsum.photos/seed/deep/800/1200", rating: "4.7", year: "2025", genre: "Thriller", summary: "An investigative journalist uncovers a massive conspiracy involving the world's largest tech company." },
  { id: 3, title: "Echoes", image: "https://picsum.photos/seed/echoes2/800/1200", rating: "4.8", year: "2026", genre: "Mystery", summary: "A small town is rocked by a series of disappearances that seem to mirror a century-old legend." },
  { id: 4, title: "Convergence", image: "https://picsum.photos/seed/convergence/800/1200", rating: "4.6", year: "2024", genre: "Action", summary: "Two rival factions must unite to survive when their planet is invaded by a superior force." },
];

const sciFiSeries = [
  { id: 5, title: "Neon Syndicate", image: "https://picsum.photos/seed/series/1920/1080", rating: "4.8", year: "2026", genre: "Cyberpunk", summary: "In a sprawling metropolis, a rogue AI begins to question its core directives, leading to a cascade of unforeseen events." },
  { id: 6, title: "Galactic Rim", image: "https://picsum.photos/seed/galactic/800/1200", rating: "4.5", year: "2025", genre: "Space Opera", summary: "A ragtag crew of smugglers gets caught in the middle of a galactic civil war." },
  { id: 7, title: "The Upload", image: "https://picsum.photos/seed/upload/800/1200", rating: "4.7", year: "2026", genre: "Sci-Fi", summary: "People can now upload their consciousness to a digital utopia, but the system has a fatal flaw." },
  { id: 8, title: "Mars Colony", image: "https://picsum.photos/seed/mars/800/1200", rating: "4.6", year: "2024", genre: "Drama", summary: "The first human settlers on Mars face harsh conditions and internal conflicts." },
];

const crimeSeries = [
  { id: 9, title: "City of Shadows", image: "https://picsum.photos/seed/shadows/800/1200", rating: "4.9", year: "2026", genre: "Crime", summary: "A gritty look at the interconnected lives of police, criminals, and politicians in a corrupt city." },
  { id: 10, title: "The Interrogation", image: "https://picsum.photos/seed/interrogation/800/1200", rating: "4.8", year: "2025", genre: "Thriller", summary: "A psychological game of cat and mouse between a brilliant detective and a cunning serial killer." },
  { id: 11, title: "Undercover", image: "https://picsum.photos/seed/undercover/800/1200", rating: "4.6", year: "2026", genre: "Action", summary: "An agent infiltrates a dangerous cartel, but the lines between right and wrong begin to blur." },
  { id: 12, title: "Cold Case", image: "https://picsum.photos/seed/coldcase/800/1200", rating: "4.7", year: "2024", genre: "Mystery", summary: "A dedicated team reopens unsolved murders, finding new clues in old evidence." },
];

export function Series() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pb-48 md:pb-32 font-sans">
      
      {/* Featured Hero Banner */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-end overflow-hidden mb-12 md:mb-16 group"
      >
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/series-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent" />
        </div>
        
        <div className="relative p-6 md:p-16 pt-28 md:pt-40 pb-20 md:pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-black bg-white px-3 py-1 rounded-sm">New Season</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-light text-white mb-4 md:mb-6 tracking-tight leading-[0.9]">
              Neon <span className="italic">Syndicate</span>
            </h1>
            <p className="text-white/70 text-sm md:text-lg mb-8 md:mb-10 line-clamp-3 md:line-clamp-none max-w-2xl font-medium leading-relaxed">
              In a sprawling metropolis, a rogue AI begins to question its core directives, leading to a cascade of unforeseen events. The highly anticipated third season is finally here.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-white text-black rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transform duration-300">
                <Play size={18} className="fill-current" /> Play S3:E1
              </button>
              <button className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors hover:scale-105 transform duration-300">
                <Plus size={18} /> My List
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="space-y-12 md:space-y-16 px-4 md:px-12">
        
        {/* Trending Series */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Trending <span className="italic text-white/50">Series</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trendingSeries.map((series, i) => (
              <MediaCard key={series.id} {...series} linkTo={`/series/${series.id}`} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* Sci-Fi & Fantasy */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Sci-Fi & <span className="italic text-white/50">Fantasy</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sciFiSeries.map((series, i) => (
              <MediaCard key={series.id} {...series} linkTo={`/series/${series.id}`} delay={i * 0.1} />
            ))}
          </div>
        </section>

        {/* Crime & Thriller */}
        <section>
          <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Crime & <span className="italic text-white/50">Thriller</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {crimeSeries.map((series, i) => (
              <MediaCard key={series.id} {...series} linkTo={`/series/${series.id}`} delay={i * 0.1} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
