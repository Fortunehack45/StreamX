import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Info, ListVideo, Star, Calendar, Globe } from "lucide-react";
import { useState } from "react";

const seriesData = {
  "1": {
    title: "Neon City",
    desc: "In a dystopian future, a detective uncovers a conspiracy that threatens the city's fragile peace. As the lines between human and machine blur, he must decide where his loyalties lie in a world governed by corporate greed and technological transcendence.",
    rating: "4.9",
    year: "2026",
    genre: "Cyberpunk / Noir",
    network: "Quantum Stream",
    episodes: [
      { id: 1, title: "The Awakening", desc: "Detective K finds a strange artifact in the ruins of Old Sector 7, sparking a dangerous investigation.", duration: "45 min" },
      { id: 2, title: "Shadows of the Past", desc: "The investigation leads to a hidden underground network of rogue androids seeking autonomy.", duration: "42 min" },
      { id: 3, title: "The Breaking Point", desc: "K is framed for a crime he didn't commit and must go underground to clear his name.", duration: "48 min" },
      { id: 4, title: "Digital Ghost", desc: "A mysterious hacker offers K a way to infiltrate the corporate mainframe.", duration: "50 min" },
    ]
  }
};

export function SeriesDetails() {
  const { id } = useParams<{ id: string }>();
  const series = seriesData[id as keyof typeof seriesData] || seriesData["1"];
  const [activeEpisode, setActiveEpisode] = useState<number | null>(null);

  const handlePlayEpisode = (epId: number) => {
    setActiveEpisode(epId);
    // In a real app, this would trigger the video player
    console.log(`Playing episode ${epId}`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-24">
      <div className="relative h-[75vh] w-full">
        <img src={`https://picsum.photos/seed/${series.title}/1920/1080`} alt={series.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
        <Link to="/series" className="absolute top-6 left-6 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors z-20">
          <ChevronLeft size={24} />
        </Link>
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold uppercase tracking-widest text-white/80">Series</span>
              <span className="flex items-center gap-1 text-yellow-500 font-bold text-sm"><Star size={14} className="fill-current" /> {series.rating}</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8]">{series.title}</h1>
            
            <div className="flex flex-wrap items-center gap-8 text-neutral-400 mb-10 font-medium">
              <span className="flex items-center gap-2"><Calendar size={18} /> {series.year}</span>
              <span className="flex items-center gap-2"><Globe size={18} /> {series.network}</span>
              <span className="flex items-center gap-2"><Info size={18} /> {series.genre}</span>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => handlePlayEpisode(series.episodes[0].id)}
                className="flex items-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              >
                <Play size={20} className="fill-black" /> Start Watching
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-8 md:px-16 py-20 grid lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
            <h2 className="text-4xl font-black tracking-tighter flex items-center gap-4 uppercase"><ListVideo size={32} /> Episodes</h2>
            <span className="text-neutral-500 font-mono text-sm uppercase tracking-widest">{series.episodes.length} Total</span>
          </div>
          
          <div className="space-y-6">
            {series.episodes.map((ep, i) => (
              <motion.button 
                key={ep.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handlePlayEpisode(ep.id)}
                className={`w-full flex flex-col md:flex-row items-start md:items-center gap-8 p-8 rounded-[2rem] transition-all border text-left group relative overflow-hidden ${
                  activeEpisode === ep.id 
                    ? "bg-white text-black border-white" 
                    : "bg-neutral-900/40 hover:bg-neutral-900/80 border-white/5 hover:border-white/20"
                }`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                  activeEpisode === ep.id ? "bg-black text-white" : "bg-neutral-800 text-white group-hover:bg-neutral-700"
                }`}>
                  <Play size={32} className={activeEpisode === ep.id ? "fill-white" : "fill-transparent group-hover:fill-white transition-all"} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`font-mono text-xs font-bold uppercase tracking-widest ${activeEpisode === ep.id ? "text-black/50" : "text-neutral-500"}`}>Episode {ep.id}</span>
                    <span className={`flex items-center gap-1 font-mono text-xs ${activeEpisode === ep.id ? "text-black/50" : "text-neutral-500"}`}>
                      <Clock size={12} /> {ep.duration}
                    </span>
                  </div>
                  <h3 className="font-black text-2xl tracking-tight mb-2 uppercase">{ep.title}</h3>
                  <p className={`text-sm leading-relaxed line-clamp-2 ${activeEpisode === ep.id ? "text-black/70" : "text-neutral-400"}`}>{ep.desc}</p>
                </div>

                <AnimatePresence>
                  {activeEpisode === ep.id && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block"
                    >
                      <div className="px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Now Playing</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500 mb-6">Synopsis</h3>
            <p className="text-neutral-300 text-lg leading-relaxed font-medium">{series.desc}</p>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500 mb-6">Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between py-4 border-b border-white/5">
                <span className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Released</span>
                <span className="font-bold">{series.year}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/5">
                <span className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Genre</span>
                <span className="font-bold">{series.genre}</span>
              </div>
              <div className="flex justify-between py-4 border-b border-white/5">
                <span className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Network</span>
                <span className="font-bold">{series.network}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
