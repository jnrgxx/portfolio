import { featuredProjects } from '../data/portfolioData'
import SectionHeader from '../Components/SectionHeader'
import ProjectCard from '../Components/ProjectCard'
import ExternalLink from '../Components/ExternalLink'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-shell font-mono">
      <SectionHeader
        id="projects-heading"
        command="top_projects"
        action={
          <ExternalLink
            href="/projects"
            className="text-xs font-semibold text-accent no-underline hover:underline"
          >
            view all →
          </ExternalLink>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 pt-3 border-t border-border">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
