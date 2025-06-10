import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, website } from '../helpers/links';
import {
  auth0,
  cplusplus,
  css,
  docker,
  express,
  html5,
  javascript,
  jsonschema,
  mongoDb,
  nodejs,
  php,
  postgreSql,
  python,
  qt,
  react,
  reactQuery,
  shadcnui,
  streamlit,
  stripe,
  tailwindCss,
  txtai,
  typescript,
  vite,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Progetti',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'QuickBite',
      image: import('@/assets/portfolio/quickbite.jpeg'),
      dates: [new Date('2025-04'), new Date('2025-05')],
      details: [
        { label: 'Team size', value: '1 persona' },
        { label: 'My role', value: ['Full-stack Developer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Website'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/homepage-quickbite.jpeg'), alt: 'Homepage screenshot' },
        { src: import('@/assets/portfolio/search_results-quickbite.jpeg'), alt: 'Search results screenshot' },
        {
          src: import('@/assets/portfolio/manage_restaurant-quickbite.jpeg'),
          alt: 'Manage restaurant info screenshot',
        },
      ],
      description: `-Sviluppata una piattaforma per la gestione di ordini da ristoranti, con funzionalità sia lato 
        cliente che amministratore, come progetto full-stack.
        -Implementate funzionalità chiave come ricerca testuale e filtrata, gestione del profilo utente, 
        gestione ristorante (menù, informazioni, stato ordini).
        -Realizzato il sito in modo dinamico e completamente responsive, ottimizzato per desktop e dispositivi 
        mobili.
        -Gestita l’interazione tra frontend e backend tramite API RESTful, con attenzione a modularità e 
        scalabilità.
        -Acquisite competenze pratiche nell’uso di tecnologie moderne e best practice nello sviluppo 
        full stack.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [
          react(),
          typescript(),
          shadcnui(),
          tailwindCss(),
          nodejs(),
          express(),
          mongoDb(),
          auth0(),
          reactQuery(),
          stripe(),
          vite(),
        ],
      },
      links: [
        website({ url: 'https://quickbite-app-frontend.onrender.com/' }),
        github({ url: 'https://github.com/FedeYe/QuickBite-App-frontend' }),
        github({ url: 'https://github.com/FedeYe/QuickBite-App-backend' }),
      ],
    },
    {
      name: 'ChatSQL',
      image: import('@/assets/portfolio/chatsql.jpeg'),
      dates: [new Date('2023-10'), new Date('2024-04')],
      details: [
        { label: 'Team size', value: '7 persone' },
        {
          label: 'My role',
          value: ['Project Manager', 'Progettista', 'Analista dei Requisiti', 'Front-end Developer'],
        },
        { label: 'Company', value: 'Zucchetti' },
        { label: 'Category', value: ['Website'] },
      ],
      pdfDetails: [
        {
          label: 'GitHub',
          value: 'https://github.com/Torchlight-SWE2324/ChatSQL',
          url: 'https://github.com/Torchlight-SWE2324/ChatSQL',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/main_ui-chatsql.jpeg'), alt: 'Main UI screenshot' },
        { src: import('@/assets/portfolio/response_generation-chatsql.jpeg'), alt: 'Generated response screenshot' },
        { src: import('@/assets/portfolio/file_selection-chatsql.jpeg'), alt: 'Database file selection screenshot' },
      ],
      description: `Progetto universitario per il corso di Ingegneria del software. 
        -Sviluppata un’applicazione web per generare prompt mirati da fornire a un Large Language Model (LLM), 
        a partire da query in linguaggio naturale.
        -Il prompt viene generato dalla combinazione della query utente con i dati contenuti in un database 
        rappresentato tramite file JSON, utilizzando un LLM con task di Sentence Similarity per trovare le 
        tabelle inerenti alla richiesta.
        -Obiettivo: facilitare l’interrogazione di basi di dati senza conoscenze SQL specifiche.
        -Approfonditi concetti di NLP, prompt engineering e rappresentazione semantica dei dati.
        -Progetto sviluppato in team da studenti, con il supporto tecnico e metodologico di Zucchetti S.p.A.,
        azienda proponente.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [python(), streamlit(), docker(), txtai(), jsonschema()],
      },
      links: [github({ url: 'https://github.com/Torchlight-SWE2324/ChatSQL' })],
    },
    {
      name: 'FitnessCenter',
      image: import('@/assets/portfolio/fitness_center.jpeg'),
      dates: [new Date('2023-05'), new Date('2023-09')],
      details: [
        { label: 'Team size', value: '3 persone' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Website'] },
      ],
      pdfDetails: [
        {
          label: 'GitHub',
          value: 'https://github.com/IsThisDemi/FitnessCenter',
          url: 'https://github.com/IsThisDemi/FitnessCenter',
        },
      ],
      description: `-Sviluppato un sito web per una ipotetica palestra, con funzionalità dedicate sia agli utenti 
        che agli amministratori.
        -Implementate pagine e interfacce accessibili nel rispetto delle linee guida WCAG 2.1, con un approccio 
        conforme agli standard di accessibilità, migliorando usabilità e inclusività del sito.
        -Obiettivo: progetto finalizzato alla comprensione pratica di sviluppo accessibile e strutturato.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [html5(), css(), php(), javascript(), postgreSql()],
      },
      links: [github({ url: 'https://github.com/IsThisDemi/FitnessCenter' })],
    },
    {
      name: 'PCBuilder',
      image: import('@/assets/portfolio/pcbuilder.jpeg'),
      dates: [new Date('2022-12'), new Date('2023-06')],
      details: [
        { label: 'Team size', value: '2 persone' },
        { label: 'My role', value: 'Analista, Progettista, Front-end Developer' },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Desktop Application', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'GitHub', value: 'https://github.com/FedeYe/PCBuilder', url: 'https://github.com/FedeYe/PCBuilder' },
      ],
      description: `Sviluppo di un'applicazione che permette di assemblare un computer, scegliendo le varie componenti 
        hardware, tenendo conto della compatibilità tra esse. 
        Obiettivo: realizzare un'applicazione usando Qt e rispettando i vincoli posti dal professore.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [cplusplus(), qt()],
      },
      links: [github({ url: 'https://github.com/FedeYe/PCBuilder' })],
    },
    {
      name: 'MyPal',
      image: import('@/assets/portfolio/mypal.jpeg'),
      dates: [new Date('2022-05'), new Date('2022-06')],
      details: [
        { label: 'Team size', value: '2 persone' },
        { label: 'My role', value: 'Progettista Database' },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Database'] },
      ],
      pdfDetails: [
        {
          label: 'GitHub',
          value: 'https://github.com/mattiapandolfo/MyPAL',
          url: 'https://github.com/mattiapandolfo/MyPAL',
        },
      ],
      description: `Obiettivo: dprogettare, creare e popolare un database in PostgreSQL rispettando i
      parametri dati dal corso, mostrando alcune query, usando PostgreSQL e C++.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [cplusplus(), postgreSql()],
      },
      links: [github({ url: 'https://github.com/mattiapandolfo/MyPAL' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
