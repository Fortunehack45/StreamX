import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Info, ListVideo, Star, Calendar, Globe, Download, Check, Plus, Share2, Award, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

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
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32">
      {/* Hero Section */}
      <div className="relative h-[65vh] md:min-h-[85vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={`https://picsum.photos/seed/${series.title}/1920/1080`} 
            alt={series.title} 
            className="w-full h-full object-cover opacity-60" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>
        
        <Link to="/series" className="absolute top-12 left-4 md:top-28 md:left-8 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all z-20">
          <ChevronLeft size={24} />
        </Link>

        <div className="relative p-6 md:p-20 pb-8 md:pb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">Series</span>
              <span className="flex items-center gap-1.5 text-yellow-500 font-black text-sm uppercase tracking-widest"><Star size={16} className="fill-current" /> {series.rating}</span>
              <span className="text-white/40 font-black text-sm uppercase tracking-widest">|</span>
              <span className="text-white/60 font-black text-sm uppercase tracking-widest">{series.genre}</span>
              <span className="text-white/40 font-black text-sm uppercase tracking-widest">|</span>
              <span className="text-white/60 font-black text-sm uppercase tracking-widest">{series.seasons}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[8rem] font-black tracking-tighter mb-6 md:mb-10 leading-[0.9] lg:leading-[0.8] uppercase">{series.title}</h1>
            
            <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <button 
                onClick={() => handlePlayEpisode(series.episodes[0].id)}
                className="flex justify-center w-full md:w-auto items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,255,255,0.3)]"
              >
                <Play size={24} className="fill-black" /> Start Watching
              </button>
              <button 
                onClick={() => handleDownload('all')}
                className="flex justify-center w-full md:w-auto items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                {downloadingId === 'all' ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                    <Download size={20} />
                  </motion.div>
                ) : downloadedIds.has('all') ? (
                  <Check size={20} className="text-green-500" />
                ) : (
                  <Download size={20} />
                )}
                {downloadingId === 'all' ? 'Downloading...' : downloadedIds.has('all') ? 'Downloaded' : 'Download All'}
              </button>
              <div className="flex justify-center gap-4 w-full md:w-auto">
                <button className="flex-1 md:flex-none p-5 flex justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Plus size={24} />
                </button>
                <button className="flex-1 md:flex-none p-5 flex justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-4 md:px-20 py-8 md:py-24 grid lg:grid-cols-12 gap-8 lg:gap-24 pb-32">
        {/* Left Column: Episodes & Info */}
        <div className="lg:col-span-8 space-y-12 md:space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Synopsis</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <p className="text-neutral-300 text-2xl leading-relaxed font-medium max-w-4xl">{series.desc}</p>
          </section>

          {/* User Rating Section */}
          <section className="p-8 md:p-12 rounded-[3rem] bg-neutral-900/20 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Rate this series</h3>
                <p className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Share your thoughts with the community</p>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => handleRate(star)}
                      className="relative p-2"
                    >
                      <Star 
                        size={40} 
                        className={`transition-all duration-300 ${
                          (hoverRating || userRating) >= star 
                            ? "fill-yellow-500 text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]" 
                            : "text-neutral-700"
                        }`} 
                      />
                    </motion.button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  {isRated ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 text-green-500 font-black text-[10px] uppercase tracking-[0.2em]"
                    >
                      <Check size={14} /> Rating Saved
                    </motion.div>
                  ) : userRating > 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-neutral-400 font-black text-[10px] uppercase tracking-[0.2em]"
                    >
                      You rated this {userRating} stars
                    </motion.div>
                  ) : (
                    <div className="h-4" />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Episodes</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="space-y-6">
              {series.episodes.map((ep, i) => (
                <motion.div 
                  key={ep.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "group p-4 md:p-8 rounded-3xl md:rounded-[2.5rem] transition-all border flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8",
                    activeEpisode === ep.id 
                      ? "bg-white text-black border-white" 
                      : "bg-neutral-900/20 border-white/5 hover:border-white/20"
                  )}
                >
                  <button 
                    onClick={() => handlePlayEpisode(ep.id)}
                    className={cn(
                      "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shrink-0 transition-all",
                      activeEpisode === ep.id ? "bg-black text-white" : "bg-white/5 text-white group-hover:bg-white group-hover:text-black"
                    )}
                  >
                    <Play size={24} className={activeEpisode === ep.id ? "fill-white" : "group-hover:fill-black"} />
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className={cn("text-[10px] font-black uppercase tracking-widest", activeEpisode === ep.id ? "text-black/50" : "text-neutral-500")}>Episode {ep.id}</span>
                      <span className={cn("flex items-center gap-1 text-[10px] font-black uppercase tracking-widest", activeEpisode === ep.id ? "text-black/50" : "text-neutral-500")}>
                        <Clock size={12} /> {ep.duration}
                      </span>
                    </div>
                    <h3 className="font-black text-xl tracking-tight mb-2 uppercase">{ep.title}</h3>
                    <p className={cn("text-sm leading-relaxed line-clamp-1", activeEpisode === ep.id ? "text-black/70" : "text-neutral-400")}>{ep.desc}</p>
                  </div>

                  <button 
                    onClick={() => handleDownload(ep.id)}
                    className={cn(
                      "p-4 rounded-full transition-all",
                      activeEpisode === ep.id 
                        ? "bg-black/10 text-black hover:bg-black/20" 
                        : "bg-white/5 text-white hover:bg-white/10"
                    )}
                  >
                    {downloadingId === ep.id ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <Download size={20} />
                      </motion.div>
                    ) : downloadedIds.has(ep.id) ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      <Download size={20} />
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">The Cast</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="flex overflow-x-auto snap-x md:grid md:grid-cols-4 gap-4 md:gap-8 pb-4 px-4 md:px-0 -mx-4 md:mx-0 scrollbar-hide">
              {series.cast.map((actor, i) => (
                <motion.div 
                  key={actor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer flex-none w-[140px] md:w-auto snap-start"
                >
                  <div className="aspect-square rounded-3xl overflow-hidden mb-4 border border-white/5 group-hover:border-white/20 transition-all">
                    <img src={actor.image} alt={actor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-widest mb-1">{actor.name}</h3>
                  <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{actor.role}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Reviews</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="space-y-6">
              {series.reviews?.map((review, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-neutral-900/30 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-black text-sm uppercase tracking-widest">{review.user}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className={j < review.rating ? "fill-yellow-500 text-yellow-500" : "text-neutral-700"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-400 leading-relaxed italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Metadata & Similar */}
        <div className="lg:col-span-4 space-y-24">
          <section className="p-10 rounded-[3rem] bg-neutral-900/20 border border-white/5 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Information</h3>
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Released</span>
                <span className="font-bold text-lg flex items-center gap-2"><Calendar size={18} /> {series.year}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Network</span>
                <span className="font-bold text-lg flex items-center gap-2"><Globe size={18} /> {series.network}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Language</span>
                <span className="font-bold text-lg flex items-center gap-2"><Award size={18} /> {series.language}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Genre</span>
                <span className="font-bold text-lg flex items-center gap-2"><Info size={18} /> {series.genre}</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Similar Series</h3>
            <div className="grid grid-cols-2 gap-6">
              {similarSeries.map((s) => (
                <Link key={s.id} to={`/series/${s.id}`} className="group">
                  <div className="aspect-[2/3] rounded-2xl overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-all">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">{s.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
