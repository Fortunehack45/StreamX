import { motion } from "motion/react";
import { Play, Star, Plus, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

interface MediaCardProps {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: string;
  genre: string;
  summary: string;
  delay?: number;
  key?: any;
}

export function MediaCard({ id, title, image, rating, year, genre, summary, delay = 0 }: MediaCardProps) {
  const [inWatchlist, setInWatchlist] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, ease: "easeOut" }}
      className="group relative rounded-xl overflow-hidden bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col h-full cursor-pointer"
    >
      <div className="relative aspect-video sm:aspect-[2/3] overflow-hidden shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors scale-90 group-hover:scale-100">
            <Play size={20} className="fill-current ml-1" />
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-yellow-500 flex items-center gap-1">
          <Star size={10} className="fill-yellow-500" /> {rating}
        </div>
        <button 
          onClick={() => setInWatchlist(!inWatchlist)}
          className={cn(
            "absolute top-2 left-2 p-1.5 rounded-full backdrop-blur-md transition-all duration-300",
            inWatchlist ? "bg-white text-black" : "bg-black/60 text-white hover:bg-white hover:text-black"
          )}
        >
          {inWatchlist ? <Check size={14} /> : <Plus size={14} />}
        </button>
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1 justify-between bg-gradient-to-b from-neutral-900/80 to-black">
        <div>
          <h3 className="text-white font-bold text-sm md:text-base line-clamp-1 mb-1">{title}</h3>
          <div className="flex items-center gap-2 text-[9px] md:text-[10px] text-white/50 mb-2 font-medium uppercase tracking-wider">
            <span>{year}</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span>{genre}</span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span className="border border-white/20 px-1 rounded">HD</span>
          </div>
        </div>
        <p className="text-white/60 text-[10px] md:text-xs line-clamp-2 md:line-clamp-3 leading-relaxed mt-1">
          {summary}
        </p>
      </div>
    </motion.div>
  );
}
