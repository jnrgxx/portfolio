import { projects } from '../data/portfolioData'
import ExternalLink from '../Components/ExternalLink'
import Footer from '../Components/Footer'

function ProjectListItem({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const isComingSoon = project.url === '#'

  const content = (
    <>
      <div className="flex justify-between items-center mb-3">
        <span className="font-mono text-xxs text-text-muted">
          [ {isComingSoon ? '??' : String(index + 1).padStart(2, '0')} ]
        </span>
        {!isComingSoon && <span className="text-accent">↗</span>}
      </div>

      <h2 className="font-mono text-base text-terminal m-0 mb-2">{project.name}</h2>
      <p className="mb-3 font-mono text-xs text-text-secondary leading-relaxed m-0">{project.desc}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xxs text-accent bg-surface-elevated border border-border px-2 py-0.5 rounded-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  )

  if (isComingSoon) {
    return (
      <article className="section-shell flex flex-col justify-between p-4 text-left opacity-40">
        {content}
      </article>
    )
  }

  return (
    <ExternalLink
      href={project.url}
      className="section-shell flex flex-col justify-between p-4 text-left no-underline transition-colors hover:border-accent/40"
    >
      {content}
    </ExternalLink>
  )
}

export default function ProjectsPage() {
  return (
    <main id="main-content" className="py-4">
      <header className="mb-6 text-left">
        <p className="font-mono text-sm text-terminal m-0 mb-2">&gt; all_projects</p>
        <h1 className="font-heading text-2xl m-0">Projects</h1>
        <a href="/" className="font-mono text-xs text-accent no-underline hover:underline">
          ← back home
        </a>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
        {projects.map((p, index) => (
          <ProjectListItem key={p.name} project={p} index={index} />
        ))}
      </div>

      <Footer />
    </main>
  )
}
