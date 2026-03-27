import { motion } from "motion/react";
import { User, Settings, Shield, CreditCard, LogOut, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

export function Profile() {
  const menuItems = [
    { icon: User, label: "Account Details", desc: "Manage your personal information", color: "text-blue-400" },
    { icon: Settings, label: "Preferences", desc: "Customize your streaming experience", color: "text-purple-400" },
    { icon: Shield, label: "Security", desc: "Protect your account and data", color: "text-green-400" },
    { icon: CreditCard, label: "Subscription", desc: "Manage your premium plan", color: "text-amber-400" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 pt-28 md:pt-40 pb-48 md:pb-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.5)] group">
          <div className="relative">
            <div className="w-32 h-32 rounded-[40px] overflow-hidden bg-neutral-900 border-2 border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl rotate-3 group-hover:rotate-0">
              <img src="https://picsum.photos/seed/avatar/300/300" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-2 -right-2 p-2 bg-white text-black rounded-2xl shadow-xl">
              <Sparkles size={16} />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-black tracking-tighter mb-2 uppercase italic">Fourtua𝕏</h1>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-white">Pro Member</span>
              <span className="text-neutral-500 text-xs font-bold tracking-tight">Member since 2024</span>
            </div>
          </div>
          <div className="md:ml-auto">
            <button className="px-6 py-3 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-neutral-200 transition-all shadow-xl active:scale-95">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems.map((item, i) => (
            <motion.button 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 p-6 bg-white/5 backdrop-blur-2xl border border-white/5 rounded-[32px] hover:bg-white/10 hover:border-white/10 transition-all duration-500 group text-left shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className={cn("p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-500", item.color)}>
                <item.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-black uppercase tracking-widest mb-1 text-white">{item.label}</h3>
                <p className="text-[11px] text-neutral-500 font-bold tracking-tight">{item.desc}</p>
              </div>
              <ChevronRight size={18} className="text-neutral-700 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.button>
          ))}
        </div>

        {/* Sign Out */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <button className="flex items-center gap-3 px-8 py-4 bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 rounded-2xl text-red-500 hover:text-red-400 transition-all duration-500 group">
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Sign Out Account</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
