import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Info, Calendar, Globe, Award, Share2, Plus, Download, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";
import { useMediaDetails } from "../hooks/useMedia";

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: media, loading } = useMediaDetails(id || "");
  
  const [userRating, setUserRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [isRated, setIsRated] = useState(false);

  const movie = {
    title: media?.title || "Loading...",
    desc: media?.overview || "",
    rating: media?.rating || "0.0",
    year: media?.release_date?.split('-')[0] || "2026",
    duration: "120 min",
    backdrop: media?.backdrop_url || media?.poster_url,
    language: "English",
    budget: "$150M",
    cast: media?.cast_members?.map(name => ({ name, role: "Principal", image: `https://picsum.photos/seed/${name}/200/200` })) || [],
  };

  const handleRate = (rating: number) => {
    setUserRating(rating);
    setIsRated(true);
    setTimeout(() => setIsRated(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-white/10 border-t-indigo-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32 overflow-x-hidden">
      {/* Cinematic Hero */}
      <div className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <CinematicImage 
            src={movie.backdrop || ""} 
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

      {/* Main Content */}
      <div className="px-6 md:px-20 py-20 md:py-32 grid lg:grid-cols-12 gap-16 md:gap-32 relative z-20">
        <div className="lg:col-span-8 space-y-32">
          
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">Narrative</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <p className="text-neutral-300 text-2xl md:text-4xl leading-[1.3] font-medium max-w-5xl italic tracking-tight">
              "{movie.desc}"
            </p>
          </motion.section>

          {/* Cast */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-600">The Ensemble</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {movie.cast.map((actor, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 transition-soft shadow-2xl relative">
                    <CinematicImage src={actor.image} alt={actor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-soft duration-1000" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter text-white group-hover:text-indigo-400 transition-soft">{actor.name}</h3>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Rating Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-10 md:p-20 rounded-[3rem] md:rounded-[5rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group shadow-2xl"
          >
             <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Public <span className="text-white/20">Consensus</span></h3>
             <div className="flex justify-center gap-4 mt-12">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRate(star)}
                    className="transition-transform hover:scale-125"
                  >
                    <Star size={48} className={cn("transition-all duration-300", (hoverRating || userRating) >= star ? "fill-white text-white" : "text-white/10")} />
                  </button>
                ))}
             </div>
             {isRated && <p className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Evaluation Saved</p>}
          </motion.section>
        </div>

        {/* Technical Specification */}
        <div className="lg:col-span-4">
          <motion.section 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[3rem] md:rounded-[4rem] bg-white/[0.01] border border-white/5 backdrop-blur-3xl shadow-2xl sticky top-32"
          >
            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600 mb-14">Technical Spec</h3>
            <div className="space-y-12">
              {[
                { label: "Duration", val: movie.duration, icon: Clock },
                { label: "Language", val: movie.language, icon: Globe },
                { label: "Budget", val: movie.budget, icon: Award },
                { label: "Release", val: movie.year, icon: Calendar }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 group cursor-default">
                  <span className="text-[10px] font-black text-neutral-700 uppercase tracking-[0.3em] group-hover:text-indigo-500 transition-soft">{item.label}</span>
                  <span className="font-black text-2xl flex items-center gap-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                    <item.icon size={24} className="text-white/20" /> {item.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
