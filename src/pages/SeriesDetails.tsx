import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronLeft, Play, Clock, Info } from "lucide-react";

const seriesData = {
  "1": {
    title: "Neon City",
    desc: "In a dystopian future, a detective uncovers a conspiracy that threatens the city's fragile peace.",
    episodes: [
      { id: 1, title: "The Awakening", desc: "Detective K finds a strange artifact.", duration: "45 min" },
      { id: 2, title: "Shadows of the Past", desc: "The investigation leads to a hidden underground network.", duration: "42 min" },
      { id: 3, title: "The Breaking Point", desc: "K is framed for a crime he didn't commit.", duration: "48 min" },
    ]
  }
};

export function SeriesDetails() {
  const { id } = useParams<{ id: string }>();
  const series = seriesData[id as keyof typeof seriesData] || seriesData["1"];

  return (
    <div className="min-h-screen bg-[#050505] text-white pb-32 font-sans">
      <div className="relative h-[60vh] w-full">
        <img src={`https://picsum.photos/seed/${series.title}/1920/1080`} alt={series.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
        <Link to="/series" className="absolute top-6 left-6 p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors">
          <ChevronLeft size={24} />
        </Link>
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{series.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-neutral-300 max-w-2xl text-lg">{series.desc}</motion.p>
        </div>
      </div>

      <div className="px-8 md:px-12 py-12">
        <h2 className="text-3xl font-bold mb-8">Episodes</h2>
        <div className="space-y-4">
          {series.episodes.map((ep, i) => (
            <motion.div 
              key={ep.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Play size={20} className="fill-white text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{ep.title}</h3>
                <p className="text-neutral-400 text-sm">{ep.desc}</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-500 text-sm font-mono">
                <Clock size={16} />
                {ep.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
