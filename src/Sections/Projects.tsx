
// projects name, description, tech stack, link 

interface ProjectStructure {
    name: string,
    desc: string,
    stack: Array<string>,
    url: string,
}

interface certStructure {
    name: string,
    company: string,
    source: string,
    verified: boolean,
    url: string,
}

// Top 4: Projects
const projects: ProjectStructure[] = [
    {name: "Zealia", desc: "RIASEC Team Matching Website", stack: ["PHP", "JavaScript", "TailwindCSS"], url: "https://github.com/jnrgxx/Zealia"},
    {name: "are.na-blocks-canvas", desc: "RIASEC Team Matching Website", stack: ["PHP", "JavaScript", "TailwindCSS"], url: "https://github.com/jnrgxx/"},
    {name: "3", desc: "RIASEC Team Matching Website", stack: ["PHP", "JavaScript", "TailwindCSS"], url: "https://github.com/jnrgxx/Zwww"},
    {name: "coming soon...", desc: "Something is cooking in the lab.", stack: ["???"], url: "#"}
]

// Top 3: Certifications

const certs: certStructure[] = [
    {name: "Certified Support Technician Cybersecurity (CCST Cybersecurity)", company: "Cisco", source: "Certiport", verified: true, url: "https://www.credly.com/badges/bc2ec00f-6132-4eaf-ab01-6a4c0a89d89c/linked_in_profile"},
    {name: "PCAP: Programming Essentials in Python", company: "Cisco Networking Academy & OpenEDG Python Institute", source: "Netacad", verified: true, url: "https://www.linkedin.com/in/jrogeet/details/certifications/1734626606926/single-media-viewer?type=DOCUMENT&profileId=ACoAAEJd4MEBcNifXTtCX7fSTLw2-bqBBsTXlC0&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BkUL923axQFCs%2FlHOFgF%2Bxg%3D%3D"},
    {name: "Introduction to Software Engineering", company: "IBM", source: "Coursera", verified: true, url: "https://www.coursera.org/account/accomplishments/verify/MIOS4AP9U8C6"},
]

export default function Projects() {

    return (
        <section className="overflow-hidden relative flex flex-col min-h-hero-height border border-bd bg-cr p-section-pad">
             <div className="mb-5 tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 03 ]</p>
                <span className="text-acc">::</span>
                ls ./projects
             </div>

            <div className="mb-4 flex flex-col items-start">
                <div className="flex flex-col w-full mb-5">
                    <div className="flex justify-between items-center">
                        <h1 className="font-dmserif text-3xl">Recent <em className="text-acc">Work</em></h1>
                        <a href="#" className="text-xs text-acc font-dm-mono">view all ↗</a>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 w-full">
                        {projects.map((p, index) =>
                            <a key={p.url} href="#" className={`${p.url == "#" ? "opacity-40" : ""} flex flex-col p-3 bg-card border-[0.5px] border-bd`}>
                                <div className="flex justify-between items-center">
                                    <span className="font-dm-mono text-xxs text-sub mb-1">
                                        {/* Print the Index of the project as number and add "0" at the start if it's less than 10 */}
                                        [ {p.url == "#" ? "??" : String(index + 1).padStart(2, "0")} ]
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
                                    <a href={p.url} target="_blank" className="font-dm-mono text-xxs mt-1.5 text-sub">{p.url !== "#" ? p.url : ""}</a>

                                    <div></div>
                                </div>

                            </a>
                        )}
                    </div>
                </div>

                <div className="flex w-full flex-col">

                    {/* CERTIFICATIONS HEADER */}
                    <div className=" flex mb-3 justify-between">
                        <div className="flex gap-2 items-center">
                            <span className="w-4 h-0.5 bg-acc inline-block"></span>
                            <h3 className="font-dm-mono text-sm font-medium leading-3.5">CERTIFICATIONS</h3>
                        </div>

                        <a href="#" className="font-dm-mono text-xxs text-acc">
                            view all ›
                        </a>
                    </div>

                    {/* Certificates */}
                    {certs.map(c =>
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

             <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Projects</div>
        </section>
    )
}