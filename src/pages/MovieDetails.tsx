import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Users, Info, Calendar, Globe, Award, MessageSquare, Share2, Plus, Check, Download } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";

const movieData = {
  "1": { 
    title: "The Quantum Protocol", 
    desc: "A rogue agent must stop a global conspiracy before a new quantum weapon is unleashed. As he delves deeper into the shadows, he discovers that the threat is closer to home than he ever imagined, forcing him to confront his own past to save the future.", 
    rating: "4.8", 
    duration: "120 min", 
    year: "2026",
    language: "English",
    budget: "$150M",
    cast: [
      { name: "Alex Mercer", role: "Agent 7", image: "https://picsum.photos/seed/alex/200/200" },
      { name: "Sarah Jenkins", role: "Dr. Aris Thorne", image: "https://picsum.photos/seed/sarah/200/200" },
      { name: "Michael Chen", role: "The Director", image: "https://picsum.photos/seed/michael/200/200" }
    ],
    reviews: [
      { user: "CinemaGuru", rating: 5, comment: "A masterpiece of modern sci-fi. The visuals are breathtaking." },
      { user: "MovieBuff99", rating: 4, comment: "Solid action and a compelling plot. Highly recommended." }
    ]
  },
  "2": { 
    title: "Neon Nights", 
    desc: "In a city that never sleeps, a detective uncovers a dark secret hidden in the neon lights. A high-stakes thriller that explores the underbelly of a futuristic metropolis where everything has a price.", 
    rating: "4.5", 
    duration: "115 min", 
    year: "2025",
    language: "English",
    budget: "$85M",
    cast: [
      { name: "Detective Jax", role: "Lead", image: "https://picsum.photos/seed/jax/200/200" },
      { name: "Luna Vane", role: "The Femme Fatale", image: "https://picsum.photos/seed/luna/200/200" }
    ],
    reviews: [
      { user: "NoirFan", rating: 4, comment: "Great atmosphere and style. A bit slow at times but worth it." }
    ]
  },
};

const similarMovies = [
  { id: 3, title: "Cyber Soul", image: "https://picsum.photos/seed/cyber/400/600", rating: "4.4" },
  { id: 4, title: "The Glitch", image: "https://picsum.photos/seed/glitch/400/600", rating: "4.6" },
  { id: 5, title: "Data Stream", image: "https://picsum.photos/seed/data/400/600", rating: "4.2" },
  { id: 6, title: "Neural Link", image: "https://picsum.photos/seed/neural/400/600", rating: "4.7" },
];

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const movie = movieData[id as keyof typeof movieData] || movieData["1"];
  const [userRating, setUserRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isRated, setIsRated] = useState(false);

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setIsRated(true);
    setTimeout(() => setIsRated(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32 overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <CinematicImage 
            src={`https://picsum.photos/seed/${movie.title}/1920/1080`} 
            alt={movie.title} 
            className="w-full h-full object-cover" 
            containerClassName="w-full h-full"
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
        </div>
        
        <Link to="/movies" className="absolute top-12 left-6 md:top-32 md:left-12 p-5 bg-black/20 backdrop-blur-2xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-soft z-20 shadow-2xl active:scale-90">
          <ChevronLeft size={28} />
        </Link>

        <div className="relative px-6 md:px-20 pb-16 md:pb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, x: -60 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-10 md:mb-14">
              <span className="px-6 py-2 bg-indigo-600 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-white shadow-[0_0_30px_rgba(79,70,229,0.5)]">Movie</span>
              <span className="flex items-center gap-3 text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em]"><Star size={18} className="fill-current" /> {movie.rating} Rating</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="text-white/50 font-black text-xs md:text-sm uppercase tracking-[0.3em]">{movie.year}</span>
              <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/20"></span>
              <span className="hidden md:block text-white/50 font-black text-xs md:text-sm uppercase tracking-[0.3em]">{movie.duration}</span>
            </div>

            <h1 className="text-6xl md:text-[12rem] font-black tracking-tighter mb-10 md:mb-16 leading-[0.8] uppercase italic drop-shadow-2xl">
              {movie.title.split(' ').map((word, i) => (
                <span key={i} className={cn("block", i % 2 === 1 && "text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700")}>
                  {word}
                </span>
              ))}
            </h1>
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6 mb-12 md:mb-20">
              <button className="group relative flex justify-center flex-1 md:flex-none items-center gap-5 bg-white text-black px-14 py-6 md:py-8 rounded-full font-black text-xs md:text-sm uppercase tracking-[0.4em] transition-soft shadow-2xl hover:bg-neutral-200 active:scale-95 overflow-hidden">
                <Play size={24} className="fill-black group-hover:scale-125 transition-transform" /> 
                <span className="relative z-10">Start Feature</span>
              </button>
              
              <div className="flex gap-6">
                <button className="flex-1 md:w-20 md:h-20 h-16 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft shadow-xl active:scale-95">
                  <Download size={24} />
                </button>
                <button className="flex-1 md:w-20 md:h-20 h-16 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft shadow-xl active:scale-95">
                  <Plus size={24} />
                </button>
                <button className="flex-1 md:w-20 md:h-20 h-16 flex justify-center items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full hover:bg-white hover:text-black transition-soft shadow-xl active:scale-95">
                  <Share2 size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="px-6 md:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-16 md:gap-32 relative z-20">
        
        {/* Story & Metadata */}
        <div className="lg:col-span-8 space-y-32">
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">The Story</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <p className="text-neutral-300 text-2xl md:text-4xl leading-[1.2] font-medium max-w-5xl italic tracking-tight">
              "{movie.desc}"
            </p>
          </motion.section>

          {/* Cast Cinematic Grid */}
          <section>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">The Ensemble</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {movie.cast.map((actor, i) => (
                <motion.div 
                  key={actor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 transition-soft shadow-2xl relative">
                    <CinematicImage src={actor.image} alt={actor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-soft flex flex-col justify-end p-8">
                       <p className="text-white font-black text-xs uppercase tracking-widest">{actor.role}</p>
                    </div>
                  </div>
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter mb-1 text-white group-hover:text-indigo-400 transition-soft">{actor.name}</h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-indigo-500 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Rating Engine */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Public <span className="text-white/20">Consensus</span></h3>
            <p className="text-neutral-500 font-black text-xs uppercase tracking-[0.3em] mb-12">Submit your evaluation to the network</p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.button
                    key={star}
                    whileHover={{ scale: 1.3, rotate: 12 }}
                    whileTap={{ scale: 0.8 }}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRate(star)}
                    className="relative p-2"
                  >
                    <Star 
                      size={54} 
                      className={`transition-all duration-500 ${
                        (hoverRating || userRating) >= star 
                          ? "fill-white text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                          : "text-neutral-900 border-white/10"
                      }`} 
                    />
                  </motion.button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                {isRated && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white text-black text-[10px] font-black uppercase tracking-[0.4em] px-8 py-3 rounded-full shadow-2xl"
                  >
                    Evaluation Stored
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </div>

        {/* Technical Specification & Discovery */}
        <div className="lg:col-span-4 space-y-24">
          
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl shadow-2xl sticky top-32"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-14">Technical Spec</h3>
            <div className="space-y-12">
              {[
                { label: "Temporal Span", val: movie.duration, icon: Clock },
                { label: "Vernacular", val: movie.language, icon: Globe },
                { label: "Resource Allocation", val: movie.budget, icon: Award },
                { label: "Release Interval", val: movie.year, icon: Calendar }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group cursor-default">
                  <span className="text-[10px] font-black text-neutral-700 uppercase tracking-[0.3em] group-hover:text-indigo-500 transition-soft">{item.label}</span>
                  <span className="font-black text-2xl flex items-center gap-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                    <item.icon size={24} className="text-white/20" /> {item.val}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-20 pt-20 border-t border-white/5">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-10">Network Discovery</h3>
              <div className="grid grid-cols-2 gap-6">
                {similarMovies.map((m) => (
                  <Link key={m.id} to={`/movies/${m.id}`} className="group block">
                    <div className="aspect-[2/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 border border-white/5 transition-soft shadow-xl group-hover:border-white/20 relative">
                      <CinematicImage src={m.image} alt={m.title} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-soft truncate">{m.title}</h4>
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
