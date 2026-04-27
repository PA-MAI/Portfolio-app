import dev from "@/assets/img/licencedev.jpg";
import assr from "@/assets/img/licenceassr.jpg";
import itil from "@/assets/img/itilv3.jpg";
import iso from "@/assets/img/iso.jpg";
import sql from "@/assets/img/sql.jpg";
import sio from "@/assets/img/btssio.jpg";
import gefi from "@/assets/img/tech94.jpg";
import apeb from "@/assets/img/apeb.jpg";
import pompier from "@/assets/img/pompier.jpg";
import alsymex from "@/assets/img/alsymex.jpg";
import activons from "@/assets/img/activonsnous.png";
import axido from "@/assets/img/axido.jpg";
import infodis from "@/assets/img/infodis.jpg";
import aviva from "@/assets/img/aviva.jpg";
import cnb from "@/assets/img/cnb.png";
import loreal from "@/assets/img/l-oreal.png"
import moi1 from "@/assets/img/moi1.jpg";
import moi2 from "@/assets/img/moi2.jpg";
import moi3 from "@/assets/img/moi3.jpg";
import moi4 from "@/assets/img/moi4.jpg";
import poignée from "@/assets/img/poignée.png";
import etiquette from "@/assets/img/etiquette.png";
import githubIcon from "@/assets/img/github.png";
import pdfIcon from "@/assets/img/pdf.png";
import trelloIcon from "@/assets/img/trello.png";
import soutenanceFisheyes from "@/assets/pdf/soutenanceFisheyes.pdf";
import soutenancePetitsPlats from "@/assets/pdf/soutenancePetitsPlats.pdf";
import soutenanceBilled from "@/assets/pdf/soutenanceBilled.pdf";
import soutenanceLearnAtHome from "@/assets/pdf/soutenanceLearnAtHome.pdf";
import soutenanceKasa from "@/assets/pdf/soutenanceKasa.pdf";
import soutenanceSportSee from "@/assets/pdf/SoutenanceSportSee.pdf";
import soutenanceArgentBank from "@/assets/pdf/SoutenanceArgentBank.pdf";
import soutenanceHRNet from "@/assets/pdf/SoutenanceHRNet.pdf";
import petitplats from "@/assets/img/petitsplats.jpg";
import fisheyes from "@/assets/img/fisheyes.jpg";
import billed from "@/assets/img/billed.jpg";
import learnathome from "@/assets/img/learnathome.jpg";
import activonsnous from "@/assets/img/activonsnous.jpg";
import portfolio from "@/assets/img/portfolio.jpg";

//import { mock } from "node:test";

//import { link } from "node:fs";

//image poignée à ajouter dans le dossier src/assets/img
// const poignée = "./src/assets/img/poignée.png";
// const etiquette = "./src/assets/img/etiquette.png";
// Images portrait pour le polaroid d'accueil
const imgmoi1 = moi1;
const imgmoi2 = moi2;
const imgmoi3 = moi3;
const imgmoi4 = moi4;

// Images pour les expériences professionnelles

const img1 = activons;
const img2 = alsymex;
const img3 = axido;
const img4 = cnb;
const img5 = infodis;
const img6 = aviva;
const img7 = loreal;
// Image pour les diplômes
const img4car = [assr, itil, iso, sql];
const img5car = [sio];
const img6car = [gefi];
const img7car = [apeb];
const img8car = [pompier];

const DataPerso = {
   ShootsData: [
      { title: "", image: imgmoi1 },
      { title: "", image: imgmoi2 },
      { title: "", image: imgmoi3 },
      { title: "", image: imgmoi4 },
   ],

   contactsCardsData: [
      { title: "NOM Prenom.", subtitle: "MAIROT Pascal" },
      {
         title: "Tel EMAIL: ",
         subtitle: "06 21 18 37 41, zicones@yahoo.fr",
         link: "mailto:zicones@yahoo.fr",
      },
      {
         title: "Lien GITHUB: ...",
         subtitle: "www.github.com/PA-MAI",
         link: "https://github.com/PA-MAI",
      },
      {
         title: "Lien LINKEDIN: ...",
         subtitle: "linkedin.com/in/pascal-mairot",
         link: "https://www.linkedin.com/in/pascal-mairot-989922109/",
      },
   ],

   softSkillsCardsData: [
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/9edeb5f2254a9f4202623674a33837f6bdf4d9231d3927b16e5199d5a59fabe2",
      },
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/a167a0f675bf656009303f6ec7f717767a6adb323f1845abd79e0972ed50aeba",
      },
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/b1c492453b3608dc9414e42bfe4ee8cfe82297afa97e4bcfde5cac66e2d18786",
      },
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/b7178cd9a5348251464b994743032fdb66f508a89018fc922e78972e64cc7959",
      },
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/efe12adae8136e52ecc974437bf8ef01b5ed1427508b2804439b354c3e582bec",
      },
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/8142ed047ac40dc5e40ac8cf7ba5e82c02fe1440aaf4a6dcfb5ad4f3ec9dd48d",
      },
      {
         title: "",
         image: "https://openbadgefactory.com/obv3/images/badge/2d09079d329b9d06dd8f6823cbf8530a57d4d8a7dd0ed3a20fa9c3bb614048dc",
      },
   ],

   softsCardsData: [
      {
         title: "Git & GitHub",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/git.svg",
               className: "tech-icon git",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg",
               className: "tech-icon github",
            },
         ],
      },
      {
         title: "HTML5 & CSS3 & Tailwind",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/html5.svg",
               className: "tech-icon html5",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/css3.svg",
               className: "tech-icon css3",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg",
               className: "tech-icon tailwindcss",
            },
         ],
      },
      {
         title: "VS Code & Figma",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/visualstudiocode.svg",
               className: "tech-icon visualstudiocode",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg",
               className: "tech-icon figma",
            },
         ],
      },
      {
         title: "Javascript React & Redux",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/javascript.svg",
               className: "tech-icon javascript",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg",
               className: "tech-icon react",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/redux.svg",
               className: "tech-icon redux",
            },
         ],
      },
      {
         title: "Node.js & Express & MongoDB",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg",
               className: "tech-icon nodedotjs",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg",
               className: "tech-icon express",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg",
               className: "tech-icon mongodb",
            },
         ],
      },
      {
         title: "TypeScript & Angular",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg",
               className: "tech-icon typescript",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/angular.svg",
               className: "tech-icon angular",
            },
         ],
      },
      {
         title: "Make & ChatGPT",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/make.svg",
               className: "tech-icon make",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg",
               className: "tech-icon openai",
            },
         ],
      },
      {
         title: "Photoshop & Illustrator",
         icons: [
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg",
               className: "tech-icon adobephotoshop",
            },
            {
               src: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeillustrator.svg",
               className: "tech-icon adobeillustrator",
            },
         ],
      },
   ],

   // img4cardata: [
   //     { title: "", image: img4car[0] },
   //     { title: "", image: img4car[1] },
   //     { title: "", image: img4car[2] },
   //     { title: "", image: img4car[3] },
   // ],
   // img5cardata:[
   //     { title: "", image: img5car[0] },
   //     { title: "", image: img5car[1] },

   // ],

   poigneeData: [{ title: "", image: poignée }],
   etiquetteData: [{ title: "", image: etiquette }],

   projectsData: [
      {
         id: 13,
         title: "Activons-nous",
         subtitle: "Site web associatif à but non lucratif",
         description:
            "site permettant de mettre en relation des bénévoles et des personnes en difficulté, avec un annuaire de ressources locales",
         color: "#c9b596",
         technologies: [
            "WordPress",
            "plugins HelloAsso",
            "react",
            "TypeScript",
            "Tailwind CSS",
            "redirections",
         ],
         status: "En cours",
         contexte:
            " projet professionnel en cours de développement, reabilitation d'un site associatif existant , développement de nouvelles fonctionnalités et amélioration de l'expérience utilisateur",
         objectifs: [
            "Debug des moyens de paiement des dons en ligne",
            "Améliorer les performances de l’application avec Lighthouse",
            "Moderniser le code (React, Vite, Redux)",
            "revisiter les éléments des langages et d'intégration pour améliorer l'accessibilité et le référencement",
            "Écrire la documentation technique de votre projet avec Markdown Editor Dillinger.io",
         ],

         githubcode: "https://github.com/PA-MAI/HRnet",
         githubpage: "",
         soutenance: soutenanceHRNet,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: activonsnous,
      },
      {
         id: 1,
         title: "Portfolio-app",
         subtitle:
            "application compétences et projets personnels",
         description:
            "Création de ce portfolio interactif avec React,tailwind et TypeScript",
         color: "#c9b596",
         technologies: ["React", "TypeScript", "Tailwind CSS"],
         status: "En cours",
         contexte:
            " Contacts, SoftSkills, technologie et présentation des projets, des diplomes et des expériences professionnelles, avec des liens vers les soutenances, les codes sources et les pages de présentation de chaque projet",
         objectifs: [
            "présenter de manière claire et attractive mes compétences, mes expériences professionnelles et mes projets personnels",
            "mettre en avant mes compétences techniques et mes réalisations de manière interactive et visuelle",
            "offrir une expérience utilisateur fluide et agréable pour les visiteurs du site",
         ],

         githubcode: "https://github.com/PA-MAI/Portfolio-app",
         githubpage: "",
         soutenance: "",
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: portfolio,
      },
      {
         id: 2,
         title: "HRNet-app",
         subtitle: "Plateforme bancaire en ligne",
         description:
            "Convertir une application bancaire Jquery buggée en une application bancaire avec React et Redux Toolkit stable et performante",
         color: "#c9b596",
         technologies: [
            "React",
            "Redux",
            "Reduxtoolkit",
            "Node.js",
            "Express",
            "MongoDB",
         ],
         status: "Terminé",
         contexte: " projet p14 de formation ",
         objectifs: [
            "Transformer en composants réutilisables les fonctionnalités existantes sur le formulaire et tableau actuellement en jquery",
            "Améliorer les performances de l’application avec Lighthouse",
            "Moderniser le code (React, Vite, Redux)",
            "Créer et publier un composant réutilisable via une librairie npm à utiliser dans l’application HRnet",
            "Écrire la documentation technique de votre projet avec Markdown Editor Dillinger.io et publiez-la sur GitHub Pages",
         ],

         githubcode: "https://github.com/PA-MAI/HRnet",
         githubpage: "",
         soutenance: soutenanceHRNet,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: "",
      },
      {
         id: 3,
         title: "ArgentBank-app",
         subtitle: "application bancaire en ligne avec React et Redux Toolkit",
         description:
            "P13 Gérez votre application React avec Redux et Redux Toolkit",
         color: "#5d4a3a",
         technologies: [
            "React",
            "Redux",
            "Redux Toolkit",
            "Node.js",
            "Endpoint d'API",
            "MongoDB",
         ],
         status: "En cours",
         contexte: " projet p13 de formation ",
         objectifs:
            "Gerer l'application React avec Redux et Redux Toolkit, gestion des states globaux, gestion des données asynchrones avec Redux Thunk, gestion des erreurs et des états de chargement,gestion de Auth.js et de la sécurité des données, gestion de la persistance des données avec Redux Persist, gestion de la performance et de l'optimisation avec Reselect",
         githubcode: "https://github.com/PA-MAI/argentbank-app",
         githubpage: "",
         soutenance: soutenanceArgentBank,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: "",
      },
      {
         id: 4,
         title: "SportSee-app",
         subtitle:
            "site de gestion physique et mentale pour sportifs professionnels et amateurs",
         description:
            "tableaux de bord avec API RESTful pour applications mobiles et web avec charts Recharts.D3 avec backend Node.js et base de données MongoDB",
         color: "#c9b596",
         technologies: [
            "Node.js",
            "Express",
            "MongoDB",
            "mock",
            "Axios",
            "Recharts",
            "fallback",
         ],
         status: "Terminé",
         contexte: " projet p12 de formation ",
         objectifs:
            "Afficher des tableaux de bord dynamiques à partir de données d’une API (ou données locales en fallback)",
         githubcode: "https://github.com/PA-MAI/SportSee-app",
         githubpage: "",
         soutenance: soutenanceSportSee,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: "",
      },
      {
         id: 5,
         title: "Kasa-App",
         subtitle: "Application pour la location de logements ",
         description: "Creer une Application mobile React complète ",
         color: "#5d4a3a",
         technologies: [
            "composants Create React App",
            "Props",
            "State",
            "React Router, Saas",
         ],
         status: "En cours",
         contexte: " projet p11 de formation ",
         objectifs: "",
         githubcode: "https://github.com/PA-MAI/Kasa",
         githubpage: "",
         soutenance: soutenanceKasa,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: "",
      },
      {
         id: 6,
         title: "Learn@Home",
         subtitle: "site de relation enfants en difficulté et bénévoles",
         description:
            "Users Stories, Kanban, maquettes et UX design sous Figma, cahier des charges",
         color: "#c9b596",
         technologies: [
            "Gestion de projet Agile",
            "Kanban sous Trello",
            "Figma",
         ],
         status: "Terminé",
         contexte: "scénario de projet p10 de formation ",
         objectifs: "",
         githubcode: "",
         trellopage: "https://trello.com/b/rQBKDimR/kanban-learnhome",
         soutenance: soutenanceLearnAtHome,
         githubIcon: trelloIcon,
         pdfIcon: pdfIcon,
         img: learnathome,
      },
      {
         id: 7,
         title: "Billed",
         subtitle: "application RH de gestion de notes de frais",
         description:
            " Fonctionne avec Billed-app-FR-Back, tester son application avec des tests unitaires, d'intégration et End-to-End, projet p9 de formation",
         color: "#5d4a3a",
         technologies: [
            "Jest",
            "Eslint",
            "Testing Library",
            "Validation W3C Html et Css",
            "ecoindex",
         ],
         status: "Terminé",
         contexte: " projet p9 de formation ",
         objectifs: "",
         githubcode: "https://github.com/PA-MAI/Billed-app-FR-Front",
         githubpage: "https://pa-mai.github.io/Billed-app-FR-Front/",
         soutenance: soutenanceBilled,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: billed,
      },
      {
         id: 8,
         title: "Les petits plats",
         subtitle: "site gallerie de recettes avec menus interactifs",
         description:
            "projet GreenIt, fonctionnement des algorithmes,Programmation Fonctionnelle vs itérative",
         color: "#c9b596",
         technologies: [
            "Eslint",
            "Api",
            "JSBen.ch",
            "Validation W3C Html et Css",
            "ecoindex",
         ],
         status: "Terminé",
         contexte: " projet p7 de formation ",
         objectifs: "",
         githubcode: "https://github.com/PA-MAI/LesPetitsPlats",
         githubpage: "https://pa-mai.github.io/LesPetitsPlats/",
         soutenance: soutenancePetitsPlats,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: petitplats,
      },
      {
         id: 9,
         title: "Fisheyes",
         subtitle: "site gallerie photo ",
         description: "projet React avec accessibilité et design patterns",
         color: "#5d4a3a",
         technologies: ["javascript", "Aria", "patterns", "accessibilité"],
         status: "Terminé",
         contexte: " projet p6 de formation ",
         objectifs: "",
         githubcode: "https://github.com/PA-MAI/Front-End-Fisheye",
         githubpage: "https://pa-mai.github.io/Front-End-Fisheye/",
         soutenance: soutenanceFisheyes,
         githubIcon: githubIcon,
         pdfIcon: pdfIcon,
         img: fisheyes,
      },
   ],
   experiencesData: [
      {
         id: 7,
         title: "Développeur Frontend React",
         company: "Activons-nous association à but non lucratif",
         duration: "octobre 2025 - Présent",
         detail:
            "Développement d'une application web réactives avec React et TypeScript.",
         certificat: img1,
         status: "Volontariat",
         technologies: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "Node.js",
            "Express",
            "MongoDB",
            "REST API",
            "Wordpress",
         ],
      },
      {
         id: 8,
         title: "Administrateur Systèmes et Réseaux",
         company: "Alsymex Paris, groupe ALCEN",
         duration: "dec 2012 - oct 2023",
         detail:
            "Administration des systèmes et réseaux et assistant responsable informatique.",
         certificat: img2,
         status: "CDI",
         technologies: [
            "Remplacements occasionnels du responsable informatique, Encadrement des stagiaires et des jobs d’été, gestion des changements (TCO) de 4 filiales du groupe Alcen.",
            "SQL Développement vues et rapports Crystal report sous ERP Topsolid, gestion de bases de données SQL Server et MySQL.",
            "Administration et Sécurité des systèmes AD MS2008-2012 et des accès, Virtualisation ",
            "Supervision des serveurs et services critiques (Centréon, Nagvis), procédures et synoptiques.",
            "Gestion de parc informatique, gestion sur demande de la téléphonie IP, gestion des incidents et des demandes de service (GLPI).",
            "Déploiement et support N2 N3 aux utilisateurs et infrastructures systèmes et réseaux informatique et industriels .",
            "Audits qualité interne EN9100 ISO19011 et externe EN9100 ISO9001, gestion de la sécurité des systèmes d'information (ISO27001) et de la continuité d'activité (ISO22301).",
            "Parefeux pfsense, antivirus et sécurité Sophos, sauvegardes (Yosemith) programmes machine et systemes.",
            "Sécurité des accès (Bodet): Pilotage de l'installation et de l'infrastructure sur 2 filiales, gestion quotidienne des accès",
            "Relation avec les fournisseurs et prestataires",
         ],
      },
      {
         id: 9,
         title: "Administrateur Systèmes et Réseaux",
         company: "ESN Axido",
         duration: "2012",
         detail:
            "Administration et assistance des clients sur site et en distantiel, assistant qualité des installations",
         certificat: img3,
         status: "CDI",
         technologies: [
            "MS serveur 2003-2008",
            "GLPI",
            "ArcServer",
            "Norton antivirus d'entreprise",
         ],
      },
      {
         id: 10,
         title: "Technicien supérieur",
         company: "Conseil National des barreaux",
         duration: "2011",
         detail:
            "Conseil VPN pour le réseau RPVA et en démarche informatique de justice",
         certificat: img4,
         status: "Interim",
         technologies: [
            "VPN",
            "Réseau RPVA",
            "Démarche informatique de justice",
         ],
      },
      {
         id: 11,
         title: "Technicien applicatif",
         company: "ESN Infodis",
         duration: "2008-2009",
         detail:
            "Assistant responsable de la cellule incident Ajax du portail Aviva France",
         certificat: [img6],
         status: "CDI",
         technologies: [
            "Ajax",
            "support de niveau 2 et 3 sur les applications métiers et les infrastructures associées.",
            "Centralisation et suivi des incidents, coordination avec les équipes de développement et d'infrastructure pour la résolution rapide des problèmes du portail Aviva France.",
         ],
      },
      {
         id: 12,
         title: "Consultant en gestion de parc informatique",
         company: "L'Oréal Paris et Villeparisis ",
         duration: "2006-2007",
         detail: "Responsable des équipes de support et du changement",
         certificat: img7,
         status: "intérim puis consultant",
         technologies: [
            "GLPI",
            "Gestion de parc informatique",
            "Gestion du changement (TCO)",
         ],
      },
   ],
   diplomesData: [
      {
         id: 9,
         title: "Licence Developpeur Concepteur Logiciel",
         subtitle: "Developpeur Frontend",
         institution: ["OpenClassRooms", "e-learning"],
         year: "2025",
         detail: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Angular",
            "Redux",
            "Tailwind CSS",
            "Node.js.",
         ],
         photo: [dev],
         status: "Diplômé niv.6",
         options: ["Spécialisation React Web & Mobile"],
      },
      {
         id: 10,
         title: "License Professionnelle Administrateur des systemes et sécurité des réseaux (ASSR)",
         subtitle: "Administrateur Systèmes et Réseaux",
         institution: ["Université Paris-Est Creteil", "IUT de Lieusaint"],
         year: "2018",
         detail: [
            "Assistant responsable informatique",
            "Administration des systèmes et réseaux",
            "Maintenance et sécurité des systèmes",
            "virtualisation des serveurs",
            "Gestion de bases de données et ERP.",
            "Certification ITIL V3",
            "SQL",
         ],
         photo: img4car,
         status: "Diplômé niv.6",
         options: ["Parcours Réseaux d'Entreprises"],
      },
      {
         id: 11,
         title: "BTS Technicien Supérieur en Services Informatiques aux Organisations (SIO)",
         subtitle: "Technicien systèmes et réseaux",
         institution: ["Académie de Créteil"],
         year: "2016",
         detail: [
            "Virtualisation",
            "Sécurité des systèmes",
            "déploiement d'applications",
            "gestion de parc informatique",
         ],
         photo: img5car,
         status: "Diplômé niv.5",
         options: ["solutions d'infrastructure, systèmes et réseaux (SISR)"],
      },
      {
         id: 12,
         title: "Technicien de maintenance des matériels Informatiques",
         subtitle: "Technicien de maintenance",
         institution: ["Géfi formation spécialisé", "Paris"],
         year: "1994",
         detail: [
            "électricité de base",
            "microéléctronique",
            "maintenance et réparation de matériels informatiques",
            "déploiement d'applications",
            "gestion de parc informatique",
         ],
         photo: img6car,
         status: "Diplômé niv.5",
         options: ["Parcours bases electricité"],
      },
      {
         id: 13,
         title: "Métreur TCE Tous Corps d’État Bâtiment",
         subtitle: "Métreur TCE Tous Corps d’État",
         institution: [
            "Association pour l’enseignement professionnel du bâtiment AEPB",
            "Paris 14e",
         ],
         year: "1988",
         detail: [
            "déssins et projections batiment",
            "métré et chiffrage",
            "étude de prix",
            "Batibat logiciel de métré et chiffrage",
         ],
         photo: img7car,
         status: "Diplômé niv.4",
         options: ["Parcour base metreur TCE"],
      },
      {
         id: 14,
         title: "Pompier chef d'agrès, caporal chef",
         subtitle: "Pompier, chef d'agrès",
         institution: ["Base aérienne 125", "Istres"],
         year: "1987",
         detail: [
            "formation de base de pompier militaire et formation de chef d'agrès tous feux, tous vehicules",
            "exercices de sauvetage et de lutte contre les incendies sur aéronefs",
            "Commandement d'une équipe de 15 pompiers (équipe de piste) lors d'interventions sur des incendies ou accidents impliquant des aéronefs",
         ],
         photo: img8car,
         status: "Diplômé niv.4",
         options: ["Parcour Sécurité incendie sur aéronefs"],
      },
   ],
};


export default DataPerso;