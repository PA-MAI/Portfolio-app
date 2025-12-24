import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ProjectBox } from "../components/ProjectBox";
import DataPerso from "../data/dataPerso";

export default function Projets() {
  const navigate = useNavigate();

  // Créer un tableau avec les vrais projets + des projets "à venir"
  const totalBoxes = 25; // 5 colonnes × 5 rangées
  const allProjects = [
    ...DataPerso.projectsData,
    ...Array.from({ length: totalBoxes - DataPerso.projectsData.length }, (_, i) => ({
      id: 1000 + i,
      title: "PROJET À VENIR",
      subtitle: "En développement",
      color: "#a8a8a8",
      status: "À venir",
      technologies: [],
      description: "Ce projet sera bientôt disponible",
      
    }))
   
  ];

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: '#e8dcc8' }}>
      {/* Bandeau de navigation en haut - FULL WIDTH */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full shadow-2xl flex-shrink-0"
        style={{ 
          height: "80px",
          backgroundColor: '#5d4a3a',
          alignContent: "center",
          
        }}
      >
        <div className="h-full flex items-center px-12" style={{justifyContent: "space-between", width: "100%", marginRight: "10px", marginLeft: "10px", alignItems:"center" }}>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={28} />
            <span className="tracking-[0.15em]" style={{ fontSize: "16px" }}>
              RETOUR À L'ACCUEIL
            </span>
          </button>

          <div className="ml-auto">
            <h1 className="text-white/90 tracking-[0.2em]" style={{ fontSize: "22px", marginRight: "20px" }}>
              MES PROJETS
            </h1>
          </div>
        </div>
      </motion.div>

      {/* Grille de projets - 5 colonnes */}
      <div className="flex-1 flex-row overflow-y-auto py-16 px-12">
        <div
          className=" flex gap-x-4 gap-y-1 mx-auto shadow-xl/20"
          style={{
            // gridTemplateColumns: "repeat(5, 340px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {allProjects.map((project, index) => (
            <ProjectBox
              key={project.id}
              project={project}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}