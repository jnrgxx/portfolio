import { certificates, projects } from '../data/portfolioData'

export default function Projects() {

    return (
        <section id="projects" className="overflow-hidden relative flex flex-col min-h-hero-height border border-bd bg-cr p-section-pad">
             <div className="mb-5 tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 03 ]</p>
                <span className="text-acc">::</span>
                ls ./projects
             </div>

            <div className="z-20 mb-4 flex flex-col items-start">
                <div className="flex flex-col w-full mb-5">
                    <div className="flex justify-between items-center">
                        <h1 className="font-dmserif text-3xl">Recent <em className="text-acc">Projects</em></h1>
                        <a href="/projects" className="text-xs text-acc font-dm-mono">view all ↗</a>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 w-full">
                        {projects.map((p, index) => {
                            const isComingSoon = p.url === "#"
                            return (
                            <a key={p.url} href={p.url} target="_blank" className={`${isComingSoon ? "opacity-40" : ""} flex flex-col justify-between p-3 bg-card border-[0.5px] border-bd`}>
                                <div className="flex justify-between items-center">
                                    <span className="font-dm-mono text-xxs text-sub mb-1">
                                        {/* Print the Index of the project as number and add "0" at the start if it's less than 10 */}
                                        [ {isComingSoon ? "??" : String(index + 1).padStart(2, "0")} ]
                                    </span>
                                    <span className="text-acc">↗</span>
                                </div>

                                {/* Project Content */}
                                <div className="flex flex-col items-start justify-between h-full">
                                    {/* Project Name */}
                                    <h3 className="font-dmserif text-base text-ink">{p.name}</h3>
                                    {/* Project Description */}
                                    <p className="mb-2 font-syne leading-normal text-left text-xs text-muted">{p.desc}</p>
                                    
                                    {/* Stack */}
                                    <div className="flex gap-1.5">
                                        {p.stack.map((tech) =>
                                            <div key={tech} className="text-acc font-dm-mono bg-abg border-[0.5px] border-abr px-1.5 py-0.5 text-xxs">{tech}</div>
                                        )}
                                    </div>

                                    {/* Link */}
                                    <a href={p.url} target="_blank" className="font-dm-mono text-xxs mt-1.5 text-sub">{isComingSoon ? "" : p.url}</a>

                                    <div></div>
                                </div>

                            </a>
                            )
                        })}
                    </div>
                </div>

                <div className="flex w-full flex-col">

                    {/* CERTIFICATIONS HEADER */}
                    <div className=" flex mb-3 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="w-4 h-0.5 bg-acc inline-block"></span>
                            <h3 className="font-dm-mono text-sm font-medium leading-3.5">CERTIFICATIONS</h3>
                        </div>

                        <a href="/certificates" className="font-dm-mono text-xxs text-acc">
                            view all ›
                        </a>
                    </div>

                    {/* Certificates */}
                    {certificates.map(c =>
                        <a key={c.url} href={c.url} target="_blank" className="flex justify-between items-center bg-card px-3 py-2.5 border-[0.5px] border-bd mb-0">
                            <div className="flex flex-col items-start">
                                <h2 className="text-xs">{c.name}</h2>
                                <span className="font-dm-mono text-muted mt-0.5 text-xxs">{c.company} · {c.source}</span>
                            </div>

                            <div className="h-fit py-1 px-3 leading-none font-dm-mono text-xxs text-acc bg-abg border-[0.5px] border-abr">verified ✓</div>
                        </a>
                    )}
                </div>

            </div>

             <div className="z-1 select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Projects</div>
        </section>
    )
}