import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Caisse from "../components/Caisse";
import "../css/projets.css";

export default function Projets() {
  const navigate = useNavigate();
  const [closing, setClosing] = useState(false);
  const [spot, setSpot] = useState({ x: 0, y: 0 });

  const handleReturn = () => {
    setClosing(true);
    setTimeout(() => navigate("/"), 1200);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setSpot({ x: clientX, y: clientY });
  };

  return (
    <motion.div
      className="projets-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onMouseMove={handleMouseMove}
    >
      <header className="header">
        <h1>Mes Projets</h1>
        <button onClick={handleReturn} className="btn-home">Fermer le dossier</button>
      </header>

      <div
        className="light-spot"
        style={{
          left: `${spot.x - 200}px`,
          top: `${spot.y - 200}px`,
        }}
      />

      <div className="caisses-container">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <Caisse key={n} index={n} />
        ))}
      </div>

      {closing && (
        <motion.div
          className="close-overlay"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  );
}
