import { motion } from "motion/react";
import { useState } from "react";
import { BusinessCard } from "./BusinessCard";

interface CardData {
  title?: string;
  subtitle?: string;
  image?: string;
  link?: string;
  images?: string[];
}

interface CardStackProps {
  rotation: number;
  color: string;
  title: string;
  link?: string;
  delay: number;
  zIndex: number;
  small?: boolean;
  cardsData?: CardData[];
}

// Type interne pour toutes les cartes du stack
interface StackCard extends CardData {
  isBusiness?: boolean;
}

export function CardStack({
  rotation,
  color,
  title,
  link,
  delay,
  zIndex,
  small = false,
  cardsData = [],
}: CardStackProps) {
  const width = small ? 240 : 280;
  const height = small ? 160 : 180;

  const [hovered, setHovered] = useState<number | null>(null);
  
  // Texture pour les cartes
  const textureUrl = 'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhcmRib2FyZCUyMHRleHR1cmV8ZW58MXx8fHwxNzY0NTQ3Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  // On crée un tableau avec la carte Business en première position
  const allCards: StackCard[] = [
    { title, subtitle: "", link, isBusiness: true },
    ...cardsData,
  ];
  const cardCount = allCards.length;

  const radius = 160;
  const angleStep = 25;
  const baseTilt = -15;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.45, delay }}
      className={`relative inline-block cursor-pointer ${small ? "h-[260px]" : "h-[300px]"}`}
      onMouseLeave={() => setHovered(null)}
      style={{ zIndex, height }}
    >
      {allCards.map((card, i) => {
        const angle = (i - (cardCount - 1) / 2) * angleStep;
        const hoverX = Math.sin((angle * Math.PI) / 180) * radius;
        const hoverY = -Math.cos((angle * Math.PI) / 180) * radius + radius;

        return card.isBusiness ? (
          // Carte de type BusinessCard
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, rotate: baseTilt , zIndex: 99 + i }}
            animate={{
              x: hovered !== null ? hoverX : 0,
              y: hovered !== null ? hoverY : 0,
              rotate: hovered !== null ? angle / 3 : baseTilt,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              delay: hovered !== null ? i * 0.02 : 0,
            }}
            onMouseEnter={() => setHovered(i)}
            className="absolute"
            style={{ width, height }}
          >
            <BusinessCard
              color={color}
              title={card.title || ""}
              subtitle={card.subtitle || ""}
              link={card.link}
              cardCount={cardsData.length}
            />
          </motion.div>
        ) : (
            // Carte standard
          <motion.a
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: 0, y: 0, rotate: baseTilt, zIndex: 1 + i, opacity: 0.95 }}
            animate={{
              x: hovered !== null ? hoverX : 0,
              y: hovered !== null ? hoverY : 0,
              rotate: hovered !== null ? angle / 3 : baseTilt,
              zIndex: hovered === i ? 999 : card.isBusiness ? cardCount + 1 : cardCount - i,
              opacity: hovered === i ? 1 : 0.9,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
              delay: hovered !== null ? i * 0.02 : 0,
            }}
            onMouseEnter={() => setHovered(i)}
            className="absolute rounded-xl flex flex-col items-center justify-center overflow-hidden cursor-pointer"
            style={{
              width,
              height,
              flexDirection: 'column',
              backgroundColor: color,
              borderRadius: 16,
              boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
              padding: 40,
              textAlign: "center",
            }}
          >
            {/* Texture réaliste overlay - première couche */}
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
              className="absolute flex inset-0 pointer-events-none z-[4]"
                style={{
                flexDirection: 'column',
                background: 'linear-gradient(125deg, rgba(255,255,255,0.09) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)',
                opacity: 0.7
              }}
            />
            {/* Contenu de la carte */}
              {card.images && (
                <div className="flex  space-x-2 mb-2"
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    width: '40px',
                    height: '40px'
                  }}>
                  {card.images.length === 1 ? (
                    <img src={card.images[0]} alt={card.title} className="w-16 h-16 object-contain relative z-10 w-40 h-40" />
                  ) : (
                    card.images.map((img, idx) => (
                      <img key={idx} src={img} alt={card.title} className="w-16 h-16 object-contain relative z-10 w-40 h-40" />
                    ))
                  )}
                </div>
              )}
              {card.image && (
                <div className="mb-2">
                  <img src={card.image} alt={card.title} className="w-16 h-16 object-contain relative z-10" />
                </div>
              )}


            {card.title && (
              <h4 className="text-white relative z-10" style={{ fontWeight: 'bold', fontSize: '14px' }}>{card.title}</h4>
            )}
            {card.subtitle && (
              <p className="text-xs mt-1 relative z-10" style={{ marginLeft: '20px',color: '#749CE6' }}>{card.subtitle}</p>
            )}
          </motion.a>
        );
      })}
    </motion.div>
  );
}