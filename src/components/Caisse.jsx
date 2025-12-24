import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Caisse({ index }) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => navigate(`/projet-${index}`), 1000);
  };

  return (
    <motion.div
      className="caisse"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={handleClick}
      animate={
        clicked
          ? { y: -40, scale: 1.1, zIndex: 10 }
          : hovered
          ? { y: -15, scale: 1.03 }
          : { y: 0, scale: 1 }
      }
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="etiquette">
        <div className="metal" />
        <p>Projet #{index}</p>
      </div>

      {hovered && !clicked && (
        <motion.div
          className="ombre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {clicked && (
        <motion.div
          className="fadeout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.div>
  );
}
