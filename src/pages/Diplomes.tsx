import React from "react";
import { motion } from "motion/react";
import { useParams } from "react-router-dom";
import DataPerso from "../data/dataPerso";
import { CarrouselPhoto } from "../components/carrouselPhoto";
import { NavBar } from "../components/NavBar";
import { useViewport } from "../hooks/useViewport";

export default function Diplomes() {
  const { id } = useParams();
  const diplomes = DataPerso.diplomesData.find(p => p.id === parseInt(id || "0"));
  const diplomesList = DataPerso.diplomesData;
  const [selectedDiplome, setSelectedDiplome] = React.useState(diplomes || diplomesList[0]);

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
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.1) 0%, transparent 25%)', mixBlendMode: 'multiply', borderRadius: 'inherit' }} />
    </>
  );

  //const shortSubtitle = (subtitle: string) => subtitle.split(' ').slice(0, 3).join(' ');

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
        <NavBar title="FORMATIONS" backPath="/" />

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
                             letterSpacing: "0.05em",
                             marginBottom: 4,
                             lineHeight: 1.3,
                          }}
                       >
                          {selectedDiplome.title}
                       </p>
                       <p
                          style={{
                             fontSize: 9,
                             color: "rgba(255,255,255,0.6)",
                          }}
                       >
                          {selectedDiplome.year} · {selectedDiplome.status}
                       </p>
                    </div>
                 </div>

                 {/* Facsimilé du diplôme */}
                 <div
                    style={{
                       backgroundColor: "#a8a8a8",
                       borderRadius: 14,
                       overflow: "hidden",
                       padding: "14px",
                       position: "relative",
                       display: "flex",
                       flexDirection: "column",
                       alignItems: "center",
                    }}
                 >
                    {textureLayers(textureGray)}
                    <p
                       style={{
                          position: "relative",
                          zIndex: 1,
                          fontSize: 8,
                          color: "rgba(255,255,255,0.6)",
                          letterSpacing: "0.15em",
                          marginBottom: 10,
                       }}
                    >
                       FACSIMILÉ DU DIPLÔME
                    </p>
                    <div
                       style={{
                          position: "relative",
                          zIndex: 1,
                          display: "flex",
                          justifyContent: "center",
                       }}
                    >
                       <CarrouselPhoto
                          photos={selectedDiplome.photo}
                          rotation={0}
                          delay={0.2}
                          zIndex={10}
                          width={220}
                          height={160}
                       />
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
                             fontSize: 9,
                             fontWeight: 700,
                             color: "rgba(255,255,255,0.7)",
                             letterSpacing: "0.1em",
                             marginBottom: 6,
                          }}
                       >
                          INSTITUTION
                       </p>
                       {selectedDiplome.institution.map((inst, i) => (
                          <p
                             key={i}
                             style={{
                                fontSize: 10,
                                color: "white",
                                lineHeight: 1.6,
                             }}
                          >
                             • {inst}
                          </p>
                       ))}
                       <p
                          style={{
                             fontSize: 9,
                             fontWeight: 700,
                             color: "rgba(255,255,255,0.7)",
                             letterSpacing: "0.1em",
                             marginTop: 10,
                             marginBottom: 6,
                          }}
                       >
                          COMPÉTENCES
                       </p>
                       {selectedDiplome.detail.map((tech, i) => (
                          <p
                             key={i}
                             style={{
                                fontSize: 9,
                                color: "rgba(255,255,255,0.85)",
                                lineHeight: 1.7,
                             }}
                          >
                             • {tech}
                          </p>
                       ))}
                       {selectedDiplome.options?.length > 0 && (
                          <>
                             <p
                                style={{
                                   fontSize: 9,
                                   fontWeight: 700,
                                   color: "rgba(255,255,255,0.7)",
                                   letterSpacing: "0.1em",
                                   marginTop: 10,
                                   marginBottom: 4,
                                }}
                             >
                                OPTION
                             </p>
                             {selectedDiplome.options.map((opt, i) => (
                                <p
                                   key={i}
                                   style={{
                                      fontSize: 9,
                                      color: "rgba(255,255,255,0.85)",
                                   }}
                                >
                                   {opt}
                                </p>
                             ))}
                          </>
                       )}
                    </div>
                 </div>
              </div>

              {/* Right: selection buttons */}
              <div
                 style={{
                    width: 86,
                    flexShrink: 0,
                    overflowY: "auto",
                    padding: "10px 6px 32px 2px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    scrollbarWidth: "none",
                 }}
              >
                 {diplomesList.map((dip) => (
                    <button
                       key={dip.id}
                       onClick={() => setSelectedDiplome(dip)}
                       style={{
                          width: "100%",
                          minHeight: 62,
                          borderRadius: 10,
                          border: "none",
                          cursor: "pointer",
                          backgroundColor:
                             selectedDiplome.id === dip.id
                                ? "#5d4a3a"
                                : "#d4c4a8",
                          color:
                             selectedDiplome.id === dip.id
                                ? "white"
                                : "#5d4a3a",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "6px 5px",
                          boxShadow:
                             selectedDiplome.id === dip.id
                                ? "0 2px 8px rgba(0,0,0,0.3)"
                                : "0 1px 4px rgba(0,0,0,0.12)",
                          backgroundImage: `url(${textureBeige})`,
                          backgroundSize: "cover",
                          backgroundBlendMode:
                             selectedDiplome.id === dip.id
                                ? "multiply"
                                : "normal",
                          gap: 3,
                       }}
                    >
                       <span
                          style={{
                             fontSize: 8,
                             fontWeight: 700,
                             letterSpacing: "0.04em",
                             opacity: 0.85,
                             textAlign: "center",
                          }}
                       >
                          {dip.year}
                       </span>
                       <span
                          style={{
                             fontSize: 7.5,
                             letterSpacing: "0.02em",
                             textAlign: "center",
                             lineHeight: 1.3,
                          }}
                       >
                          {/* shortSubtitle(dip.subtitle)} */}
                          {dip.subtitle}
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
                 {/* DOSSIER 1 - Beige */}
                 <motion.div
                    initial={{ opacity: 0, x: 100, rotateZ: 5 }}
                    animate={{ opacity: 1, x: 0, rotateZ: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex absolute rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                       right: "25.5%",
                       top: "16px",
                       width: "55%",
                       height: "98%",
                       backgroundColor: "#c9b596",
                       zIndex: 1,
                       transform: "rotate(-2deg)",
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
                          background: `radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%)`,
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
                             @FORM
                          </span>
                       </div>
                    </div>

                    {/* Details — positioned right of the gray folder overlap (~342px from left) */}
                    <div
                       className="absolute z-10"
                       style={{
                          top: "20px",
                          left: "350px",
                          right: "20px",
                          bottom: "20px",
                          overflowY: "auto",
                          color: "rgba(255,255,255,0.9)",
                       }}
                    >
                       <p
                          style={{
                             fontSize: "16px",
                             fontWeight: "700",
                             letterSpacing: "0.15em",
                             marginBottom: 10,
                             color: "white",
                          }}
                       >
                          DÉTAIL DU DIPLÔME
                       </p>
                       <p
                          style={{
                             fontSize: "13px",
                             fontWeight: "600",
                             letterSpacing: "0.12em",
                             marginTop: 8,
                             color: "white",
                          }}
                       >
                          INSTITUTION :
                       </p>
                       {selectedDiplome.institution.map((inst, i) => (
                          <p
                             key={i}
                             style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.85)",
                                paddingLeft: 12,
                             }}
                          >
                             • {inst}
                          </p>
                       ))}
                       <p
                          style={{
                             fontSize: "12px",
                             color: "rgba(255,255,255,0.85)",
                             marginTop: 10,
                          }}
                       >
                          STATUS : {selectedDiplome.status},{" "}
                          {selectedDiplome.year}
                       </p>
                       <p
                          style={{
                             fontSize: "12px",
                             fontWeight: "600",
                             letterSpacing: "0.12em",
                             marginTop: 10,
                             color: "white",
                          }}
                       >
                          COMPÉTENCES :
                       </p>
                       {selectedDiplome.detail.map((tech, i) => (
                          <p
                             key={i}
                             style={{
                                fontSize: "11px",
                                color: "rgba(255,255,255,0.85)",
                                paddingLeft: 12,
                             }}
                          >
                             • {tech}
                          </p>
                       ))}
                    </div>
                 </motion.div>

                 {/* Onglets */}
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex absolute rounded-r-xl"
                    style={{
                       opacity: 0.7,
                       flexDirection: "column",
                       gap: "20px",
                       padding: "8px",
                       right: "1%",
                       top: "50px",
                       zIndex: -6,
                    }}
                 >
                    {diplomesList.map((dip) => (
                       <button
                          key={dip.id}
                          onClick={() => setSelectedDiplome(dip)}
                          className={`w-14 h-40 flex items-center text-[11px] tracking-[0.2em] shadow-xl ${selectedDiplome.id === dip.id ? "bg-[#5d4a3a] text-white" : "bg-[#e6d8bf] text-[#5d4a3a]"}`}
                          style={{
                             justifyContent: "end",
                             backgroundImage: `url(${textureBeige})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                             textOrientation: "mixed",
                             borderRadius: "0px 20px 20px 0px",
                             padding: "12px",
                             marginLeft: "10px",
                             boxShadow: "0 0 20px rgba(0,0,0,0.1)",
                             zIndex: 10,
                             cursor: "pointer",
                          }}
                       >
                          {dip.subtitle}
                       </button>
                    ))}
                 </motion.div>

                 {/* DOSSIER 2 - Gris (photo) */}
                 <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                       right: "52%",
                       top: "180px",
                       width: "30%",
                       height: "38%",
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
                          style={{
                             display: "flex",
                             alignItems: "center",
                             justifyContent: "flex-start",
                             flexDirection: "column",
                             width: "100%",
                             padding: "0 12px",
                          }}
                       >
                          <p
                             style={{
                                fontSize: "12px",
                                color: "rgba(255,255,255,0.6)",
                                letterSpacing: "0.15em",
                                padding: "14px 0 8px",
                             }}
                          >
                             FACSIMILÉ DU DIPLÔME
                          </p>
                          <div
                             style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                overflow: "hidden",
                             }}
                          >
                             <CarrouselPhoto
                                photos={selectedDiplome.photo}
                                rotation={0}
                                delay={0.2}
                                zIndex={230}
                                width={260}
                                height={190}
                             />
                          </div>
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
                       top: "440px",
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
                          top: "125px",
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
                       className="absolute z-10"
                       style={{ top: "36px", left: "80px", right: "12px" }}
                    >
                       <p
                          className="tracking-[0.2em]"
                          style={{
                             fontSize: "22px",
                             color: "white",
                             lineHeight: 1.3,
                          }}
                       >
                          {selectedDiplome.title}
                       </p>
                       <p
                          style={{
                             fontSize: "16px",
                             color: "rgba(255,255,255,0.7)",
                             marginTop: 8,
                          }}
                       >
                          {selectedDiplome.options?.[0]}
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
                       right: "24.5%",
                       top: "20px",
                       width: "51%",
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
