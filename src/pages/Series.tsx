import { motion } from "motion/react";
import { Play, Star, ChevronRight } from "lucide-react";
import { MediaCard } from "../components/MediaCard";
import { MediaCardSkeleton } from "../components/MediaCardSkeleton";
import { useMedia } from "../hooks/useMedia";
import { Link } from "react-router-dom";

export function Series() {
  const { data: allSeries, loading } = useMedia({ type: 'series', limit: 30 });
  
  const featuredSeries = allSeries[0];
  const trendingSeries = allSeries.slice(0, 4);
  const sciFiSeries = allSeries.filter(s => s.genres?.includes('Sci-Fi') || s.genres?.includes('Science Fiction')).slice(0, 4);
  const dramaSeries = allSeries.filter(s => s.genres?.includes('Drama')).slice(0, 4);
  const documentarySeries = allSeries.filter(s => s.genres?.includes('Documentary')).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-12 pt-28 md:pt-40 font-sans pb-48 md:pb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8 md:mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600">
          Television
        </h1>
        <p className="text-neutral-400 mt-1 md:mt-2 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs">The next generation of storytelling</p>
      </motion.div>
      
      {/* Bento Grid Featured */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-min md:auto-rows-[300px] mb-12 md:mb-16">
        
        {/* Featured Large */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-3 row-span-1 md:row-span-2 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group cursor-pointer min-h-[400px] md:min-h-0 border border-white/5 hover:border-white/10 transition-soft"
        >
          {loading ? (
            <div className="w-full h-full bg-neutral-900 animate-pulse" />
          ) : (
            <>
              <img src={featuredSeries?.backdrop_url || featuredSeries?.poster_url || "https://picsum.photos/seed/series1/1200/800"} className="w-full h-full object-cover transition-soft duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-6 md:p-16 flex flex-col justify-end">
                <div className="flex gap-3 mb-4 md:mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">{featuredSeries?.genres?.[0] || 'Series'}</span>
                  <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] border border-white/5">{featuredSeries?.release_date?.split('-')[0]}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter leading-none uppercase">{featuredSeries?.title}</h2>
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  <Link to={`/series/${featuredSeries?.id}`} className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-soft shadow-[0_0_60px_rgba(255,255,255,0.3)]">
                    <Play size={24} className="fill-black ml-1.5 md:w-8 md:h-8" />
                  </Link>
                </div>
              </div>
            </>
          )}
        </motion.div>
        
        {/* Small Cards */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 md:col-span-1 md:row-span-2 h-full">
          {loading ? (
            [1, 2].map(i => <MediaCardSkeleton key={i} />)
          ) : (
            allSeries.slice(1, 3).map((m, index) => (
              <motion.div 
                key={m.id} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative group cursor-pointer bg-neutral-900 border border-white/5 h-full transition-soft"
              >
                <Link to={`/series/${m.id}`}>
                  <img src={m.poster_url || ""} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-soft duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <div className="group-hover:-translate-y-2 transition-transform duration-500">
                      <h3 className="text-sm md:text-xl font-black mb-1 md:mb-3 leading-tight uppercase tracking-tight line-clamp-2">{m.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[10px] md:text-sm text-yellow-500 font-black tracking-widest uppercase">
                          <Star size={12} className="fill-yellow-500 md:w-4 md:h-4" /> {m.rating}
                        </div>
                        <ChevronRight size={16} className="text-white md:w-5 md:h-5 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </div>
      
      <div className="space-y-16 md:space-y-32">
        {[
          { title: "Trending", sub: "Series", data: trendingSeries },
          { title: "Sci-Fi &", sub: "Fantasy", data: sciFiSeries },
          { title: "Intense", sub: "Drama", data: dramaSeries },
          { title: "Reality &", sub: "Docu", data: documentarySeries },
        ].map((section) => (
          section.data.length > 0 && (
            <section key={section.title}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-8 md:mb-12 border-b border-white/5 pb-6"
              >
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{section.title} <span className="text-white/20 whitespace-pre">{section.sub}</span></h2>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {loading 
                  ? Array.from({ length: 4 }).map((_, i) => <MediaCardSkeleton key={i} />)
                  : section.data.map((m, i) => (
                      <MediaCard key={m.id} media={m} linkTo={`/series/${m.id}`} delay={i * 0.05} />
                    ))
                }
              </div>
            </section>
          )
        ))}
      </div>
    </div>
  );
}
