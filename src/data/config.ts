import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    // title: 'Tao Ren Federico Ye - Graduate Software Developer',
    // description:
    //   `Hi, I\'m Federico - a passionate graduate software developer based in Vicenza, Italy.
    //   I'm a very passionate and hardworking person who thrives on problem solving and bringing new ideas to 
    //   life. I love the process of building, learning, and iterating — especially the satisfaction that comes 
    //   from seeing a project come together after persistent effort. 
    //   I value collaboration, enjoy working in team environments, and am always eager to learn new tools and 
    //   techniques to improve both personally and professionally`,
    
    title: 'Tao Ren Federico Ye - Neolaureato in Informatica',
    description: 
      `Pagina personale di Tao Ren Federico Ye - sviluppatore software. Contiene un riassunto delle mie 
      skills, esperienze lavorative, progetti personali, educazione e informazioni di contatto`,
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
