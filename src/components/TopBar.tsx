import { Search, Bell, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 h-20 bg-black/80 backdrop-blur-xl border-b border-white/5 z-30 flex items-center justify-between px-6 md:px-12">
      <div className="relative group w-full max-w-md">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" />
        <input 
          type="text" 
          placeholder="Search movies, series, music..." 
          className="w-full bg-neutral-900/50 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 focus:bg-neutral-900 transition-all shadow-inner"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <Link to="/profile" className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors">
          <User size={20} />
        </Link>
        <button className="p-2 text-neutral-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <button className="p-2 text-neutral-400 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}
