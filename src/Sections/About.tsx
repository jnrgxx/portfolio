import Stack from '../Components/Stack';
import GithubUserEvents from '../Components/GithubEvents';

export default function About() {

    type StackStructure = {
        category: string,
        tech: Array<string>
    }

    const techStack: StackStructure[] = [
        {category: "Programming Languages", tech: ["Python", "PHP", "JavaScript", "TypeScript", "Java", "SQL", "Groovy"]},
        {category: "Backend & APIs", tech: ["FastAPI", "Laravel", "Node.js", "REST APIs", "SQLAlchemy", "Pydantic", "LangChain"]},
        {category: "Frontend", tech: ["React", "TailwindCSS"]},
        {category: "Databases", tech: ["PostgreSQL", "MySQL", "SQLite", "Supabase", "Neon"]},
        {category: "Performance Testing & Automation", tech: ["JMeter", "Katalon Studio", "API Load Testing", "Test Automation"]},
        {category: "DevOps & Cloud", tech: ["Docker", "GitHub Actions", "Azure DevOps", "Vercel", "Render", "Railway"]},
        {category: "Monitoring & Tools", tech: ["Swagger/OpenAPI", "Grafana", "Postman", "Git", "Figma", "Notion"]},
    ];

    return (
        <section id="about" className="overflow-hidden relative flex flex-col h-hero-height border border-bd bg-cr p-section-pad">
             <div className="tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] mb-5 flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 02 ]</p>
                <span className="text-acc">::</span>
                cat about.md
             </div>

            {/* Half */}
             <div className="flex justify-between">
                {/* Left */}
                <div className="w-[70%] flex flex-col items-start">
                    <h2 className="font-dmserif text-section-heading leading-tight mb-3 font-bold tracking-tight">Build with <span className="italic text-acc">intent.</span> Fueled by curiosity.</h2>
                    <p className="text-muted text-sm font-syne text-left mb-5">CS graduate and Test Engineer building full-stack systems that are designed, tested, and ready for real-world use.</p>
                
                    <div className="w-full border-t-[0.5px] border-bd pt-3.5">
                        <Stack arr={techStack} />

                        <div className="">
                            <div className=""></div>
                        </div>
                    </div>
                </div>

                <div className="w-[30%] p-4 flex flex-col items-end">

                    <div className="w-[90%] mb-2 flex flex-col items-start p-4 bg-ink text-cr font-dm-mono text-xxs">
                        <div className="text-base text-cr/30 mb-1">&gt;_</div>
                        <div className="text-sm mb-1">[ rogee.archive ]</div>
                        <span className="text-xxs text-cr/30 mb-4 text-opacity-30">PORTFOLIO CARD :: v2.0</span>
                    
                        <div className="text-cr/30">ROLE</div>
                        <span className="text-xs mb-4">Test Engineer · Developer</span>


                        <div className="text-cr/30">STATUS</div>
                        <div className="text-blkgrn text-xs mb-4">Open for work ●</div>

                        <div className="text-cr/30">LOCATION</div>
                        <div className="">Manila, PH 🇵🇭</div>

                        {/* <div className="text-cr/30">CERTS</div>
                        <div className="mb-4"></div> */}
                    </div>

                    <GithubUserEvents username="jnrgxx"/>
                </div>
             </div>


             <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">About</div>
        </section>
    )
}