import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Julien",
  lastName: "Castro",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Développeur",
  avatar: "/images/moi.png",
  email: "julien.castro@protonmail.com",
  location: "Europe/Zurich", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Anglais", "Français"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Abonnez-vous à ma Newsletter</>,
  description: (
    <>
      J'écris ponctuellement sur le design, la technologie, et je partage mes réflexions entre de la créativité, de l’ingénierie et de mes passions.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Niwa-Yume",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/julien-castro/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio qui montre mon travail de ${person.role}`,
  headline: <>Artisan du Numérique Efficace</>,
  featured: {
    display: true,
    title: <>Projet récent : <strong className="ml-4">The head SPA switezrland</strong></>,
    href: "/work/the_head_spa"
  },
  subline: (
    <>
      J'optimise votre temps en créant des solutions digitales sur-mesure. Je suis Julien Castro, partenaire de confiance pour les entreprises et particuliers exigeants. Ma spécialité : concevoir des sites web et applications élégants, et automatiser vos processus pour vous libérer des tâches chronophages.
    </>
  ),
};

const about = {
  path: "/about",
  label: "A propos",
  title: `A propos – ${person.name}`,
  description: `Rencontrez ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/julien.castro/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mon parcours, de l'horlogerie de luxe chez Rolex à la finance chez FlowBank en passant par Infomaniak et son univers de solutions technologique, m'a enseigné une chose : le temps est l'actif le plus précieux.
        C'est pourquoi aujourd'hui, en tant qu'architecte de solutions digitales, ma mission est de vous en faire gagner. Je transforme des problématiques complexes en solutions simples, fonctionnelles et esthétiques, en alliant l'ingéniosité technique à une compréhension profonde de vos enjeux business.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Expériences professionnelles",
    experiences: [
      {
        company: "Rolex",
        timeframe: "été 2025",
        role: "Consultant développeur pour l'été",
        achievements: [
          <>
            Migration d'une application AngularJS vers Angular modern, améliorant la performance et en réécrivant les règles métier tout en modernisant l'interface utilisateur.
          </>,
          <>
            Intégration de nouveaux écran, fonctionnalités et pour assurer une transition fluide entre la nouvelle et l'ancienne version, en y faisant cohabiter une partie.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Rolex.svg.png",
            alt: "Logo Rolex",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Noctinium",
        timeframe: "septembre 2023 - Juin 2025",
        role: "Fondateur",
        achievements: [
          <>
            La communication et la gestion des événments sur les réseaux sociaux, en créant des contenus engageants et en gérant une liste d'emailing. Communication et négociation avec des acteurs du monde de la nuit pour organiser des événements.
          </>,
          <>
            Création de la plateforme et des services de crawling pour collecter des informations sur les événements de la nuit, en utilisant des technologies modernes pour assurer un agenda fiable de tout les événements sur Genève.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/logo noctinium nouveau.png",
            alt: "Logo Noctinium",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Rolex",
        timeframe: "septembre 2024 - Janvier 2025",
        role: "Stagiaire développeur chargé de projet",
        achievements: [
          <>
            Migration d'une application AngularJS vers Angular modern, améliorant la performance et en réécrivant les règles métier tout en modernisant l'interface utilisateur.
          </>,
          <>
            Intégration de nouveaux écran, fonctionnalités et pour assurer une transition fluide entre la nouvelle et l'ancienne version, en y faisant cohabiter une partie.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Rolex.svg.png",
            alt: "Logo Rolex",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Infomaniak",
        timeframe: "Octobre 2023 - Janvier 2024",
        role: "Technicien du service d'assistance technologique",
        achievements: [
          <>
              Identifier les problèmes clients, et tenter de les solutionner ou le remonter au développeurs. Aptitude à résoudres des problèmes sous stress et proposer des solutions long termes.         </>,
          <>
            Compétences en assistance client et technique, ainsi que pour pour la résolution de problèmes bancaires et informatiques, en fournissant un support de haute qualité aux clients.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/logo-k.svg",
            alt: "Logo Infomaniak",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Études",
    institutions: [
      {
        name: "Créa Omnes education Genève",
        description: <>Bachelors en développement web et d'application</>,
      },
      {
        name: "HEG",
        description: <>Bachelor en science de l'informatique</>,
      },
      {
        name: "ESIG",
        description: <>Maturité d'informaticien de Gestion</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Services",
    skills: [
      {
        title: "Des Solutions Concrètes pour des Besoins d'Exception",
        description: <>Je crée des expériences digitales haut de gamme pour les entreprises et les particuliers exigeants. Ma spécialité est de concevoir des sites web et applications sur-mesure, et d'automatiser vos tâches répétitives pour vous faire gagner un temps précieux.</>,
      },
      {
        title: "MES DOMAINES D'EXPERTISE",
        description: <></>,
      },
      {
        title: "Automatisation & Gain de Temps (Mon cœur de métier)",
        description: <>Outils : N8N, Python, Make, Zapier Je conçois des workflows sur-mesure pour éliminer vos tâches répétitives : de la génération de rapports au tri de données, en passant par la gestion de contacts.</>,
      },
      {
        title: "Développement Web & Applications sur-mesure",
        description: <>Technologies Backend : Laravel, Symfony, Spring Boot... Technologies Frontend : Next.js, Angular, Vue.js... Je construis des plateformes robustes et des interfaces élégantes qui reflètent votre standing.</>,
      },
      {
        title: "Prototypage & Design d'Expérience (UX)",
        description: <>Outils : Figma Avant de construire, nous visualisons. Je crée des prototypes interactifs pour s'assurer que la solution finale soit parfaitement alignée avec votre vision.</>,
      },{
        title: "Intégration de CMS & Plateformes",
        description: <>Outils : Wordpress, Shopify, Framer Je m'appuie sur des solutions éprouvées pour lancer rapidement des projets efficaces et faciles à gérer pour vous.</>,
      },{
        title: "Veille Stratégique : IA & Blockchain",
        description: <>Technologies : GPT, Agents IA... Je suis votre conseiller pour démystifier ces innovations et identifier les opportunités pertinentes pour votre activité.</>,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "J'écris un blog sur ce qui me passe par la tête...",
  description: `Lis ce que ${person.name} ce que j'écris dernièrement`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Travaux",
  title: `Projets – ${person.name}`,
  description: `Designer et développé par ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallerie",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
