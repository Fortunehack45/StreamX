import { Link, useLocation } from "react-router-dom";
import { Home, Film, Tv, Music, Mic, Download, Search } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Movies", path: "/movies", icon: Film },
  { name: "Series", path: "/series", icon: Tv },
  { name: "Music", path: "/audio", icon: Music },
  { name: "Podcasts", path: "/podcasts", icon: Mic },
  { name: "Downloader", path: "/downloader", icon: Download },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-black/95 backdrop-blur-2xl border-r border-white/10 z-40">
      <div className="h-20 flex items-center justify-between px-8 shrink-0">
        <span className="text-white font-black text-2xl tracking-tighter">
          STREAMX<span className="text-red-500">.</span>
        </span>
      </div>

      <div className="px-6 mb-6">
        <div className="relative group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
          />
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto scrollbar-hide">
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-6 px-4">Menu</div>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group text-sm font-medium",
                isActive 
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]" 
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={18} className={cn("transition-colors", isActive ? "text-white" : "group-hover:text-white")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 shrink-0 border-t border-white/5">
        <button className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors w-full p-2 rounded-xl hover:bg-white/5">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-800 shrink-0 border border-white/10">
            <img src="https://picsum.photos/seed/avatar/100/100" alt="User" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col items-start overflow-hidden">
            <span className="text-sm font-medium text-white truncate w-full text-left">Alex Doe</span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Premium</span>
          </div>
        </button>
      </div>
    </aside>
  );
}
