import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import DataPerso from "../data/dataPerso";
import { NavBar } from "../components/NavBar";
import { useViewport } from "../hooks/useViewport";

export default function ProjetDetail() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = DataPerso.projectsData.find(p => p.id === parseInt(id || "0"));

  const viewport = useViewport();
  const isMobile = viewport === 'mobile';

  const [contentScale, setContentScale] = useState(() => {
    const w = window.innerWidth;
    return w >= 1280 ? 1 : Math.min(w / 1200, 1);
  });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setContentScale(w >= 1280 ? 1 : Math.min(w / 1200, 1));
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  if (!project) {
    return (
      <div className="w-screen h-screen flex items-center justify-center" style={{ backgroundColor: '#e8dcc8' }}>
        <p className="text-[#5d4a3a]">Projet non trouvé</p>
      </div>
    );
  }

  const textureBeige = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const textureGray = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const textureLayers = (url: string) => (
    <>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${url})`, backgroundSize: 'cover', mixBlendMode: 'multiply', opacity: 0.4, borderRadius: 'inherit' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.1) 0%, transparent 25%)', mixBlendMode: 'multiply', borderRadius: 'inherit' }} />
    </>
  );

  const hasLinks = Boolean(project.trellopage || project.githubcode || project.githubpage || project.soutenance);

  return (
    <div
      style={{
        backgroundColor: "#e8dcc8",
        width: '100vw',
        height: isMobile ? 'auto' : '100vh',
        minHeight: '100vh',
        overflowX: 'hidden',
        overflowY: isMobile ? 'auto' : 'hidden',
      }}
    >
      <NavBar
        title={project.title}
        backPath="/projets"
        backLabelMobile="PROJETS"
        backLabelDesktop="RETOUR AUX PROJETS"
      />

      {/* ── MOBILE LAYOUT ── */}
      {isMobile && (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 44px)', backgroundImage: `url(${textureGray})`, backgroundRepeat: 'repeat', backgroundSize: 'cover', padding: '12px 12px 32px' }}>

          {/* Image du projet */}
          {project.img && (
            <div style={{ borderRadius: 14, overflow: 'hidden', marginBottom: 10, maxHeight: 160 }}>
              <img src={project.img} alt={project.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            </div>
          )}

          {/* Carte titre */}
          <div style={{ backgroundColor: '#5d4a3a', borderRadius: 14, overflow: 'hidden', padding: '14px 16px', position: 'relative', marginBottom: 10 }}>
            {textureLayers(textureBeige)}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: 'white', fontFamily: 'serif', letterSpacing: '0.08em', marginBottom: 4 }}>
                {project.title}
              </p>
              <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>
                {project.subtitle}
              </p>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
                STATUS : {project.status}
              </p>
            </div>
          </div>

          {/* Carte description */}
          <div style={{ backgroundColor: '#a8a8a8', borderRadius: 14, overflow: 'hidden', padding: '14px 16px', position: 'relative', marginBottom: 10 }}>
            {textureLayers(textureGray)}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', marginBottom: 6 }}>DESCRIPTION</p>
              <p style={{ fontSize: 11, color: 'white', lineHeight: 1.6, marginBottom: 10 }}>{project.description}</p>
              {project.contexte && (
                <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, fontStyle: 'italic' }}>{project.contexte}</p>
              )}
            </div>
          </div>

          {/* Carte technologies */}
          <div style={{ backgroundColor: '#c9b596', borderRadius: 14, overflow: 'hidden', padding: '14px 16px', position: 'relative', marginBottom: 10 }}>
            {textureLayers(textureBeige)}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', marginBottom: 8 }}>TECHNOLOGIES</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 12, padding: '3px 8px', fontSize: 9, color: 'white', letterSpacing: '0.06em' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Liens */}
          {hasLinks && (
            <div style={{ backgroundColor: '#d4c4a8', borderRadius: 14, overflow: 'hidden', padding: '14px 16px', position: 'relative' }}>
              {textureLayers(textureBeige)}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.githubcode && (
                  <a href={project.githubcode} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#e8dcc8', color: '#5d4a3a', borderRadius: 6, padding: '6px 10px', fontSize: 10, letterSpacing: '0.06em', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                    <img src={project.githubIcon} alt="" style={{ width: 14, height: 14 }} />GitHub Code
                  </a>
                )}
                {project.githubpage && (
                  <a href={project.githubpage} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#e8dcc8', color: '#5d4a3a', borderRadius: 6, padding: '6px 10px', fontSize: 10, letterSpacing: '0.06em', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                    <img src={project.githubIcon} alt="" style={{ width: 14, height: 14 }} />GitHub Page
                  </a>
                )}
                {project.trellopage && (
                  <a href={(project as any).trellopage} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#e8dcc8', color: '#5d4a3a', borderRadius: 6, padding: '6px 10px', fontSize: 10, letterSpacing: '0.06em', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                    <img src={project.githubIcon} alt="" style={{ width: 14, height: 14 }} />Trello
                  </a>
                )}
                {project.soutenance && (
                  <button onClick={() => setIsModalOpen(true)}
                    style={{ display: 'flex', alignItems: 'center', gap: 6, backgroundColor: '#e8dcc8', color: '#5d4a3a', borderRadius: 6, padding: '6px 10px', fontSize: 10, letterSpacing: '0.06em', border: 'none', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }}>
                    <img src={project.pdfIcon} alt="" style={{ width: 14, height: 14 }} />Soutenance PDF
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TABLET + DESKTOP LAYOUT ── */}
      {!isMobile && (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundImage: `url(${textureGray})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            height: 'calc(100vh - 50px)',
          }}
        >
          <div
            style={{
              width: '1200px',
              height: '850px',
              flexShrink: 0,
              transform: viewport === 'tablet' ? `scale(${contentScale})` : undefined,
              transformOrigin: 'top center',
              position: 'relative',
            }}
          >
            {/* DOSSIER 1 - Beige */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateZ: 5 }}
              animate={{ opacity: 1, x: 0, rotateZ: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-between absolute rounded-2xl shadow-2xl overflow-hidden"
              style={{ right: "31.5%", top: "16px", width: "50%", height: "98%", backgroundColor: "#c9b596", zIndex: 1, transform: "rotate(-2deg)", paddingTop: "20px", paddingRight: "10px", paddingLeft: "30%", paddingBottom: "20px", flexDirection: "row" }}
            >
              <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: `url(${textureBeige})`, backgroundSize: "cover", mixBlendMode: "multiply", opacity: 0.5 }} />
              <div className="absolute inset-0 pointer-events-none z-[2]" style={{ backgroundImage: `url(${textureBeige})`, backgroundSize: "cover", mixBlendMode: "overlay", opacity: 0.2 }} />
              <div className="flex flex-col justify-center absolute inset-0 pointer-events-none z-[3]" style={{ background: `radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%)`, mixBlendMode: "multiply" }} />
              <div className="absolute z-10" style={{ top: "20px", left: "60px", display: "flex", alignItems: "center" }}>
                <div className="flex items-center justify-center border-4 border-white/60" style={{ width: "120px", height: "120px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)" }}>
                  <span className="tracking-[0.2em] relative" style={{ width: "220px", height: "80px", color: "#c9b596", fontSize: "46px", fontFamily: "serif", textShadow: "4px 2px 4px rgba(0,0,0,0.5)" }}>@Projet</span>
                </div>
              </div>
              <div className="absolute top-20 left-16 right-16 text-white/80 z-10 overflow-hidden" style={{ boxShadow: "4px 2px 4px rgba(0,0,0,0.5)", marginTop: "10px", marginLeft: "8px", marginRight: "20px", padding: "5px", height: "280px", borderRadius: "5px" }}>
                {project.img && <img src={project.img} alt={project.title} className="w-full h-full object-cover" />}
                <p className="mb-10 tracking-[0.15em] text-white/90" style={{ fontSize: "18px" }}>@{project.title.toLowerCase().replace(/\s+/g, "")}</p>
                <div className="space-y-3 text-white/90" style={{ fontSize: "12px" }}>
                  <p className="tracking-[0.12em]">STATUS: {project.status}</p>
                  <p className="tracking-[0.12em] mt-6">TECHNOLOGIES:</p>
                  {project.technologies.map((tech, i) => (
                    <p key={i} className="tracking-[0.12em] pl-4">• {tech}</p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* DOSSIER 2 - Gris */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute rounded-2xl shadow-2xl overflow-hidden"
              style={{ right: "52.5%", top: "180px", width: "30%", height: "40%", backgroundColor: "#a8a8a8", zIndex: 3, transform: "rotate(1deg)", boxShadow: "10px 0px 20px rgba(0,0,0,0.5)" }}
            >
              <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: `url(${textureGray})`, backgroundSize: "cover", mixBlendMode: "multiply", opacity: 0.5 }} />
              <div className="absolute inset-0 pointer-events-none z-[2]" style={{ backgroundImage: `url(${textureGray})`, backgroundSize: "cover", mixBlendMode: "overlay", opacity: 0.3 }} />
              <div className="absolute inset-0 flex justify-center z-10">
                <div className="text-center text-white/80 px-16">
                  <p className="tracking-[0.15em] text-white/60" style={{ fontSize: "12px", paddingTop: "12px", paddingLeft: "20px" }}>DISCOVER WHERE SUCCESS RESIDES.</p>
                  <h2 className="tracking-[0.15em] leading-tight" style={{ color: "white", fontSize: "16px", paddingTop: "12px", paddingLeft: "20px" }}>{project.subtitle.toUpperCase()}</h2>
                  <p className="text-white/90 tracking-wide leading-relaxed" style={{ fontSize: "12px", paddingLeft: "20px" }}>{project.description}</p>
                </div>
              </div>
            </motion.div>

            {/* DOSSIER 3 - Marron foncé */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute rounded-2xl shadow-2xl overflow-hidden"
              style={{ right: "43.5%", top: "360px", width: "40%", height: "90%", backgroundColor: "#5d4a3a", zIndex: 4, transform: "rotate(-4deg)", boxShadow: "10px 0px 20px rgba(0,0,0,0.5)" }}
            >
              <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: `url(${textureBeige})`, backgroundSize: "cover", mixBlendMode: "multiply", opacity: 0.6 }} />
              <div className="absolute inset-0 pointer-events-none z-[2]" style={{ backgroundImage: `url(${textureBeige})`, backgroundSize: "cover", mixBlendMode: "overlay", opacity: 0.3 }} />
              <div className="absolute shadow-lg rounded-sm" style={{ left: "0%", top: "125px", width: "50px", height: "90px", backgroundColor: "#b8a882", zIndex: 10, boxShadow: "4px 0px 4px rgba(0,0,0,0.3)" }}>
                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)" }} />
              </div>
              <div className="absolute top-12 left-12 text-white/80 z-10">
                <p className="tracking-[0.2em]" style={{ fontSize: "26px", paddingTop: "16px", paddingLeft: "80px", color: "white" }}>{project.title}</p>
              </div>
              <div className="absolute bottom-16 left-12 right-12 z-10">
                <p className="tracking-[0.15em] mb-8" style={{ fontSize: "12px", paddingTop: "60px", paddingLeft: "80px", paddingRight: "12px", color: "white" }}>{project.contexte}</p>
                {hasLinks && (
                  <div className="flex gap-4 mt-10" style={{ paddingLeft: "80px", paddingTop: "16px", flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-around", gap: "12px" }}>
                    {project.githubcode && (
                      <a href={project.githubcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 shadow-lg" style={{ backgroundColor: "#e8dcc8", color: "#5d4a3a", transform: "rotate(-4deg)", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em", marginRight: "20px", padding: "6px", height: "22px" }}>
                        <img src={project.githubIcon} alt="github" style={{ width: "18px", height: "18px" }} />GitHub Code
                      </a>
                    )}
                    {project.githubpage && (
                      <a href={project.githubpage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 shadow-lg" style={{ backgroundColor: "#e8dcc8", color: "#5d4a3a", transform: "rotate(-4deg)", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em", marginRight: "25px", padding: "6px", height: "22px" }}>
                        <img src={project.githubIcon} alt="github" style={{ width: "18px", height: "18px" }} />GitHub Page
                      </a>
                    )}
                    {(project as any).trellopage && (
                      <a href={(project as any).trellopage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2 shadow-lg" style={{ backgroundColor: "#e8dcc8", color: "#5d4a3a", transform: "rotate(-4deg)", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em", marginRight: "25px", padding: "6px", height: "22px" }}>
                        <img src={project.githubIcon} alt="github" style={{ width: "18px", height: "18px" }} />Trello Page
                      </a>
                    )}
                    {project.soutenance && (
                      <a onClick={() => setIsModalOpen(true)} className="flex items-center gap-5 px-4 py-2 shadow-lg" style={{ backgroundColor: "#d4c4a8", transform: "rotate(-4deg)", color: "#5d4a3a", borderRadius: "4px", fontSize: "10px", letterSpacing: "0.08em", padding: "6px", height: "22px", cursor: "pointer", marginRight: "25px" }}>
                        <img src={project.pdfIcon} alt="pdf" style={{ width: "18px", height: "18px" }} />Soutenance PDF
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* DOSSIER 4 - Arrière-plan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute rounded-2xl shadow-xl overflow-hidden"
              style={{ right: "31%", top: "20px", width: "50%", height: "98%", backgroundColor: "#d4c4a8", zIndex: 0, boxShadow: "10px 0px 20px rgba(0,0,0,0.5)" }}
            >
              <div className="absolute inset-0 pointer-events-none z-[1]" style={{ backgroundImage: `url(${textureBeige})`, backgroundSize: "cover", mixBlendMode: "multiply", opacity: 0.4 }} />
              <div className="absolute inset-0 pointer-events-none z-[2]" style={{ backgroundImage: `url(${textureBeige})`, backgroundSize: "cover", mixBlendMode: "overlay", opacity: 0.2 }} />
            </motion.div>
          </div>
        </div>
      )}

      {/* Modal PDF */}
      {isModalOpen && (
        <div onClick={() => setIsModalOpen(false)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: isMobile ? "95%" : "80%", height: isMobile ? "80%" : "80%", background: "white", borderRadius: "8px", position: "relative" }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: "10px", right: "10px", fontSize: "18px", cursor: "pointer", background: "none", border: "none" }}>✕</button>
            <iframe src={project.soutenance} title="Soutenance PDF" style={{ width: "100%", height: "100%", border: "none" }} />
          </div>
        </div>
      )}
    </div>
  );
}
