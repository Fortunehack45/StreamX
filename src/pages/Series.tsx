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
    <div className="min-h-screen bg-[#050505] text-white pb-48 md:pb-32 font-sans overflow-x-hidden">
      
      {/* Featured Hero Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full min-h-[80vh] md:min-h-[90vh] flex flex-col justify-end overflow-hidden mb-12 md:mb-20 group"
      >
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://picsum.photos/seed/series-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-soft duration-[2000ms]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/20 to-transparent" />
        </div>
        
        <div className="relative p-6 md:p-20 pt-28 md:pt-40 pb-20 md:pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="text-[10px] md:text-sm font-black tracking-[0.3em] uppercase text-black bg-white px-4 py-1.5 rounded-sm">New Season</span>
              <span className="text-[10px] md:text-sm font-black tracking-[0.3em] uppercase text-white/40 border border-white/10 px-4 py-1.5 rounded-sm">Original</span>
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-white mb-6 md:mb-10 tracking-tighter leading-[0.85] uppercase">
              Neon <span className="text-white/20 italic">Syndicate</span>
            </h1>
            <p className="text-white/50 text-base md:text-2xl mb-10 md:mb-14 line-clamp-3 md:line-clamp-none max-w-3xl font-black leading-tight tracking-tight uppercase italic">
              In a sprawling metropolis, a rogue AI begins to question its core directives, leading to a cascade of unforeseen events.
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button className="flex items-center justify-center gap-4 px-10 md:px-14 py-4 md:py-6 bg-white text-black rounded-full text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-soft shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95">
                <Play size={20} className="fill-current" /> Play S3:E1
              </button>
              <button className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center bg-white/5 backdrop-blur-2xl border border-white/10 text-white rounded-full hover:bg-white hover:text-black transition-soft hover:scale-110 active:scale-95">
                <Plus size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="space-y-20 md:space-y-40 px-6 md:px-20">
        
        {/* Sections: Trending, Sci-Fi, Crime */}
        {[
          { title: "Trending", sub: "Series", data: trendingSeries },
          { title: "Sci-Fi &", sub: "Fantasy", data: sciFiSeries },
          { title: "Crime &", sub: "Thriller", data: crimeSeries },
        ].map((section, idx) => (
          <section key={section.title}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-10 md:mb-14 border-b border-white/5 pb-8"
            >
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">{section.title} <span className="text-white/20 whitespace-pre">{section.sub}</span></h2>
              <span className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-snappy flex items-center gap-2 group">
                View All <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
              {section.data.map((series, i) => (
                <MediaCard key={series.id} {...series} linkTo={`/series/${series.id}`} delay={i * 0.05} />
              ))}
            </div>
          </section>
        ))}

      </div>
    </div>
  );
}
