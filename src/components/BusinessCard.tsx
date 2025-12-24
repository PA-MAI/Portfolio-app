import { ArrowRight, Layers } from "lucide-react";

interface BusinessCardProps {
  color: string;
  title: string;
  subtitle: string;
  link?: string;
  cardCount?: number;
}

export function BusinessCard({ color, title, subtitle, cardCount = 5 }: BusinessCardProps) {
  // Texture pour les cartes blanches et colorées
  //const textureUrl = 'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhcmRib2FyZCUyMHRleHR1cmV8ZW58MXx8fHwxNzY0NTQ3Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  // Choisir la texture en fonction de la couleur
  const isGray = color === '#300000' || color === '#8a8a8a';
  const textureUrl = isGray 
    ? 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    : 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  
  return (
    <div
      className="inline-block cursor-pointer"
      style={{ width: 240, height: 160 }}
    >
      {/* CONTENEUR RELATIF – ESSENTIEL */}
      <div className="relative w-full h-full">

        {/* ---- CARTE ---- */}
        <div
          className="rounded-xl shadow-lg relative overflow-hidden group transition-all duration-300"
          style={{ backgroundColor: color, width: 240, height: 160 }}
        >
          {/* Texture réaliste overlay */}
          <div 
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              backgroundImage: `url(${textureUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'multiply',
              opacity: 1
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
                radial-gradient(ellipse at 10% 20%, rgba(0,0,0,0.1) 0%, transparent 20%),
                radial-gradient(ellipse at 90% 80%, rgba(0,0,0,0.07) 0%, transparent 25%),
                radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 18%),
                radial-gradient(ellipse at 75% 10%, rgba(0,0,0,0.05) 0%, transparent 12%)
              `,
              mixBlendMode: 'multiply'
            }}
          />
          
          {/* Effet brillant photo subtil */}
          <div 
            className="absolute inset-0 pointer-events-none z-[4]"
            style={{
              background: 'linear-gradient(125deg, rgba(255,255,255,0.09) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)',
              opacity: 0.7
            }}
          />
          
          {/* Logo circulaire avec le nombre de cartes */}
          <div className="absolute top-4 left-4 z-30">
            <div 
              className="border-[2px] border-white/60 rounded-full flex items-center justify-center backdrop-blur-sm"
              style={{ width: '36px', height: '36px' }}
            >
              <span className="text-white text-[13px]">{cardCount}</span>
            </div>
          </div>

          {/* Icône d'empilement en haut à droite */}
          <div className="absolute top-4 right-4 text-white/40 z-10">
            <Layers size={18} strokeWidth={2} />
          </div>

          {/* Lignes décoratives horizontales au centre */}
          <div className="absolute left-4 right-4 space-y-2 z-10" style={{ top: '48%' }}>
            <div className="h-[1px] bg-white/20" />
            <div className="h-[1px] bg-white/20" />
          </div>

          {/* Titre en bas */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <h3 className="text-white tracking-wide text-[18px]">{title}</h3>
            <p className="text-white/60 mt-1 text-[11px]">Cliquez pour voir</p>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/15 pointer-events-none z-40" />
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40" />
        </div>

        {/* Ombre */}
        <div
          className="absolute top-2 -left-2 w-full h-full rounded-xl -z-10"
          style={{ backgroundColor: "#000", opacity: 0.15 }}
        />
      </div>
    </div>
  );
}