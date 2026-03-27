import { motion } from "motion/react";
import { User, Settings, Shield, CreditCard, LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-6 mb-12">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-neutral-800 border-2 border-white/10">
            <img src="https://picsum.photos/seed/avatar/200/200" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">Fourtua𝕏</h1>
            <p className="text-neutral-500 font-medium">Premium Member</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: User, label: "Account Details" },
            { icon: Settings, label: "Preferences" },
            { icon: Shield, label: "Security" },
            { icon: CreditCard, label: "Subscription" },
          ].map((item) => (
            <button key={item.label} className="flex items-center gap-4 p-6 bg-neutral-900/50 border border-white/10 rounded-2xl hover:bg-neutral-800 transition-all">
              <item.icon className="text-neutral-400" />
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}
        </div>

        <button className="mt-12 flex items-center gap-3 text-red-500 hover:text-red-400 transition-colors">
          <LogOut size={20} />
          <span className="font-semibold">Sign Out</span>
        </button>
      </motion.div>
    </div>
  );
}
