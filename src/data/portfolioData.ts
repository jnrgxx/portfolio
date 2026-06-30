export interface Project {
  name: string
  desc: string
  stack: string[]
  url: string
}

export interface Certificate {
  name: string
  company: string
  source: string
  verified: boolean
  url: string
}

export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: 'Lore of Legends',
    desc: 'Interactive storytelling platform blending AI-powered narratives with user-driven choices to create personalized legend-like adventures.',
    stack: ['Fast API', 'React', 'PostgreSQL', 'LangChain', 'TypeScript', ],
    url: 'https://github.com/jnrgxx/lore-of-legends',
  },
  {
    name: 'Zealia',
    desc: 'Team Composition and Role Assignment Web-Based Application for Computing Research using Sorting Algorithm',
    stack: ['PHP', 'JavaScript', 'TailwindCSS'],
    url: 'https://github.com/jnrgxx/Zealia',
  },
  {
    name: 'AMBITION',
    desc: 'MBTI Personalities Balanced Group Matching',
    stack: ['JavaScript', 'HTML', 'CSS'],
    url: 'https://ambition-beta.vercel.app/',
  },
  {
    name: 'coming soon...',
    desc: 'Something is cooking in the lab.',
    stack: ['???'],
    url: '#',
  },
]

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



export const journeys: JourneyItem[] = [
  {
    year: "2025 – Present",
    title: "Software Test Engineer",
    subtitle: "East West Banking Corporation",
    description:
      "Leading performance testing and test automation for enterprise banking systems using JMeter, Katalon Studio, Groovy, and Bash. Designing scalable test plans, API load tests, and automation scripts to improve testing efficiency.",
  },
  {
    year: "2021 – 2025",
    title: "BS Computer Science",
    subtitle: "Our Lady of Fatima University",
    description:
      "Graduated with a Bachelor of Science in Computer Science. Dean's Lister (2023) with a strong foundation in software engineering, algorithms, and web development.",
  },
  {
    year: "2025",
    title: "Software QA Tester",
    subtitle: "East West Banking Corporation",
    description:
      "Performed functional testing, defect reporting, and quality assurance for enterprise banking applications, ensuring software reliability before production releases.",
  },
  {
    year: "2024 – 2025",
    title: "4th-Year Representative",
    subtitle: "Junior Philippine Computer Society (JPCS)",
    description:
      "Coordinated student events, managed logistics and booth operations, and designed promotional materials to increase engagement in computing-related activities.",
  }

];