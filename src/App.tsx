import { useState, useEffect } from 'react';
import { useViewport } from './hooks/useViewport';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from "react-router-dom";
import { BrandingFolder } from './components/BrandingFolder';
import { CardStack } from './components/CardStack';
import { PhotoPolaroid } from './components/PhotoPolaroid';
import { TechIcon } from './components/TechIcon';
import ReactDOM from 'react-dom';
import DataPerso from './data/dataPerso';

const texture1 = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
const texture2 = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useTabletScale(): number {
  const MAX_SCALE = 1100 / 1600;
  const [scale, setScale] = useState(() => Math.min(window.innerWidth / 1600, MAX_SCALE));
  useEffect(() => {
    const update = () => setScale(Math.min(window.innerWidth / 1600, MAX_SCALE));
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return scale;
}

// ─── Mobile folder card ────────────────────────────────────────────────────────
// Titre + sous-titre sur la MÊME ligne (flex-row) — contenu ancré en bas
// Le z-index est géré par le WRAPPER externe (sans transform) pour éviter
// que Framer Motion crée un stacking context qui ignorerait le z-index.

interface MobileFolderCardProps {
  title: string;
  subtitle?: string;
  color: string;
  link: string;
  rotationDeg: number;
  index: number;
}

function MobileFolderCard({ title, subtitle, color, link, rotationDeg, index }: MobileFolderCardProps) {
  const navigate = useNavigate();
  return (
    <div style={{ position: 'relative' }}>
      {/* Page 3 — dépasse le plus haut, légèrement plus étroite */}
      <div style={{ position: 'absolute', left: 5, right: 5, top: -8, height: 160, backgroundColor: color, opacity: 0.6, borderRadius: '12px 12px 0 0', boxShadow: '0 -2px 5px rgba(0,0,0,0.55)' }} />
      {/* Page 2 — dépasse juste au-dessus du dossier */}
      <div style={{ position: 'absolute', left: 2, right: 2, top: -4, height: 160, backgroundColor: color, opacity: 0.82, borderRadius: '12px 12px 0 0', boxShadow: '0 -1px 4px rgba(0,0,0,0.18)' }} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 + index * 0.12 }}
        onClick={() => navigate(link)}
        onKeyDown={(e) => e.key === 'Enter' && navigate(link)}
        role="button"
        tabIndex={0}
        aria-label={`Ouvrir ${title}`}
        style={{
          backgroundColor: color,
          height: '160px',
          transform: `rotate(${rotationDeg}deg)`,
          cursor: 'pointer',
          borderRadius: '12px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 14px 44px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
        }}
      >
        {/* Texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${texture2})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply', opacity: 0.45, pointerEvents: 'none', zIndex: 1 }} />
        {/* Shine */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(0,0,0,0.08) 100%)', pointerEvents: 'none', zIndex: 2 }} />
        {/* Accent gauche interne */}
        {/* <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'rgba(255,255,255,0.35)', zIndex: 3 }} /> */}

        {/* Contenu ancré en haut — h2 + sous-titre en colonne */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '14px 16px 0', zIndex: 10 }}>
          <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '14px', letterSpacing: '0.1em', textShadow: '1px 1px 4px rgba(0,0,0,0.5)', margin: 0, lineHeight: 1.3 }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '8px', letterSpacing: '0.08em', marginTop: '3px' }}>
              {subtitle}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Mobile card stack ─────────────────────────────────────────────────────────
// Composant contrôlé (isOpen/onToggle) → exclusivité gérée par le parent
// Déco BusinessCard d'origine, fan vertical sans espace, icônes à taille max

interface MobileCardItem {
  title?: string;
  subtitle?: string;
  image?: string;
  link?: string;
  icons?: { src: string; className: string }[];
}

interface MobileCardStackProps {
  color: string;
  title: string;
  delay?: number;
  zIndex: number;
  cardsData?: MobileCardItem[];
  isOpen: boolean;
  onToggle: () => void;
}

function MobileCardStack({ color, title, delay = 0, zIndex, cardsData = [], isOpen, onToggle }: MobileCardStackProps) {
  const W = 150;
  const H = 88;
  const isGray = color === '#300000' || color === '#8a8a8a';
  const txUrl = isGray ? texture1 : texture2;
  const [detailCardIdx, setDetailCardIdx] = useState<number | null>(null);
  const OVERLAP = 4;

  useEffect(() => {
    if (!isOpen) setDetailCardIdx(null);
  }, [isOpen]);

  const decoLayers = (
    <>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${txUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply', opacity: 1, borderRadius: 10 }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${txUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay', opacity: 0.3, borderRadius: 10 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 10% 20%, rgba(0,0,0,0.1) 0%, transparent 20%), radial-gradient(ellipse at 90% 80%, rgba(0,0,0,0.07) 0%, transparent 25%)', mixBlendMode: 'multiply', borderRadius: 10 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(125deg, rgba(255,255,255,0.09) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.06) 100%)', opacity: 0.7, borderRadius: 10 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)', borderRadius: 10 }} />
    </>
  );

  const cardBaseStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    width: W,
    height: H,
    backgroundColor: color,
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0,0,0,0.45), 0 -2px 4px rgba(0,0,0,0.15)',
    cursor: 'pointer',
  };

  return (
    <div style={{ position: 'relative', width: W, zIndex: isOpen ? 9000 : zIndex }}>
      {/* Carte principale */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
        onClick={onToggle}
        style={{
          width: W, height: H,
          backgroundColor: color,
          borderRadius: 10,
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          userSelect: 'none',
          zIndex: 10,
          boxShadow: '0 8px 24px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.25)',
        }}
      >
        {decoLayers}
        {/* Badge count */}
        <div style={{ position: 'absolute', top: 7, left: 7, width: 22, height: 22, border: '2px solid rgba(255,255,255,0.6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <span style={{ color: 'white', fontSize: 8 }}>{cardsData.length}</span>
        </div>
        {/* Lignes décoratives */}
        <div style={{ position: 'absolute', left: 8, right: 8, top: '40%', zIndex: 5, transform: 'translateY(-4px)' }}>
          <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginBottom: 5 }} />
          <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        </div>
        {/* Titre + hint en bas */}
        <div style={{ position: 'absolute', bottom: 6, left: 0, right: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10, paddingLeft: 28, paddingRight: 6 }}>
          <span style={{ color: 'white', fontSize: 9, fontWeight: 'bold', letterSpacing: '0.08em', textAlign: 'center', textShadow: '1px 1px 3px rgba(0,0,0,0.5)', lineHeight: 1.3 }}>{title}</span>
          <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: 6, letterSpacing: '0.1em', marginTop: 2 }}>{isOpen ? 'FERMER ▲' : 'APPUYER ▼'}</span>
        </div>
      </motion.div>

      {/* Cartes filles */}
      <AnimatePresence>
        {isOpen && cardsData.map((card, i) => {
          const isLink = !!card.link;
          const topPos = (i + 1) * H - i * OVERLAP;
          const motionProps = {
            initial: { opacity: 0, y: -10 } as const,
            animate: { opacity: 1, y: 0 } as const,
            exit: { opacity: 0, y: -10 } as const,
            transition: { type: 'spring' as const, stiffness: 420, damping: 30, delay: i * 0.025 },
          };

          const content = (
            <>
              {decoLayers}
              <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4px 6px', width: '100%', height: '100%' }}>
                {card.icons && card.icons.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, width: '100%' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center', alignItems: 'center' }}>
                      {card.icons.map((icon, idx) => (
                        <TechIcon key={idx} src={icon.src} className={icon.className} style={{ width: 26, height: 26 }} />
                      ))}
                    </div>
                    {card.title && <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 8, textAlign: 'center', letterSpacing: '0.04em', lineHeight: 1.2, fontWeight: 'bold' }}>{card.title}</span>}
                  </div>
                ) : card.image ? (
                  <img src={card.image} alt={card.title ?? ''} style={{ width: '72px', height: '72px', objectFit: 'contain' }} />
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: '0 6px', width: '100%' }}>
                    {card.title && <span style={{ color: 'white', fontSize: 9, fontWeight: 'bold', textAlign: 'center', lineHeight: 1.3 }}>{card.title}</span>}
                    {card.subtitle && (
                      <span style={{ color: isLink ? '#61DAFB' : 'rgba(255,255,255,0.7)', fontSize: 7.5, textAlign: 'center', lineHeight: 1.35, textDecoration: isLink ? 'underline' : 'none', wordBreak: 'break-all' }}>
                        {card.subtitle}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </>
          );

          if (isLink) {
            return (
              <motion.a
                key={i}
                {...motionProps}
                href={card.link}
                target={card.link!.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.stopPropagation()}
                style={{ ...cardBaseStyle, top: topPos, zIndex: i + 1, display: 'block', textDecoration: 'none' }}
              >
                {content}
              </motion.a>
            );
          }
          return (
            <motion.div
              key={i}
              {...motionProps}
              onClick={(e: React.MouseEvent<HTMLDivElement>) => { e.stopPropagation(); setDetailCardIdx(i); }}
              style={{ ...cardBaseStyle, top: topPos, zIndex: i + 1 }}
            >
              {content}
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Modal détail */}
      {detailCardIdx !== null && cardsData[detailCardIdx] && ReactDOM.createPortal(
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '60px' }}
          onClick={() => setDetailCardIdx(null)}
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              backgroundColor: color,
              borderRadius: 16,
              width: 280,
              minHeight: 180,
              padding: '24px 16px 20px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.65)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 14,
            }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {decoLayers}
            <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, width: '100%' }}>
              {(() => {
                const card = cardsData[detailCardIdx];
                const count = card.icons?.length ?? 0;
                const sz = count <= 2 ? 64 : count <= 4 ? 48 : 40;
                if (card.icons && card.icons.length > 0) return (
                  <>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                      {card.icons.map((icon, idx) => <TechIcon key={idx} src={icon.src} className={icon.className} style={{ width: sz, height: sz }} />)}
                    </div>
                    {card.title && <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, textAlign: 'center', fontWeight: 'bold' }}>{card.title}</span>}
                  </>
                );
                if (card.image) return <img src={card.image} alt={card.title ?? ''} style={{ width: 130, height: 130, objectFit: 'contain' }} />;
                return (
                  <>
                    {card.title && <span style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{card.title}</span>}
                    {card.subtitle && (
                      card.link
                        ? <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ color: '#61DAFB', fontSize: 13, textAlign: 'center', textDecoration: 'underline', wordBreak: 'break-all' }}>{card.subtitle}</a>
                        : <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, textAlign: 'center' }}>{card.subtitle}</span>
                    )}
                  </>
                );
              })()}
            </div>
            <span
              style={{ position: 'absolute', top: 10, right: 14, color: 'rgba(255,255,255,0.5)', fontSize: 20, zIndex: 10, cursor: 'pointer', lineHeight: 1 }}
              onClick={() => setDetailCardIdx(null)}
            >✕</span>
          </motion.div>
          <p style={{ position: 'absolute', bottom: 40, color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>Toucher en dehors pour fermer</p>
        </div>,
        document.body
      )}
    </div>
  );
}

// ─── Desktop scene ─────────────────────────────────────────────────────────────

interface DesktopSceneProps {
  globalRotation: number;
  photos: typeof DataPerso.ShootsData;
}

function DesktopScene({ globalRotation, photos }: DesktopSceneProps) {
  return (
     <div style={{ position: "relative", width: "1600px", height: "900px" }}>
        {/* Titre impression — décalé à gauche, taille doublée */}
        <div style={{ position: "absolute", top: 22, left: -78, zIndex: 1 }}>
           <h1
              style={{
                 color: "#5d4a3a",
                 fontWeight: "bold",
                 fontSize: "44px",
                 fontFamily: "serif",
                 letterSpacing: "0.12em",
                 textShadow: "1px 1px 3px rgba(0,0,0,0.12)",
                 margin: 0,
              }}
           >
              Portfolio
           </h1>
           <p
              style={{
                 color: "#5d4a3a",
                 fontWeight: "bold",
                 fontSize: "44px",
                 fontFamily: "serif",
                 letterSpacing: "0.12em",
                 textShadow: "1px 1px 3px rgba(0,0,0,0.12)",
                 margin: 0,
              }}
           >
              Pascal Mairot
           </p>
           <p
              style={{
                 color: "rgba(93,74,58,0.5)",
                 fontSize: "18px",
                 letterSpacing: "0.2em",
                 marginTop: "4px",
              }}
           >
              DÉVELOPPEUR WEB FULLSTACK
           </p>
        </div>
        {/* Polaroid carrousel */}
        <div style={{ position: "absolute", left: "-110px", top: "355px" }}>
           <PhotoPolaroid
              rotation={globalRotation}
              photos={photos.map((i) => i.image)}
              delay={0.2}
              zIndex={230}
           />
        </div>
        {/* Contacts */}
        <div style={{ position: "absolute", left: "130px", top: "240px" }}>
           <CardStack
              rotation={globalRotation}
              color="#5d4a3a"
              title="Contacts"
              link="#contact"
              delay={0}
              zIndex={50}
              small
              cardsData={DataPerso.contactsCardsData}
           />
        </div>
        {/* Soft Skills */}
        <div style={{ position: "absolute", left: "175px", top: "420px" }}>
           <CardStack
              rotation={globalRotation}
              color="#300000"
              title="Soft Skills"
              link="#skills"
              delay={0.1}
              zIndex={40}
              small
              cardsData={DataPerso.softSkillsCardsData}
           />
        </div>
        {/* Frameworks */}
        <div style={{ position: "absolute", left: "220px", top: "610px" }}>
           <CardStack
              rotation={globalRotation}
              color="#8a8a8a"
              title="Frameworks & Libraries"
              link="#infos"
              delay={0.5}
              zIndex={30}
              small
              cardsData={DataPerso.softsCardsData}
           />
        </div>
        {/* Projets */}
        <div style={{ position: "absolute", left: "430px", top: "-15px" }}>
           <BrandingFolder
              rotation={globalRotation}
              color="#c9b596"
              title="MES PROJETS "
              subtitle="★ PERSONNELS & FORMATIONNELS"
              logo="PROJETS"
              link="/projets"
              delay={0.2}
              zIndex={20}
              large
           />
        </div>
        {/* Formations */}
        <div style={{ position: "absolute", left: "970px", top: "17px" }}>
           <BrandingFolder
              rotation={globalRotation}
              color="#9a9a9a"
              title="FORMATIONS"
              subtitle="◆ DIPLÔMES & CERTIFICATIONS"
              logo="FORMATIONS"
              link="/diplomes/9"
              delay={0.3}
              zIndex={4}
              large={false}
           />
        </div>
        {/* Expérience */}
        <div style={{ position: "absolute", left: "780px", top: "610px" }}>
           <BrandingFolder
              rotation={globalRotation}
              color="#9a9a9a"
              title="EXPÉRIENCE PROFESSIONNELLE"
              subtitle="◆ SAVOIR-FAIRE TOUS MÉTIERS CONFONDUS"
              logo="EXPÉRIENCE PROFESSIONNELLE"
              link="/experiences/7"
              delay={0.4}
              zIndex={2}
              large={false}
           />
        </div>
     </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const globalRotation = -15;
  const photos = DataPerso.ShootsData;
  const viewport = useViewport();
  const tabletScale = useTabletScale();
  const [openCardIdx, setOpenCardIdx] = useState<number | null>(null);

  return (
    <div
      style={{
        backgroundImage: `url(${texture1})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        backgroundColor: '#d4d2ca',
        minHeight: '100vh',
        width: '100vw',
        overflowX: 'hidden',
      }}
    >

      {/* ══════════════════════════════════════════════════════
          MOBILE  —  < 768px
      ══════════════════════════════════════════════════════ */}
      {viewport === 'mobile' && (
        <div style={{ minHeight: '800px', padding: '20px 15px 32px' }}>

          {/* Titre */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'center', marginBottom: '24px' }}
          >
            <h1 style={{ color: '#5d4a3a', fontWeight: 'bold', fontSize: '24px', fontFamily: 'serif', letterSpacing: '0.12em', textShadow: '1px 1px 3px rgba(0,0,0,0.12)', margin: 0 }}>
              Portfolio Pascal Mairot
            </h1>
            <p style={{ color: 'rgba(93,74,58,0.5)', fontSize: '10px', letterSpacing: '0.2em', marginTop: '4px' }}>
              DÉVELOPPEUR WEB FULLSTACK
            </p>
          </motion.div>

          {/* Backdrop — ferme le stack ouvert au clic en dehors.
              z:15 < row z:20 → ne bloque pas les clics sur les cartes enfants */}
          {openCardIdx !== null && (
            <div
              style={{ position: 'fixed', inset: 0, zIndex: 15, background: 'transparent' }}
              onClick={() => setOpenCardIdx(null)}
            />
          )}

          {/* ── Row : Photo à gauche | Piles de cartes à droite ── */}
          {/* position+zIndex garantit que le row (et les cartes ouvertes) passent au-dessus des dossiers */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '8px', alignItems: 'flex-start', marginBottom: '32px', position: 'relative', zIndex: 20, justifyContent: 'center' }}>

            {/* PhotoPolaroid — scale(0.5) → wrapper 120×160 — laisse 162px pour les cartes sur 320px */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ width: '120px', height: '160px', position: 'relative', flexShrink: 0, overflow: 'visible' }}
            >
              <div style={{ transform: 'scale(0.5)', transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
                <PhotoPolaroid rotation={0} photos={photos.map((p) => p.image)} delay={0.2} zIndex={10} />
              </div>
            </motion.div>

            {/* MobileCardStack × 3 — 150 px, fan vertical vers le bas au clic */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '150px' }}>
              {[
                { color: '#5d4a3a', title: 'Contacts',    delay: 0.2,  zIndex: 50, data: DataPerso.contactsCardsData   },
                { color: '#300000', title: 'Soft Skills',  delay: 0.28, zIndex: 40, data: DataPerso.softSkillsCardsData },
                { color: '#8a8a8a', title: 'Frameworks et Librairies', delay: 0.36, zIndex: 30, data: DataPerso.softsCardsData },
              ].map((s, i) => (
                <MobileCardStack
                  key={i}
                  color={s.color}
                  title={s.title}
                  delay={s.delay}
                  zIndex={s.zIndex}
                  cardsData={s.data}
                  isOpen={openCardIdx === i}
                  onToggle={() => setOpenCardIdx(prev => prev === i ? null : i)}
                />
              ))}
            </div>
          </div>

          {/* ── Dossiers empilés ────────────────────────────────────────────
              Ordre inversé : EXPÉRIENCE devant (z=10), FORMATIONS milieu (z=9), PROJETS derrière (z=8)
              Titres en HAUT de chaque dossier → visibles dans la portion exposée (80px)
              Les bas de PROJETS et FORMATIONS sont cachés sous les cartes du dessus
          ──────────────────────────────────────────────────────────────────── */}
          <div style={{ position: 'relative', height: '360px', marginBottom: '32px' }}>
            {[
              { title: 'MES PROJETS',                subtitle: '★ PERSONNELS & FORMATIONNELS',          color: '#c9b596', link: '/projets',       top: 0,   z: 8,  rot: 0 },
              { title: 'FORMATIONS',                 subtitle: '◆ DIPLÔMES & CERTIFICATIONS',           color: '#9a9a9a', link: '/diplomes/9',     top: 100, z: 9,  rot: 0 },
              { title: 'EXPÉRIENCE PROFESSIONNELLE', subtitle: '◆ SAVOIR-FAIRE TOUS MÉTIERS CONFONDUS', color: '#7a6a58', link: '/experiences/7', top: 200, z: 10, rot: 0 },
            ].map((f, i) => (
              // Wrapper : z-index SANS transform → stacking order fiable entre frères
              <div
                key={i}
                style={{ position: 'absolute', top: `${f.top}px`, left: 0, right: 0, zIndex: f.z }}
              >
                <MobileFolderCard title={f.title} subtitle={f.subtitle} color={f.color} link={f.link} rotationDeg={f.rot} index={i} />
              </div>
            ))}
          </div>

        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          TABLET + DESKTOP  —  ≥ 768px
          Scale = min(viewport_width / 1600, 1) : la scène grossit
          proportionnellement jusqu'à 1:1 à 1600px, puis reste stable.
          height: 100vh évite toute troncature en bas.
      ══════════════════════════════════════════════════════ */}
      {viewport !== 'mobile' && (
        <div style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '1600px',
            height: '900px',
            flexShrink: 0,
            transform: `scale(${tabletScale})`,
            transformOrigin: 'top center',
            position: 'relative',
            left: '90px',
          }}>
            <DesktopScene globalRotation={globalRotation} photos={photos} />
          </div>
        </div>
      )}

    </div>
  );
}
