import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { SquareChevronLeft } from "lucide-react";
import { ProjectBox } from "../components/ProjectBox";
import DataPerso from "../data/dataPerso";

export default function Projets() {
  const navigate = useNavigate();
  const texture1 = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  const texture2 = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
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
     <div
        className="w-screen h-screen"
        style={{
           backgroundColor: "#e8dcc8",
           margin: "0px",
        }}
     >
        {/* Bandeau de navigation */}
        <motion.div
           initial={{ y: -100 }}
           animate={{ y: 0 }}
           transition={{ duration: 0.6 }}
           className="relative flex w-full shadow-2xl overflow-hidden"
           style={{
              height: "50px",
              backgroundColor: "#5d4a3a",
           }}
        >
           {/* Texture multiply */}
           <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                 backgroundImage: `url(${texture2})`,
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
                 backgroundImage: `url(${texture2})`,
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
                 className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-300"
              >
                 <SquareChevronLeft
                    size={20}
                    className="text-white"
                    style={{
                       fontSize: "20px",
                       cursor: "pointer",
                       alignItems: "center",
                       marginRight: "5px",
                    }}
                 />
                 <span
                    className="tracking-[0.15em]"
                    style={{ fontSize: "20px", cursor: "pointer" }}
                 >
                    RETOUR ACCUEIL
                 </span>
              </button>

              <h1
                 className="text-white/60 tracking-[0.2em]"
                 style={{ fontSize: "20px" }}
              >
                 PAGE PROJETS
              </h1>
           </div>
        </motion.div>

        {/* Grille de projets - 5 colonnes */}
        <div
           className="flex-1 flex-row overflow-y-auto py-16 px-12 to-transparent"
           style={{
              backgroundImage: `url(${texture1})`,
              backgroundRepeat: "repeat",
              backgroundSize: "cover",
              //height: "calc(500vh - 20px)",
           }}
        >
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