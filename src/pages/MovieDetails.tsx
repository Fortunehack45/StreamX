import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, Play, Clock, Star, Users, Info, Calendar, Globe, Award, MessageSquare, Share2, Plus, Check, Download } from "lucide-react";
import { useState } from "react";

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
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-48 md:pb-32">
      {/* Hero Section */}
      <div className="relative min-h-[85vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 -z-10">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={`https://picsum.photos/seed/${movie.title}/1920/1080`} 
            alt={movie.title} 
            className="w-full h-full object-cover opacity-60" 
            referrerPolicy="no-referrer" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
        </div>
        
        <Link to="/movies" className="absolute top-28 left-8 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all z-20">
          <ChevronLeft size={24} />
        </Link>

        <div className="relative p-8 md:p-20 pb-24 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white">Movie</span>
              <span className="flex items-center gap-1.5 text-yellow-500 font-black text-sm uppercase tracking-widest"><Star size={16} className="fill-current" /> {movie.rating}</span>
              <span className="text-white/40 font-black text-sm uppercase tracking-widest">|</span>
              <span className="text-white/60 font-black text-sm uppercase tracking-widest">{movie.year}</span>
            </div>

            <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter mb-10 leading-[0.8] uppercase">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <button className="flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                <Play size={24} className="fill-black" /> Play Now
              </button>
              <button 
                onClick={() => {
                  const btn = document.getElementById('download-btn-movie');
                  if (btn) {
                    btn.innerText = 'Downloading...';
                    setTimeout(() => { btn.innerText = 'Downloaded'; }, 2000);
                  }
                }}
                id="download-btn-movie"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
              >
                <Download size={20} /> Download
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
        {/* Left Column: Info & Cast */}
        <div className="lg:col-span-8 space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Synopsis</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <p className="text-neutral-300 text-2xl leading-relaxed font-medium max-w-4xl">{movie.desc}</p>
          </section>

          {/* User Rating Section */}
          <section className="p-12 rounded-[3rem] bg-neutral-900/20 border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">Rate this title</h3>
                <p className="text-neutral-500 font-bold text-xs uppercase tracking-widest">Share your thoughts with the community</p>
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

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">The Cast</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {movie.cast.map((actor, i) => (
                <motion.div 
                  key={actor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square rounded-3xl overflow-hidden mb-4 border border-white/5 group-hover:border-white/20 transition-all">
                    <img src={actor.image} alt={actor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="font-black text-sm uppercase tracking-widest mb-1">{actor.name}</h3>
                  <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">{actor.role}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500">Reviews</h2>
              <div className="h-px w-12 bg-white/10" />
            </div>
            <div className="space-y-6">
              {movie.reviews.map((review, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-neutral-900/30 border border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-black text-sm uppercase tracking-widest">{review.user}</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={12} className={j < review.rating ? "fill-yellow-500 text-yellow-500" : "text-neutral-700"} />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-400 leading-relaxed italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Metadata & Similar */}
        <div className="lg:col-span-4 space-y-24">
          <section className="p-10 rounded-[3rem] bg-neutral-900/20 border border-white/5 backdrop-blur-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Information</h3>
            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Duration</span>
                <span className="font-bold text-lg flex items-center gap-2"><Clock size={18} /> {movie.duration}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Language</span>
                <span className="font-bold text-lg flex items-center gap-2"><Globe size={18} /> {movie.language}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em]">Budget</span>
                <span className="font-bold text-lg flex items-center gap-2"><Award size={18} /> {movie.budget}</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-neutral-500 mb-10">Similar Titles</h3>
            <div className="grid grid-cols-2 gap-6">
              {similarMovies.map((m) => (
                <Link key={m.id} to={`/movies/${m.id}`} className="group">
                  <div className="aspect-[2/3] rounded-2xl overflow-hidden mb-3 border border-white/5 group-hover:border-white/20 transition-all">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">{m.title}</h4>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
