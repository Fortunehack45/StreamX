import { motion } from "motion/react";
import { Play, Heart, MoreHorizontal, Shuffle, SkipBack, SkipForward, Repeat, Disc3, ListMusic, Mic2, Radio, ChevronRight } from "lucide-react";

const topTracks = [
  { id: 1, title: "Starboy", artist: "The Weeknd, Daft Punk", duration: "3:50", plays: "2.4B", image: "https://picsum.photos/seed/starboy/100/100" },
  { id: 2, title: "Blinding Lights", artist: "The Weeknd", duration: "3:20", plays: "3.8B", image: "https://picsum.photos/seed/blinding/100/100" },
  { id: 3, title: "Midnight City", artist: "M83", duration: "4:03", plays: "1.1B", image: "https://picsum.photos/seed/midnight/100/100" },
  { id: 4, title: "Nightcall", artist: "Kavinsky", duration: "4:19", plays: "850M", image: "https://picsum.photos/seed/nightcall/100/100" },
  { id: 5, title: "Genesis", artist: "Grimes", duration: "4:15", plays: "420M", image: "https://picsum.photos/seed/genesis/100/100" },
];

const madeForYou = [
  { id: 11, title: "Synthwave Mix", desc: "Neon lights and late night drives.", image: "https://picsum.photos/seed/synth/400/400" },
  { id: 12, title: "Deep Focus", desc: "Ambient sounds for deep work.", image: "https://picsum.photos/seed/focus2/400/400" },
  { id: 13, title: "Indie Pop", desc: "The best new indie pop tracks.", image: "https://picsum.photos/seed/indie/400/400" },
  { id: 14, title: "Late Night", desc: "Slow jams for the midnight hour.", image: "https://picsum.photos/seed/late/400/400" },
];

const newReleases = [
  { id: 21, title: "Dawn FM", artist: "The Weeknd", type: "Album", image: "https://picsum.photos/seed/dawnfm/400/400" },
  { id: 22, title: "Currents", artist: "Tame Impala", type: "Album", image: "https://picsum.photos/seed/currents/400/400" },
  { id: 23, title: "Random Access Memories", artist: "Daft Punk", type: "Album", image: "https://picsum.photos/seed/ram/400/400" },
  { id: 24, title: "After Hours", artist: "The Weeknd", type: "Album", image: "https://picsum.photos/seed/afterhours/400/400" },
];

const trendingArtists = [
  { id: 31, name: "The Weeknd", followers: "102M", image: "https://picsum.photos/seed/weeknd/400/400" },
  { id: 32, name: "Daft Punk", followers: "45M", image: "https://picsum.photos/seed/daftpunk/400/400" },
  { id: 33, name: "Tame Impala", followers: "28M", image: "https://picsum.photos/seed/tameimpala/400/400" },
  { id: 34, name: "Kavinsky", followers: "12M", image: "https://picsum.photos/seed/kavinsky/400/400" },
];

export function Audio() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pb-32 relative overflow-hidden font-sans">
      {/* Atmospheric Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-fuchsia-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="px-4 md:px-12 pt-4 md:pt-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12 flex items-end justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
              Music
            </h1>
            <p className="text-neutral-400 mt-1 md:mt-2 font-medium tracking-wide text-xs md:text-sm">Your personal soundtrack</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ListMusic size={18} className="text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mic2 size={18} className="text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Radio size={18} className="text-white" />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Left Column: Featured Album/Playlist */}
          <div className="lg:w-1/3 shrink-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-28"
            >
              <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/20 mb-6 md:mb-8 relative group">
                <img src="https://picsum.photos/seed/featured-audio/800/800" alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-4 md:mb-6 hover:scale-105 transition-transform cursor-pointer">
                    <Play size={24} className="ml-1.5 md:w-8 md:h-8 fill-black" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2 tracking-tighter leading-none">Neon Nights</h2>
                  <p className="text-white/70 text-xs md:text-sm font-medium">Curated by StreamX • 50 songs, 3 hr 12 min</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 md:gap-4">
                <button className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 md:py-4 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white/20 transition-colors flex items-center justify-center gap-2">
                  <Shuffle size={16} /> Shuffle Play
                </button>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0">
                  <Heart size={20} className="md:w-6 md:h-6" />
                </button>
                <button className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0">
                  <MoreHorizontal size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tracklist & More */}
          <div className="lg:w-2/3 flex-1 space-y-12 md:space-y-16">
            
            {/* Top Tracks */}
            <section>
              <div className="flex items-end justify-between mb-4 md:mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Top <span className="italic text-white/50">Tracks</span></h2>
              </div>
              
              <div className="flex flex-col gap-2">
                {topTracks.map((track, i) => (
                  <motion.div 
                    key={track.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="w-6 md:w-8 text-center text-neutral-500 font-mono text-xs md:text-sm group-hover:hidden">
                      {i + 1}
                    </div>
                    <div className="w-6 md:w-8 flex justify-center hidden group-hover:flex">
                      <Play size={14} className="text-white fill-white md:w-4 md:h-4" />
                    </div>
                    <img src={track.image} alt={track.title} className="w-10 h-10 md:w-12 md:h-12 rounded-md object-cover" referrerPolicy="no-referrer" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold text-sm md:text-base leading-tight mb-0.5 truncate group-hover:text-indigo-400 transition-colors">{track.title}</div>
                      <div className="text-neutral-400 text-[10px] md:text-xs truncate">{track.artist}</div>
                    </div>
                    <div className="text-neutral-500 text-[10px] md:text-xs font-mono hidden sm:block w-20 md:w-24 text-right">
                      {track.plays}
                    </div>
                    <div className="text-neutral-500 text-[10px] md:text-xs font-mono w-10 md:w-12 text-right">
                      {track.duration}
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-white hidden md:block">
                      <Heart size={16} />
                    </button>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-white hidden md:block">
                      <MoreHorizontal size={16} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* New Releases */}
            <section>
              <div className="flex items-end justify-between mb-4 md:mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">New <span className="italic text-white/50">Releases</span></h2>
                <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {newReleases.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4 bg-neutral-900 shadow-lg">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-xl">
                          <Play size={20} className="text-white fill-white ml-1 md:w-6 md:h-6" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-xs md:text-sm mb-0.5 md:mb-1 truncate group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                    <p className="text-neutral-500 text-[10px] md:text-xs truncate">{item.type} • {item.artist}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Trending Artists */}
            <section>
              <div className="flex items-end justify-between mb-4 md:mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Trending <span className="italic text-white/50">Artists</span></h2>
                <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest hover:text-white cursor-pointer transition-colors flex items-center gap-1">
                  View All <ChevronRight size={14} />
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {trendingArtists.map((artist, i) => (
                  <motion.div
                    key={artist.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer flex flex-col items-center text-center"
                  >
                    <div className="relative w-full aspect-square rounded-full overflow-hidden mb-3 md:mb-4 bg-neutral-900 shadow-lg border-2 border-transparent group-hover:border-indigo-500/50 transition-colors duration-300">
                      <img src={artist.image} alt={artist.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-xl">
                          <Play size={20} className="text-white fill-white ml-1 md:w-6 md:h-6" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-xs md:text-sm mb-0.5 md:mb-1 truncate group-hover:text-indigo-400 transition-colors">{artist.name}</h3>
                    <p className="text-neutral-500 text-[10px] md:text-xs truncate">{artist.followers} Followers</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Made For You */}
            <section>
              <div className="flex items-end justify-between mb-4 md:mb-6 border-b border-white/10 pb-4">
                <h2 className="text-2xl md:text-3xl font-serif font-light text-white tracking-tight">Made For <span className="italic text-white/50">You</span></h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {madeForYou.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4 bg-neutral-900 shadow-lg">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-xl">
                          <Play size={20} className="text-white fill-white ml-1 md:w-6 md:h-6" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-xs md:text-sm mb-0.5 md:mb-1 truncate group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                    <p className="text-neutral-500 text-[10px] md:text-xs line-clamp-2 leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>

      {/* Floating Glass Player Bar */}
    </div>
  );
}
