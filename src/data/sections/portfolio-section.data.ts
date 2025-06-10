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
        {
          label: 'Website',
          value: 'https://quickbite-app-frontend.onrender.com/',
          url: 'https://quickbite-app-frontend.onrender.com/',
        },
        {
          label: 'FE Repository',
          value: 'https://github.com/FedeYe/QuickBite-App-frontend',
          url: 'https://github.com/FedeYe/QuickBite-App-frontend',
        },
        {
          label: 'BE Repository',
          value: 'https://github.com/FedeYe/QuickBite-App-backend',
          url: 'https://github.com/FedeYe/QuickBite-App-backend',
        },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/homepage-quickbite.jpeg'), alt: 'Homepage screenshot' },
        { src: import('@/assets/portfolio/search_results-quickbite.jpeg'), alt: 'Search results screenshot' },
        {
          src: import('@/assets/portfolio/manage_restaurant-quickbite.jpeg'),
          alt: 'Manage restaurant info screenshot',
        },
      ],
      description: `-Sviluppata una piattaforma per la gestione di ordini da ristoranti, con funzionalità sia lato cliente che amministratore, come progetto full-stack.
        -Implementate funzionalità chiave come ricerca testuale e filtrata, gestione del profilo utente, gestione ristorante (menù, informazioni, stato ordini).
        -Gestita l’interazione tra frontend e backend tramite API RESTful, rendendo l'interfaccia responsive e adatta a schermi di diverse dimensioni.
        -Acquisite competenze pratiche nell’uso di tecnologie moderne e best practice nello sviluppo full stack.`,
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
        github({ name: 'Github repo frontend', url: 'https://github.com/FedeYe/QuickBite-App-frontend' }),
        github({ name: 'Github repo backend',url: 'https://github.com/FedeYe/QuickBite-App-backend' }),
      ],
    },
    {
      name: 'ChatSQL',
      image: import('@/assets/portfolio/chatsql.png'),
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
      description: `-Sviluppata un’applicazione web per generare prompt mirati da fornire a un Large Language Model (LLM), a partire da query in linguaggio naturale.
        -Il prompt conterrà i dati presi dal database recuperati attraverso un LLM con task di Sentence Similarity per trovare le tabelle più inerenti alla richiesta.
        -Obiettivo: facilitare l’interrogazione di basi di dati senza conoscenze SQL specifiche.
        -Progetto sviluppato in team da studenti, con il supporto tecnico e metodologico di Zucchetti S.p.A., azienda proponente.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [
          python(),
          streamlit(),
          docker(),
          txtai({ description: 'Libreria open source per l’elaborazione del linguaggio naturale (NLP) in Python' }),
          jsonschema({ description: 'Libreria Python usata per verificare la pertinenza di un file in formato JSON con un dato schema'}),
        ],
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
      description: `-Sviluppo di un sito web per una ipotetica palestra, con funzionalità dedicate sia agli utenti che agli amministratori, implementando pagine e interfacce accessibili nel rispetto delle linee guida WCAG 2.1.
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
      description: `Sviluppo di un'applicazione che permette di assemblare computer, scegliendo le varie componenti hardware, utilizzando il framework Qt.`,
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
      description: `Obiettivo: progettare, creare e popolare un database in PostgreSQL rispettando i parametri dati dal corso, mostrando alcune query, usando PostgreSQL e C++.`,
      tagsList: {
        title: 'Tecnologie',
        tags: [cplusplus(), postgreSql()],
      },
      links: [github({ url: 'https://github.com/mattiapandolfo/MyPAL' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
