import React from "react";
import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MoveRight } from "lucide-react";
import DataPerso from "../data/dataPerso";
import { CarrouselPhoto } from "../components/carrouselPhoto";

export default function Diplomes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const diplomes = DataPerso.diplomesData.find(p => p.id === parseInt(id || "0"));

  const textureBeige = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const textureGray = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  
  const diplomesList = DataPerso.diplomesData;
  const [selectedDiplome, setSelectedDiplome] = React.useState(diplomes);
  return (
    <div className="w-screen h-screen overflow-hidden " style={{ backgroundColor: '#e8dcc8' }}>
       {/* Bandeau de navigation */}
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative flex w-full shadow-2xl overflow-hidden"
                  style={{ 
                    height: "80px",
                  backgroundColor: "#5d4a3a",
                }}
            >
              {/* Texture multiply */}
              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  backgroundImage: `url(${textureBeige})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mixBlendMode: "multiply",
                  opacity: 0.6,
                }}
              />
      
              {/* Texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[2]"
                style={{
                  backgroundImage: `url(${textureBeige})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  mixBlendMode: "overlay",
                  opacity: 0.3,
                }}
              />
      
              {/* Contenu – mêmes règles flex qu’avant */}
              <div
                className="relative z-[10] flex h-full w-full px-12"
                      style={{
                  width: "100%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => navigate("/")}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
                >
                  <ArrowLeft size={28} />
                  <span
                    className="tracking-[0.15em]"
                    style={{ fontSize: "16px", cursor: "pointer" }}
                  >
                    RETOUR ACCUEIL
                  </span>
                </button>
      
                <h1
                  className="text-white/90 tracking-[0.2em]"
                  style={{ fontSize: "20px" }}
                >
                  PAGE DIPLOMES
                </h1>
              </div>
        </motion.div>

      {/* Contenu - Dossiers empilés */}
            <div className="flex-1 flex items-center justify-center p-12 overflow-hidden" style={{ backgroundImage: `url(${textureGray})`, backgroundRepeat: "repeat", backgroundSize: "cover" }}>
              <div className="relative" style={{ width: "1200px", height: "850px" }}>
                {/* DOSSIER 1 - Beige à droite (au-dessus) */}
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
                    transform: 'rotate(-2deg)',
                    boxShadow: ' 0 0 20px rgba(0,0,0,0.1)',
                    paddingTop: "20px",
                    paddingRight: "10px",
                    paddingLeft: "30%",
                    paddingBottom: "20px",
                  }}
          >
            {/* Texture réaliste overlay */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-2xl shadow-2xl  z-[1]"
              style={{
              backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.5
              }}
            />
            <div 
              className="absolute inset-0 pointer-events-none rounded-2xl shadow-2xl  z-[2]"
              style={{
                backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.2
              }}
            />
            <div 
              className="flex flex-col justify-center align-end absolute inset-0 rounded-2xl  pointer-events-none z-[3]"
              style={{
                background: `
                  radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%),
                  radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.08) 0%, transparent 130%),
                  radial-gradient(ellipse at 45% 60%, rgba(255,255,255,0.06) 0%, transparent 120%)
                `,
                mixBlendMode: 'multiply'
              }}
            />

            {/* Logo circulaire en haut */}
            <div className="absolute z-10" style={{ top: "20px", left: "60px", justifyContent: "space-between",
              flexDirection: "row", alignItems: "center", display: "flex" }}>
              <div 
                className="flex items-center justify-center border-4 border-white/60 inset-shadow-sm"
                style={{
                  right: "116px",
                  top: "76px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  boxShadow: 'inset 0 0 10px rgba(0,0.2,0.2,0.2)',
                }}
              >
                <span 
                  className=" text-white/90 tracking-[0.2em]" 
                  style={{ 
                    color: "#c9b596",
                    fontSize: "28px",
                    fontFamily: 'serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  @FORMATION
                </span>
              </div>
            </div>

            {/* Informations */}
            <div className="absolute top-20 left-16 right-16 text-white/80 z-10 " style={{ marginTop: "10px", paddingLeft: "20px", height: "280px" }}>
              <p className="mb-4 tracking-[0.15em] text-white/90" style={{ fontSize: "18px", fontWeight:"700" }}>
                DÉTAIL DU DIPLOME
                <br></br>
              </p>
              <span className="mb-10 tracking-[0.15em] text-white/90" style={{ fontSize: "14px",fontWeight:"600" }}>
                <p className="tracking-[0.12em] text-white/90 mt-6">INSTITUTION:</p>
                {selectedDiplome.institution.map((tech, i) => (
                  <p key={i} className="tracking-[0.12em] pl-4">• {tech}</p>
                ))}
              </span>
              <br></br>
              <div className="space-y-3 text-white/90" style={{ fontSize: "12px"}}>
                <p className="tracking-[0.12em] text-white/90 ">STATUS: {selectedDiplome.status}, {selectedDiplome.year}</p>
                <p className="tracking-[0.12em] text-white/90 mt-6">TECHNOLOGIES:</p>
                {selectedDiplome.detail.map((tech, i) => (
                  <p key={i} className="tracking-[0.12em] pl-4">• {tech}</p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Onglets verticaux */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateZ: 1 }}
            animate={{ opacity: 1, y: 0, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}

            className="flex flex-row absolute top-14 -left-140 items-stretch gap-30 rounded-r-xl"
            style={{
                opacity: 0.7,
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "0px 20px 20px 0px",
                backgroundColor: "transparent",
                padding: "8px",
                right: "20%",
              top: "50px",
              zIndex: 0,
            }}
          >
            {diplomesList.map((dip) => (
              <button
                key={dip.id}
                onClick={() => setSelectedDiplome(dip)}
                className={`w-14 h-40 flex items-center justify-center
                  text-[11px] tracking-[0.2em]
                  rounded-r-xl shadow-x2 hover:shadow-2xl 
                  ${
                    selectedDiplome.id === dip.id
                      ? "bg-[#5d4a3a] text-white"
                      : "bg-[#e6d8bf] text-[#5d4a3a]"
                  }
                `}
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: `url(${textureBeige})`,
                  backgroundColor: "#c9b596",
                  backgroundPosition: 'center',
                  //mixBlendMode: 'multiply',
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  borderRadius: "0px 20px 20px 0px",
                  padding: "12px",
                  marginLeft: "10px",
                  marginRight: "0px",
                  boxShadow: ' 0 0 20px rgba(0,0,0,0.1)',
                  zIndex: 10,
                  cursor: "pointer",

                }}
              >
                {dip.subtitle}
              </button>
            ))}
          </motion.div>
          
          
          {/* DOSSIER 2 - Gris au milieu */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateZ: 1 }}
            animate={{ opacity: 1, y: 0, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute rounded-2xl shadow-2xl overflow-hidden"
            style={{
              right: "52%",
              top: "180px",
              width: "30%",
              height: "38%",
              backgroundColor: "#a8a8a8",
              zIndex: 3,
              transform: 'rotate(1deg)',
              boxShadow: '20px rgba(0,0,0,0.5)',
            }}
            >
            {/* Texture grise */}
            <div 
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage: `url(${textureGray})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.5
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none z-[2]"
              style={{
                backgroundImage: `url(${textureGray})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.3
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none z-[3]"
              style={{
                background: `
                  radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%),
                  radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.08) 0%, transparent 30%)
                `,
                mixBlendMode: 'multiply'
              }}
            />

            <div className="absolute inset-0 flex padding-20 justify-center z-10">
              <div className="flex text-center text-white/80 px-16"
                style={{
                 // paddingTop: "20px",
                  alignItems: "center",
                  justifyContent: "start",
                  flexDirection: "column"
                }}>
                <p className="mb-6 tracking-[0.15em] text-white/60" style={{ fontSize: "13px", padding: "20px", paddingLeft: "20px", fontWeight:"400", alignItems:"center" }}>
                  FACSIMILÉ DU DIPLOME
                </p>
                <CarrouselPhoto photos={selectedDiplome.photo} rotation={0} delay={0.2} zIndex={230} />
              </div>
            </div>
          </motion.div>

          {/* DOSSIER 3 - Marron foncé en bas à gauche */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateZ: 1 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute rounded-2xl shadow-2xl overflow-hidden"
            style={{
              right: "42.5%",
              top: "470px",
              width: "40%",
              height: "90%",
              backgroundColor: "#5d4a3a",
              zIndex: 4,
              transform: 'rotate(-4deg)',
              boxShadow: '10px 0px 20px rgba(0,0,0,0.5)',
            }}
          >
            {/* Texture marron */}
            <div 
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.6
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none z-[2]"
              style={{
                backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.3
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none z-[3]"
              style={{
                background: `
                  radial-gradient(ellipse at 15% 25%, rgba(0,0,0,0.12) 0%, transparent 25%),
                  radial-gradient(ellipse at 85% 70%, rgba(0,0,0,0.08) 0%, transparent 30%)
                `,
                mixBlendMode: 'multiply'
              }}
            />

            {/* Clip/trombone doré en haut à gauche */}
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
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
                }}
              />
            </div>

            {/* Nom en haut */}
            <div className="absolute top-12 left-12 text-white/80 z-10">
              <p className="tracking-[0.2em]" style={{ fontSize: "26px", paddingTop: "20px", paddingLeft: "80px", color:"white", marginBottom:"10px" }}>
                @&nbsp;{selectedDiplome.title}, {selectedDiplome.year}
              </p>
            </div>

            {/* Description en bas */}
            <div className="absolute bottom-36 left-12 right-12 z-10">
              <p className="text-blue/30 tracking-[0.15em] mb-8" style={{ fontSize: "18px" , paddingTop: "40%", paddingLeft: "80px" }}>
                {selectedDiplome.options}
              </p>
              
             
            </div>
          </motion.div>

          {/* DOSSIER 4 - Arrière-plan beige clair en bas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute rounded-2xl shadow-xl overflow-hidden z-20"
            style={{
              right: "24.5%",
              top: "20px",
              width: "51%",
              height: "98%",
              backgroundColor: "#d4c4a8",
              zIndex: 0,
              transform: 'rotate(0deg)',
              boxShadow: '10px 0px 20px rgba(0,0,0,0.5)',
            }}
          >
            {/* Texture */}
            <div 
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.4
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none z-[2]"
              style={{
                backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.2
              }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}