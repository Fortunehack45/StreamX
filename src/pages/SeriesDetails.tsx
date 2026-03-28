import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Info, ListVideo, Star, Calendar, Globe, Download, Check, Plus, Share2, Award, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";

const seriesData = {
  "1": {
    title: "Neon City",
    desc: "In a dystopian future, a detective uncovers a conspiracy that threatens the city's fragile peace. As the lines between human and machine blur, he must decide where his loyalties lie in a world governed by corporate greed and technological transcendence.",
    rating: "4.9",
    year: "2026",
    genre: "Cyberpunk / Noir",
    network: "Quantum Stream",
    language: "English",
    seasons: "2 Seasons",
    cast: [
      { name: "Officer K", role: "Lead Detective", image: "https://picsum.photos/seed/officer/200/200" },
      { name: "Dr. Aris", role: "Tech Specialist", image: "https://picsum.photos/seed/aris/200/200" },
      { name: "The Ghost", role: "Hacker", image: "https://picsum.photos/seed/ghost/200/200" },
      { name: "Luna Vane", role: "Corporate Spy", image: "https://picsum.photos/seed/luna/200/200" }
    ],
    episodes: [
      { id: 1, title: "The Awakening", desc: "Detective K finds a strange artifact in the ruins of Old Sector 7, sparking a dangerous investigation.", duration: "45 min" },
      { id: 2, title: "Shadows of the Past", desc: "The investigation leads to a hidden underground network of rogue androids seeking autonomy.", duration: "42 min" },
      { id: 3, title: "The Breaking Point", desc: "K is framed for a crime he didn't commit and must go underground to clear his name.", duration: "48 min" },
      { id: 4, title: "Digital Ghost", desc: "A mysterious hacker offers K a way to infiltrate the corporate mainframe.", duration: "50 min" },
    ],
    reviews: [
      { user: "CyberPunk2077", rating: 5, comment: "The atmosphere is unmatched. Best cyberpunk series in years." },
      { user: "NoirLover", rating: 4, comment: "Great detective work, though the pacing slows down in episode 3." }
    ]
  },
  "2": {
    title: "The Last Frontier",
    desc: "A group of explorers embarks on a journey to the edge of the galaxy, only to find that they are not alone. A thrilling space opera that explores the mysteries of the universe and the resilience of the human spirit.",
    rating: "4.7",
    year: "2025",
    genre: "Sci-Fi / Adventure",
    network: "Galactic TV",
    language: "English",
    seasons: "3 Seasons",
    cast: [
      { name: "Capt. Miller", role: "Commander", image: "https://picsum.photos/seed/miller/200/200" },
      { name: "Lt. Chen", role: "Pilot", image: "https://picsum.photos/seed/chen/200/200" }
    ],
    episodes: [
      { id: 1, title: "Launch Day", desc: "The crew prepares for their most ambitious mission yet.", duration: "52 min" },
      { id: 2, title: "Deep Space", desc: "A malfunction leaves the ship drifting in uncharted territory.", duration: "49 min" }
    ],
    reviews: [
      { user: "SpaceExplorer", rating: 5, comment: "Stunning visuals and a truly epic scale." }
    ]
  }
};

const similarSeries = [
  { id: 2, title: "The Last Frontier", image: "https://picsum.photos/seed/frontier/400/600", rating: "4.7" },
  { id: 3, title: "Quantum Leap", image: "https://picsum.photos/seed/quantum/400/600", rating: "4.5" },
  { id: 4, title: "Binary Star", image: "https://picsum.photos/seed/binary/400/600", rating: "4.3" },
  { id: 5, title: "Code Red", image: "https://picsum.photos/seed/codered/400/600", rating: "4.6" },
];

export function SeriesDetails() {
  const { id } = useParams<{ id: string }>();
  const series = seriesData[id as keyof typeof seriesData] || seriesData["1"];
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);
  const [downloadingId, setDownloadingId] = useState<number | string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<Set<number | string>>(new Set());
  const [userRating, setUserRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isRated, setIsRated] = useState(false);

  const handlePlayEpisode = (epId: number) => {
    setActiveEpisode(epId);
  };

  const handleDownload = (id: number | string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedIds(prev => new Set(prev).add(id));
    }, 2000);
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setIsRated(true);
    setTimeout(() => setIsRated(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32 overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <CinematicImage 
            src={`https://picsum.photos/seed/${series.title}/1920/1080`} 
            alt={series.title} 
            className="w-full h-full object-cover" 
            containerClassName="w-full h-full"
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>
        
        <Link to="/series" className="absolute top-12 left-6 md:top-32 md:left-12 p-5 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-soft z-20 shadow-2xl active:scale-95">
          <ChevronLeft size={28} />
        </Link>

        <div className="relative px-6 md:px-20 pb-16 md:pb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -60 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-10 md:mb-14">
              <span className="px-6 py-2 bg-rose-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white shadow-[0_0_30px_rgba(225,29,72,0.5)]">Series</span>
              <span className="flex items-center gap-3 text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em]"><Star size={18} className="fill-current" /> {series.rating}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="text-white/50 font-black text-xs md:text-sm uppercase tracking-[0.3em]">{series.year}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="text-white/50 font-black text-xs md:text-sm uppercase tracking-[0.3em]">{series.seasons}</span>
            </div>

            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-10 md:mb-16 leading-[0.8] uppercase italic drop-shadow-2xl">
              {series.title.split(' ').map((word, i) => (
                <span key={word} className={cn("block", i % 2 === 1 && "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700")}>
                  {word}
                </span>
              ))}
            </h1>
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 mb-12 md:mb-20">
              <button 
                onClick={() => handlePlayEpisode(series.episodes[0].id)}
                className="group relative flex justify-center flex-1 md:flex-none items-center gap-5 bg-white text-black px-14 py-6 md:py-8 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-soft shadow-2xl hover:bg-neutral-200 active:scale-95 overflow-hidden"
              >
                <Play size={24} className="fill-black group-hover:scale-125 transition-transform" /> 
                <span className="relative z-10">Resume S1:E{series.episodes[0].id}</span>
              </button>
              
              <div className="flex gap-6">
                <button className="flex-1 md:w-20 md:h-20 h-16 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft shadow-xl active:scale-95">
                  <Plus size={24} />
                </button>
                <button className="flex-1 md:w-20 md:h-20 h-16 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft shadow-xl active:scale-95">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="px-6 md:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-16 md:gap-32 relative z-20">
        
        {/* Story & Metadata */}
        <div className="lg:col-span-8 space-y-32">
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Overview</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <p className="text-neutral-200 text-2xl md:text-4xl leading-[1.2] font-medium max-w-5xl italic tracking-tight">
              "{series.desc}"
            </p>
          </motion.section>

          {/* Episode Matrix */}
          <section>
            <div className="flex items-center justify-between mb-16 px-2">
               <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Episode Matrix</h2>
               <button className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 border-b border-indigo-400/30 pb-1">Switch Season</button>
            </div>
            <div className="space-y-4">
              {series.episodes.map((ep, i) => (
                <motion.div 
                  key={ep.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={cn(
                    "group relative overflow-hidden p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] transition-soft border flex flex-col md:flex-row items-center gap-8 cursor-pointer",
                    activeEpisode === ep.id 
                      ? "bg-white text-black border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]" 
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                  )}
                  onClick={() => handlePlayEpisode(ep.id)}
                >
                  <div className={cn(
                    "w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center shrink-0 transition-soft",
                    activeEpisode === ep.id ? "bg-black text-white shadow-2xl" : "bg-white/5 text-white group-hover:scale-110"
                  )}>
                    <Play size={28} className={activeEpisode === ep.id ? "fill-white" : "group-hover:fill-white"} />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-3">
                      <span className={cn("text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full", activeEpisode === ep.id ? "bg-black/5" : "bg-white/5")}>Episode {ep.id}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-600 hidden md:block"></span>
                      <span className={cn("flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500", activeEpisode === ep.id && "text-black/60")}>
                        <Clock size={14} /> {ep.duration}
                      </span>
                    </div>
                    <h3 className="font-black text-2xl md:text-3xl tracking-tighter mb-3 uppercase leading-none">{ep.title}</h3>
                    <p className={cn("text-xs md:text-sm leading-relaxed max-w-2xl", activeEpisode === ep.id ? "text-black/60" : "text-neutral-500")}>{ep.desc}</p>
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDownload(ep.id); }}
                    className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center transition-soft active:scale-75",
                      activeEpisode === ep.id ? "bg-black/5 text-black hover:bg-black/10" : "bg-white/5 text-white hover:bg-white/10"
                    )}
                  >
                    {downloadingId === ep.id ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <Download size={22} />
                      </motion.div>
                    ) : downloadedIds.has(ep.id) ? (
                      <Check size={22} className="text-green-500" />
                    ) : (
                      <Download size={22} className="opacity-40 group-hover:opacity-100" />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cast Cinematic Grid */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Lead Personnel</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {series.cast.map((actor, i) => (
                <motion.div 
                  key={actor.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-6 border border-white/5 transition-soft shadow-2xl group-hover:border-white/20 relative">
                    <CinematicImage src={actor.image} alt={actor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-black text-sm md:text-base uppercase tracking-widest mb-1 text-center">{actor.name}</h3>
                  <p className="text-neutral-600 text-[10px] font-bold uppercase tracking-widest text-center">{actor.role}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Technical Specification & Discovery */}
        <div className="lg:col-span-4 space-y-24">
          
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl shadow-2xl sticky top-32"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-14 text-center md:text-left">Project Metadata</h3>
            <div className="space-y-12">
              {[
                { label: "Temporal Origin", val: series.year, icon: Calendar },
                { label: "Distribution Hub", val: series.network, icon: Globe },
                { label: "Classification", val: series.genre, icon: Info },
                { label: "Vernacular", val: series.language, icon: Award }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3 group cursor-default text-center md:text-left">
                  <span className="text-[10px] font-black text-neutral-700 uppercase tracking-[0.3em] group-hover:text-rose-500 transition-soft">{item.label}</span>
                  <span className="font-black text-xl md:text-2xl flex items-center justify-center md:justify-start gap-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                    <item.icon size={22} className="text-white/20" /> {item.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-20 border-t border-white/5">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">Related Nodes</h3>
                  <ListVideo size={16} className="text-neutral-700" />
               </div>
              <div className="grid grid-cols-2 gap-6">
                {similarSeries.slice(0, 4).map((s) => (
                  <Link key={s.id} to={`/series/${s.id}`} className="group block">
                    <div className="aspect-[3/4] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 border border-white/5 transition-soft shadow-xl group-hover:border-white/20 relative">
                      <CinematicImage src={s.image} alt={s.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-neutral-600 group-hover:text-white transition-soft truncate">{s.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
