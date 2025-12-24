import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

interface ProjectBoxProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    color: string;
  };
  delay?: number;
}

export function ProjectBox({ project, delay = 0 }: ProjectBoxProps) {
  const navigate = useNavigate();

  // Choisir la texture en fonction de la couleur
  const isGray = project.color === '#9a9a9a' || project.color === '#a8a8a8';
  const textureUrl = isGray 
    ? 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    : 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const isComingSoon = project.id >= 1000;

  const handleClick = () => {
    if (!isComingSoon) {
      navigate(`/projets/${project.id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      whileHover={!isComingSoon ? { 
        scale: 1.08, 
        rotateX: -5,
        y: -15,
        transition: { duration: 0.3 }
      } : {
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      transition={{ duration: 0.6, delay }}
      onClick={handleClick}
      className={isComingSoon ? "select-none" : "cursor-pointer select-none"}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
        opacity: isComingSoon ? 0.6 : 1,
      }}
    >
      {/* Boîte en carton - Face avant */}
      <div
        className="relative rounded-lg shadow-2xl overflow-hidden"
        style={{
          width: "340px",
          height: "380px",
          backgroundColor: project.color,
          transformStyle: "preserve-3d",
          boxShadow: isComingSoon
            ? '0 8px 24px rgba(0,0,0,0.2)'
            : '10px 20px 40px rgba(0,0,0,0.8)',
        }}
      >
        {/* Texture réaliste overlay - Première couche */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url(${textureUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'multiply',
            opacity: 0.5
          }}
        />
        
        {/* Deuxième couche de texture pour accentuer les détails */}
        <div 
          className="absolute inset-0 pointer-events-none z-[2]"
          style={{
            backgroundImage: `url(${textureUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
            opacity: 0.3
          }}
        />
        
        {/* Défauts et imperfections photo */}
        <div 
          className="absolute inset-0 pointer-events-none z-[3]"
          style={{
            background: `
              radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%),
              radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.08) 0%, transparent 30%),
              radial-gradient(ellipse at 45% 60%, rgba(255,255,255,0.06) 0%, transparent 20%),
              radial-gradient(ellipse at 70% 15%, rgba(0,0,0,0.06) 0%, transparent 15%)
            `,
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Effet brillant photo subtil */}
        <div 
          className="absolute inset-0 pointer-events-none z-[4]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
            opacity: 0.6
          }}
        />

        {/* Bords et rabats de la boîte pour effet 3D */}
        <div 
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 100%)',
          }}
        />
        
        {/* Bord gauche plus sombre */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-8 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 100%)',
          }}
        />
        
        {/* Bord droit plus sombre */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-8 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 100%)',
          }}
        />

        {/* Logo circulaire ØRG au centre */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div 
            className="flex items-center justify-center border-4 border-white/70 shadow-lg"
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
          >
            <span 
              className="text-white/90 tracking-[0.2em]" 
              style={{ 
                fontSize: "38px",
                fontFamily: 'serif',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Projet
            </span>
          </div>
        </div>

        {/* Texte en haut */}
        <div className="absolute top-8 left-8 right-8 z-10">
          <p 
            className="text-white/60 tracking-[0.15em] mb-2" 
            style={{ fontSize: "10px" }}
          >
            {project.subtitle.toUpperCase()}
          </p>
          <h3 
            className="text-white/90 tracking-[0.12em] leading-tight" 
            style={{ 
              fontSize: "13px",
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Texte en bas */}
        <div className="absolute bottom-8 left-8 right-8 z-10">
          <p 
            className="text-white/60 tracking-[0.15em]" 
            style={{ fontSize: "10px" }}
          >
            CLIQUEZ POUR DÉCOUVRIR
          </p>
        </div>

        {/* Ombres internes pour profondeur */}
        <div
          className="absolute inset-0 pointer-events-none z-[6]"
          style={{
            boxShadow: `
              inset 0 0 60px rgba(0,0,0,0.15),
              inset 0 0 20px rgba(0,0,0,0.1),
              inset 8px 8px 20px rgba(0,0,0,0.1)
            `,
          }}
        />
      </div>
    </motion.div>
  );
}