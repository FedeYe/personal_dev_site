import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educazione',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Laurea in Computer Science',
      institution: 'Università degli Studi di Padova',
      image: import('@/assets/logos/unipd.png'),
      dates: [new Date('2020.10'), new Date('2024.09')],
      description: "Laurea triennale in Informatica. Voto finale: 108/110.",
      links: [website({ url: 'https://www.unipd.it/' })],
    },
    {
      title: 'Diploma scientifico - Scienze Applicate',
      institution: 'Liceo scientifico G.B.Quadri',
      image: import('@/assets/logos/liceoquadri.png'),
      dates: [new Date('2015.09'), new Date('2020.07')],
      description: "Diploma Liceo Scientifico, indirizzo Scienze applicate. Voto finale: 100/100.",
      links: [website({ url: 'https://www.liceoquadri.edu.it/' })],
    },
    {
      title: 'Certificato Lingua Inglese - C1 Advanced',
      institution: 'Cambridge Assessment English',
      image: import('@/assets/logos/cambridge.webp'),
      dates: [new Date('2019.10'), new Date('2020.06')],
      description: ``,
      links: [website({ url: 'https://www.cambridgeenglish.org/' })],
    },
    {
      title: 'ECDL Full Standard',
      institution: 'AICA - Associazione Italiana per l\'Informatica e il Calcolo Automatico',
      image: import('@/assets/logos/liceoquadri.png'),
      dates: [new Date('2015.09'), new Date('2020.07')],
      description: "",
      links: [website({ url: 'https://www.icdl.it/' })],
    }
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
