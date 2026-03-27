import { motion } from "motion/react";
import { Headphones, PlayCircle, Clock, Star, ChevronRight, Play, Heart, MoreHorizontal, Share2 } from "lucide-react";

const topPodcasts = [
  { id: 1, title: "The Daily Stoic", host: "Ryan Holiday", image: "https://picsum.photos/seed/pod1/400/400", duration: "15m", rating: "4.9", category: "Philosophy" },
  { id: 2, title: "Design Matters", host: "Debbie Millman", image: "https://picsum.photos/seed/pod2/400/400", duration: "45m", rating: "4.8", category: "Design" },
  { id: 3, title: "Hidden Brain", host: "Shankar Vedantam", image: "https://picsum.photos/seed/pod3/400/400", duration: "52m", rating: "4.7", category: "Science" },
  { id: 4, title: "How I Built This", host: "Guy Raz", image: "https://picsum.photos/seed/pod4/400/400", duration: "60m", rating: "4.9", category: "Business" },
  { id: 5, title: "Syntax", host: "Wes Bos & Scott Tolinski", image: "https://picsum.photos/seed/pod5/400/400", duration: "55m", rating: "4.8", category: "Tech" },
  { id: 6, title: "Lex Fridman", host: "Lex Fridman", image: "https://picsum.photos/seed/pod6/400/400", duration: "2h 30m", rating: "4.9", category: "Interviews" },
];

const trendingEpisodes = [
  { id: 11, title: "The Future of AI", podcast: "Tech Today", duration: "45m", date: "Oct 24", image: "https://picsum.photos/seed/ep1/200/200" },
  { id: 12, title: "Building a Billion Dollar Brand", podcast: "Startup Stories", duration: "1h 15m", date: "Oct 22", image: "https://picsum.photos/seed/ep2/200/200" },
  { id: 13, title: "The Science of Sleep", podcast: "Health & Wellness", duration: "50m", date: "Oct 20", image: "https://picsum.photos/seed/ep3/200/200" },
  { id: 14, title: "Unsolved Mysteries: The Disappearance", podcast: "True Crime Daily", duration: "1h 30m", date: "Oct 18", image: "https://picsum.photos/seed/ep4/200/200" },
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
    <div className="min-h-screen bg-[#050505] text-white pb-24 font-sans">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/featured-pod/1920/1080" 
            alt="Featured Podcast" 
            className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-[#050505]/50 to-transparent" />
        </div>
        
        <div className="absolute inset-0 p-6 md:p-16 pt-32 md:pt-48 flex flex-col justify-start z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-black bg-white px-3 py-1 rounded-sm">Exclusive</span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/70 border border-white/20 px-3 py-1 rounded-sm">Mindfulness</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-light tracking-tighter mb-4 md:mb-6 leading-[0.9]">
              The Art of <span className="italic font-normal">Stillness</span>
            </h1>
            
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80 mb-6 md:mb-8">
              <span className="text-white">Hosted by Elena Vance</span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> 1h 15m</span>
              <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block"></span>
              <span className="flex items-center gap-1.5 text-yellow-500"><Star size={14} className="fill-yellow-500" /> 4.9</span>
            </div>

            <p className="text-white/70 text-sm md:text-lg mb-8 md:mb-10 line-clamp-3 md:line-clamp-none max-w-2xl font-medium leading-relaxed">
              In this exclusive interview, we explore the profound impact of silence and how finding moments of stillness can dramatically improve creativity and mental clarity in an increasingly noisy world.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-white text-black rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transform duration-300">
                <Play size={18} className="fill-current" /> Play Episode
              </button>
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0 backdrop-blur-md">
                <Heart size={20} className="md:w-6 md:h-6" />
              </button>
              <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0 backdrop-blur-md">
                <Share2 size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Rows */}
      <div className="px-4 md:px-12 mt-12 md:mt-16 relative z-20 space-y-16 md:space-y-24">
        
        {/* Top Podcasts */}
        <section>
          <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight">Top <span className="italic text-white/50">Podcasts</span></h2>
            <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
              View All <ChevronRight size={14} />
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {topPodcasts.map((pod, i) => (
              <motion.div 
                key={pod.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, ease: "easeOut" }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-900 shadow-xl">
                  <img src={pod.image} alt={pod.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform mb-auto self-end shadow-lg">
                      <Play size={20} className="text-white fill-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold uppercase tracking-wider text-white/90">
                    {pod.category}
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm md:text-base mb-1 leading-tight group-hover:text-indigo-400 transition-colors truncate">{pod.title}</h3>
                <p className="text-neutral-400 text-xs font-medium mb-2 truncate">{pod.host}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1 text-[10px] md:text-xs text-yellow-500 font-bold">
                    <Star size={12} className="fill-yellow-500" /> {pod.rating}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] md:text-xs text-neutral-500 font-bold uppercase">
                    <Clock size={12} /> {pod.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trending Episodes & Categories Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Trending Episodes */}
          <section className="lg:col-span-2">
            <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight">Trending <span className="italic text-white/50">Episodes</span></h2>
              <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
                View All <ChevronRight size={14} />
              </span>
            </div>
            
            <div className="flex flex-col gap-3 md:gap-4">
              {trendingEpisodes.map((ep, i) => (
                <motion.div 
                  key={ep.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 md:gap-6 p-3 md:p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/10"
                >
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shrink-0 shadow-lg">
                    <img src={ep.image} alt={ep.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play size={20} className="text-white fill-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] md:text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1 md:mb-1.5">{ep.podcast}</div>
                    <h3 className="text-white font-bold text-sm md:text-lg leading-tight mb-1 md:mb-2 truncate group-hover:text-white/90 transition-colors">{ep.title}</h3>
                    <div className="flex items-center gap-3 text-[10px] md:text-xs text-neutral-500 font-medium">
                      <span>{ep.date}</span>
                      <span className="w-1 h-1 rounded-full bg-neutral-700"></span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {ep.duration}</span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                      <Heart size={16} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Categories */}
          <section className="lg:col-span-1">
            <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-white/10 pb-4">
              <h2 className="text-2xl md:text-4xl font-serif font-light text-white tracking-tight">Browse <span className="italic text-white/50">Categories</span></h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {categories.map((cat, i) => (
                <motion.div 
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative h-20 md:h-24 rounded-xl overflow-hidden group cursor-pointer bg-neutral-900 border border-white/5 ${cat.border} transition-all duration-300`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase group-hover:scale-105 transition-transform duration-300 drop-shadow-md">{cat.name}</span>
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
