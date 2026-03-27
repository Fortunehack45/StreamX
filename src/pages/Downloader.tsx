import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Link as LinkIcon, AlertCircle, CheckCircle2, FileVideo, Music, Zap, Loader2 } from "lucide-react";

export function Downloader() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      // Simple validation simulation
      if (url.includes("http")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neutral-900/30 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="border-b border-white/10 pt-4 pb-12 px-6 md:px-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
          Downloader
        </h1>
        <p className="text-neutral-400 max-w-xl text-sm md:text-base leading-relaxed">
          Extract high-quality media from your favorite platforms. Fast, secure, and professional.
        </p>
      </div>

      <div className="px-6 md:px-12 py-12 max-w-4xl relative z-10">
        
        {/* Input Section */}
        <form onSubmit={handleDownload} className="relative group flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" size={20} />
            <input 
              type="url" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste media URL here..."
              className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-white/30 focus:bg-neutral-800 transition-all shadow-lg"
              required
            />
          </div>
          <button 
            type="submit"
            disabled={status === "loading" || !url}
            className="px-8 py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Processing
              </>
            ) : (
              <>
                Extract <Zap size={18} />
              </>
            )}
          </button>
        </form>

        {/* Result Section */}
        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-12 border border-white/10 bg-neutral-900/50 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-48 aspect-video md:aspect-square bg-neutral-800 rounded-2xl flex items-center justify-center overflow-hidden">
                  <CheckCircle2 size={48} className="text-white/20" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extracted_Media_File.mp4</h3>
                    <p className="text-neutral-400 text-sm mb-6">YouTube • 1080p HD</p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all">
                      <FileVideo size={18} />
                      Video
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white hover:text-black transition-all">
                      <Music size={18} />
                      Audio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-12 p-6 border border-red-500/30 bg-red-950/20 rounded-2xl flex items-start gap-4 text-red-500"
            >
              <AlertCircle size={24} className="shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Extraction Failed</h3>
                <p className="text-sm opacity-80">The provided URL is invalid. Please check the link and try again.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
