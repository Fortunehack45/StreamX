import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Users, Info, Calendar, Globe, Award, MessageSquare, Share2, Plus, Check, Download, Music, Disc, Heart, SkipBack, SkipForward, Repeat, Shuffle } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";

const musicData = {
  "201": { 
    title: "Midnight Echoes", 
    artist: "Neon Voyager",
    desc: "A journey through neon-lit streets and retro-futuristic landscapes. This album blends classic synthwave elements with modern production, creating a soundscape that is both nostalgic and forward-looking.", 
    rating: "4.9", 
    tracksCount: "12", 
    year: "2026",
    genre: "Synthwave",
    label: "Starlight Records",
    tracks: [
      { id: 1, title: "Neon Horizon", duration: "4:20", plays: "1.2M" },
      { id: 2, title: "Cyber Dreams", duration: "3:45", plays: "850K" },
      { id: 3, title: "Midnight Drive", duration: "5:12", plays: "2.1M" },
      { id: 4, title: "Retro Pulse", duration: "4:05", plays: "600K" },
      { id: 5, title: "Digital Sunset", duration: "4:58", plays: "1.5M" }
    ],
    artistInfo: {
      name: "Neon Voyager",
      bio: "An electronic music producer based in Tokyo, known for blending retro aesthetics with cutting-edge sound design.",
      image: "https://picsum.photos/seed/neon-artist/200/200"
    }
  },
  "202": { 
    title: "Urban Pulse", 
    artist: "The Chill Collective",
    desc: "Chill beats for late-night study sessions or relaxation. A collection of lo-fi tracks that capture the essence of city life at rest.", 
    rating: "4.7", 
    tracksCount: "15", 
    year: "2025",
    genre: "Lo-Fi",
    label: "Urban Beats",
    tracks: [
      { id: 1, title: "Rainy Window", duration: "2:30", plays: "5M" }
    ],
    artistInfo: {
      name: "The Chill Collective",
      bio: "A group of musicians dedicated to creating the perfect background music for modern life.",
      image: "https://picsum.photos/seed/chill-artist/200/200"
    }
  },
};

const similarMusic = [
  { id: 203, title: "Celestial Harmonies", image: "https://picsum.photos/seed/celestial/400/600", rating: "4.8", artist: "Star Dust" },
  { id: 204, title: "Electric Soul", image: "https://picsum.photos/seed/soul/400/600", rating: "4.6", artist: "Volt" },
  { id: 205, title: "Synth Waves", image: "https://picsum.photos/seed/waves/400/600", rating: "4.5", artist: "Wave Runner" },
];

export function MusicDetails() {
  const { id } = useParams<{ id: string }>();
  const music = musicData[id as keyof typeof musicData] || musicData["201"];
  const [userRating, setUserRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isRated, setIsRated] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setIsRated(true);
    setTimeout(() => setIsRated(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32 overflow-x-hidden">
      {/* Immersive Audio Hero */}
      <div className="relative h-[85vh] md:h-[95vh] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <CinematicImage 
            src={`https://picsum.photos/seed/${music.title}/1920/1080`} 
            alt={music.title} 
            className="w-full h-full object-cover blur-sm" 
            containerClassName="w-full h-full"
            referrerPolicy="no-referrer" 
          />
          {/* Dynamic Background Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>
        
        <Link to="/audio" className="absolute top-12 left-6 md:top-32 md:left-12 p-5 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-soft z-20 shadow-2xl active:scale-90">
          <ChevronLeft size={28} />
        </Link>

        <div className="relative px-6 md:px-20 pt-32 md:pt-64 pb-16 md:pb-32 z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-16 md:mb-24">
             {/* Large Album Art Reveal */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-64 h-64 md:w-[450px] md:h-[450px] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 group cursor-pointer relative"
              >
                 <CinematicImage src={`https://picsum.photos/seed/${music.title}/800/800`} className="w-full h-full object-cover group-hover:scale-110 transition-soft duration-[2s]" />
              </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 60 }} 
               animate={{ opacity: 1, x: 0 }} 
               transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
               className="text-center md:text-left flex-1"
             >
                <div className="flex items-center justify-center md:justify-start gap-5 mb-8 md:mb-12">
                  <span className="px-5 py-2 bg-sky-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white shadow-[0_0_30px_rgba(2,132,199,0.5)]">Album</span>
                  <span className="flex items-center gap-2 text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em]"><Star size={16} className="fill-current" /> {music.rating}</span>
                </div>

                <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter mb-6 md:mb-10 leading-[0.8] uppercase italic drop-shadow-2xl">
                   {music.title}
                </h1>
                <p className="text-2xl md:text-4xl font-bold text-white/40 uppercase tracking-[0.4em] mb-12 italic">{music.artist}</p>
                
                <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
                  <button className="group relative flex justify-center items-center gap-5 bg-white text-black px-12 py-6 md:py-8 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-soft shadow-2xl hover:bg-neutral-200 active:scale-95 overflow-hidden">
                    <Play size={24} className="fill-black group-hover:scale-125 transition-transform" /> 
                    <span className="relative z-10">Initiate Playback</span>
                  </button>
                  
                  <div className="flex gap-6 justify-center">
                    <button 
                      onClick={() => setIsLiked(!isLiked)}
                      className={cn(
                        "w-16 h-16 md:w-20 md:h-20 flex justify-center items-center rounded-full transition-soft border border-white/10 active:scale-75",
                        isLiked ? "bg-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.5)]" : "bg-white/5 backdrop-blur-2xl hover:bg-white hover:text-black"
                      )}
                    >
                      <Heart size={24} className={isLiked ? "fill-current" : ""} />
                    </button>
                    <button className="w-16 h-16 md:w-20 md:h-20 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft active:scale-75">
                      <Plus size={24} />
                    </button>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Content Narrative */}
      <div className="px-6 md:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-16 md:gap-32 relative z-20">
        
        {/* Tracklist & Story */}
        <div className="lg:col-span-8 space-y-32">
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">The Narrative</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <p className="text-neutral-400 text-xl md:text-3xl leading-[1.4] font-medium max-w-5xl italic tracking-tight">
              "{music.desc}"
            </p>
          </motion.section>

          {/* Precision Tracklist */}
          <section>
            <div className="flex items-center justify-between mb-16">
               <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Audio Sequences</h2>
               <div className="flex gap-8">
                  <Shuffle size={18} className="text-neutral-700 hover:text-white cursor-pointer transition-colors" />
                  <Repeat size={18} className="text-neutral-700 hover:text-white cursor-pointer transition-colors" />
               </div>
            </div>
            
            <div className="space-y-4">
              {music.tracks.map((track, i) => (
                <motion.div 
                  key={track.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.8 }}
                  onClick={() => setActiveTrack(track.id)}
                  className={cn(
                    "group relative overflow-hidden p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] transition-soft flex items-center gap-6 md:gap-10 border cursor-pointer",
                    activeTrack === track.id 
                      ? "bg-white text-black border-white shadow-2xl scale-[1.02]" 
                      : "bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-black text-xs md:text-sm",
                    activeTrack === track.id ? "bg-black text-white" : "bg-white/5 text-neutral-600 group-hover:text-white"
                  )}>
                    {activeTrack === track.id ? <Play size={20} className="fill-white" /> : String(i + 1).padStart(2, '0')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-black text-lg md:text-xl uppercase tracking-tight mb-1">{track.title}</h3>
                    <div className="flex items-center gap-4">
                       <span className={cn("text-[10px] font-black uppercase tracking-widest", activeTrack === track.id ? "text-black/50" : "text-neutral-600")}>{music.artist}</span>
                       <span className="w-1 h-1 rounded-full bg-neutral-800"></span>
                       <span className={cn("text-[10px] font-black uppercase tracking-widest text-neutral-600", activeTrack === track.id && "text-black/40")}>{track.plays} STREAMS</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                     <span className={cn("hidden md:block text-xs font-black tabular-nums", activeTrack === track.id ? "text-black/60" : "text-neutral-700")}>{track.duration}</span>
                     <button className={cn("p-3 rounded-full transition-soft active:scale-75", activeTrack === track.id ? "bg-black/5 text-black hover:bg-black/10" : "text-neutral-600 hover:text-white bg-white/5")}>
                        <Download size={18} />
                     </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Artist Profile & Discovery */}
        <div className="lg:col-span-4 space-y-24">
          
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] md:rounded-[4.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl shadow-2xl sticky top-32"
          >
            {/* Visual Artist Card */}
            <div className="mb-16 text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white/5 shadow-2xl p-1 relative">
                   <CinematicImage src={music.artistInfo.image} className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-soft" />
                </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{music.artistInfo.name}</h3>
               <button className="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-neutral-200 transition-soft shadow-xl">Transmission Active</button>
            </div>

            <div className="space-y-12">
              <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5 italic text-neutral-500 text-xs leading-relaxed text-center">
                 "{music.artistInfo.bio}"
              </div>
              
              <div className="h-px bg-white/5" />

              <div className="space-y-10">
                {[
                  { label: "Temporal Release", val: music.year, icon: Calendar },
                  { label: "Sonic Classification", val: music.genre, icon: Music },
                  { label: "Sequences", val: music.tracksCount, icon: Disc },
                  { label: "Affiliation", val: music.label, icon: Award }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-default">
                    <div className="flex items-center gap-4">
                       <item.icon size={18} className="text-neutral-700 group-hover:text-sky-500 transition-soft" />
                       <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">{item.label}</span>
                    </div>
                    <span className="font-black text-sm text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 pt-20 border-t border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-12 text-center md:text-left">Related Transmissions</h3>
              <div className="grid grid-cols-1 gap-6">
                {similarMusic.map((m) => (
                  <Link key={m.id} to={`/audio/${m.id}`} className="group flex items-center gap-6 p-4 rounded-3xl hover:bg-white/5 transition-soft">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/5 flex-shrink-0 shadow-lg relative">
                      <CinematicImage src={m.image} alt={m.title} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-soft" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-soft truncate mb-1">{m.title}</h4>
                      <p className="text-[10px] font-bold text-neutral-700 uppercase tracking-widest">{m.artist}</p>
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
