import { Search, Bell, Settings, User, X, Check, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export function TopBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettings(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setShowNotifications(false);
    setShowSettings(false);
  }, [location.pathname]);

  const notifications = [
    { id: 1, title: "New Movie Added", message: "Interstellar is now available in 4K.", time: "2h ago", icon: Info, color: "text-blue-400" },
    { id: 2, title: "Download Complete", message: "The Batman has been saved to your library.", time: "5h ago", icon: Check, color: "text-green-400" },
    { id: 3, title: "Subscription", message: "Your premium plan expires in 3 days.", time: "1d ago", icon: Bell, color: "text-amber-400" },
  ];

  return (
    <header className="fixed top-4 right-4 left-4 md:left-[calc(16rem+2rem)] h-16 z-40 pointer-events-none">
      <div className="flex items-center justify-between h-full gap-4 pointer-events-auto">
        
        {/* Search Bar - Floating Glass */}
        <div 
          ref={searchRef}
          className={cn(
            "relative flex-1 max-w-md h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
            isSearchFocused ? "max-w-xl bg-white/10 border-white/20 shadow-[0_12px_48px_rgba(0,0,0,0.6)]" : ""
          )}
        >
          <Search 
            size={18} 
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300",
              isSearchFocused ? "text-white" : "text-neutral-500"
            )} 
          />
          <input 
            type="text" 
            placeholder="Search movies, series, music..." 
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full h-full bg-transparent border-none rounded-2xl py-3 pl-12 pr-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all"
          />
          {isSearchFocused && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <button 
                onClick={() => setIsSearchFocused(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={14} className="text-neutral-400" />
              </button>
            </motion.div>
          )}
        </div>
        
        {/* Actions - Floating Glass */}
        <div className="flex items-center gap-1 h-10 md:h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl md:rounded-2xl px-1 md:px-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          
          {/* Mobile Profile */}
          <Link 
            to="/profile" 
            className="md:hidden p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            <User size={18} />
          </Link>

          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button 
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowSettings(false);
              }}
              className={cn(
                "p-2 md:p-2.5 rounded-lg md:rounded-xl transition-all duration-300 relative group",
                showNotifications ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white hover:bg-white/10"
              )}
            >
              <Bell size={18} className="md:w-5 md:h-5" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#050505] group-hover:scale-110 transition-transform" />
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  className="absolute right-0 mt-3 w-80 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                    <h3 className="text-sm font-bold tracking-tight">Notifications</h3>
                    <button className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 hover:text-white transition-colors">Mark all read</button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 cursor-pointer group">
                        <div className="flex gap-3">
                          <div className={cn("p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors", n.color)}>
                            <n.icon size={16} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-xs font-bold text-white">{n.title}</h4>
                              <span className="text-[10px] text-neutral-500">{n.time}</span>
                            </div>
                            <p className="text-[11px] text-neutral-400 leading-relaxed">{n.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center bg-white/5">
                    <button className="text-[10px] uppercase tracking-widest font-bold text-neutral-400 hover:text-white transition-colors">View all activity</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Settings */}
          <div className="relative" ref={settingsRef}>
            <button 
              onClick={() => {
                setShowSettings(!showSettings);
                setShowNotifications(false);
              }}
              className={cn(
                "p-2 md:p-2.5 rounded-lg md:rounded-xl transition-all duration-300",
                showSettings ? "bg-white/15 text-white" : "text-neutral-400 hover:text-white hover:bg-white/10"
              )}
            >
              <Settings size={18} className="md:w-5 md:h-5" />
            </button>

            <AnimatePresence>
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  className="absolute right-0 mt-3 w-64 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-50"
                >
                  <div className="p-4 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold tracking-tight">Settings</h3>
                  </div>
                  <div className="p-2">
                    {[
                      { label: "Account Settings", icon: User },
                      { label: "Playback Preferences", icon: Settings },
                      { label: "Notification Config", icon: Bell },
                    ].map((item, i) => (
                      <button key={i} className="w-full flex items-center gap-3 p-3 hover:bg-white/10 rounded-xl transition-all text-left group">
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                          <item.icon size={14} className="text-neutral-400 group-hover:text-white" />
                        </div>
                        <span className="text-xs font-medium text-neutral-300 group-hover:text-white">{item.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="p-2 border-t border-white/5 bg-white/5">
                    <button className="w-full p-3 text-xs font-bold text-red-400 hover:bg-red-400/10 rounded-xl transition-all text-left">
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
