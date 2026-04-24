import { projects } from '../data/portfolioData'

export default function ProjectsPage() {
    return (
        <div className="grid grid-cols-2 gap-2 w-full">
            {projects.map((p, index) => {
                const isComingSoon = p.url === "#"
                return (
                <a key={p.url} href={p.url} target="_blank" className={`${isComingSoon ? "opacity-40" : ""} flex flex-col p-3 bg-card border-[0.5px] border-bd`}>
                    <div className="flex justify-between items-center">
                        <span className="font-dm-mono text-xxs text-sub mb-1">
                            {/* Print the Index of the project as number and add "0" at the start if it's less than 10 */}
                            [ {isComingSoon ? "??" : String(index + 1).padStart(2, "0")} ]
                        </span>
                        <span className="text-acc">↗</span>
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-col items-start">
                        {/* Project Name */}
                        <h3 className="font-dmserif text-base text-ink">{p.name}</h3>
                        {/* Project Description */}
                        <p className="mb-2 font-syne leading-normal text-xs text-muted">{p.desc}</p>
                        
                        {/* Stack */}
                        <div className="flex gap-1.5">
                            {p.stack.map((tech) =>
                                <div key={tech} className="text-acc font-dm-mono bg-abg border-[0.5px] border-abr px-1.5 py-0.5 text-xxs">{tech}</div>
                            )}
                        </div>

                        {/* Link */}
                        <a href={p.url} target="_blank" className="font-dm-mono text-xxs mt-1.5 text-sub">{isComingSoon ? "" : p.url}</a>
                    </div>

                </a>
                )
            })}
        </div>
    )
  }