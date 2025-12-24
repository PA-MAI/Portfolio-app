// Images pour les expériences et diplômes
const img1 = "https://images.unsplash.com/photo-1638636241638-aef5120c5153?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZXJ0aWZpY2F0ZSUyMGRpcGxvbWF8ZW58MXx8fHwxNzY2MTY2MjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const img2 = "https://images.unsplash.com/photo-1762341114803-a797c44649f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3JrJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NjE1MDI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const img3 = "https://images.unsplash.com/photo-1653945475227-596b295cff01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBncmFkdWF0aW9ufGVufDF8fHx8MTc2NjA3NzI0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const img4 = "https://images.unsplash.com/photo-1758518731027-78a22c8852ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc2NjE2NjIyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const DataPerso = {

    contactsCardsData: [
        { title: "NOM Prenom.", subtitle: "MAIROT Pascal" },
        { title: "Tel EMAIL: ", subtitle: "0621183741 zicones@yahoo.fr" },
        { title: "GITHUB: ...", subtitle: "www.github.com/PA-MAI", link: "https://github.com/PA-MAI" },
        { title: "LINKEDIN: ...", subtitle: "linkedin.com/in/pascal-mairot", link: "https://www.linkedin.com/in/pascal-mairot-989922109/" },
    ],

    softSkillsCardsData: [
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/9edeb5f2254a9f4202623674a33837f6bdf4d9231d3927b16e5199d5a59fabe2" },
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/a167a0f675bf656009303f6ec7f717767a6adb323f1845abd79e0972ed50aeba" },
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/b1c492453b3608dc9414e42bfe4ee8cfe82297afa97e4bcfde5cac66e2d18786" },
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/b7178cd9a5348251464b994743032fdb66f508a89018fc922e78972e64cc7959" },
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/efe12adae8136e52ecc974437bf8ef01b5ed1427508b2804439b354c3e582bec" },
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/8142ed047ac40dc5e40ac8cf7ba5e82c02fe1440aaf4a6dcfb5ad4f3ec9dd48d" },
        { title: "", image: "https://openbadgefactory.com/obv3/images/badge/2d09079d329b9d06dd8f6823cbf8530a57d4d8a7dd0ed3a20fa9c3bb614048dc" },
    ],

    softsCardsData: [
        { title: "Git & GitHub" },
        { title: "VS Code" },
        { title: "Figma" },
        { title: "Photoshop" },
        { title: "Javascript React" },
        { title: "Redux" },
        { title: "TypeScript - Angular" },
    ],

    ShootsData: [
        { title: "", image: img1 },
        { title: "", image: img2 },
        { title: "", image: img3 },
        { title: "", image: img4 },
    ],

    projectsData: [
        { 
            id: 1, 
            title: "PROJET PORTFOLIO", 
            subtitle: "Site web personnel",
            description: "Création d'un portfolio interactif avec React et TypeScript",
            color: "#c9b596",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            status: "En cours"
        },
        { 
            id: 2, 
            title: "APPLICATION E-COMMERCE", 
            subtitle: "Plateforme de vente en ligne",
            description: "Développement d'une boutique en ligne complète avec gestion de panier",
            color: "#9a9a9a",
            technologies: ["React", "Redux", "Node.js"],
            status: "Terminé"
        },
        { 
            id: 3, 
            title: "DASHBOARD ANALYTICS", 
            subtitle: "Interface de visualisation",
            description: "Tableau de bord pour analyser les données en temps réel",
            color: "#5d4a3a",
            technologies: ["Angular", "TypeScript", "D3.js"],
            status: "En cours"
        },
        { 
            id: 4, 
            title: "API REST", 
            subtitle: "Backend Node.js",
            description: "API RESTful pour applications mobiles et web",
            color: "#c9b596",
            technologies: ["Node.js", "Express", "MongoDB"],
            status: "Terminé"
        },
        { 
            id: 5, 
            title: "APPLICATION MOBILE", 
            subtitle: "React Native",
            description: "Application mobile cross-platform pour la gestion de tâches",
            color: "#9a9a9a",
            technologies: ["React Native", "Redux", "Firebase"],
            status: "En cours"
        },
        { 
            id: 6, 
            title: "SITE VITRINE", 
            subtitle: "Corporate website",
            description: "Site vitrine moderne pour une entreprise de services",
            color: "#5d4a3a",
            technologies: ["React", "Gatsby", "GraphQL"],
            status: "Terminé"
        }
    ],
    experiencesData: [
         {
            id: 7,
            title: "Développeur Frontend",
             company: "Tech Solutions",
             duration: "Jan 2022 - Présent",
             detail: "Développement d'interfaces utilisateur réactives avec React et TypeScript.",
             certificat: img1,
             status: "Validé",
             technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"]
        },
         {
            id: 8,
            title: "Développeur Backend",
            company: "Web Services Inc.",
            duration: "Fév 2021 - Déc 2021",
             detail: "Création d'API RESTful avec Node.js et Express.",
             certificat: img2,
             status: "Validé",
             technologies: ["Node.js", "Express", "MongoDB", "REST API"]
        }
    ],
    diplomesData: [
         {
            id: 9,
            title: "Licence Informatique",
              institution: ["Université de la Technologie", "Spécialisation Web & Mobile"],
              year: "2020",
              detail: "Spécialisation en développement web et mobile.",
              photo: img3,
              status: "Diplômé"
          },
            {
            id: 10,
            title: "Master Informatique",
            institution: ["Université de la Technologie", "Architecture Logicielle"],
            year: "2022",
                detail: "Approfondissement en architectures web et mobile.",
                photo: img4,
                status: "Diplômé"
        }
    ]
}


export default DataPerso;