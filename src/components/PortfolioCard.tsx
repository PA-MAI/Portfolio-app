import { motion } from 'motion/react';
import { FileText, Grid } from 'lucide-react';

interface PortfolioCardProps {
  rotation: number;
  color: string;
  title: string;
  link: string;
  delay: number;
  zIndex: number;
}

export function PortfolioCard({ rotation, color, title, link, delay, zIndex }: PortfolioCardProps) {
  const width = 260;
  const height = 340;
  
  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06, y: -8 }}
      transition={{ duration: 0.5, delay }}
      className="group cursor-pointer inline-block"
      style={{ zIndex }}
    >
      <div className="relative" style={{ transform: `rotate(${rotation}deg)` }}>
        <div
          className="rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl relative overflow-hidden"
          style={{ 
            backgroundColor: color,
            width: `${width}px`,
            height: `${height}px`
          }}
        >
          {/* Icon */}
          <div className="absolute top-7 left-7 text-white/50">
            <Grid size={36} strokeWidth={1.5} />
          </div>

          {/* Grid pattern lines */}
          <div className="absolute top-20 left-7 right-7 space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-[1px] bg-white/8" />
            ))}
          </div>

          {/* Decorative squares */}
          <div className="absolute top-[45%] left-7 right-7 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-white/5 rounded" />
            ))}
          </div>

          {/* Title at bottom */}
          <div className="absolute bottom-7 left-7 right-7">
            <h4 className="text-white tracking-wide" style={{ fontSize: '22px' }}>{title}</h4>
            <div className="w-16 h-[2.5px] bg-white/30 mt-3 rounded-full" />
          </div>

          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Shadow - sud-ouest (bas-gauche) */}
        <div 
          className="absolute top-2 -left-2 rounded-xl -z-10"
          style={{ 
            backgroundColor: '#000', 
            opacity: 0.15,
            width: `${width}px`,
            height: `${height}px`
          }}
        />
      </div>
    </motion.a>
  );
}
