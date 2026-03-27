import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Play, Clock, Star } from "lucide-react";

const movieData = {
  "1": { title: "The Quantum Protocol", desc: "A rogue agent must stop a global conspiracy before a new quantum weapon is unleashed.", rating: "4.8", duration: "120 min" },
  "2": { title: "Neon Nights", desc: "In a city that never sleeps, a detective uncovers a dark secret hidden in the neon lights.", rating: "4.5", duration: "115 min" },
  // ... add more as needed
};

export function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const movie = movieData[id as keyof typeof movieData] || movieData["1"];

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-32 font-sans">
      <div className="relative h-[60vh] w-full">
        <img src={`https://picsum.photos/seed/${movie.title}/1920/1080`} alt={movie.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        <Link to="/movies" className="absolute top-6 left-6 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{movie.title}</motion.h1>
          <div className="flex items-center gap-4 text-neutral-300">
            <span className="flex items-center gap-1"><Star size={18} className="fill-yellow-500 text-yellow-500" /> {movie.rating}</span>
            <span className="flex items-center gap-1"><Clock size={18} /> {movie.duration}</span>
          </div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-neutral-300 max-w-2xl text-lg mt-4">{movie.desc}</motion.p>
        </div>
      </div>
      <div className="px-8 md:px-12 py-12">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
          <Play size={20} className="fill-black" /> Play Movie
        </button>
      </div>
    </div>
  );
}
