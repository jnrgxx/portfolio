import Stack from '../Components/Stack';

export default function About() {

    type Stackture = {
        category: string,
        tech: Array<string>
    }

    const techStack: Stackture[] = [
        {category: "Programming & Scripting", tech: ["PHP", "JavaScript", "Java", "Python", "Groovy", "SQL"]},
        {category: "Web & Backend", tech: ["ReactJS", "Laravel", "REST APIs", "MySQL", "PostgreSQL"]},
        {category: "Testing & DevOps", tech: ["JMeter", "Katalon Studio", "Postman", "Git", "GitHub", "Docker"]},
        {category: "Cloud & Platforms", tech: ["Microsoft Azure", "Linux"]},
        {category: "Design & Collaboration", tech: ["Figma", "Obsidian"]},
    ];

    return (
        <section className="overflow-hidden relative flex flex-col h-[67.5rem] border border-bd bg-cr  p-5 ">
             <div className="tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] mb-5 flex gap-2 font-dm-mono text-[10px] text-muted bg-abg">
                <p className="text-acc font-med">[ 02 ]</p>
                <span className="text-acc">::</span>
                cat about.md
             </div>

            {/* Half */}
             <div className="w-3/5 flex justify-start">
                {/* Left */}
                <div className="flex flex-col items-start">
                    <h2 className="font-dmserif text-2xl mb-3 font-bold tracking-tight">Build with <span className="italic text-acc">intent.</span> Fueled by curiosity.</h2>
                    <p className="text-muted text-xs font-syne text-left mb-10">CS graduate and Test Engineer building full-stack systems that are designed, tested, and ready for real-world use.</p>
                
                    <div className="w-full border-t-[0.5px] border-bd pt-3.5">
                        <Stack arr={techStack} />

                        <div className="">
                            <div className=""></div>
                        </div>
                    </div>
                </div>

                <div className="h-8 w-4 p-4 border border-muted">

                </div>
             </div>


             <div className="select-none font-syne absolute text-[80px] -bottom-2 right-2 text-sectext">STACK</div>
        </section>
    )
}