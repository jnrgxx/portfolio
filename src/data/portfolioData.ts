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

export const projects: Project[] = [
  {
    name: 'Zealia',
    desc: 'RIASEC Balanced Team Matching Website',
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
    name: '3',
    desc: 'RIASEC Team Matching Website',
    stack: ['PHP', 'JavaScript', 'TailwindCSS'],
    url: 'https://github.com/jnrgxx/Zwww',
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
