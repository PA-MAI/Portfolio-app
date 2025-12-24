import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import FullscreenPolaroid from "./ModalPolaroid";

interface PhotoPolaroidProps {
  rotation?: number;
  photos: string[];
  delay?: number;
  zIndex?: number;
}

export function PhotoPolaroid({
  rotation = -5,
  photos,
  delay = 0,
  zIndex = 10,
}: PhotoPolaroidProps) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

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
        onClick={() => setOpen(true)}
        className="cursor-pointer select-none"
        style={{ zIndex }}
      >
        {/* POLAROID */}
        <div
          className="overflow-hidden bg-white shadow-2xl rounded-xl p-3"
          style={{
            padding: "10px",
            width: 240,
            height: 320,
            transform: `rotate(${rotation}deg)`,
            borderRadius: '16px',
          }}
        >
          {/* Image */}
          <div
            className="overflow-hidden rounded-md bg-black/10"
            style={{
              
              width: "100%",
              height: "240px",
              position: "relative",
              borderRadius: '10px',
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

          {/* Bas du polaroid */}
          <div className="w-full h-12 mt-3 bg-white" style={{ backgroundColor: '#ffffff' }} />
        </div>
      </motion.div>

      {/* MODAL */}
      <FullscreenPolaroid
        open={open}
        onClose={() => setOpen(false)}
        photos={photos}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}