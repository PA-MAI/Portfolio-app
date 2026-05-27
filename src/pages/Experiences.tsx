import React from "react";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import DataPerso from "../data/dataPerso";
import { NavBar } from "../components/NavBar";
import { useViewport } from "../hooks/useViewport";

export default function Experiences() {
  const { id } = useParams();
  const experience = DataPerso.experiencesData.find(p => p.id === parseInt(id || "0"));
  const experiencesList = DataPerso.experiencesData;
  const [selectedExperience, setSelectedExperience] = React.useState(experience || experiencesList[0]);
  const [beigeHovered, setBeigeHovered] = React.useState(false);

  const viewport = useViewport();
  const isMobile = viewport === 'mobile';

  const [contentScale, setContentScale] = React.useState(() => {
    const w = window.innerWidth;
    return w >= 1280 ? 1 : Math.min(w / 1200, 1);
  });
  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setContentScale(w >= 1280 ? 1 : Math.min(w / 1200, 1));
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const textureBeige = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const textureGray = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const textureLayers = (url: string) => (
    <>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${url})`, backgroundSize: 'cover', mixBlendMode: 'multiply', opacity: 0.4, borderRadius: 'inherit' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.1) 0%, transparent 25%), radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.07) 0%, transparent 30%)', mixBlendMode: 'multiply', borderRadius: 'inherit' }} />
    </>
  );

  const shortDate = (duration: string) => {
    const years = duration.match(/\d{4}/g) || [];
    if (years.length >= 2) return `${years[0]}-${years[years.length - 1].slice(2)}`;
    return years[0] || duration.slice(0, 8);
  };

  const shortCompany = (company: string) => {
    const word = company.split(' ')[0];
    return word.length > 12 ? word.slice(0, 11) + '.' : word;
  };

  return (
     <div
        style={{
           backgroundColor: "#e8dcc8",
           width: "100vw",
           height: isMobile ? "auto" : "100vh",
           minHeight: "100vh",
           overflowX: "hidden",
           overflowY: isMobile ? "auto" : "hidden",
           display: "flex",
           flexDirection: "column",
        }}
     >
        <NavBar title="EXPÉRIENCES" backPath="/" />

        {/* ── MOBILE LAYOUT ── */}
        {isMobile && (
           <div
              style={{
                 display: "flex",
                 flexDirection: "row",
                 flex: 1,
                 minHeight: "calc(100vh - 44px)",
                 backgroundImage: `url(${textureGray})`,
                 backgroundRepeat: "repeat",
                 backgroundSize: "cover",
              }}
           >
              {/* Left: content cards */}
              <div
                 style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "10px 8px 32px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    minWidth: 0,
                 }}
              >
                 {/* Logo entreprise */}
                 <div
                    style={{
                       backgroundColor: "#a8a8a8",
                       borderRadius: 14,
                       overflow: "hidden",
                       padding: "14px 12px",
                       display: "flex",
                       alignItems: "center",
                       justifyContent: "center",
                       position: "relative",
                       minHeight: 80,
                    }}
                 >
                    {textureLayers(textureGray)}
                    <div
                       style={{
                          position: "relative",
                          zIndex: 1,
                          textAlign: "center",
                       }}
                    >
                       <p
                          style={{
                             fontSize: 8,
                             color: "rgba(255,255,255,0.6)",
                             letterSpacing: "0.15em",
                             marginBottom: 8,
                          }}
                       >
                          ENTREPRISE
                       </p>
                       {Array.isArray(selectedExperience.certificat) ? (
                          selectedExperience.certificat.map((c, i) => (
                             <img
                                key={i}
                                src={c}
                                alt="logo"
                                style={{
                                   maxHeight: 60,
                                   maxWidth: 110,
                                   objectFit: "contain",
                                   borderRadius: 6,
                                }}
                             />
                          ))
                       ) : (
                          <img
                             src={selectedExperience.certificat}
                             alt="logo"
                             style={{
                                maxHeight: 60,
                                maxWidth: 130,
                                objectFit: "contain",
                                borderRadius: 6,
                             }}
                          />
                       )}
                    </div>
                 </div>

                 {/* Titre */}
                 <div
                    style={{
                       backgroundColor: "#5d4a3a",
                       borderRadius: 14,
                       overflow: "hidden",
                       padding: "12px 14px",
                       position: "relative",
                    }}
                 >
                    {textureLayers(textureBeige)}
                    <div style={{ position: "relative", zIndex: 1 }}>
                       <p
                          style={{
                             fontSize: 13,
                             fontWeight: 700,
                             color: "white",
                             letterSpacing: "0.06em",
                             marginBottom: 4,
                             lineHeight: 1.3,
                          }}
                       >
                          {selectedExperience.title}
                       </p>
                       <p
                          style={{
                             fontSize: 10,
                             color: "rgba(255,255,255,0.75)",
                          }}
                       >
                          {selectedExperience.company}
                       </p>
                       <p
                          style={{
                             fontSize: 9,
                             color: "rgba(255,255,255,0.55)",
                             marginTop: 2,
                          }}
                       >
                          {selectedExperience.duration} ·{" "}
                          {selectedExperience.status}
                       </p>
                    </div>
                 </div>

                 {/* Détail */}
                 <div
                    style={{
                       backgroundColor: "#c9b596",
                       borderRadius: 14,
                       overflow: "hidden",
                       padding: "14px",
                       position: "relative",
                    }}
                 >
                    {textureLayers(textureBeige)}
                    <div style={{ position: "relative", zIndex: 1 }}>
                       <p
                          style={{
                             fontSize: 11,
                             color: "rgba(255,255,255,0.9)",
                             lineHeight: 1.6,
                             marginBottom: 10,
                          }}
                       >
                          {selectedExperience.detail}
                       </p>
                       <p
                          style={{
                             fontSize: 9,
                             fontWeight: 700,
                             color: "white",
                             letterSpacing: "0.1em",
                             marginBottom: 6,
                          }}
                       >
                          TECHNOLOGIES :
                       </p>
                       {selectedExperience.technologies.map((tech, i) => (
                          <p
                             key={i}
                             style={{
                                fontSize: 9,
                                color: "rgba(255,255,255,0.8)",
                                lineHeight: 1.7,
                             }}
                          >
                             — {tech}
                          </p>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Right: selection buttons */}
              <div
                 style={{
                    width: 68,
                    flexShrink: 0,
                    overflowY: "auto",
                    padding: "10px 6px 32px 2px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    scrollbarWidth: "none",
                 }}
              >
                 {experiencesList.map((exp) => (
                    <button
                       key={exp.id}
                       onClick={() => setSelectedExperience(exp)}
                       style={{
                          width: "100%",
                          minHeight: 60,
                          borderRadius: 10,
                          border: "none",
                          cursor: "pointer",
                          backgroundColor:
                             selectedExperience.id === exp.id
                                ? "#5d4a3a"
                                : "#d4c4a8",
                          color:
                             selectedExperience.id === exp.id
                                ? "white"
                                : "#5d4a3a",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px 4px",
                          boxShadow:
                             selectedExperience.id === exp.id
                                ? "0 2px 8px rgba(0,0,0,0.3)"
                                : "0 1px 4px rgba(0,0,0,0.12)",
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          backgroundBlendMode:
                             selectedExperience.id === exp.id
                                ? "multiply"
                                : "normal",
                          gap: 3,
                       }}
                    >
                       <span
                          style={{
                             fontSize: 8,
                             letterSpacing: "0.04em",
                             opacity: 0.75,
                             textAlign: "center",
                             fontWeight: 600,
                          }}
                       >
                          {shortDate(exp.duration)}
                       </span>
                       <span
                          style={{
                             fontSize: 8.5,
                             letterSpacing: "0.02em",
                             textAlign: "center",
                             lineHeight: 1.25,
                          }}
                       >
                          {shortCompany(exp.company)}
                       </span>
                    </button>
                 ))}
              </div>
           </div>
        )}

        {/* ── TABLET + DESKTOP LAYOUT ── */}
        {!isMobile && (
           <div
              style={{
                 flex: 1,
                 display: "flex",
                 alignItems: "flex-start",
                 justifyContent: "center",
                 overflow: "hidden",
                 backgroundImage: `url(${textureGray})`,
                 backgroundRepeat: "repeat",
                 backgroundSize: "cover",
                 height: "calc(100vh - 50px)",
              }}
           >
              <div
                 style={{
                    width: "1200px",
                    height: "850px",
                    flexShrink: 0,
                    transform:
                       viewport === "tablet"
                          ? `scale(${contentScale})`
                          : `scale(${contentScale})`,
                    transformOrigin: "top center",
                    position: "relative",
                 }}
              >
                 {/* DOSSIER 1 - Beige (détail) — passe au premier plan au hover */}
                 <motion.div
                    initial={{ opacity: 0, x: 100, rotateZ: 5 }}
                    animate={{ opacity: 1, x: 0, rotateZ: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onHoverStart={() => setBeigeHovered(true)}
                    onHoverEnd={() => setBeigeHovered(false)}
                    className="flex absolute rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                       right: "25.5%",
                       top: "16px",
                       width: "55%",
                       height: "98%",
                       backgroundColor: "#c9b596",
                       zIndex: beigeHovered ? 5 : 1,
                       transform: "rotate(-2deg)",
                       boxShadow: beigeHovered
                          ? "0 0 40px rgba(0,0,0,0.3)"
                          : "0 0 20px rgba(0,0,0,0.1)",
                       transition: "box-shadow 0.3s",
                       cursor: "default",
                    }}
                 >
                    <div
                       className="absolute inset-0 pointer-events-none rounded-2xl z-[1]"
                       style={{
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          mixBlendMode: "multiply",
                          opacity: 0.5,
                       }}
                    />
                    <div
                       className="absolute inset-0 pointer-events-none rounded-2xl z-[2]"
                       style={{
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          mixBlendMode: "overlay",
                          opacity: 0.2,
                       }}
                    />
                    <div
                       className="flex flex-col justify-center absolute inset-0 rounded-2xl pointer-events-none z-[3]"
                       style={{
                          background: `radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%), radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.08) 0%, transparent 130%)`,
                          mixBlendMode: "multiply",
                       }}
                    />

                    {/* Circle */}
                    <div
                       className="absolute z-10"
                       style={{ top: "20px", left: "60px" }}
                    >
                       <div
                          className="flex items-center justify-center border-4 border-white/60"
                          style={{
                             width: "120px",
                             height: "120px",
                             borderRadius: "50%",
                             backgroundColor: "rgba(255,255,255,0.08)",
                             boxShadow: "inset 0 0 10px rgba(0,0,0,0.2)",
                          }}
                       >
                          <span
                             style={{
                                color: "#c9b596",
                                fontSize: "22px",
                                fontFamily: "serif",
                                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                textAlign: "center",
                                padding: "0 8px",
                             }}
                          >
                             @EXP
                          </span>
                       </div>
                    </div>

                    {/* Details — positioned right of the gray folder overlap (~342px from left) */}
                    <div
                       className="absolute"
                       style={{
                          top: "20px",
                          left: "350px",
                          right: "20px",
                          bottom: "20px",
                          overflowY: "auto",
                          zIndex: 10,
                          color: "rgba(255,255,255,0.9)",
                       }}
                    >
                       <p
                          style={{
                             fontSize: "13px",
                             fontWeight: "600",
                             letterSpacing: "0.15em",
                             marginBottom: 16,
                             color: "white",
                          }}
                       >
                          @{selectedExperience.title.toUpperCase()}
                       </p>
                       <div
                          style={{
                             fontSize: "12px",
                             display: "flex",
                             flexDirection: "column",
                             gap: 8,
                          }}
                       >
                          <p
                             style={{ letterSpacing: "0.1em", lineHeight: 1.6 }}
                          >
                             {selectedExperience.detail}
                          </p>
                          <p style={{ letterSpacing: "0.1em", marginTop: 4 }}>
                             STATUS : {selectedExperience.status}
                          </p>
                          <p style={{ letterSpacing: "0.1em" }}>
                             {selectedExperience.company}
                          </p>
                          <p style={{ letterSpacing: "0.1em" }}>
                             {selectedExperience.duration}
                          </p>
                          <p
                             style={{
                                letterSpacing: "0.12em",
                                fontWeight: "600",
                                marginTop: 8,
                             }}
                          >
                             TECHNOLOGIES :
                          </p>
                          {selectedExperience.technologies.map((tech, i) => (
                             <p
                                key={i}
                                style={{
                                   fontSize: "10px",
                                   letterSpacing: "0.1em",
                                }}
                             >
                                — {tech}
                             </p>
                          ))}
                       </div>
                    </div>
                 </motion.div>

                 {/* Onglets — collés au bord droit du dossier beige */}
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex absolute"
                    style={{
                       opacity: 0.8,
                       flexDirection: "column",
                       gap: "12px",
                       padding: "8px",
                       right: "0.5%",
                       top: "50px",
                       maxHeight: "760px",
                       overflowY: "auto",
                       scrollbarWidth: "none",
                       zIndex: -6,
                    }}
                 >
                    {experiencesList.map((exp) => (
                       <button
                          key={exp.id}
                          onClick={() => setSelectedExperience(exp)}
                          className={`w-14 h-40 flex items-center text-[11px] tracking-[0.2em] rounded-r-xl shadow-xl ${selectedExperience.id === exp.id ? "bg-[#5d4a3a] text-white" : "bg-[#e6d8bf] text-[#5d4a3a]"}`}
                          style={{
                             justifyContent: "end",
                             backgroundImage: `url(${textureBeige})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                             textOrientation: "mixed",
                             borderRadius: "0px 20px 20px 0px",
                             padding: "18px",
                             cursor: "pointer",
                          }}
                       >
                          {exp.title}
                       </button>
                    ))}
                 </motion.div>

                 {/* DOSSIER 2 - Gris (logo) */}
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                       right: "52%",
                       top: "180px",
                       width: "30%",
                       height: "40%",
                       backgroundColor: "#a8a8a8",
                       zIndex: 3,
                       transform: "rotate(1deg)",
                       boxShadow: "10px 0px 20px rgba(0,0,0,0.5)",
                    }}
                 >
                    <div
                       className="absolute inset-0 pointer-events-none z-[1]"
                       style={{
                          backgroundImage: `url(${textureGray})`,
                          backgroundSize: "cover",
                          mixBlendMode: "multiply",
                          opacity: 0.5,
                       }}
                    />
                    <div
                       className="absolute inset-0 pointer-events-none z-[2]"
                       style={{
                          backgroundImage: `url(${textureGray})`,
                          backgroundSize: "cover",
                          mixBlendMode: "overlay",
                          opacity: 0.3,
                       }}
                    />
                    <div className="absolute inset-0 flex justify-center z-10">
                       <div
                          className="text-center text-white/80 px-8 gap-4 flex justify-center items-center"
                          style={{
                             justifyContent: "start",
                             flexDirection: "column",
                             gap: "10px",
                          }}
                       >
                          <p
                             className="tracking-[0.15em] text-white/60"
                             style={{ fontSize: "12px", paddingTop: "20px" }}
                          >
                             ENTREPRISE
                          </p>
                          <img
                             src={
                                Array.isArray(selectedExperience.certificat)
                                   ? selectedExperience.certificat[0]
                                   : selectedExperience.certificat
                             }
                             alt="Logo société"
                             style={{
                                borderRadius: "12px",
                                maxWidth: "200px",
                                maxHeight: "140px",
                                objectFit: "contain",
                             }}
                          />
                       </div>
                    </div>
                 </motion.div>

                 {/* DOSSIER 3 - Marron foncé */}
                 <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                       right: "43.5%",
                       top: "52%",
                       width: "40%",
                       height: "90%",
                       backgroundColor: "#5d4a3a",
                       zIndex: 4,
                       transform: "rotate(-4deg)",
                       boxShadow: "10px 0px 20px rgba(0,0,0,0.5)",
                    }}
                 >
                    <div
                       className="absolute inset-0 pointer-events-none z-[1]"
                       style={{
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          mixBlendMode: "multiply",
                          opacity: 0.6,
                       }}
                    />
                    <div
                       className="absolute inset-0 pointer-events-none z-[2]"
                       style={{
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          mixBlendMode: "overlay",
                          opacity: 0.3,
                       }}
                    />
                    <div
                       className="absolute shadow-lg rounded-sm"
                       style={{
                          left: "0%",
                          top: "115px",
                          width: "50px",
                          height: "90px",
                          backgroundColor: "#b8a882",
                          zIndex: 10,
                       }}
                    >
                       <div
                          className="absolute inset-0"
                          style={{
                             background:
                                "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)",
                          }}
                       />
                    </div>
                    <div
                       className="absolute text-white/80 z-10"
                       style={{ top: "16px", left: "48px" }}
                    >
                       <p
                          style={{
                             fontSize: "24px",
                             paddingTop: "20px",
                             paddingLeft: "80px",
                             color: "white",
                             letterSpacing: "0.2em",
                          }}
                       >
                          {selectedExperience.title}
                       </p>
                       <p
                          style={{
                             fontSize: "16px",
                             paddingLeft: "80px",
                             color: "rgba(255,255,255,0.75)",
                             letterSpacing: "0.15em",
                          }}
                       >
                          {selectedExperience.company}
                       </p>
                    </div>
                 </motion.div>

                 {/* DOSSIER 4 - Arrière-plan */}
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute rounded-2xl shadow-xl overflow-hidden"
                    style={{
                       right: "25%",
                       top: "20px",
                       width: "55%",
                       height: "98%",
                       backgroundColor: "#d4c4a8",
                       zIndex: 0,
                       boxShadow: "10px 0px 20px rgba(0,0,0,0.5)",
                    }}
                 >
                    <div
                       className="absolute inset-0 pointer-events-none z-[1]"
                       style={{
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          mixBlendMode: "multiply",
                          opacity: 0.4,
                       }}
                    />
                    <div
                       className="absolute inset-0 pointer-events-none z-[2]"
                       style={{
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          mixBlendMode: "overlay",
                          opacity: 0.2,
                       }}
                    />
                 </motion.div>
              </div>
           </div>
        )}
     </div>
  );
}
