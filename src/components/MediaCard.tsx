import { motion } from "motion/react";
import { Play, Star } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { CinematicImage } from "./CinematicImage";
import { Media } from "../hooks/useMedia";

interface MediaCardProps {
  media?: Media;
  id?: number | string;
  title?: string;
  image?: string;
  rating?: string | number;
  year?: string;
  genre?: string;
  summary?: string;
  delay?: number;
  linkTo?: string;
  media_type?: 'movie' | 'series';
}

export function MediaCard({ media, id, title, image, rating, year, genre, summary, delay = 0, linkTo, media_type }: MediaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const displayId = media?.tmdb_id || media?.id || id;
  const displayTitle = media?.title || title || "";
  const displayImage = media?.poster_url || image || "";
  const displayRating = media?.rating || rating || "0.0";
  const displayYear = media?.release_date?.split('-')[0] || year || "2026";
  const displayGenre = media?.genres?.[0] || genre || "General";
  const displaySummary = media?.overview || summary || "";
  const displayMediaType = media?.media_type || media_type || "movie";

  const finalLinkTo = linkTo || (displayMediaType === 'series' ? `/series/${displayId}` : `/movies/${displayId}`);

  const cardContent = (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-soft flex flex-col h-full cursor-pointer hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]"
    >
      <div className="relative aspect-[2/3] overflow-hidden shrink-0">
        <CinematicImage 
          src={displayImage} 
          alt={displayTitle} 
          className="w-full h-full object-cover group-hover:scale-110 transition-soft duration-1000" 
          containerClassName="w-full h-full"
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-soft flex flex-col justify-end p-6">
          <div className="flex items-center gap-2 mb-3">
            <Star size={12} className="fill-yellow-500 text-yellow-500" />
            <span className="text-[10px] font-black text-white">{displayRating}</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="text-[10px] font-black text-white/50">{displayYear}</span>
          </div>
          <h3 className="text-sm font-black text-white uppercase tracking-tight line-clamp-2 leading-tight mb-2">{displayTitle}</h3>
          <p className="text-white/40 text-[9px] line-clamp-2 leading-normal tracking-tight font-medium uppercase italic">
            {displaySummary || displayGenre}
          </p>
          <div className="mt-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-soft shadow-xl">
             <Play size={16} className="fill-current ml-0.5" />
          </div>
        </div>
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
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link to={finalLinkTo} className="h-full block">
        {cardContent}
      </Link>
    </motion.div>
  );
}
