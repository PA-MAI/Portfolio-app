import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import React from 'react';
import { useNavigate } from "react-router-dom";

interface BrandingFolderProps {
  rotation: number;
  title: string;
  subtitle?: string;
  color: string;
  logo: string;
  link: React.ReactNode;
  //link: string;
  delay: number;
  zIndex: number;
  large?: boolean;
}
// Dossier de branding avec titre, sous-titre et logo embossé
export function BrandingFolder({ rotation, title, subtitle, color, logo, link, delay, zIndex, large = false }: BrandingFolderProps) {
  // Format A4 portrait for large, landscape for small
  const width = large ? 480 : 680;
  const height = large ? 680 : 480;
  
  // Choisir la texture en fonction de la couleur
  const isGray = color === '#8a8a8a';
  const textureUrl = isGray 
    ? 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    : 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link as string);
    //  if (link.startsWith("/")) {
    //     navigate(link.replace(/^\//, "")); // HashRouter interprète le path correctement
    //  } else {
    //     navigate(link as string);
    //  }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer inline-block"
      style={{ zIndex }}
      onClick={handleClick}
    >
      <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
        {/* Main Folder/Book */}
        <div
          className="rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-3xl relative overflow-hidden"
          style={{ 
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`
          }}
        >
          {/* Texture réaliste overlay */}
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
          
          {/* Eye icon in corner */}
          <div className="absolute top-8 right-8 text-[#8a7355] opacity-40 z-10">
            <Eye size={large ? 28 : 24} strokeWidth={1.5} />
          </div>

          {/* Title */}
          <div className="absolute top-10 left-10 right-10 z-10">
            <h2 className="text-white tracking-[0.15em] leading-tight" style={{ fontWeight: 'bold', fontSize: large ? '45px' : '32px' }}>
              {title}
            </h2>
            {subtitle && (
              <h3 className="text-white/90 tracking-[0.15em] mt-1" style={{ fontSize: large ? '28px' : '22px' }}>
                {subtitle}
              </h3>
            )}
          </div>

          {/* Embossed Logo/Symbol */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
            <div 
              className="opacity-15 select-none" 
              style={{ 
                fontSize: large ? '90px' : '70px',
                color: '#fff',
                textShadow: '3px 3px 6px rgba(0,0,0,0.55)',
                fontFamily: 'serif',
                lineHeight: 1
              }}
            >
              {logo}
            </div>
          </div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-5 z-[2]" style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.8) 0%, transparent 50%)'
          }} />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-[3]" />
          
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[4]" />
        </div>

        {/* Shadow layers for depth - sud-ouest (bas-gauche) */}
        <div 
          className="absolute top-2 -left-2 rounded-2xl -z-10"
          style={{ 
            backgroundColor: '#000', 
            opacity: 0.15,
            width: `${width}px`,
            height: `${height}px`
          }}
        />
        <div 
          className="absolute top-4 -left-4 rounded-2xl -z-20"
          style={{ 
            backgroundColor: '#000', 
            opacity: 0.1,
            width: `${width}px`,
            height: `${height}px`
          }}
        />
      </div>
     
    </motion.div>
  );
}