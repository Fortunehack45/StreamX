import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Info, Star, Calendar, Globe, Download, Check, Plus, Share2, Award } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";
import { useMediaDetails } from "../hooks/useMedia";

export function SeriesDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: media, loading } = useMediaDetails(id || "");
  
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);
  const [downloadingId, setDownloadingId] = useState<number | string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<Set<number | string>>(new Set());

  const series = {
    title: media?.title || "Loading...",
    desc: media?.overview || "",
    rating: media?.rating || "0.0",
    year: media?.release_date?.split('-')[0] || "2026",
    genre: media?.genres?.join(' / ') || "General",
    backdrop: media?.backdrop_url || media?.poster_url,
    cast: media?.cast_members?.map(name => ({ name, role: "Principal", image: `https://picsum.photos/seed/${name}/200/200` })) || [],
    episodes: media?.media_type === 'series' ? [
       { id: 1, title: "The Beginning", desc: "A mysterious arrival sparks a chain of events that will change everything.", duration: "45 min" },
       { id: 2, title: "Shadows", desc: "A hidden truth begins to surface as the investigation deepens.", duration: "42 min" },
    ] : [],
    network: "StreamX Original",
    language: "English",
    seasons: "1 Season"
  };

  const handleDownload = (id: number | string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedIds(prev => new Set([...prev, id]));
    }, 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white/10 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32 overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <CinematicImage 
            src={series.backdrop || ""} 
            alt={series.title} 
            className="w-full h-full object-cover" 
            containerClassName="w-full h-full"
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>
        
        <Link to="/series" className="absolute top-12 left-6 md:top-32 md:left-12 p-5 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-soft z-20 shadow-2xl active:scale-90">
          <ChevronLeft size={28} />
        </Link>

        <div className="relative px-6 md:px-20 pb-16 md:pb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -60 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-10 md:mb-14">
              <span className="px-6 py-2 bg-indigo-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white shadow-[0_0_30px_rgba(79,70,229,0.5)]">Series</span>
              <span className="flex items-center gap-3 text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em]"><Star size={18} className="fill-current" /> {series.rating} Rating</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="text-white/50 font-black text-xs md:text-sm uppercase tracking-[0.3em]">{series.year}</span>
            </div>

            <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter mb-10 md:mb-16 leading-[0.85] uppercase italic drop-shadow-2xl">
              {series.title.split(' ').map((word, i) => (
                <span key={i} className={cn("block", i % 2 === 1 && "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700")}>
                  {word}
                </span>
              ))}
            </h1>
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 mb-12 md:mb-20">
              <button className="group relative flex justify-center flex-1 md:flex-none items-center gap-5 bg-white text-black px-14 py-6 md:py-8 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-soft shadow-2xl hover:bg-neutral-200 active:scale-95 overflow-hidden">
                <Play size={24} className="fill-black group-hover:scale-125 transition-transform" /> 
                <span className="relative z-10">Start Pilot</span>
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

      {/* Main Content */}
      <div className="px-6 md:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-16 md:gap-32 relative z-20">
        
        {/* Story & Episodes */}
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
            <p className="text-neutral-300 text-2xl md:text-4xl leading-[1.3] font-medium max-w-5xl italic tracking-tight">
              "{series.desc}"
            </p>
          </motion.section>

          {/* Episode List */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Installments</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <div className="space-y-6">
              {series.episodes.map((ep, i) => (
                <motion.div 
                  key={ep.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveEpisode(ep.id)}
                  className={cn(
                    "group p-8 md:p-12 rounded-[2.5rem] border transition-soft cursor-pointer relative overflow-hidden",
                    activeEpisode === ep.id 
                      ? "bg-white text-black border-white" 
                      : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10"
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                         <span className="font-black text-indigo-500 text-sm italic uppercase tracking-widest">S01 E0{ep.id}</span>
                         <span className="w-1 h-1 rounded-full bg-current opacity-20"></span>
                         <span className={cn("text-xs font-black uppercase tracking-widest", activeEpisode === ep.id ? "text-black/40" : "text-white/40")}>{ep.duration}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">{ep.title}</h3>
                      <p className={cn("text-sm md:text-base leading-relaxed line-clamp-2 max-w-2xl", activeEpisode === ep.id ? "text-black/60" : "text-white/50")}>
                        {ep.desc}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                       <button 
                        onClick={(e) => { e.stopPropagation(); handleDownload(ep.id); }}
                        className={cn(
                          "w-16 h-16 rounded-full flex items-center justify-center transition-soft",
                          activeEpisode === ep.id 
                            ? "bg-black/5 hover:bg-black/10 text-black" 
                            : "bg-white/5 hover:bg-white/10 text-white"
                        )}
                       >
                         {downloadedIds.has(ep.id) ? <Check size={20} /> : downloadingId === ep.id ? <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" /> : <Download size={20} />}
                       </button>
                       <button className={cn(
                         "w-16 h-16 rounded-full flex items-center justify-center transition-soft",
                         activeEpisode === ep.id ? "bg-black text-white" : "bg-white text-black"
                       )}>
                         <Play size={20} className="fill-current" />
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Cast */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">The Ensemble</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {series.cast.map((actor, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-6 border-2 border-white/5 group-hover:border-indigo-500 transition-soft relative">
                    <CinematicImage src={actor.image} alt={actor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-soft duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-black text-center text-sm md:text-base uppercase tracking-tight">{actor.name}</h3>
                  <p className="text-center text-[10px] font-black text-white/30 uppercase tracking-widest mt-1">{actor.role}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Technical Specification */}
        <div className="lg:col-span-4">
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl shadow-2xl sticky top-32"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-14">Technical Spec</h3>
            <div className="space-y-12">
              {[
                { label: "Studio", val: series.network, icon: Globe },
                { label: "Identity", val: series.language, icon: Info },
                { label: "Volume", val: series.seasons, icon: ListVideo },
                { label: "Inception", val: series.year, icon: Calendar }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group cursor-default">
                  <span className="text-[10px] font-black text-neutral-700 uppercase tracking-[0.3em] group-hover:text-indigo-500 transition-soft">{item.label}</span>
                  <span className="font-black text-2xl flex items-center gap-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                    <item.icon size={24} className="text-white/20" /> {item.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

// Add simple helper icons if missing from Lucide
const ListVideo = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/><path d="m16 12 5 3-5 3v-6Z"/>
  </svg>
);
