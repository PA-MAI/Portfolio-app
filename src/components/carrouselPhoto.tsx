
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";


interface PhotosProps {
  rotation?: number;
  photos: string[];
  delay?: number;
  zIndex?: number;
}

export function CarrouselPhoto({
  rotation = -5,
  photos,
  delay = 0,
  zIndex = 10,
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
          className="overflow-hidden shadow-2xl rounded-x2 p-3"
          style={{
            //padding: "10px",
            width: "300px",
            height: "240px",
            transform: `rotate(${rotation}deg)`,
            //borderRadius: '16px',
            opacity: 0.95,
          }}
        >
          {/* Image */}
          <div
            className="overflow-hidden rounded-md bg-black/10"
            style={{
              width: "100%",
              height: "240px",
              position: "relative",
              borderRadius: '5px',
              padding: '10px',
              
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={photos[index]}
                src={photos[index]}
                className=" w-full h-full object-cover"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

        </div>
      </motion.div>

    </>
  );
}