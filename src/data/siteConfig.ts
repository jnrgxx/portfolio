export const siteConfig = {
  terminalPrompt: 'john@nemodev',
  name: 'John Rogee Turqueza',
  nickname: "aka 'Nemo'",
  title: 'Junior Software Engineer',
  bio: 'Building backend applications with Java - Spring Boot, C# - .NET, ReactJS, and modern software engineering practices.',
  status: 'Available for Software Engineering opportunities',
  snapshotRole: 'Software Test Engineer',
  snapshotStatus: 'Open to Work',
  location: 'Philippines',
  email: 'jrogeet@gmail.com',
  resumePath: '/John-Rogee-Turqueza-Resume.pdf',
  profileImage: '/profile.webp',
  social: {
    github: 'https://github.com/jnrgxx',
    linkedin: 'https://www.linkedin.com/in/jrogeet/',
    instagram: 'https://www.instagram.com/rogee.archive/',
  },
  copyright: '© 2025 John Rogee Turqueza',
} as const

export const topSkills = [
  'Java',
  'Spring Boot',
  '.NET',
  'React',
  'TypeScript',
  'SQL',
  'Docker',
  'PostgreSQL',
  'REST APIs',
  'JMeter',
  'Git',
  'TailwindCSS',
] as const

export const allSkills = [
  ...topSkills,
  'Python',
  'PHP',
  'Angular',
  'JavaScript',
  'C#',
  'Groovy',
  'FastAPI',
  'LangChain',
  'Katalon Studio',
  'MySQL',
  'Vercel',
  'Postman',
  'Figma',
] as const

export const aboutContent = {
  summary:
    "I'm a CS graduate passionate about programming, design, and building software that's both functional and enjoyable to use.",
  interests: [
    'Distributed Systems',
    'AI & Machine Learning',
    'Data Engineering',
    'Test Automation',
    'Clean Architecture',
  ],
  closing: "Let's build something great together.",
} as const
