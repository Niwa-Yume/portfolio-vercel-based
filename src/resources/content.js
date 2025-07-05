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
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
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
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio qui montre montre travaille de ${person.role}`,
  headline: <>Construire un pont entre idée et réalité</>,
  featured: {
    display: true,
    title: <>Projet récent : <strong className="ml-4">The head SPA switezrland</strong></>,
    href: "/work/the_head_spa"
  },
  subline: (
    <>
      Je suis Julien Castro un développeur avec 3 ans d'experience et plus de 80 projets. Je peux créer tout sortes de projet !
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
        Julien Castro est un développeur basé en Suisse, passionné par la création de ponts entre design, technologie et innovation. Il transforme les problématiques complexes en solutions simples, fonctionnelles et esthétiques. Son travail s'étend des interfaces digitales aux expériences interactives, avec une approche centrée sur l'humain et portée par l'ingéniosité technique.
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
            src: "/images/projects/project-01/rolex.svg.png",
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
      },{
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
            src: "/images/projects/project-01/rolex.svg.png",
            alt: "Logo Rolex",
            width: 16,
            height: 9,
          },
        ],
      },,{
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
    title: "Compétences techniques",
    skills: [
      {
        title: "Figma",
        description: <>Prototypage de site web et autre solutions</>,
      },
      {
        title: "Next.js, Angular, NuxT.js, Vue.js, ",
        description: <>Technologie Frontend</>,
      },
      {
        title: "Supabase, Firebase, MongoDB, MariaDB, SQL",
        description: <>Base de donnée</>,
      },
      {
        title: "Laravel, Symfony, Spring Boot, Typescript",
        description: <>Technologie Backend</>,
      },
      {
        title: "Python, N8N, GPT, AgentIA",
        description: <>Automatisation et bot(chatbot, crawler, traduction,etc..)</>,
      },{
        title: "Framer, Wordpresss, Shopify ",
        description: <>CMS</>,
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
