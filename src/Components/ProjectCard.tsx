import type { Project } from '../data/portfolioData'
import ExternalLink from './ExternalLink'

interface ProjectCardProps {
  project: Project
}

function WindowDots() {
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
    </div>
  )
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.url === '#'
  const stackLabel = project.stack.join(' • ')

  return (
    <article className="section-shell flex flex-col gap-3 p-4 h-full text-left transition-colors hover:border-accent/40">
      {project.featured ? (
        <span className="font-mono text-xxs text-accent-orange tracking-wide">★ FEATURED</span>
      ) : (
        <WindowDots />
      )}

      <div className="flex items-center gap-2 min-w-0">
        <img className="h-5 w-5 shrink-0" src="/programming.svg" alt="" aria-hidden="true" />
        <h3 className="font-mono text-sm font-semibold text-terminal truncate m-0">{project.name}</h3>
      </div>

      <p className="font-mono text-xxs text-text-muted m-0">{stackLabel}</p>

      <p className="font-mono text-xs text-text-secondary leading-relaxed line-clamp-3 m-0 flex-1">
        {project.desc}
      </p>

      {!isComingSoon && (
        <div className="flex flex-wrap gap-4 mt-auto pt-1">
          {project.demoUrl && (
            <ExternalLink
              href={project.demoUrl}
              className="font-mono text-xs text-accent no-underline hover:underline"
            >
              &gt; Live Demo
            </ExternalLink>
          )}
          <ExternalLink
            href={project.url}
            className="font-mono text-xs text-accent no-underline hover:underline"
          >
            &gt; Source Code
          </ExternalLink>
        </div>
      )}
    </article>
  )
}
