import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Users, Info, Calendar, Globe, Award, MessageSquare, Share2, Plus, Check, Download, Mic, List, Heart, Headphones } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";

const podcastData = {
  "101": { 
    title: "The Daily Tech", 
    desc: "Stay ahead of the curve with the latest in tech, AI, and innovation. We dive deep into the stories that are shaping our future, from Silicon Valley to the global stage.", 
    rating: "4.9", 
    episodes: "450+", 
    year: "2026",
    language: "English",
    category: "Technology",
    hosts: [
      { name: "Sarah Chen", role: "Lead Host", image: "https://picsum.photos/seed/sarah-host/200/200" },
      { name: "David Miller", role: "Tech Analyst", image: "https://picsum.photos/seed/david-host/200/200" }
    ],
    recentEpisodes: [
      { id: 1, title: "The Rise of Quantum Computing", duration: "45 min", date: "Mar 24, 2026", description: "Exploring how quantum processors are finally reaching commercial viability." },
      { id: 2, title: "AI Ethics in 2026", duration: "52 min", date: "Mar 20, 2026", description: "A deep dive into the new regulations governing autonomous systems." },
      { id: 3, title: "The Future of Neural Links", duration: "38 min", date: "Mar 15, 2026", description: "How brain-computer interfaces are moving from medical to consumer use." }
    ]
  },
  "102": { 
    title: "Crime Scene", 
    desc: "Uncovering the world's most mysterious unsolved cases. Each week, we explore a new cold case, interviewing experts and witnesses to piece together the truth.", 
    rating: "4.7", 
    episodes: "120+", 
    year: "2025",
    language: "English",
    category: "True Crime",
    hosts: [
      { name: "Detective Mark", role: "Investigator", image: "https://picsum.photos/seed/mark-host/200/200" }
    ],
    recentEpisodes: [
      { id: 1, title: "The Shadow in the Woods", duration: "60 min", date: "Mar 22, 2026", description: "Revisiting the 1994 disappearance that shocked a small town." }
    ]
  },
};

const similarPodcasts = [
  { id: 103, title: "Mindset Matters", image: "https://picsum.photos/seed/mindset/400/600", rating: "4.8" },
  { id: 104, title: "History Unveiled", image: "https://picsum.photos/seed/history/400/600", rating: "4.6" },
  { id: 105, title: "The Future Economy", image: "https://picsum.photos/seed/economy/400/600", rating: "4.5" },
];

export function PodcastDetails() {
  const { id } = useParams<{ id: string }>();
  const podcast = podcastData[id as keyof typeof podcastData] || podcastData["101"];
  const [userRating, setUserRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isRated, setIsRated] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setIsRated(true);
    setTimeout(() => setIsRated(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32 overflow-x-hidden">
      {/* Immersive Podcast Hero */}
      <div className="relative h-[75vh] md:h-[85vh] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CinematicImage 
            src={`https://picsum.photos/seed/${podcast.title}/1920/1080`} 
            alt={podcast.title} 
            className="w-full h-full object-cover grayscale opacity-30" 
            containerClassName="w-full h-full"
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>
        
        <Link to="/podcasts" className="absolute top-12 left-6 md:top-32 md:left-12 p-5 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-soft z-20 shadow-2xl active:scale-90">
          <ChevronLeft size={28} />
        </Link>

        <div className="relative px-6 md:px-20 pt-32 md:pt-64 pb-12 md:pb-32 z-10">
          <div className="flex flex-col md:flex-row items-end gap-12 md:gap-20">
             <motion.div 
               initial={{ opacity: 0, y: 60 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="w-48 h-48 md:w-80 md:h-80 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] border border-white/10 shrink-0 relative"
             >
                <CinematicImage src={`https://picsum.photos/seed/${podcast.title}/600/600`} className="w-full h-full object-cover" />
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 40 }} 
               animate={{ opacity: 1, x: 0 }} 
               transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="flex-1 text-center md:text-left"
             >
                <div className="flex items-center justify-center md:justify-start gap-5 mb-8 md:mb-12">
                  <span className="px-5 py-2 bg-indigo-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white shadow-[0_0_30px_rgba(79,70,229,0.5)]">Podcast</span>
                  <span className="flex items-center gap-2 text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em]"><Star size={16} className="fill-current" /> {podcast.rating}</span>
                </div>

                <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter mb-8 md:mb-12 leading-[0.8] uppercase italic drop-shadow-2xl">
                   {podcast.title}
                </h1>
                
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
                  <button className="group relative flex justify-center items-center gap-5 bg-white text-black px-12 py-6 md:py-8 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-soft shadow-2xl hover:bg-neutral-200 active:scale-95">
                    <Play size={24} className="fill-black" /> 
                    <span>Listen Latest</span>
                  </button>
                  
                  <div className="flex gap-6 justify-center">
                    <button 
                      onClick={() => setIsSubscribed(!isSubscribed)}
                      className={cn(
                        "flex-1 md:flex-none px-10 flex items-center justify-center gap-4 rounded-full transition-soft border border-white/10 font-black text-[10px] uppercase tracking-widest backdrop-blur-3xl active:scale-90",
                        isSubscribed ? "bg-white text-black" : "bg-white/5 text-white hover:bg-white hover:text-black"
                      )}
                    >
                      {isSubscribed ? <Check size={18} /> : <Plus size={18} />}
                      <span>{isSubscribed ? "Subscribed" : "Subscribe"}</span>
                    </button>
                    <button className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft active:scale-75">
                      <Share2 size={24} />
                    </button>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Content Landscape */}
      <div className="px-6 md:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-16 md:gap-32 relative z-20">
        
        {/* Episodes Archive */}
        <div className="lg:col-span-8 space-y-32">
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Overview</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <p className="text-neutral-400 text-xl md:text-3xl leading-[1.5] font-medium max-w-5xl italic">
              "{podcast.desc}"
            </p>
          </motion.section>

          <section>
            <div className="flex items-center justify-between mb-16">
               <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Transmission Archive</h2>
               <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">
                  <List size={16} /> Filtered by Newest
               </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {podcast.recentEpisodes.map((ep, i) => (
                <motion.div 
                  key={ep.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="group relative overflow-hidden p-8 md:p-12 rounded-[3rem] md:rounded-[4rem] bg-neutral-900/10 border border-white/5 hover:border-indigo-500/20 transition-soft cursor-pointer shadow-2xl"
                >
                  <div className="absolute top-0 right-0 p-8">
                     <span className="text-[10px] font-black text-neutral-700 uppercase tracking-widest">{ep.date}</span>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-indigo-600/10 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-soft shadow-xl">
                      <Play size={28} className="group-hover:fill-current" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-indigo-400 transition-colors">{ep.title}</h3>
                      <p className="text-neutral-500 text-sm md:text-lg leading-relaxed mb-8 max-w-3xl">{ep.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full"><Clock size={14} /> {ep.duration}</span>
                        <button className="flex items-center gap-3 hover:text-white transition-colors"><Download size={14} /> Sequence Data</button>
                        <button className="flex items-center gap-3 hover:text-white transition-colors"><Share2 size={14} /> Share</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Intelligence */}
        <div className="lg:col-span-4 space-y-24">
          
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl shadow-2xl sticky top-32"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-16">Transmission Specs</h3>
            
            <div className="space-y-12">
              {[
                { label: "Archive Depth", val: podcast.episodes, icon: Headphones },
                { label: "Linguistics", val: podcast.language, icon: Globe },
                { label: "Inception", val: podcast.year, icon: Calendar },
                { label: "Classification", val: podcast.category, icon: List }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center group cursor-default">
                  <div className="flex items-center gap-5">
                     <item.icon size={20} className="text-neutral-700 group-hover:text-indigo-500 transition-soft" />
                     <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">{item.label}</span>
                  </div>
                  <span className="font-black text-sm text-white">{item.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-24 border-t border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-12">Host Collective</h3>
              <div className="space-y-8">
                {podcast.hosts.map((host) => (
                  <div key={host.name} className="flex items-center gap-6 p-5 rounded-[2rem] bg-indigo-600/[0.03] border border-white/5 group hover:bg-white hover:text-black transition-soft">
                    <img src={host.image} alt={host.name} className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-soft" />
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-tight mb-1">{host.name}</h4>
                      <p className="text-[10px] font-bold text-neutral-500 group-hover:text-black/60 uppercase tracking-widest">{host.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 pt-24 border-t border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-12">Related Signals</h3>
              <div className="grid grid-cols-1 gap-8">
                {similarPodcasts.map((p) => (
                  <Link key={p.id} to={`/podcasts/${p.id}`} className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-white/5 transition-soft">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/5 flex-shrink-0 shadow-lg p-1 relative">
                      <CinematicImage src={p.image} alt={p.title} className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 transition-soft rounded-xl" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-soft truncate mb-2">{p.title}</h4>
                      <span className="flex items-center gap-2 text-[10px] text-yellow-500 font-black tracking-widest"><Star size={12} className="fill-current" /> {p.rating}</span>
                    </div>
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
