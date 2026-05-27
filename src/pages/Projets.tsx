import { ProjectBox } from "../components/ProjectBox";
import { NavBar } from "../components/NavBar";
import DataPerso from "../data/dataPerso";
import { useViewport } from "../hooks/useViewport";

export default function Projets() {
  const viewport = useViewport();
  const isMobile = viewport === 'mobile';

  const texture1 = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

  const totalBoxes = 25;
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
    })),
  ];

  return (
    <div
      className="w-screen h-full"
      style={{ backgroundColor: "#e8dcc8", margin: "0px" }}
    >
      <NavBar title="PAGE PROJETS" backPath="/" />

      {/* Grille de projets */}
      <div
        className="flex-1 overflow-y-auto"
        style={{
          backgroundImage: `url(${texture1})`,
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          padding: isMobile ? "12px 8px 24px" : "64px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: isMobile ? "4px" : undefined,
            alignItems: "flex-start",
            justifyContent: isMobile ? "center" : "space-between",
          }}
          className={isMobile ? "" : "gap-x-4 gap-y-1 mx-auto shadow-xl/20"}
        >
          {allProjects.map((project, index) => (
            <ProjectBox key={project.id} project={project} delay={index * 0.05} />
          ))}
        </div>
      </div>
    </div>
  );
}
