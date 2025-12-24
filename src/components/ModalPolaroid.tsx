import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FullscreenPolaroid({
  open,
  onClose,
  photos,
  index,
  setIndex,
}: {
  open: boolean;
  onClose: () => void;
  photos: string[];
  index: number;
  // <-- CORRECTION : accepte soit un nombre soit une fonction updater
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  if (!open) return null;

  const prev = () =>
    setIndex((i) => (i - 1 + photos.length) % photos.length);

  const next = () =>
    setIndex((i) => (i + 1) % photos.length);

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-hidden bg-black/85 flex items-center justify-center"
        style={{
          position: 'fixed',
          inset: 0,
            zIndex: 9999,
          
        }}
      onClick={onClose}
    >
      <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute bg-white shadow-2xl rounded-xl p-6"
            onClick={(e) => e.stopPropagation()}
            style={{
                width: "40vw",
                maxWidth: "320px",
                minWidth: "280px",
                borderRadius: '16px',
                
            }}
        >

        {/* CONTENU POLAROID */}
        <div className="overflow-hidden  bg-white flex flex-col items-center">
          <img
            src={photos[index]}
            className=" bg-white rounded-md shadow-lg "
            style={{
              maxHeight: '70vh',
              maxWidth: '100%',
              objectFit: 'contain',
                display: 'block',
                padding: '10px',
              backgroundColor: '#ffffff', 
            }}
            alt={`photo-${index}`}
          />

          <div className="overflow-hidden bg-white mt-4 h-12 w-full" />
        </div>
        
        {/* FLECHES */}
       <div className="relative mt-4 flex items-center justify-between w-full bg-white" style={{ backgroundColor: '#ffffff', padding: '10px', marginTop: '-20px', borderRadius: '8px' }}>
          <button
            onClick={prev}
            className="p-3 bg-white rounded-full shadow-xl"
            aria-label="Précédent"
          >
            <ChevronLeft size={32} />
          </button>

          <p className="text-center text-black/60 text-sm">
            (Cliquer en dehors pour fermer)
          </p>

          <button
            onClick={next}
            className="p-3 bg-white rounded-full shadow-xl"
            aria-label="Suivant"
          >
            <ChevronRight size={32} />
          </button>
        </div>

      </motion.div>
    </motion.div>
  );
}