import { motion } from "motion/react";

export function MediaCardSkeleton() {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-neutral-900/50 border border-white/5 flex flex-col h-full animate-pulse">
      <div className="relative aspect-video sm:aspect-[2/3] overflow-hidden shrink-0 bg-neutral-800" />
      <div className="p-3 md:p-4 flex flex-col flex-1 justify-between bg-gradient-to-b from-neutral-900/80 to-black">
        <div>
          <div className="h-4 bg-neutral-800 rounded mb-2 w-3/4" />
          <div className="flex items-center gap-2 mb-2">
            <div className="h-3 bg-neutral-800 rounded w-10" />
            <div className="h-3 bg-neutral-800 rounded w-10" />
          </div>
        </div>
        <div className="h-3 bg-neutral-800 rounded w-full mt-1" />
        <div className="h-3 bg-neutral-800 rounded w-full mt-1" />
      </div>
    </div>
  );
}
