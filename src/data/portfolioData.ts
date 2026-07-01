export interface Project {
  name: string
  desc: string
  stack: string[]
  url: string
  demoUrl?: string
  featured?: boolean
}

export interface Certificate {
  name: string
  company: string
  source: string
  verified: boolean
  url: string
}

export interface JourneyItem {
  year: string
  title: string
  subtitle: string
  description: string
}

export const projects: Project[] = [
  {
    name: 'Policy Tracker',
    desc: 'Policy management system with authentication, role-based access, auditing, and REST APIs. Built with clean architecture and best practices in mind.',
    stack: ['.NET', 'Angular', 'PostgreSQL', 'Docker'],
    url: 'https://github.com/jnrgxx',
    featured: true,
  },
  {
    name: 'Lore of Legends',
    desc: 'Interactive storytelling platform blending AI-powered narratives with user-driven choices to create personalized legend-like adventures.',
    stack: ['FastAPI', 'React', 'PostgreSQL', 'LangChain', 'TypeScript'],
    url: 'https://github.com/jnrgxx/lore-of-legends',
  },
  {
    name: 'Zealia',
    desc: 'Team composition and role assignment web application for computing research using sorting algorithms.',
    stack: ['PHP', 'JavaScript', 'TailwindCSS'],
    url: 'https://github.com/jnrgxx/Zealia',
    demoUrl: 'https://github.com/jnrgxx/Zealia',
  },
  {
    name: 'AMBITION',
    desc: 'MBTI personalities balanced group matching application.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://ambition-beta.vercel.app/',
    demoUrl: 'https://ambition-beta.vercel.app/',
  },
]

export const featuredProjects = projects.slice(0, 3)

export const certificates: Certificate[] = [
  {
    name: 'Certified Support Technician Cybersecurity (CCST Cybersecurity)',
    company: 'Cisco',
    source: 'Certiport',
    verified: true,
    url: 'https://www.credly.com/badges/bc2ec00f-6132-4eaf-ab01-6a4c0a89d89c/linked_in_profile',
  },
  {
    name: 'PCAP: Programming Essentials in Python',
    company: 'Cisco Networking Academy & OpenEDG Python Institute',
    source: 'Netacad',
    verified: true,
    url: 'https://www.linkedin.com/in/jrogeet/details/certifications/1734626606926/single-media-viewer?type=DOCUMENT&profileId=ACoAAEJd4MEBcNifXTtCX7fSTLw2-bqBBsTXlC0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BkUL923axQFCs%2FlHOFgF%2Bxg%3D%3D',
  },
  {
    name: 'Introduction to Software Engineering',
    company: 'IBM',
    source: 'Coursera',
    verified: true,
    url: 'https://www.coursera.org/account/accomplishments/verify/MIOS4AP9U8C6',
  },
]

export const featuredCertificates: Certificate[] = (() => {
  const verified = certificates.filter((c) => c.verified)
  const unverified = certificates.filter((c) => !c.verified)
  return [...verified, ...unverified].slice(0, 3)
})()

export const journeys: JourneyItem[] = [
  {
    year: '2025 – Present',
    title: 'Software Test Engineer',
    subtitle: 'East West Banking Corporation',
    description:
      'Leading performance testing projects and test automation for enterprise banking systems using JMeter, Katalon Studio, Groovy, and Bash.',
  },
  {
    year: '2021 – 2025',
    title: 'BS Computer Science',
    subtitle: 'Our Lady of Fatima University',
    description:
      "Graduated with a Bachelor of Science in Computer Science. Dean's Lister (2023) with a strong foundation in software engineering and web development.",
  },
  {
    year: '2025',
    title: 'Software QA Tester',
    subtitle: 'East West Banking Corporation',
    description:
      'Performed functional testing, defect reporting, and quality assurance for enterprise banking applications before production releases.',
  },
  {
    year: '2024 – 2025',
    title: '4th-Year Representative',
    subtitle: 'Junior Philippine Computer Society (JPCS)',
    description:
      'Coordinated student events, managed logistics, and designed promotional materials to increase engagement in computing activities.',
  },
]