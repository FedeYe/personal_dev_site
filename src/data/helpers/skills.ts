import createSkillFactory from '@/data/_internals/create-skill-factory';
import { IconName } from '@/types/shared';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const auth0 = createSkillFactory({
  name: 'Auth0',
  icon: 'simple-icons:auth0',
  iconColor: '#EB5424',
  url: 'https://auth0.com/',
});

export const cplusplus = createSkillFactory({
  name: 'C++',
  icon: 'simple-icons:cplusplus',
  iconColor: '#00599C',
  url: 'https://auth0.com/',
});

export const css = createSkillFactory({
  name: 'CSS',
  icon: 'simple-icons:css' as IconName,
  iconColor: '#663399',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const express = createSkillFactory({
  name: 'Express',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: 'https://expressjs.com/it/',
});

export const git = createSkillFactory({
  name: 'git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const github = createSkillFactory({
  name: 'GitHub',
  icon: 'simple-icons:github',
  iconColor: '#181717',
  url: 'https://github.com/',
});

export const html5 = createSkillFactory({
  name: 'HTML5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://www.html5.org/',
});

export const javascript = createSkillFactory({
  name: 'Javascript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://www.javascript.com/',
});

export const jira = createSkillFactory({
  name: 'Jira',
  icon: 'simple-icons:jira',
  iconColor: '#0052CC',
  url: 'https://www.atlassian.com/it/software/jira',
});

export const jsonschema = createSkillFactory({
  name: 'JSON Schema',
  url: 'https://json-schema.org/',
});

export const kotlin = createSkillFactory({
  name: 'Kotlin',
  icon: 'simple-icons:kotlin',
  iconColor: '#7F52FF',
  url: 'https://kotlinlang.org/',
});

export const langchain = createSkillFactory({
  name: 'LangChain',
  icon: 'simple-icons:langchain' as IconName,
  iconColor: '#1C3C3C',
  url: 'https://www.langchain.com/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nodejs = createSkillFactory({
  name: 'NodeJs',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#5FA04E',
  url: 'https://nodejs.org/en',
});

export const ollama = createSkillFactory({
  name: 'Ollama',
  icon: 'simple-icons:ollama' as IconName,
  iconColor: '#000000',
  url: 'https://ollama.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'simple-icons:php',
  iconColor: '#777BB4',
  url: 'https://www.php.net/',
});

export const qt = createSkillFactory({
  name: 'Qt',
  icon: 'simple-icons:qt',
  iconColor: '#41CD52',
  url: 'https://www.qt.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const shadcnui = createSkillFactory({
  name: 'Shadcn/ui',
  icon: 'simple-icons:shadcnui' as IconName,
  iconColor: '#000000',
  url: 'https://ui.shadcn.com/',
});

export const springboot = createSkillFactory({
  name: 'Spring Boot',
  icon: 'simple-icons:springboot',
  iconColor: '#6DB33F',
  url: 'https://spring.io/projects/spring-boot',
});

export const streamlit = createSkillFactory({
  name: 'Shadcn/ui',
  icon: 'simple-icons:streamlit',
  iconColor: '#FF4B4B',
  url: 'https://streamlit.io/',
});

export const stripe = createSkillFactory({
  name: 'Stripe',
  icon: 'simple-icons:stripe',
  iconColor: '#635BFF',
  url: 'https://stripe.com/it',
});

export const swift = createSkillFactory({
  name: 'Swift',
  icon: 'simple-icons:swift',
  iconColor: '#F05138',
  url: 'https://www.swift.org/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const txtai = createSkillFactory({
  name: 'Framework Txtai',
  url: 'https://neuml.github.io/txtai/',
});

export const vite = createSkillFactory({
  name: 'Vite',
  icon: 'simple-icons:vite',
  iconColor: '#646CFF',
  url: 'https://vite.dev/',
});
