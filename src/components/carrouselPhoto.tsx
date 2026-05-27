
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";


interface PhotosProps {
  rotation?: number;
  photos: string[];
  delay?: number;
  zIndex?: number;
  width?: number;
  height?: number;
}

export function CarrouselPhoto({
  rotation = -5,
  photos,
  delay = 0,
  zIndex = 10,
  width = 300,
  height = 240,
}: PhotosProps) {
  const [index, setIndex] = useState(0);
  

  // Carrousel automatique
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 2500);
    return () => clearInterval(t);
  }, [photos]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ duration: 0.4, delay }}
        className="cursor-pointer select-none"
        style={{ zIndex  }}
      >
        {/* PHOTOS */}
        <div
          className="overflow-hidden shadow-2xl"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `rotate(${rotation}deg)`,
            opacity: 0.95,
            borderRadius: '8px',
          }}
        >
          <div
            className="overflow-hidden"
            style={{
              width: '100%',
              height: `${height}px`,
              position: 'relative',
              borderRadius: '6px',
              backgroundColor: 'rgba(0,0,0,0.08)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photos[index]}
                src={photos[index]}
                loading="lazy"
                className="w-full h-full object-contain"
                style={{ position: 'absolute', top: 0, left: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

    </>
  );
}