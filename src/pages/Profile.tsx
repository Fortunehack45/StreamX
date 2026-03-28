import { motion, AnimatePresence } from "motion/react";
import { User, Settings, Shield, CreditCard, LogOut, ChevronRight, Sparkles, Bell, Zap, Cloud, Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { CinematicImage } from "../components/CinematicImage";

export function Profile() {
  const menuItems = [
    { icon: User, label: "Account Nexus", desc: "Configuration of personal identity", color: "text-blue-400" },
    { icon: Settings, label: "Experience Sync", desc: "Synchronize streaming preferences", color: "text-purple-400" },
    { icon: Shield, label: "Security Protocol", desc: "Encryption & data protection", color: "text-emerald-400" },
    { icon: CreditCard, label: "Premium Access", desc: "Manage subscription tier", color: "text-amber-400" },
  ];

  const subItems = [
    { icon: Bell, label: "Transmissions", count: "12" },
    { icon: Zap, label: "Performance", val: "Optimal" },
    { icon: Cloud, label: "Storage", val: "2.4 TB" },
    { icon: Globe, label: "Region", val: "GL-01" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 pt-32 md:pt-48 pb-48 md:pb-32 relative overflow-hidden font-sans">
      {/* Cinematic Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-indigo-500/5 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/[0.02] rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Zen-Elite Profile Header */}
        <div className="relative group mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent rounded-[4rem] -z-10" />
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 p-10 md:p-16 rounded-[4rem] bg-white/[0.02] backdrop-blur-[100px] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <motion.div 
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative shrink-0"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-[3.5rem] overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-white/20 transition-soft shadow-[0_0_60px_rgba(0,0,0,0.8)] relative">
                <CinematicImage src="https://picsum.photos/seed/avatar/400/400" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-soft duration-[2s]" referrerPolicy="no-referrer" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-4 -right-4 p-4 bg-white text-black rounded-3xl shadow-2xl"
              >
                <Sparkles size={20} className="animate-spin-slow" />
              </motion.div>
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                 <span className="px-4 py-1.5 bg-rose-600 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-white shadow-[0_0_20px_rgba(225,29,72,0.4)]">Premium Nexus</span>
                 <span className="text-white/30 text-[10px] font-black uppercase tracking-widest">Active since 2024</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase italic leading-[0.8] drop-shadow-2xl">Fourtua<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-700">𝕏</span></h1>
              <p className="text-neutral-500 font-medium tracking-tight text-lg italic max-w-md mx-auto md:mx-0">"Digital architect and cinematic curator in the StreamX ecosystem."</p>
            </div>

            <div className="md:ml-auto">
              <button className="px-10 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.3em] rounded-full hover:bg-neutral-200 transition-soft shadow-2xl active:scale-95">
                Edit Matrix
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Status Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           {subItems.map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 + i * 0.1 }}
               className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl flex flex-col items-center justify-center gap-4 transition-soft hover:bg-white/[0.04] group cursor-default"
             >
                <item.icon size={20} className="text-neutral-600 group-hover:text-white transition-soft" />
                <div className="text-center">
                   <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-1">{item.label}</p>
                   <p className="text-sm font-black text-white italic uppercase tracking-tighter">{item.val || item.count}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Zen-Elite Menu Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {menuItems.map((item, i) => (
            <motion.button 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="group flex items-center gap-8 p-8 bg-white/[0.01] backdrop-blur-3xl border border-white/5 rounded-[3.5rem] hover:bg-white/[0.04] hover:border-white/10 transition-soft text-left relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className={cn("relative z-10 p-5 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-soft group-hover:scale-110", item.color)}>
                <item.icon size={26} />
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-1.5 text-white/90 group-hover:text-white transition-soft">{item.label}</h3>
                <p className="text-[10px] text-neutral-600 font-bold uppercase tracking-widest group-hover:text-neutral-400 transition-soft">{item.desc}</p>
              </div>
              <ChevronRight size={22} className="text-neutral-800 group-hover:text-white transition-soft transform translate-x-4 group-hover:translate-x-0 relative z-10" />
            </motion.button>
          ))}
        </div>

        {/* Global Sign Out Account */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <div className="w-px h-16 bg-gradient-to-t from-white/10 to-transparent" />
          <button className="flex items-center gap-4 px-12 py-6 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-[2.5rem] text-red-500/60 hover:text-red-500 transition-soft group shadow-xl">
            <LogOut size={22} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Terminate Session</span>
          </button>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-800 mt-4">StreamX Ecosystem • v2.0.4 • Build 470</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
