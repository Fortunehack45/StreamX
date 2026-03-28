import { motion } from "motion/react";
import { Play, Star, Plus, Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { CinematicImage } from "./CinematicImage";

interface MediaCardProps {
  id: number;
  title: string;
  image: string;
  rating: string;
  year: string;
  genre: string;
  summary: string;
  delay?: number;
  linkTo?: string;
  key?: any;
}

export function MediaCard({ id, title, image, rating, year, genre, summary, delay = 0, linkTo }: MediaCardProps) {
  const [inWatchlist, setInWatchlist] = useState(false);

  const cardContent = (
    <div className="group relative rounded-2xl overflow-hidden bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-soft flex flex-col h-full cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
      <div className="relative aspect-video sm:aspect-[2/3] overflow-hidden shrink-0">
        <CinematicImage src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-soft duration-1000" containerClassName="w-full h-full" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-soft flex items-center justify-center">
          <button className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center hover:bg-white hover:text-black transition-snappy scale-75 group-hover:scale-100">
            <Play size={24} className="fill-current ml-1" />
          </button>
        </div>
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-full text-[10px] font-black text-yellow-500 flex items-center gap-1.5 border border-white/5">
          <Star size={12} className="fill-yellow-500" /> {rating}
        </div>
        <button 
          onClick={(e) => { e.preventDefault(); setInWatchlist(!inWatchlist); }}
          className={cn(
            "absolute top-3 left-3 p-2 rounded-full backdrop-blur-xl transition-soft",
            inWatchlist ? "bg-white text-black" : "bg-black/40 text-white hover:bg-white hover:text-black border border-white/5"
          )}
        >
          {inWatchlist ? <Check size={16} /> : <Plus size={16} />}
        </button>
      </div>
      <div className="p-4 md:p-6 flex flex-col flex-1 justify-between bg-gradient-to-b from-neutral-900/60 to-black">
        <div>
          <h3 className="text-white font-black text-sm md:text-lg line-clamp-1 mb-1.5 uppercase tracking-tight">{title}</h3>
          <div className="flex items-center gap-2.5 text-[10px] text-white/40 mb-3 font-black uppercase tracking-[0.2em]">
            <span>{year}</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>{genre}</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="border border-white/10 px-1.5 rounded-sm">4K</span>
          </div>
        </div>
        <p className="text-white/50 text-[10px] md:text-xs line-clamp-2 md:line-clamp-3 leading-relaxed font-bold tracking-tight">
          {summary}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      {linkTo ? <Link to={linkTo}>{cardContent}</Link> : cardContent}
    </motion.div>
  );
}
