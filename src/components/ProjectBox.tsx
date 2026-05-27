import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import dataPerso from "../data/dataPerso";

interface ProjectBoxProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    color: string;
    githubpage?: string;
    soutenance?: string;
    githubIcon?: string;
    pdfIcon?: string;
  };
  delay?: number;
}

const TEXTURE_BEIGE = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const TEXTURE_GRAY = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export function ProjectBox({ project, delay = 0 }: ProjectBoxProps) {
  const navigate = useNavigate();

  const [boxTier, setBoxTier] = useState<'sm' | 'md' | 'lg'>(() => {
    const w = window.innerWidth;
    return w < 768 ? 'sm' : w < 1024 ? 'md' : 'lg';
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBoxTier(w < 768 ? 'sm' : w < 1024 ? 'md' : 'lg');
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const isGray = project.color === '#9a9a9a' || project.color === '#a8a8a8';
  const isText = project.color === '#e8dcc8' || project.color === '#f0e6d2';
  const textureUrl = isGray ? TEXTURE_GRAY : TEXTURE_BEIGE;

  const isComingSoon = project.id >= 1000;
  const poignée = dataPerso.poigneeData[0]?.image;

  const W           = boxTier === 'sm' ? 140  : boxTier === 'md' ? 200  : 320;
  const H           = boxTier === 'sm' ? 158  : boxTier === 'md' ? 230  : 360;
  const circleSize  = boxTier === 'sm' ? 58   : boxTier === 'md' ? 78   : 100;
  const logoFont    = boxTier === 'sm' ? 11   : boxTier === 'md' ? 15   : 24;
  const titleFont   = boxTier === 'sm' ? 7    : boxTier === 'md' ? 9    : 13;
  const subtitleFont = boxTier === 'sm' ? 6.5 : boxTier === 'md' ? 8    : 10;
  const poigneeH    = boxTier === 'sm' ? 50   : boxTier === 'md' ? 68   : 120;
  const poigneeW    = boxTier === 'sm' ? 78   : boxTier === 'md' ? 106  : 180;
  const poigneeMB   = boxTier === 'sm' ? 12   : boxTier === 'md' ? 26   : 60;
  const cardMargin  = boxTier === 'sm' ? 3    : boxTier === 'md' ? 6    : 10;
  const innerGap    = boxTier === 'sm' ? 3    : boxTier === 'md' ? 5    : 10;

  const handleClick = () => {
    if (!isComingSoon) navigate(`/projets/${project.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      whileHover={
        !isComingSoon
          ? { scale: 1.08, rotateX: -5, y: -15, transition: { duration: 0.3 } }
          : { scale: 1.02, transition: { duration: 0.3 } }
      }
      transition={{ duration: 0.6, delay }}
      onClick={handleClick}
      className={isComingSoon ? 'select-none' : 'cursor-pointer select-none'}
      style={{
        backgroundImage: `url(${textureUrl})`,
        perspective: '1200px',
        margin: `${cardMargin}px`,
        transformStyle: 'preserve-3d',
        opacity: isComingSoon ? 0.6 : 1,
        borderRadius: '6px',
      }}
    >
      <div
        className="relative rounded-lg overflow-hidden"
        style={{
          width: W,
          height: H,
          backgroundColor: project.color,
          transformStyle: 'preserve-3d',
          boxShadow: isComingSoon
            ? '-5px 8px 24px rgba(0,0,0,0.2)'
            : boxTier === 'lg'
            ? '-10px 20px 40px rgba(0,0,0,0.8)'
            : '-4px 8px 20px rgba(0,0,0,0.55)',
          borderRadius: '6px',
        }}
      >
        {/* Texture layers */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            backgroundImage: `url(${textureUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 0px 10px 60px rgba(0,0,0,0.15), inset 5px 5px 20px rgba(0,0,0,0.1)',
            borderRadius: '6px',
          }}
        >
          <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: `url(${textureUrl})`, backgroundSize: 'cover', mixBlendMode: 'multiply', opacity: 0.5, borderRadius: '6px' }} />
          <div className="absolute inset-0 pointer-events-none z-[3]" style={{ background: 'radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%), radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.08) 0%, transparent 30%)', mixBlendMode: 'multiply' }} />
          <div className="absolute inset-0 pointer-events-none z-[4]" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)', opacity: 0.6 }} />
          <div className="absolute top-0 left-0 right-0 pointer-events-none z-[5]" style={{ height: boxTier === 'lg' ? 64 : 24, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 100%)', borderRadius: '6px' }} />
          <div className="absolute top-0 bottom-0 left-0 pointer-events-none z-[5]" style={{ width: boxTier === 'lg' ? 32 : 12, background: 'linear-gradient(to right, rgba(0,0,0,0.12) 0%, transparent 100%)' }} />
          <div className="absolute top-0 bottom-0 right-0 pointer-events-none z-[5]" style={{ width: boxTier === 'lg' ? 32 : 12, background: 'linear-gradient(to left, rgba(0,0,0,0.12) 0%, transparent 50%)' }} />

          {/* Card content */}
          <div
            className="absolute inset-0 z-10"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', gap: innerGap }}
          >
            {/* Circle: @Projet + title only */}
            <div
              style={{
                width: circleSize, height: circleSize, borderRadius: '50%',
                //border: '3px solid rgba(255,255,255,0.7)',
                boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: boxTier === 'lg' ? '8px 4px 4px' : '4px 4px 2px' }}>
                <span
                  style={{
                    color: isText ? '#c9b596' : '#d2c2a6',
                    fontSize: logoFont,
                    fontFamily: 'serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    letterSpacing: '0.08em',
                    lineHeight: 1.2,
                  }}
                >
                  @Projet
                </span>
                <h3
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: titleFont,
                    letterSpacing: '0.06em',
                    lineHeight: 1.2,
                    width: circleSize * 0.8,
                    margin: 0,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                  }}
                >
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Subtitle below circle */}
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: subtitleFont,
                letterSpacing: '0.08em',
                textAlign: 'center',
                margin: 0,
                padding: '0 6px',
                lineHeight: 1.3,
              }}
            >
              {project.subtitle.toUpperCase()}
            </p>

            {/* Poignée */}
            <div style={{ marginBottom: poigneeMB, flexShrink: 0 }}>
              <img
                src={poignée}
                alt=""
                style={{
                  boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                  borderRadius: '8px',
                  height: poigneeH,
                  width: poigneeW,
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>

        {/* "Cliquez pour découvrir" — large only */}
        {boxTier === 'lg' && !isComingSoon && (
          <div
            className="absolute bottom-8 z-10"
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <p style={{ color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', fontSize: '10px', textAlign: 'center' }}>
              CLIQUEZ POUR DÉCOUVRIR
            </p>
          </div>
        )}

        {/* Inner shadow overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-[6]"
          style={{ boxShadow: 'inset 0px 10px 60px rgba(0,0,0,0.15), inset 5px 5px 20px rgba(0,0,0,0.1)' }}
        />
      </div>
    </motion.div>
  );
}
