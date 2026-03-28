import React, { useState, ImgHTMLAttributes } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export interface CinematicImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  overlay?: React.ReactNode;
}

export function CinematicImage(props: CinematicImageProps) {
  const { 
    src, 
    alt, 
    className, 
    containerClassName, 
    overlay, 
    ...rest 
  } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-neutral-900/50", containerClassName)}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-10"
          >
            <div className="w-8 h-8 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onLoad={() => setIsLoaded(true)}
        className={cn("w-full h-full object-cover", className)}
        {...(rest as any)}
      />
      
      {overlay}
    </div>
  );
}
