import React from 'react';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
//import { PortfolioCard } from './components/PortfolioCard';
import { BrandingFolder } from './components/BrandingFolder';
import { CardStack } from './components/CardStack';
import { PhotoPolaroid } from './components/PhotoPolaroid';
import DataPerso from './data/dataPerso';

export default function App() {
  const globalRotation = -15; // Inclinaison plus prononcée pour vue de bureau
  const texture1 = 'https://images.unsplash.com/photo-1731686648504-652578d9e9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmF5JTIwcGFwZXIlMjB0ZXh0dXJlfGVufDF8fHx8MTc2NDU0NzM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  const texture2 = 'https://images.unsplash.com/photo-1616410731309-4e07df6b5d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrcmFmdCUyMHBhcGVyJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ1NDczNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';
  // const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
  //   event.preventDefault();
  // };
  const photos = DataPerso.ShootsData;
  return (
     <div
        className="min-h-screen w-screen bg-[#d4d2ca] flex items-center justify-center overflow-hidden"
        style={{
           backgroundImage: `url(${texture1})`,
           backgroundRepeat: "repeat",
           backgroundSize: "cover",
        }}
     >
        <div className="relative w-[1600px] h-[900px]">
           {/* Carroussel de shoots Photos - gauche*/}

           <div className="absolute" style={{ left: "-110px", top: "355px" }}>
              <PhotoPolaroid
                 rotation={globalRotation}
                 photos={photos.map((item) => item.image)}
                 delay={0.2}
                 zIndex={230}
              />
           </div>

           {/* Paquet de cartes CONTACTS - Gauche haut */}
           <div className="absolute" style={{ left: "130px", top: "240px" }}>
              <CardStack
                 rotation={globalRotation}
                 //color="#ffffff"
                 color="#5d4a3a"
                 title="Contacts"
                 link="#contact"
                 delay={0}
                 zIndex={50}
                 small={true}
                 cardsData={DataPerso.contactsCardsData}
              />
           </div>

           {/* Paquet de cartes Soft Skills  */}
           <div className="absolute" style={{ left: "175px", top: "420px" }}>
              <CardStack
                 rotation={globalRotation}
                 color="#300000"
                 title="Soft Skills"
                 link="#skills"
                 delay={0.1}
                 zIndex={40}
                 small={true}
                 cardsData={DataPerso.softSkillsCardsData}
              />
           </div>

           {/* Paquet de cartes GRIS - Frameworks & Libraries*/}
           <div className="absolute" style={{ left: "220px", top: "610px" }}>
              <CardStack
                 rotation={globalRotation}
                 color="#8a8a8a"
                 title="Frameworks & Libraries"
                 link="#infos"
                 delay={0.5}
                 zIndex={30}
                 small={true}
                 cardsData={DataPerso.softsCardsData}
              />
           </div>
           {/* Grand dossier PROJETS - Centre */}
           <div className="absolute" style={{ left: "430px", top: "-15px" }}>
              {/* <Link to={`#projects`}> */}
              <BrandingFolder
                 rotation={globalRotation}
                 color="#c9b596"
                 title="MES PROJETS "
                 subtitle="★ PERSONNELS & FORMATIONNELS"
                 logo="PROJETS"
                 link="/projets"
                 //link={<Link to="/projets" />}
                 delay={0.2}
                 zIndex={20}
                 large={true}
              />
           </div>

           {/* Dossier FORMATIONS */}
           <div className="absolute" style={{ left: "970px", top: "17px" }}>
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

           {/* Dossier EXPERIENCE  */}
           <div className="absolute" style={{ left: "780px", top: "610px" }}>
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
     </div>
  );
}