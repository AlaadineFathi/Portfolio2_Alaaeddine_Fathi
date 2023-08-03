//le stockage de tous les donnes et images utilises dans le projet



// Profile Image
import profile from "../assets/AlaaePic.jpg";
// Tech stack images
import html from "../assets/techstack/html.png";
import css from "../assets/techstack/css.png";
import sass from "../assets/techstack/sass.png";
import js from "../assets/techstack/js.png";
import react from "../assets/techstack/react.png";
import redux from "../assets/techstack/redux.png";
import tailwind from "../assets/techstack/tailwind.png";
import bootstrap from "../assets/techstack/bootstrap.png";
import vscode from "../assets/techstack/vscode.png";
import github from "../assets/techstack/github.png";
import git from "../assets/techstack/git.png";
import npm from "../assets/techstack/npm.png";
import figma from "../assets/techstack/figma.png";
import Csharp from "../assets/techstack/cSharp.png";
import MySql from "../assets/techstack/MySql.png";
import Sql from "../assets/techstack/Sql.png";
import SqlServer from "../assets/techstack/sqlserver.png";
import Vstudio from "../assets/techstack/VStudio.png";



// Porject Images
import projectImage1 from "../assets/projects/projet1.jpg";
import projectImage2 from "../assets/projects/projet2.jpeg";
import projectImage3 from "../assets/projects/projet3.png";



// Mes données personnelles ici
export const personalDetails = {
  name: "Alaaeddine Fathi",
  tagline: "Je suis développeur web",
  img: profile,
  about: `Je suis Alaaeddine Fathi, un talentueux développeur web âgé de 20 ans. Etudiant au College La Cite en programmation informatique ,ainsi que je suis dans la derniere session de mon parcours a la La Cite . Je suis passionné par la création d'applications web innovantes et l'exploitation de technologies modernes pour construire des expériences utilisateur exceptionnelles.`,
};

// Mon URL github ici
export const socialMediaUrl = {
  github: "https://github.com/AlaadineFathi/AlaadineFathi",
};

// Mon expérience professionnelle ici
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Freelance`,
    Location: "En ligne",
    Duration: "2022 - Present",
  },
  {
    Position: "Software Developer",
    Company: `Freelance`,
    Location: "En ligne",
    Duration: "2022 - Present",
  }  
];

// Mes détails d'éducation ici
export const eduDetails = [
  {
    Position: "Programmation Informatique",
    Company: "College La Cité",
    Location: "Canada",
    Duration: "2022 - Present",
  },
  {
    Position: "Baccalauréat en physique et chimie",
    Company: `Groupe scolaire Rouad`,
    Location: "Maroc",
    Duration: "2021 - 2022",
  },
];

// Pile technologique et outils
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  Csharp:Csharp,
  MySql:MySql,
  Sql : Sql,
  SqlServer : SqlServer,
  Vstudio : Vstudio,


};

// Détails de mes projets ici
export const projectDetails = [
  {
    title: "Application de Gestion du café en C#",
    image: projectImage1,
    description: `Application de gestion de café, développée en C#, est spécialement conçue pour simplifier la gestion des commandes de menu. Cette application intuitive permet aux propriétaires de cafés de calculer facilement les commandes des clients.`,
    techstack: "C# Windows Forms | Sql Server",
    previewLink: " "+projectImage1,
  },
  {
    title: "Application de gestion de la clientèle",
    image: projectImage2,
    description: `Application de gestion de la clientèle pour un hôpital (cabinet), développé en C# en mode console, offre une solution pratique et efficace pour la gestion des patients et des rendez-vous.
    Cette application vous permet de gérer facilement les informations des patients, telles que leurs coordonnées, antécédents médicaux et rendez-vous programmés. Vous pouvez enregistrer de nouveaux patients, effectuer des recherches rapides, mettre à jour les informations existantes et même supprimer des dossiers.`,
    techstack: "C# Console",
    previewLink:" "+projectImage2,
  },
  {
    title: "Application de gestion des projets en C#",
    image: projectImage3,
    description: `Application de gestion des projets, développé en C# avec Windows Forms, utilise le framework Guna et la base de données SQL Server pour offrir une solution complète et efficace.
    Cette application vous permet de créer, organiser et gérer facilement vos projets. Vous pouvez ajouter des informations détaillées sur chaque projet, y compris les tâches, les délais, les responsables et les ressources nécessaires. Grâce à l'intégration avec SQL Server, les données sont stockées de manière sécurisée et peuvent être facilement sauvegardées et restaurées.`,
    techstack: "C# | Guna | Sql Server",
    previewLink: " "+projectImage3,
  },
];

// My Contact Details here
export const contactDetails = {
  email: "fathialaaeddine@gmail.com",
  phone: "+1 (819) 328-5730",
};
