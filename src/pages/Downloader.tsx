import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Download, Link as LinkIcon, AlertCircle, CheckCircle2, ChevronRight, FileVideo, Music, Zap } from "lucide-react";

export function Downloader() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neutral-900/40 blur-[120px] rounded-full pointer-events-none" />

      {/* Brutalist Header */}
      <div className="border-b border-white/10 pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-12 relative z-10">
        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
          <span className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-neutral-500 font-bold">Universal Extraction Tool</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-3 md:mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
          Downloader
        </h1>
        <p className="text-neutral-400 max-w-2xl text-[10px] md:text-xs md:text-sm leading-relaxed tracking-wide">
          Extract high-quality media from supported networks. Paste the target URL below to initialize the extraction sequence.
        </p>
        
        <div className="flex flex-wrap gap-2 md:gap-4 mt-6 md:mt-8 text-[9px] md:text-[10px] text-neutral-600 uppercase tracking-widest font-bold">
          <span className="hover:text-white transition-colors cursor-default">[ YouTube ]</span>
          <span className="hover:text-white transition-colors cursor-default">[ TikTok ]</span>
          <span className="hover:text-white transition-colors cursor-default">[ Instagram ]</span>
          <span className="hover:text-white transition-colors cursor-default">[ Twitter/X ]</span>
          <span className="hover:text-white transition-colors cursor-default">[ Facebook ]</span>
        </div>
      </div>

      <div className="px-4 md:px-12 py-8 md:py-12 max-w-5xl relative z-10">
        
        {/* Input Section */}
        <form onSubmit={handleDownload} className="relative mb-12 md:mb-16 group flex flex-col md:block">
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 hidden md:flex items-center justify-center border-r border-white/10 text-neutral-500 group-focus-within:text-white transition-colors z-10">
            <LinkIcon size={20} />
          </div>
          <input 
            type="url" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="ENTER TARGET URL..."
            className="w-full bg-neutral-950 border border-white/10 text-white px-4 md:px-20 py-5 md:py-8 text-sm md:text-lg md:text-xl focus:outline-none focus:border-white/40 focus:bg-neutral-900 transition-all placeholder:text-neutral-800 uppercase tracking-wider shadow-2xl mb-3 md:mb-0"
            required
          />
          <button 
            type="submit"
            disabled={status === "loading" || !url}
            className="md:absolute md:right-2 md:top-2 md:bottom-2 w-full md:w-auto py-4 md:py-0 px-8 bg-white text-black font-black uppercase tracking-widest hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-[0.98] active:scale-95 text-xs md:text-base"
          >
            {status === "loading" ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Processing
              </>
            ) : (
              <>
                Extract <Zap size={16} className="fill-black" />
              </>
            )}
          </button>
        </form>

        {/* Result Section */}
        {status === "success" && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-white/10 bg-neutral-950 p-8 relative overflow-hidden shadow-2xl"
          >
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-64 aspect-video md:aspect-square bg-black border border-white/10 relative flex items-center justify-center overflow-hidden group">
                <img src="https://picsum.photos/seed/download/400/400" alt="Thumbnail" className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="px-2 py-1 bg-white text-black text-[9px] md:text-[10px] font-black uppercase tracking-widest">Media Found</span>
                    <span className="text-[9px] md:text-[10px] text-neutral-500 tracking-widest">ID: 8F92A-X</span>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 truncate tracking-tight">Extracted_Media_File_Final.mp4</h3>
                  <p className="text-neutral-500 text-[10px] md:text-xs mb-6 md:mb-8 tracking-widest uppercase">Source: YouTube • Duration: 12:04 • 1080p HD</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  <button className="flex items-center justify-between p-3 md:p-4 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all group bg-neutral-900">
                    <div className="flex items-center gap-2 md:gap-3">
                      <FileVideo size={16} className="md:w-[18px] md:h-[18px]" />
                      <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Video (MP4)</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] text-neutral-500 group-hover:text-black tracking-widest">142 MB</span>
                  </button>
                  <button className="flex items-center justify-between p-3 md:p-4 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all group bg-neutral-900">
                    <div className="flex items-center gap-2 md:gap-3">
                      <Music size={16} className="md:w-[18px] md:h-[18px]" />
                      <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Audio (MP3)</span>
                    </div>
                    <span className="text-[9px] md:text-[10px] text-neutral-500 group-hover:text-black tracking-widest">12 MB</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 border border-red-500/30 bg-red-950/30 flex items-start gap-4 text-red-500"
          >
            <AlertCircle size={24} className="shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold uppercase tracking-widest mb-1 text-sm">Extraction Failed</h3>
              <p className="text-xs opacity-80 tracking-wide">The provided URL is invalid or the content is protected. Please verify the link and try again.</p>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
