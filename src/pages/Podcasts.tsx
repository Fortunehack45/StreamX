import { motion } from "motion/react";
import { Headphones, PlayCircle, Clock, Star, ChevronRight, Play, Heart, MoreHorizontal, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

const topPodcasts = [
  { id: 101, title: "The Daily Stoic", host: "Ryan Holiday", image: "https://picsum.photos/seed/pod1/400/400", duration: "15m", rating: "4.9", category: "Philosophy" },
  { id: 102, title: "Design Matters", host: "Debbie Millman", image: "https://picsum.photos/seed/pod2/400/400", duration: "45m", rating: "4.8", category: "Design" },
  { id: 103, title: "Hidden Brain", host: "Shankar Vedantam", image: "https://picsum.photos/seed/pod3/400/400", duration: "52m", rating: "4.7", category: "Science" },
  { id: 104, title: "How I Built This", host: "Guy Raz", image: "https://picsum.photos/seed/pod4/400/400", duration: "60m", rating: "4.9", category: "Business" },
  { id: 105, title: "Syntax", host: "Wes Bos & Scott Tolinski", image: "https://picsum.photos/seed/pod5/400/400", duration: "55m", rating: "4.8", category: "Tech" },
  { id: 106, title: "Lex Fridman", host: "Lex Fridman", image: "https://picsum.photos/seed/pod6/400/400", duration: "2h 30m", rating: "4.9", category: "Interviews" },
];

const trendingEpisodes = [
  { id: 101, title: "The Future of AI", podcast: "Tech Today", duration: "45m", date: "Oct 24", image: "https://picsum.photos/seed/ep1/200/200" },
  { id: 102, title: "Building a Billion Dollar Brand", podcast: "Startup Stories", duration: "1h 15m", date: "Oct 22", image: "https://picsum.photos/seed/ep2/200/200" },
  { id: 103, title: "The Science of Sleep", podcast: "Health & Wellness", duration: "50m", date: "Oct 20", image: "https://picsum.photos/seed/ep3/200/200" },
  { id: 104, title: "Unsolved Mysteries: The Disappearance", podcast: "True Crime Daily", duration: "1h 30m", date: "Oct 18", image: "https://picsum.photos/seed/ep4/200/200" },
];

const categories = [
  { name: 'Technology', color: 'from-blue-500/20 to-cyan-500/20', border: 'hover:border-blue-500/50' },
  { name: 'True Crime', color: 'from-red-500/20 to-orange-500/20', border: 'hover:border-red-500/50' },
  { name: 'Business', color: 'from-emerald-500/20 to-teal-500/20', border: 'hover:border-emerald-500/50' },
  { name: 'Comedy', color: 'from-yellow-500/20 to-amber-500/20', border: 'hover:border-yellow-500/50' },
  { name: 'Health', color: 'from-pink-500/20 to-rose-500/20', border: 'hover:border-pink-500/50' },
  { name: 'History', color: 'from-amber-700/20 to-yellow-700/20', border: 'hover:border-amber-700/50' },
  { name: 'Science', color: 'from-indigo-500/20 to-violet-500/20', border: 'hover:border-indigo-500/50' },
  { name: 'Arts', color: 'from-fuchsia-500/20 to-purple-500/20', border: 'hover:border-fuchsia-500/50' },
];

export function Podcasts() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pb-48 md:pb-32 relative overflow-x-hidden font-sans">
      
      {/* Dynamic Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-900/20 rounded-full blur-[140px] pointer-events-none" 
      />
      
      {/* Hero Section */}
      <div className="relative min-h-[85vh] md:min-h-[90vh] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-black">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            src="https://picsum.photos/seed/featured-pod/1920/1080" 
            alt="Featured Podcast" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/20 to-transparent" />
        </div>
        
        <div className="relative px-6 md:px-20 pt-28 md:pt-40 pb-20 md:pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center gap-4 mb-8 md:mb-12"
            >
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-black bg-white px-5 py-2 rounded-full">Exclusive</span>
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-white/50 border border-white/10 px-5 py-2 rounded-full backdrop-blur-xl">Mindfulness</span>
            </motion.div>
            
            <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tighter mb-8 md:mb-12 leading-[0.8] uppercase italic">
              The Art of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700">Stillness</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 md:gap-10 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-10 md:mb-16">
              <span className="text-white">Hosted by Elena Vance</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></span>
              <span className="flex items-center gap-3"><Clock size={16} /> 1h 15m</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></span>
              <span className="flex items-center gap-3 text-yellow-500"><Star size={16} className="fill-yellow-500" /> 4.9 Rating</span>
            </div>

            <p className="text-neutral-400 text-sm md:text-2xl mb-12 md:mb-20 line-clamp-3 md:line-clamp-none max-w-3xl font-medium leading-relaxed italic border-l-2 border-white/10 pl-8">
              "In this exclusive interview, we explore the profound impact of silence and how finding moments of stillness can dramatically improve creativity and mental clarity."
            </p>
            
            <div className="flex flex-wrap items-center gap-6">
              <button className="group flex items-center justify-center gap-4 px-10 md:px-14 py-5 md:py-7 bg-white text-black rounded-full text-xs md:text-sm font-black uppercase tracking-[0.4em] hover:bg-neutral-200 transition-soft shadow-2xl active:scale-95">
                <Play size={20} className="fill-current group-hover:scale-110 transition-transform" /> Listen Now
              </button>
              <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-soft active:scale-95 shadow-xl backdrop-blur-xl">
                <Heart size={24} />
              </button>
              <button className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-soft active:scale-95 shadow-xl backdrop-blur-xl">
                <Share2 size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-20 mt-20 md:mt-32 relative z-20 space-y-32 md:space-y-48">
        
        {/* Top Podcasts */}
        <section>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12 md:mb-20 border-b border-white/5 pb-10"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic">Top <span className="text-white/20 underline decoration-indigo-500/30">Podcasts</span></h2>
            <Link to="/podcasts" className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.4em] hover:text-white transition-soft flex items-center gap-3 group">
              View All <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-10">
            {topPodcasts.map((pod, i) => (
              <Link key={pod.id} to={`/podcasts/${pod.id}`}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 bg-neutral-900 shadow-2xl border border-white/5">
                    <img src={pod.image} alt={pod.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-soft duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-soft flex flex-col justify-end p-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-soft mb-auto self-end shadow-2xl">
                        <Play size={24} className="text-white fill-white ml-1.5" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/80 backdrop-blur-2xl rounded-full text-[8px] font-black uppercase tracking-[0.2em] text-white border border-white/10">
                      {pod.category}
                    </div>
                  </div>
                  <h3 className="text-white font-black text-sm md:text-xl mb-2 leading-none group-hover:text-indigo-400 transition-soft uppercase tracking-tight truncate">{pod.title}</h3>
                  <p className="text-neutral-500 text-[10px] md:text-xs font-black uppercase tracking-widest truncate">{pod.host}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-yellow-500 font-black tracking-widest uppercase">
                      <Star size={14} className="fill-yellow-500" /> {pod.rating}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-xs text-neutral-600 font-black uppercase tracking-widest">
                      <Clock size={14} /> {pod.duration}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trending & Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-32">
          
          {/* Trending Episodes */}
          <section className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/5 pb-8"
            >
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Trending <span className="text-white/20">Episodes</span></h2>
            </motion.div>
            
            <div className="flex flex-col gap-6 md:gap-8">
              {trendingEpisodes.map((ep, i) => (
                <Link key={ep.id} to={`/podcasts/${ep.id}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ x: 15, backgroundColor: "rgba(255,255,255,0.03)" }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-6 md:gap-10 p-6 md:p-8 rounded-[2.5rem] transition-soft border border-transparent hover:border-white/5 group bg-white/2 cursor-pointer"
                  >
                    <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shrink-0 shadow-2xl">
                      <img src={ep.image} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-soft">
                        <Play size={24} className="text-white fill-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] md:text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-2 md:mb-4">{ep.podcast}</div>
                      <h3 className="text-white font-black text-sm md:text-3xl leading-none mb-3 md:mb-5 truncate uppercase tracking-tighter group-hover:text-indigo-400 transition-soft">{ep.title}</h3>
                      <div className="flex items-center gap-6 text-[10px] md:text-xs text-neutral-500 font-black uppercase tracking-widest">
                        <span>{ep.date}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/30"></span>
                        <span className="flex items-center gap-2"><Clock size={16} /> {ep.duration}</span>
                      </div>
                    </div>
                    
                    <div className="hidden sm:flex items-center gap-4">
                      <button className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-white/10 transition-soft active:scale-90">
                        <Heart size={20} />
                      </button>
                      <button className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-neutral-600 hover:text-white hover:bg-white/10 transition-soft active:scale-90">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>

          {/* Categories Bento */}
          <section className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12 md:mb-16 border-b border-white/5 pb-8"
            >
              <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic">Moods</h2>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {categories.map((cat, i) => (
                <motion.div 
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={cn(
                    "relative h-24 md:h-40 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden group cursor-pointer bg-neutral-900 border border-white/5 transition-soft",
                    cat.border
                  )}
                >
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-100 transition-soft duration-1000", cat.color)} />
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <span className="text-white text-[10px] md:text-sm font-black tracking-[0.3em] uppercase transition-soft group-hover:scale-110 drop-shadow-2xl">{cat.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
