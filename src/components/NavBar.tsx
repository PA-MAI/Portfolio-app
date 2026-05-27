import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { SquareChevronLeft } from "lucide-react";
import { useViewport } from "../hooks/useViewport";

const TEXTURE_BEIGE = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

interface NavBarProps {
  title: string;
  backPath: string;
  backLabelMobile?: string;
  backLabelDesktop?: string;
}

export function NavBar({
  title,
  backPath,
  backLabelMobile = 'RETOUR',
  backLabelDesktop = 'RETOUR ACCUEIL',
}: NavBarProps) {
  const navigate = useNavigate();
  const viewport = useViewport();
  const isMobile = viewport === 'mobile';

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: isMobile ? 44 : 50,
        backgroundColor: '#5d4a3a',
        flexShrink: 0,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${TEXTURE_BEIGE})`, backgroundSize: 'cover',
          mixBlendMode: 'multiply', opacity: 0.6,
          pointerEvents: 'none', zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${TEXTURE_BEIGE})`, backgroundSize: 'cover',
          mixBlendMode: 'overlay', opacity: 0.3,
          pointerEvents: 'none', zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'relative', zIndex: 10,
          display: 'flex', height: '100%', width: '100%',
          padding: isMobile ? '0 12px' : '0 48px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => navigate(backPath)}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          <SquareChevronLeft size={isMobile ? 16 : 20} color="white" />
          <span style={{ fontSize: isMobile ? 12 : 20, letterSpacing: '0.12em', color: 'white' }}>
            {isMobile ? backLabelMobile : backLabelDesktop}
          </span>
        </button>
        <h1
          style={{
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.2em',
            fontSize: isMobile ? 12 : 20,
            margin: 0,
            fontWeight: 400,
          }}
        >
          {title}
        </h1>
      </div>
    </motion.div>
  );
}
