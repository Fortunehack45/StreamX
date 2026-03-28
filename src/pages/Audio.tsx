import { motion } from "motion/react";
import { Play, Heart, MoreHorizontal, Shuffle, SkipBack, SkipForward, Repeat, Disc3, ListMusic, Mic2, Radio, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const topTracks = [
  { id: 201, title: "Starboy", artist: "The Weeknd, Daft Punk", duration: "3:50", plays: "2.4B", image: "https://picsum.photos/seed/starboy/100/100" },
  { id: 202, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", plays: "3.8B", image: "https://picsum.photos/seed/blinding/100/100" },
  { id: 203, title: "Midnight City", artist: "M83", duration: "4:03", plays: "1.1B", image: "https://picsum.photos/seed/midnight/100/100" },
  { id: 204, title: "Nightcall", artist: "Kavinsky", duration: "4:19", plays: "850M", image: "https://picsum.photos/seed/nightcall/100/100" },
  { id: 205, title: "Genesis", artist: "Grimes", duration: "4:15", plays: "420M", image: "https://picsum.photos/seed/genesis/100/100" },
];

const madeForYou = [
  { id: 201, title: "Synthwave Mix", desc: "Neon lights and late night drives.", image: "https://picsum.photos/seed/synth/400/400" },
  { id: 202, title: "Deep Focus", desc: "Ambient sounds for deep work.", image: "https://picsum.photos/seed/focus2/400/400" },
  { id: 203, title: "Indie Pop", desc: "The best new indie pop tracks.", image: "https://picsum.photos/seed/indie/400/400" },
  { id: 204, title: "Late Night", desc: "Slow jams for the midnight hour.", image: "https://picsum.photos/seed/late/400/400" },
];

const newReleases = [
  { id: 201, title: "Dawn FM", artist: "The Weeknd", type: "Album", image: "https://picsum.photos/seed/dawnfm/400/400" },
  { id: 202, title: "Currents", artist: "Tame Impala", type: "Album", image: "https://picsum.photos/seed/currents/400/400" },
  { id: 203, title: "Random Access Memories", artist: "Daft Punk", type: "Album", image: "https://picsum.photos/seed/ram/400/400" },
  { id: 204, title: "After Hours", artist: "The Weeknd", type: "Album", image: "https://picsum.photos/seed/afterhours/400/400" },
];

const trendingArtists = [
  { id: 31, name: "The Weeknd", followers: "102M", image: "https://picsum.photos/seed/weeknd/400/400" },
  { id: 32, name: "Daft Punk", followers: "45M", image: "https://picsum.photos/seed/daftpunk/400/400" },
  { id: 33, name: "Tame Impala", followers: "28M", image: "https://picsum.photos/seed/tameimpala/400/400" },
  { id: 34, name: "Kavinsky", followers: "12M", image: "https://picsum.photos/seed/kavinsky/400/400" },
];

export function Audio() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pb-48 md:pb-32 relative overflow-x-hidden font-sans">
      {/* Atmospheric Background Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="px-6 md:px-20 pt-28 md:pt-40 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20 flex items-end justify-between border-b border-white/5 pb-8"
        >
          <div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 italic">
              Acoustics
            </h1>
            <p className="text-neutral-500 mt-2 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">Your personal sonic sanctuary</p>
          </div>
          <div className="hidden md:flex gap-6">
            {[ListMusic, Mic2, Radio].map((Icon, i) => (
              <button key={i} className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-soft hover:scale-110 active:scale-90 shadow-lg">
                <Icon size={20} />
              </button>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Featured Album/Playlist */}
          <div className="lg:w-[40%] shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32"
            >
              <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(79,70,229,0.15)] mb-10 relative group border border-white/5">
                <img src="https://picsum.photos/seed/featured-audio/800/800" alt="Featured" className="w-full h-full object-cover transition-soft duration-[2000ms] group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.4)] mb-8 md:mb-12 cursor-pointer transition-soft"
                  >
                    <Play size={32} className="ml-2 md:w-10 md:h-10 fill-black" />
                  </motion.button>
                  <h2 className="text-4xl md:text-7xl font-black text-white mb-2 tracking-tighter leading-none uppercase italic">Neon Nights</h2>
                  <p className="text-white/40 text-xs md:text-base font-black uppercase tracking-[0.2em]">Curated by StreamX • 50 songs • 3 hr 12 min</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <button className="flex-1 min-w-[180px] bg-white text-black py-4 md:py-6 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.3em] hover:bg-neutral-200 transition-soft flex items-center justify-center gap-3 shadow-xl active:scale-95">
                  <Shuffle size={18} /> Shuffle
                </button>
                <button className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-soft active:scale-95 shadow-lg">
                  <Heart size={24} />
                </button>
                <button className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-soft active:scale-95 shadow-lg">
                  <MoreHorizontal size={24} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tracklist & More */}
          <div className="lg:w-[60%] flex-1 space-y-20 md:space-y-32">
            
            {/* Top Tracks */}
            <section>
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-8 md:mb-12 border-b border-white/5 pb-6"
              >
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">Top <span className="text-white/20">Tracks</span></h2>
              </motion.div>
              
              <div className="flex flex-col gap-4">
                {topTracks.map((track, i) => (
                  <Link key={track.id} to={`/audio/${track.id}`}>
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.03)" }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-[1.5rem] border border-transparent hover:border-white/5 transition-soft group cursor-pointer"
                    >
                      <div className="w-8 text-center text-neutral-600 font-black text-xs md:text-base group-hover:hidden">
                        {(i + 1).toString().padStart(2, '0')}
                      </div>
                      <div className="w-8 flex justify-center hidden group-hover:flex">
                        <Play size={18} className="text-white fill-white" />
                      </div>
                      <img src={track.image} alt={track.title} className="w-14 h-14 md:w-20 md:h-20 rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-black text-sm md:text-xl leading-tight mb-1 truncate uppercase tracking-tight group-hover:text-indigo-400 transition-soft">{track.title}</div>
                        <div className="text-neutral-500 text-[10px] md:text-xs font-black uppercase tracking-widest">{track.artist}</div>
                      </div>
                      <div className="text-neutral-600 text-[10px] md:text-sm font-black hidden sm:block w-24 text-right">
                        {track.plays}
                      </div>
                      <div className="text-neutral-600 text-[10px] md:text-sm font-black w-14 text-right">
                        {track.duration}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </section>

            {/* New Releases & Artists - Dynamic horizontal scrolling sections */}
            {[
              { title: "Fresh", sub: "Drops", data: newReleases, type: "album" },
              { title: "Top", sub: "Artists", data: trendingArtists, type: "artist" }
            ].map((section, idx) => (
              <section key={section.title}>
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-end justify-between mb-10 md:mb-14 border-b border-white/5 pb-8"
                >
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{section.title} <span className="text-white/20 whitespace-pre">{section.sub}</span></h2>
                  <span className="text-[10px] md:text-xs font-black text-neutral-500 uppercase tracking-[0.3em] hover:text-white cursor-pointer transition-snappy flex items-center gap-2 group">
                    Explore <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {section.data.map((item: any, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -8 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="group cursor-pointer"
                    >
                      <div className={cn(
                        "relative aspect-square overflow-hidden mb-4 bg-neutral-900 shadow-2xl transition-soft border border-white/5",
                        section.type === "artist" ? "rounded-full" : "rounded-[1.5rem] md:rounded-[2rem]"
                      )}>
                        <img src={item.image} alt={item.title || item.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-soft flex items-center justify-center">
                          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-soft shadow-2xl">
                            <Play size={24} className="text-white fill-white ml-1.5 md:w-8 md:h-8" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-white font-black text-xs md:text-lg mb-1 truncate group-hover:text-indigo-400 transition-soft uppercase tracking-tight">{item.title || item.name}</h3>
                      <p className="text-neutral-600 text-[10px] md:text-xs font-black uppercase tracking-widest truncate">
                        {item.type ? `${item.type} • ${item.artist}` : `${item.followers} Followers`}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}
