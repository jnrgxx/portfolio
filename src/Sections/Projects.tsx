// import { certificates, projects } from '../data/portfolioData'

export default function Projects() {

    return (
        <section id="projects" className="flex flex-col min-h-hero-height border border-border p-section-pad font-mono">
             <div className="flex justify-between items-center text-sm mb-2 gap-2 px-4 pt-2">
                <span className="text-success font-mono">&gt; top_projects</span>
                <a href="/projects" className="text-xs font-semibold text-accent font-mono">view all ↗</a>
            </div>

            <div className="flex gap-2">
                <div className="flex flex-col gap-2 p-3 justify-between items-start border border-black rounded-sm">
                    <span className="">⭐ FEATURED</span>

                    <div className="flex gap-2">
                        <img className="h-5" src="programming.svg" alt="project-logo"/>
                        <h2 className="font-semibold truncate">Policy Tracker</h2>
                    </div>

                    <div className="text-xs">.NET • Angular • PostgreSQL • Docker</div>

                    <p className="text-xs text-start line-clamp-3">Policy management system with authentication, role-based access, auditing, and REST APIs. Build with clean architecture and best practices in mind.</p>
                
                    <div className="flex gap-4 mt-2">
                        <a className="text-xs text-accent">&gt; Live Demo</a>
                        <a className="text-xs text-accent">&gt; Source Code</a>
                    </div>
            
                </div>



                <div className="flex flex-col gap-2 p-3 justify-between items-start border border-black rounded-sm">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>

                    <div className="flex gap-2">
                        <img className="h-5" src="programming.svg" alt="project-logo"/>
                        <h2 className="font-semibold truncate">Policy Tracker</h2>
                    </div>

                    <div className="text-xs">.NET • Angular • PostgreSQL • Docker</div>

                    <p className="text-xs text-start line-clamp-3">Policy management system with authentication, role-based access, auditing, and REST APIs. Build with clean architecture and best practices in mind.</p>
                
                    <div className="flex gap-4 mt-2">
                        <a className="text-xs text-accent">&gt; Live Demo</a>
                        <a className="text-xs text-accent">&gt; Source Code</a>
                    </div>
            
                </div>

                <div className="flex flex-col gap-2 p-3 justify-between items-start border border-black rounded-sm">
                    <div className="flex gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    </div>

                    <div className="flex gap-2">
                        <img className="h-5" src="programming.svg" alt="project-logo"/>
                        <h2 className="font-semibold truncate">Policy Tracker</h2>
                    </div>

                    <div className="text-xs">.NET • Angular • PostgreSQL • Docker</div>

                    <p className="text-xs text-start line-clamp-3">Policy management system with authentication, role-based access, auditing, and REST APIs. Build with clean architecture and best practices in mind.</p>
                
                    <div className="flex gap-4 mt-2">
                        <a className="text-xs text-accent">&gt; Live Demo</a>
                        <a className="text-xs text-accent">&gt; Source Code</a>
                    </div>
            
                </div>
                


            </div>

             
        </section>
    )
}