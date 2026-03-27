import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Users, Info, Calendar, Globe, Award, MessageSquare, Share2, Plus, Check, Download, Music, Disc, Heart, SkipBack, SkipForward, Repeat, Shuffle } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const musicData = {
  "201": { 
    title: "Midnight Echoes", 
    artist: "Neon Voyager",
    desc: "A journey through neon-lit streets and retro-futuristic landscapes. This album blends classic synthwave elements with modern production, creating a soundscape that is both nostalgic and forward-looking. Perfect for late-night drives or focused work.", 
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
  "203": { 
    title: "Celestial Harmonies", 
    artist: "Star Dust",
    desc: "Ambient soundscapes from the edge of the universe. Deeply immersive and meditative.", 
    rating: "4.8", 
    tracksCount: "8", 
    year: "2026",
    genre: "Ambient",
    label: "Cosmic Records",
    tracks: [{ id: 1, title: "Void", duration: "10:00", plays: "100K" }],
    artistInfo: { name: "Star Dust", bio: "Exploring the silence between stars.", image: "https://picsum.photos/seed/celestial/200/200" }
  },
  "204": { 
    title: "Electric Soul", 
    artist: "Volt",
    desc: "High-energy electronic soul with heavy bass and soulful vocals.", 
    rating: "4.6", 
    tracksCount: "10", 
    year: "2026",
    genre: "Electro-Soul",
    label: "Volt Records",
    tracks: [{ id: 1, title: "Spark", duration: "3:30", plays: "500K" }],
    artistInfo: { name: "Volt", bio: "Electrifying the dancefloor.", image: "https://picsum.photos/seed/soul/200/200" }
  },
  "205": { 
    title: "Synth Waves", 
    artist: "Wave Runner",
    desc: "Classic 80s inspired synthpop with a modern twist.", 
    rating: "4.5", 
    tracksCount: "11", 
    year: "2024",
    genre: "Synthpop",
    label: "Retro Records",
    tracks: [{ id: 1, title: "Ocean Drive", duration: "4:00", plays: "300K" }],
    artistInfo: { name: "Wave Runner", bio: "Chasing the neon sunset.", image: "https://picsum.photos/seed/waves/200/200" }
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
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32">
      {/* Hero Section */}
      <div className="relative min-h-[75vh] md:min-h-[85vh] w-full flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={`https://picsum.photos/seed/${music.title}/1920/1080`} 
            alt={music.title} 
            className="w-full h-full object-cover opacity-60" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>
        
        <Link to="/audio" className="absolute top-24 left-8 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all z-20">
          <ChevronLeft size={24} />
        </Link>

        <div className="relative p-8 md:p-20 pt-48 md:pt-64 pb-24 md:pb-32 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">Album</span>
              <span className="flex items-center gap-1.5 text-yellow-500 font-black text-sm uppercase tracking-widest"><Star size={16} className="fill-current" /> {music.rating}</span>
              <span className="text-white/40 font-black text-sm uppercase tracking-widest">|</span>
              <span className="text-white/60 font-black text-sm uppercase tracking-widest">{music.genre}</span>
            </div>

            <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter mb-4 leading-[0.8] uppercase max-w-6xl">{music.title}</h1>
            <h2 className="text-2xl md:text-4xl font-bold text-white/50 uppercase tracking-widest mb-10 italic">{music.artist}</h2>
            
            <div className="flex flex-wrap items-center gap-6">
              <button className="flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                <Play size={24} className="fill-black" /> Play Album
              </button>
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className={cn(
                  "p-5 rounded-full transition-all border",
                  isLiked 
                    ? "bg-red-500 text-white border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.4)]" 
                    : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black"
                )}
              >
                <Heart size={24} className={isLiked ? "fill-current" : ""} />
              </button>
              <button className="p-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Plus size={24} />
              </button>
              <button className="p-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                <Share2 size={24} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="px-8 md:px-20 py-24 grid lg:grid-cols-12 gap-24">
        {/* Left Column: Tracklist & Info */}
        <div className="lg:col-span-8 space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">About</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <p className="text-neutral-300 text-2xl leading-relaxed font-medium max-w-4xl">{music.desc}</p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Tracklist</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="space-y-2">
              {music.tracks.map((track, i) => (
                <motion.div 
                  key={track.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActiveTrack(track.id)}
                  className={cn(
                    "group flex items-center gap-6 p-4 rounded-2xl transition-all cursor-pointer",
                    activeTrack === track.id ? "bg-white/10 border border-white/10" : "hover:bg-white/5 border border-transparent"
                  )}
                >
                  <span className="w-8 text-neutral-600 font-black text-xs group-hover:text-white transition-colors">{i + 1}</span>
                  <div className="flex-1">
                    <h3 className={cn("text-sm font-black uppercase tracking-tight transition-colors", activeTrack === track.id ? "text-white" : "text-neutral-400 group-hover:text-white")}>{track.title}</h3>
                    <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{music.artist}</span>
                  </div>
                  <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">{track.plays}</span>
                  <span className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">{track.duration}</span>
                  <button className="p-2 text-neutral-600 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                    <Download size={14} />
                  </button>
                </motion.div>
              ))}
            </div>
          </section>

          {/* User Rating Section */}
          <section className="p-12 rounded-[3rem] bg-neutral-900/20 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Rate this album</h3>
                <p className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Share your musical taste</p>
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

        {/* Right Column: Artist & Similar */}
        <div className="lg:col-span-4 space-y-24">
          <section className="p-10 rounded-[3rem] bg-neutral-900/20 border border-white/5 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Information</h3>
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Tracks</span>
                <span className="font-bold text-lg flex items-center gap-2"><Disc size={18} /> {music.tracksCount} Tracks</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Genre</span>
                <span className="font-bold text-lg flex items-center gap-2"><Music size={18} /> {music.genre}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Release Year</span>
                <span className="font-bold text-lg flex items-center gap-2"><Calendar size={18} /> {music.year}</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">About Artist</h3>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-4 mb-6">
                <img src={music.artistInfo.image} alt={music.artistInfo.name} className="w-16 h-16 rounded-2xl object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-lg font-black uppercase tracking-tight">{music.artistInfo.name}</h4>
                  <button className="text-[10px] font-black text-white bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all">Follow</button>
                </div>
              </div>
              <p className="text-neutral-400 text-xs leading-relaxed italic">"{music.artistInfo.bio}"</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Similar Music</h3>
            <div className="grid grid-cols-1 gap-6">
              {similarMusic.map((m) => (
                <Link key={m.id} to={`/audio/${m.id}`} className="group flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/5 group-hover:border-white/20 transition-all flex-shrink-0">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors mb-1">{m.title}</h4>
                    <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-1">{m.artist}</p>
                    <span className="flex items-center gap-1 text-[10px] text-yellow-500 font-black"><Star size={10} className="fill-current" /> {m.rating}</span>
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
