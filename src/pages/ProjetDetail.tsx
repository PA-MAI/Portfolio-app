import { motion } from "motion/react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import DataPerso from "../data/dataPerso";

export default function ProjetDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const project = DataPerso.projectsData.find(p => p.id === parseInt(id || "0"));

  if (!project) {
    return (
      <div className="w-screen h-screen flex items-center justify-center" style={{ backgroundColor: '#e8dcc8' }}>
        <p className="text-[#5d4a3a]">Projet non trouvé</p>
      </div>
    );
  }

  // Textures
  const textureBeige = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  const textureGray = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

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
        onClick={() => navigate("/projets")}
        className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300"
      >
        <ArrowLeft size={28} />
        <span className="tracking-[0.15em] z-11" style={{ fontSize: "16px" }}>
          RETOUR AUX PROJETS
        </span>
      </button>

        <div className="ml-auto">
        <h1 className="text-white/90 tracking-[0.2em]" style={{ fontSize: "20px" }}>
          {project.title}
        </h1>
      </div>
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
            className="flex flex-col justify-between absolute rounded-2xl shadow-2xl overflow-hidden"
            style={{
              right: "31.5%",
              top: "16px",
              width: "50%",
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
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                backgroundImage: `url(${textureBeige})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.5
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
            
            <div 
              className="flex flex-col justify-center align-end absolute inset-0 pointer-events-none z-[3]"
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
            <div className="absolute z-10">
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
                    fontSize: "42px",
                    fontFamily: 'serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  ID@
                </span>
              </div>
            </div>

            {/* Informations */}
            <div className="absolute top-20 left-16 right-16 text-white/80 z-10 " style={{ marginTop: "148px", marginLeft: "20px", height: "280px" }}>
              <p className="mb-4 tracking-[0.15em] text-white/90" style={{ fontSize: "18px" }}>
                HELLO
              </p>
              <p className="mb-10 tracking-[0.15em] text-white/90" style={{ fontSize: "13px" }}>
                @{project.title.toLowerCase().replace(/\s+/g, '')}
              </p>
              
              <div className="space-y-3 text-white/90" style={{ fontSize: "12px" }}>
                <p className="tracking-[0.12em] text-white/90 ">STATUS: {project.status}</p>
                <p className="tracking-[0.12em] text-white/90 mt-6">TECHNOLOGIES:</p>
                {project.technologies.map((tech, i) => (
                  <p key={i} className="tracking-[0.12em] pl-4">• {tech}</p>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t text-white/90 border-white/20">
                <p className="tracking-[0.12em] opacity-70 text-white/90 " style={{ fontSize: "11px" }}>
                  {project.subtitle}
                </p>
              </div>
            </div>
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
              height: "40%",
              backgroundColor: "#a8a8a8",
              zIndex: 3,
              transform: 'rotate(1deg)',
              boxShadow: '10px 0px 20px rgba(0,0,0,0.5)',
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
              <div className="text-center text-white/80 px-16">
                <p className="mb-6 tracking-[0.15em] text-white/60" style={{ fontSize: "13px", paddingTop: "20px", paddingLeft: "20px" }}>
                  DISCOVER WHERE SUCCESS RESIDES.
                </p>
                <h2 className="tracking-[0.15em] leading-tight" style={{color:"white", fontSize: "26px", padding: "20px"}}>
                  {project.subtitle.toUpperCase()}
                </h2>
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
              top: "360px",
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
              <p className="tracking-[0.2em]" style={{ fontSize: "26px", paddingTop: "20px", paddingLeft: "80px", color:"white" }}>
                {project.title}
              </p>
            </div>

            {/* Description en bas */}
            <div className="absolute bottom-16 left-12 right-12 z-10">
              <p className="text-blue/30 tracking-[0.15em] mb-8" style={{ fontSize: "22px" , paddingTop: "60px", paddingLeft: "80px" }}>
                {project.title.toLowerCase().replace(/\s+/g, '')}.com
              </p>
              
              <p className="text-white/90 tracking-wide leading-relaxed" style={{ fontSize: "15px", paddingTop: "5px", paddingLeft: "80px" }}>
                {project.description}
              </p>
            </div>
          </motion.div>

          {/* DOSSIER 4 - Arrière-plan beige clair en bas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute rounded-2xl shadow-xl overflow-hidden"
            style={{
              right: "31%",
              top: "20px",
              width: "50%",
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
