import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Users, Info, Calendar, Globe, Award, MessageSquare, Share2, Plus, Check, Download, Mic, List, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const podcastData = {
  "101": { 
    title: "The Daily Tech", 
    desc: "Stay ahead of the curve with the latest in tech, AI, and innovation. We dive deep into the stories that are shaping our future, from Silicon Valley to the global stage. Join our expert hosts as they break down complex trends into digestible insights.", 
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
    desc: "Uncovering the world's most mysterious unsolved cases. Each week, we explore a new cold case, interviewing experts and witnesses to piece together the truth. A gripping journey into the heart of darkness.", 
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
  "103": { 
    title: "Mindset Matters", 
    desc: "A podcast about psychology, productivity, and personal growth. Learn how to master your mind and achieve your goals.", 
    rating: "4.8", 
    episodes: "85+", 
    year: "2026",
    language: "English",
    category: "Self-Help",
    hosts: [{ name: "Dr. Amy", role: "Psychologist", image: "https://picsum.photos/seed/amy-host/200/200" }],
    recentEpisodes: [{ id: 1, title: "The Power of Habit", duration: "40 min", date: "Mar 25, 2026", description: "How small changes lead to big results." }]
  },
  "104": { 
    title: "History Unveiled", 
    desc: "Exploring the hidden stories of the past. From ancient civilizations to modern revolutions, we uncover the truth behind the history books.", 
    rating: "4.6", 
    episodes: "210+", 
    year: "2024",
    language: "English",
    category: "History",
    hosts: [{ name: "Prof. James", role: "Historian", image: "https://picsum.photos/seed/james-host/200/200" }],
    recentEpisodes: [{ id: 1, title: "The Fall of Rome", duration: "55 min", date: "Mar 21, 2026", description: "What really happened in 476 AD?" }]
  },
  "105": { 
    title: "The Future Economy", 
    desc: "Analyzing the trends that are shaping the global economy. From crypto to climate change, we look at what's next for the world of finance.", 
    rating: "4.5", 
    episodes: "60+", 
    year: "2026",
    language: "English",
    category: "Business",
    hosts: [{ name: "Lisa Wong", role: "Economist", image: "https://picsum.photos/seed/lisa-host/200/200" }],
    recentEpisodes: [{ id: 1, title: "The Post-Dollar World", duration: "48 min", date: "Mar 18, 2026", description: "Is the era of dollar dominance ending?" }]
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
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32">
      {/* Hero Section */}
      <div className="relative h-[65vh] md:min-h-[85vh] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={`https://picsum.photos/seed/${podcast.title}/1920/1080`} 
            alt={podcast.title} 
            className="w-full h-full object-cover opacity-60" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>
        
        <Link to="/podcasts" className="absolute top-12 left-4 md:top-28 md:left-8 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all z-20">
          <ChevronLeft size={24} />
        </Link>

        <div className="relative p-6 md:p-20 pt-32 md:pt-64 pb-8 md:pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">Podcast</span>
              <span className="flex items-center gap-1.5 text-yellow-500 font-black text-sm uppercase tracking-widest"><Star size={16} className="fill-current" /> {podcast.rating}</span>
              <span className="text-white/40 font-black text-sm uppercase tracking-widest">|</span>
              <span className="text-white/60 font-black text-sm uppercase tracking-widest">{podcast.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[8rem] font-black tracking-tighter mb-10 leading-[0.9] lg:leading-[0.8] uppercase max-w-6xl">{podcast.title}</h1>
            
            <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-center gap-4 md:gap-6">
              <button className="flex items-center justify-center w-full md:w-auto gap-4 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                <Play size={24} className="fill-black" /> Listen Latest
              </button>
              <button 
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={cn(
                  "flex items-center justify-center w-full md:w-auto gap-4 px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] transition-all border",
                  isSubscribed 
                    ? "bg-white text-black border-white" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black"
                )}
              >
                {isSubscribed ? <Check size={20} /> : <Plus size={20} />} {isSubscribed ? "Subscribed" : "Subscribe"}
              </button>
              <button className="w-full md:w-auto p-5 flex justify-center bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Share2 size={24} />
              </button>
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
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">About</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <p className="text-neutral-300 text-2xl leading-relaxed font-medium max-w-4xl">{podcast.desc}</p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Episodes</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="space-y-6">
              {podcast.recentEpisodes.map((ep, i) => (
                <motion.div 
                  key={ep.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-4 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-neutral-900/20 border border-white/5 hover:border-white/20 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                    <Play size={24} className="group-hover:fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black uppercase tracking-tight group-hover:text-white transition-colors">{ep.title}</h3>
                      <span className="text-[10px] font-black text-neutral-500 uppercase tracking-widest">{ep.date}</span>
                    </div>
                    <p className="text-neutral-500 text-sm line-clamp-1 mb-4">{ep.description}</p>
                    <div className="flex items-center gap-4 text-[10px] font-black text-neutral-600 uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {ep.duration}</span>
                      <span className="flex items-center gap-1.5 hover:text-white transition-colors"><Download size={12} /> Download</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* User Rating Section */}
          <section className="p-8 md:p-12 rounded-[3rem] bg-neutral-900/20 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Rate this podcast</h3>
                <p className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Help others discover great content</p>
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
        </div>

        {/* Right Column: Hosts & Similar */}
        <div className="lg:col-span-4 space-y-24">
          <section className="p-10 rounded-[3rem] bg-neutral-900/20 border border-white/5 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Information</h3>
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Total Episodes</span>
                <span className="font-bold text-lg flex items-center gap-2"><List size={18} /> {podcast.episodes}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Language</span>
                <span className="font-bold text-lg flex items-center gap-2"><Globe size={18} /> {podcast.language}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Started</span>
                <span className="font-bold text-lg flex items-center gap-2"><Calendar size={18} /> {podcast.year}</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Meet the Hosts</h3>
            <div className="space-y-6">
              {podcast.hosts.map((host) => (
                <div key={host.name} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <img src={host.image} alt={host.name} className="w-12 h-12 rounded-xl object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight">{host.name}</h4>
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{host.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Similar Podcasts</h3>
            <div className="grid grid-cols-1 gap-6">
              {similarPodcasts.map((p) => (
                <Link key={p.id} to={`/podcasts/${p.id}`} className="group flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all flex-shrink-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors mb-1">{p.title}</h4>
                    <span className="flex items-center gap-1 text-[10px] text-yellow-500 font-black"><Star size={10} className="fill-current" /> {p.rating}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
