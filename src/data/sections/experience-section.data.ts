import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import { jira, langchain, mongoDb, ollama, python, streamlit, typescript } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Esperienze lavorative',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'AI Software Engineer - Stage Formativo',
      company: 'ZERO12 srl',
      image: import('@/assets/logos/zero12-logo.jpg'),
      dates: [new Date('2024-05'), new Date('2024-07')],
      description: `
        -Sviluppato un assistente AI per JIRA basato su Retrieval-Augmented Generation (RAG) e modelli LLM locali, per generare automaticamente proposte di risoluzione.
        -Realizzata una versione chatbot dell’assistente con interfaccia in stile ChatGPT per migliorare l’interazione utente.
        -Condotta un’analisi comparativa tra LLM locali e AWS Bedrock, valutando costi, performance e aspetti legati alla privacy.
        -Gestione autonoma del progetto in ambiente Agile, in stretta collaborazione con il team di sviluppo aziendale. 
      `,
      tagsList: {
        title: 'Tecnologie',
        tags: [typescript(), python(), ollama(), streamlit(), langchain(), mongoDb(), jira()],
      },
      links: [website({ url: 'https://www.zero12.it/' }), linkedin({ url: 'https://www.linkedin.com/company/vargroup-7circle/' })],
    },
    {
      role: 'Barista',
      company: 'Bar Incontro Snc',
      image: import('@/assets/logos/bar_incontro_logo.jpeg'),
      dates: [new Date('2019-06'), null],
      description: `
        -Gestione del servizio al banco e ai tavoli, con particolare attenzione alla qualità del servizio e alla soddisfazione del cliente.
        -Preparazione di bevande calde e fredde, cocktail e snack, mantenendo standard elevati di igiene e presentazione.
        -Cameriere di sala, gestione delle ordinazioni e del servizio al tavolo, garantendo un'esperienza fluida e piacevole.  
      `,
      tagsList: {
        title: '',
        tags: [],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
