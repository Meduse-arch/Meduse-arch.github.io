export type Lang = 'fr' | 'en';
export type ThemeMode = 'light' | 'dark';

export type ProjectVisualType =
  | 'signet-v2'
  | 'signet-v1'
  | 'sigil'
  | 'jdr-assistance'
  | 'discord-portfolio'
  | 'dune'
  | 'python-bot'
  | 'iut-systems';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  repoName?: string;
  category: { fr: string; en: string };
  period: string;
  context: { fr: string; en: string };
  summary: { fr: string; en: string };
  highlights: { fr: string[]; en: string[] };
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  visualType: ProjectVisualType;
}

export interface PillarItem {
  index: string;
  title: { fr: string; en: string };
  subtitle: { fr: string; en: string };
  asciiPattern: string;
  skills: string[];
}

export const PROFILE = {
  name: 'Louis Bochereau',
  handle: 'Meduse-arch',
  age: 21,
  nationality: { fr: 'Français', en: 'French' },
  city: 'Toulouse, France',
  coords: '43.6047° N · 1.4442° E',
  role: {
    fr: 'Étudiant · 2ᵉ année BUT Informatique',
    en: 'Student · 2nd-year CS (BUT Informatique)',
  },
  schoolShort: 'IUT Rangueil · Toulouse',
  email: 'louis.bochereau@etu.iut-tlse3.fr',
  phone: '06 41 94 22 61',
  phoneHref: 'tel:+33641942261',
  githubUrl: 'https://github.com/Meduse-arch',
  signetLiveUrl: 'https://signet-vtt.vercel.app/',
  cvUrl: './cv.html',
};

export const MARQUEE_STACK = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'PixiJS',
  'Konva',
  'Three.js',
  'Tauri',
  'Rust',
  'PostgreSQL',
  'SQLite',
  'PearJS / WebRTC',
  'Electron',
  'Java',
  'Python',
  'Linux',
  'Git',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'signet-v2',
    index: '01',
    title: 'signet-v2',
    repoName: 'signet-v2',
    category: {
      fr: 'Dépôt Git · VTT Rust & React 19',
      en: 'Git Repo · Rust & React 19 VTT',
    },
    period: 'Oct 2026 — En cours',
    context: {
      fr: 'Projet personnel · TypeScript & Rust',
      en: 'Personal Project · TypeScript & Rust',
    },
    summary: {
      fr: "Refonte modulaire de Signet autour d'une séparation stricte entre un Core VTT agnostique aux règles et des modules externes, avec Tauri v2, un backend Rust (Axum / Tokio) et un canvas React + Konva.",
      en: 'Modular rewrite of Signet separating a rule-agnostic VTT Core from pluggable modules, built with Tauri v2, a Rust backend (Axum / Tokio), and a React + Konva canvas.',
    },
    highlights: {
      fr: [
        'Architecture « Core vs Modules » documentée (ARCHITECTURE.md, LOGIQUE.md)',
        'Frontend React 19, TypeScript, Tailwind CSS v4 et rendu interactif Konva',
        'Backend Tauri v2 en Rust (Axum, Tokio, Serde) & serveur de signaling WebRTC',
        'Connexions pair-à-pair temps réel via simple-peer et validation Zod',
      ],
      en: [
        'Documented "Core vs Modules" architecture (ARCHITECTURE.md, LOGIQUE.md)',
        'React 19, TypeScript, Tailwind CSS v4 UI with Konva interactive canvas',
        'Tauri v2 Rust backend (Axum, Tokio, Serde) & WebRTC signaling server',
        'Real-time peer-to-peer networking via simple-peer and Zod validation',
      ],
    },
    stack: ['React 19', 'TypeScript', 'Rust', 'Tauri v2', 'Axum', 'Konva', 'WebRTC', 'Tailwind v4'],
    repoUrl: 'https://github.com/Meduse-arch/signet-v2',
    visualType: 'signet-v2',
  },
  {
    id: 'signet',
    index: '02',
    title: 'signet',
    repoName: 'signet',
    category: {
      fr: 'Dépôt Git · Virtual Table Top P2P',
      en: 'Git Repo · P2P Virtual Table Top',
    },
    period: 'Jan — Août 2026',
    context: {
      fr: 'Projet personnel · Live sur Vercel',
      en: 'Personal Project · Live on Vercel',
    },
    summary: {
      fr: "Application de table virtuelle (VTT) permettant de jouer au jeu de rôle en ligne via un réseau P2P sécurisé, avec table interactive PixiJS, schémas SQLite/PostgreSQL et build Electron.",
      en: 'Virtual Table Top (VTT) application for online tabletop RPG sessions over a secured P2P network, featuring a PixiJS board, SQLite/PostgreSQL schemas, and an Electron build.',
    },
    highlights: {
      fr: [
        'Wireframes, architecture applicative et schéma relationnel SQLite / PostgreSQL',
        'Interface React + Tailwind CSS et table interactive temps réel via PixiJS',
        'Réseau P2P avec PearJS et sécurisation serveur protégeant l’hôte',
        'Déployé sur signet-vtt.vercel.app avec packaging desktop Electron',
      ],
      en: [
        'Wireframes, system architecture, and SQLite / PostgreSQL relational schema',
        'React + Tailwind CSS interface with a real-time PixiJS interactive board',
        'P2P networking via PearJS with host-protection server security',
        'Deployed live at signet-vtt.vercel.app alongside Electron packaging',
      ],
    },
    stack: ['React', 'TypeScript', 'PixiJS', 'Tailwind CSS', 'PearJS', 'PostgreSQL', 'SQLite', 'Electron'],
    repoUrl: 'https://github.com/Meduse-arch/signet',
    liveUrl: 'https://signet-vtt.vercel.app/',
    visualType: 'signet-v1',
  },
  {
    id: 'JDR-App',
    index: '03',
    title: 'JDR-App (Sigil)',
    repoName: 'JDR-App',
    category: {
      fr: 'Dépôt Git · App Windows JDR',
      en: 'Git Repo · Windows RPG App',
    },
    period: 'Avr 2026',
    context: {
      fr: 'Projet personnel · Electron & React',
      en: 'Personal Project · Electron & React',
    },
    summary: {
      fr: "Application Windows (« Sigil ») conçue pour gérer une partie de jeu de rôle : gestion d'état avec Zustand, transitions Framer Motion, chiffrement local et synchronisation Supabase.",
      en: 'Windows desktop app ("Sigil") designed to manage tabletop RPG sessions, combining Zustand state orchestration, Framer Motion transitions, local crypto, and Supabase sync.',
    },
    highlights: {
      fr: [
        'Application Electron + React + TypeScript configurée avec Vite',
        'Gestion d’état centralisée via Zustand et animations Framer Motion',
        'Authentification, CryptoJS / bcryptjs et base de données Supabase',
      ],
      en: [
        'Electron + React + TypeScript desktop app bundled with Vite',
        'Centralized state via Zustand and Framer Motion transitions',
        'Auth, CryptoJS / bcryptjs hashing, and Supabase database sync',
      ],
    },
    stack: ['React', 'TypeScript', 'Electron', 'Zustand', 'Framer Motion', 'Supabase', 'Tailwind CSS'],
    repoUrl: 'https://github.com/Meduse-arch/JDR-App',
    visualType: 'sigil',
  },
  {
    id: 'Jdr_Assitance',
    index: '04',
    title: 'Jdr_Assitance',
    repoName: 'Jdr_Assitance',
    category: {
      fr: 'Dépôt Git · Bot & Activité Discord',
      en: 'Git Repo · Discord Bot & Activity',
    },
    period: 'Déc 2025',
    context: {
      fr: 'Projet personnel · JavaScript',
      en: 'Personal Project · JavaScript',
    },
    summary: {
      fr: "Projet visant à aider les maîtres de jeu dans leurs sessions de jeu de rôle directement sur Discord grâce à un bot dédié et une Discord Activity interactive.",
      en: 'Project built to assist Game Masters during tabletop RPG sessions inside Discord through a dedicated bot and an interactive Discord Activity.',
    },
    highlights: {
      fr: [
        'Architecture complète séparée en dossiers /bot, /client et /server',
        'Intégration de l’SDK Discord Activities pour une interface temps réel',
        'Commandes et outils pensés pour fluidifier le travail du maître de jeu',
      ],
      en: [
        'Full architecture split into /bot, /client, and /server modules',
        'Discord Activities SDK integration for an in-app real-time UI',
        'Commands and utilities tailored to streamline GM session flow',
      ],
    },
    stack: ['JavaScript', 'Node.js', 'Discord Bot', 'Discord Activity', 'Client / Server'],
    repoUrl: 'https://github.com/Meduse-arch/Jdr_Assitance',
    visualType: 'jdr-assistance',
  },
  {
    id: 'ancien-portfolio',
    index: '05',
    title: 'ancien-portfolio',
    repoName: 'ancien-portfolio',
    category: {
      fr: 'Dépôt Git · Ancien Portfolio',
      en: 'Git Repo · Previous Portfolio',
    },
    period: 'Déc 2024',
    context: {
      fr: 'Projet personnel · JavaScript / HTML / CSS',
      en: 'Personal Project · JavaScript / HTML / CSS',
    },
    summary: {
      fr: "Premier portfolio personnel conçu en HTML, CSS et JavaScript vanilla, avec une interface directement inspirée de l'ergonomie de Discord (salons, profil et navigation par onglets).",
      en: 'First personal portfolio crafted in vanilla HTML, CSS, and JavaScript, featuring an interface directly inspired by Discord’s layout (channels, profile card, and tabbed navigation).',
    },
    highlights: {
      fr: [
        'Reproduction fidèle de codes visuels inspirés de Discord en CSS pur',
        'Interactions DOM dynamiques en JavaScript vanilla sans framework',
        'Hébergement statique via GitHub Pages',
      ],
      en: [
        'Discord-inspired visual layout and sidebar navigation in pure CSS',
        'Interactive DOM behavior built in vanilla JavaScript',
        'Static hosting on GitHub Pages',
      ],
    },
    stack: ['JavaScript', 'HTML5', 'CSS3', 'GitHub Pages'],
    repoUrl: 'https://github.com/Meduse-arch/ancien-portfolio',
    visualType: 'discord-portfolio',
  },
  {
    id: 'Dune',
    index: '06',
    title: 'Dune',
    repoName: 'Dune',
    category: {
      fr: 'Dépôt Git · Jeu de plateau Python',
      en: 'Git Repo · Python Board Game',
    },
    period: 'Déc 2024',
    context: {
      fr: 'Projet personnel · Python',
      en: 'Personal Project · Python',
    },
    summary: {
      fr: "Jeu de stratégie sur plateau développé en Python : déplacements orthogonaux de pions et système de capture par encerclement (entre deux pions alliés ou contre un mur).",
      en: 'Tactical board game implemented in Python featuring orthogonal piece movement and encirclement capture rules (trapping opponent pieces between two tokens or against a wall).',
    },
    highlights: {
      fr: [
        'Implémentation complète des règles de déplacement et de capture',
        'Gestion du cas particulier où un pion adverse entre volontairement dans un piège',
        'Condition de victoire par capture totale des pions adverses',
      ],
      en: [
        'Full movement and encirclement capture rule engine',
        'Handles edge cases where an enemy piece moves into a trap itself',
        'Win condition detection upon capturing all opponent pieces',
      ],
    },
    stack: ['Python', 'Algorithmique', 'Logique de jeu'],
    repoUrl: 'https://github.com/Meduse-arch/Dune',
    visualType: 'dune',
  },
  {
    id: 'Smith',
    index: '07',
    title: 'Smith',
    repoName: 'Smith',
    category: {
      fr: 'Dépôt Git · Générateur de bots Discord',
      en: 'Git Repo · Discord Bot Builder',
    },
    period: 'Déc 2024',
    context: {
      fr: 'Projet personnel · Python (Éducatif)',
      en: 'Personal Project · Python (Educational)',
    },
    summary: {
      fr: "Bot Discord éducatif conçu pour « forger » d'autres bots Discord : permet via commande slash de configurer dynamiquement les permissions (ex: commande clear) et l'activation des commandes slash générées.",
      en: 'Educational Discord bot designed to scaffold other Discord bots: lets users configure command permissions (such as clear) and slash-command generation via slash commands.',
    },
    highlights: {
      fr: [
        'Meta-bot Python générant la structure et le code d’autres bots Discord',
        'Configuration des droits d’accès aux commandes directement via slash commands',
        'Projet à but éducatif et non lucratif',
      ],
      en: [
        'Python meta-bot generating code and permissions for other Discord bots',
        'Dynamic command permission configuration via slash commands',
        'Built for educational and non-profit learning',
      ],
    },
    stack: ['Python', 'Discord API', 'Slash Commands', 'Code Generation'],
    repoUrl: 'https://github.com/Meduse-arch/Smith',
    visualType: 'python-bot',
  },
  {
    id: 'Arcsys',
    index: '08',
    title: 'Arcsys',
    repoName: 'Arcsys',
    category: {
      fr: 'Dépôt Git · Bot Discord JDR',
      en: 'Git Repo · RPG Discord Bot',
    },
    period: 'Déc 2024',
    context: {
      fr: 'Projet personnel · Python (Éducatif)',
      en: 'Personal Project · Python (Educational)',
    },
    summary: {
      fr: "Bot Discord de jeu de rôle en Python à but éducatif permettant de nettoyer des salons textuels, d'effectuer des lancers de dés et de gérer l'apprentissage de compétences pour un personnage.",
      en: 'Educational Python RPG Discord bot supporting channel clearing, dice rolling commands, and character skill learning mechanics.',
    },
    highlights: {
      fr: [
        'Système de lancers de dés pour les sessions de JDR sur Discord',
        'Commande d’apprentissage et de progression de personnage',
        'Modération simple avec nettoyage de salons (clear)',
      ],
      en: [
        'Dice rolling system tailored for Discord RPG sessions',
        'Character skill learning and progression command',
        'Channel management utility (clear)',
      ],
    },
    stack: ['Python', 'Discord API', 'JDR / RPG'],
    repoUrl: 'https://github.com/Meduse-arch/Arcsys',
    visualType: 'python-bot',
  },
  {
    id: 'Tore',
    index: '09',
    title: 'Tore',
    repoName: 'Tore',
    category: {
      fr: 'Dépôt Git · Bot d’automatisation Python',
      en: 'Git Repo · Python Automation Bot',
    },
    period: 'Déc 2024',
    context: {
      fr: 'Projet personnel · Python (Éducatif)',
      en: 'Personal Project · Python (Educational)',
    },
    summary: {
      fr: "Bot Discord éducatif en Python explorant le scraping web automatisé : interrogation d'une page de recherche, analyse HTML pour extraire les liens cibles et restitution formatée dans Discord.",
      en: 'Educational Python Discord bot exploring automated web scraping: querying search pages, parsing HTML to extract target links, and returning formatted responses inside Discord.',
    },
    highlights: {
      fr: [
        'Requêtes HTTP et parsing de pages web en Python',
        'Extraction automatisée de liens et envoi structuré sur Discord',
        'Expérimentation technique à but strictement éducatif',
      ],
      en: [
        'Automated HTTP fetching and HTML page parsing in Python',
        'Structured link extraction and Discord bot response formatting',
        'Technical learning project built for educational purposes',
      ],
    },
    stack: ['Python', 'Web Parsing', 'Discord API', 'Automatisation'],
    repoUrl: 'https://github.com/Meduse-arch/Tore',
    visualType: 'python-bot',
  },
  {
    id: 'iut-projects',
    index: '10',
    title: 'Java & Cloud Linux',
    category: {
      fr: 'Projets académiques · IUT Rangueil',
      en: 'Academic Projects · IUT Rangueil',
    },
    period: '2026',
    context: {
      fr: 'Projets en équipe de 4 · Université de Toulouse',
      en: '4-Person Team Sprints · University of Toulouse',
    },
    summary: {
      fr: "Deux projets académiques réalisés en équipe de 4 à l'IUT Rangueil : une application complète de vente de fromages en Java avec tests automatisés, et le déploiement d'une infrastructure cloud sécurisée sous Linux.",
      en: 'Two 4-person academic team projects at IUT Rangueil: an end-to-end Java cheese retail application with automated tests, and a secured Linux cloud & network deployment.',
    },
    highlights: {
      fr: [
        'Application Java de vente de fromages : développement complet, UI et tests automatisés',
        'Déploiement d’un service cloud : administration réseau et serveurs sous Linux',
        'Contrôle des accès, suivi des performances système et résolution d’incidents',
      ],
      en: [
        'Java cheese retail app: full implementation, UI collaboration, and automated tests',
        'Cloud service deployment: Linux server and network infrastructure administration',
        'Access control, system performance monitoring, and incident troubleshooting',
      ],
    },
    stack: ['Java', 'Tests Automatisés', 'Linux', 'Bash', 'Réseau', 'Sécurité', 'Git'],
    visualType: 'iut-systems',
  },
];

export const PILLARS: PillarItem[] = [
  {
    index: '01',
    title: { fr: 'Interfaces Web & Canvas', en: 'Web UI & Canvas' },
    subtitle: {
      fr: 'Apprentissage continu autour de React, TypeScript et des rendus interactifs.',
      en: 'Continuous practice in React, TypeScript, and interactive canvas rendering.',
    },
    asciiPattern:
      '01 // REACT · TYPESCRIPT · PIXI · KONVA\n::: + = * ##▓▓#▓# ▓▓▓#▓##* :%▓# %▓▓\n::: ▓#▓%▒ %%## %▓▓: #▓# %%▓ :▓▓% ▓##/\n::: ▒#▓#/▓▓+ ▓▓% #▓%# :#▓▓ ##▓▓ +#%#*',
    skills: [
      'React / React 19 & gestion d’état (Zustand)',
      'TypeScript, JavaScript ES6+, HTML5 & CSS3',
      'Tailwind CSS & interfaces responsives',
      'Canvas 2D / WebGL : PixiJS, Konva, Three.js',
    ],
  },
  {
    index: '02',
    title: { fr: 'Backend, Données & P2P', en: 'Backend, Data & P2P' },
    subtitle: {
      fr: 'Expérimentation sur les bases relationnelles, le pair-à-pair et les apps desktop.',
      en: 'Hands-on projects with relational databases, peer-to-peer, and desktop apps.',
    },
    asciiPattern:
      '02 // RUST · TAURI · SQL · WEBRTC\n::: /#%# ##▓+ =#▓# #%▓▓ /▓▓▓▓ +▓%#/ ▓\n::: ▒▓▓#= /#▓#= ▓#% #▓#▓ ▓%%▓: ▓%▓▓\n::: %▓▓▓ %▓%* /▓## =▓#▓+ #▓## *%%▓=',
    skills: [
      'PostgreSQL, SQLite, SQL & format JSON',
      'Bases en Rust (Tauri v2, Axum) & Electron',
      'Réseaux P2P (PearJS, simple-peer / WebRTC)',
      'Sécurité des échanges et schémas relationnels',
    ],
  },
  {
    index: '03',
    title: { fr: 'Socle Académique & Systèmes', en: 'CS Foundations & Systems' },
    subtitle: {
      fr: 'Compétences construites en BUT Informatique et lors des projets en équipe.',
      en: 'Foundations built during my CS degree and collaborative team sprints.',
    },
    asciiPattern:
      '03 // LINUX · JAVA · PYTHON · GIT\n::: :+▒/ + = *##▓▓#▓# ▓▓▓#▓##* :%▓#\n::: ▒%%# ##▓▓ ▒#▓▓ ▒%▓#▓ ▓#▓ %▓▓ *▓\n::: +##▓ ###= ▒:▓## ▓%▓▓:*#▓▓:▒#%##',
    skills: [
      'Java (POO, UI, tests automatisés), Python, PHP, C',
      'Linux, Shell (Bash), réseau & administration',
      'Git et travail collaboratif en équipe de 4',
      'Rigueur, autonomie et résolution de problèmes',
    ],
  },
];

export const EDUCATION = [
  {
    period: '2024 — Présent',
    periodEn: '2024 — Present',
    degree: { fr: 'BUT Informatique (2ᵉ année)', en: 'BUT Informatique — Year 2 (CS Degree)' },
    school: 'IUT Rangueil, Université de Toulouse',
    location: 'Toulouse, France',
    details: {
      fr: 'Formation universitaire en développement d’applications, bases de données, systèmes Linux, réseaux et projets en équipe.',
      en: 'University degree covering software engineering, databases, Linux systems, networking, and team projects.',
    },
  },
  {
    period: '2020 — 2023',
    periodEn: '2020 — 2023',
    degree: { fr: 'Baccalauréat Général', en: 'French General Baccalaureate' },
    school: 'Lycée Martin Malvy',
    location: 'Cazères-sur-Garonne, France',
    details: {
      fr: 'Spécialités : Numérique et Sciences Informatiques (NSI), Mathématiques, Sciences Économiques et Sociales (SES).',
      en: 'Specialties: Computer Science (NSI), Mathematics, Economics & Social Sciences (SES).',
    },
  },
];

export const SOFT_TRAITS = {
  languages: [
    { name: { fr: 'Français', en: 'French' }, level: { fr: 'Langue maternelle', en: 'Native' } },
    { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'A2', en: 'A2' } },
    { name: { fr: 'Espagnol', en: 'Spanish' }, level: { fr: 'A2', en: 'A2' } },
  ],
  softSkills: {
    fr: ['Travail en équipe', 'Autonomie', 'Rigueur', 'Résolution de problèmes', 'Curiosité technique'],
    en: ['Teamwork', 'Autonomy', 'Rigor', 'Problem solving', 'Technical curiosity'],
  },
  interests: {
    fr: ['Jeux de rôle', 'Informatique', 'Lecture'],
    en: ['Tabletop RPGs', 'Computer Science', 'Reading'],
  },
};
