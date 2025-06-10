import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  cplusplus,
  css,
  docker,
  express,
  git,
  github,
  html5,
  jira,
  kotlin,
  mongoDb,
  nodejs,
  ollama,
  php,
  postgreSql,
  python,
  qt,
  react,
  shadcnui,
  springboot,
  streamlit,
  swift,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Già utilizzati',
      skills: [
        // languages
        typescript({ level: 3 }),
        python({ level: 2 }),
        cplusplus({ level: 3 }),
        html5({ level: 4 }),
        css({ level: 4 }),
        php({ level: 2 }),
        react({ level: 3 }),
        // frontend library/framework
        streamlit({ level: 4 }),
        tailwindCss({ level: 3 }),
        shadcnui({ level: 3 }),
        qt({ level: 2 }),
        // backend library/framework
        nodejs({ level: 3 }),
        express({ level: 2 }),
        // database
        postgreSql({ level: 2 }),
        mongoDb({ level: 3 }),
        // other
        ollama({ level: 4, description: 'Platform for downloading and running LLM locally.' }),
      ],
    },
    {
      title: 'Strumenti che uso',
      skills: [git(), github(), jira(), docker()],
    },
    {
      title: 'Voglio imparare',
      skills: [springboot(), swift(), kotlin()],
    },
    {
      title: 'Lingue conosciute',
      skills: [
        { icon: 'circle-flags:it', name: 'Polish - native' },
        { icon: 'circle-flags:en', name: 'English - C1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
