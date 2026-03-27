import { Search } from "lucide-react";

export function SearchPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 pt-28 font-sans">
      <div className="relative group max-w-2xl mx-auto">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
        <input 
          type="text" 
          placeholder="Search movies, series, music..." 
          className="w-full bg-neutral-900 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-lg text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-all"
        />
      </div>
      <div className="mt-12 text-center text-neutral-500">
        Start typing to discover your next favorite content.
      </div>
    </div>
  );
}
