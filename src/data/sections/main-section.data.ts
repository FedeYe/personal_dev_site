import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Tao Ren Federico Ye',
  role: 'Neolaureto Software Developer',
  details: [
    { label: 'Phone', value: '377 8154502', url: 'tel:377 8154502' },
    { label: 'Email', value: 'taorenfedericoye@gmail.com', url: 'mailto:taorenfedericoye@gmail.com' },
    { label: 'From', value: 'Vicenza, Italia' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '377 8154502' },
    { label: 'Email', value: 'taorenfedericoye@gmail.com' },
    { label: 'LinkedIn', value: '/in/tao-ren-federico-ye', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/FedeYe', url: 'https://github.com' },
    { label: 'Website', value: 'https://taorenfedericoye-portfolio.pages.dev/#profile', url: 'https://taorenfedericoye-portfolio.pages.dev/#profile', fullRow: true },
  ],
  description: `Mi chiamo Federico e sono uno sviluppatore software neolaureato con sede a Vicenza.
    Sono fortemente motivato dal problem solving e dalla possibilità di trasformare idee 
    complesse in soluzioni concrete e funzionanti. 
    Affronto ogni progetto con impegno e attenzione ai dettagli, trovando grande soddisfazione nel completamento di sistemi ben strutturati ed efficienti, ma allo stesso tempo esteticamente accativanti.
    Valorizzo il lavoro di squadra, la condivisione delle conoscenze e sono costantemente orientato all’apprendimento di nuove tecnologie per crescere sia dal punto di vista professionale che personale.`,
  tags: [{ name: 'Open to work' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Tao-Ren-Federico-Ye.pdf',
  },
  links: [
    github({ url: 'https://github.com/FedeYe' }),
    linkedin({ url: 'https://www.linkedin.com/in/tao-ren-federico-ye-48b581300/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
