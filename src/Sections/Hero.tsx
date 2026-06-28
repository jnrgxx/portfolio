import Clock from '../Components/Clock';

export default function Hero() {

    return (
        <section className="overflow-hidden flex p-section-pad flex-col h-[24rem] border border-bd bg-cr">

            {/* Chips */}
             <div className="text-chip flex font-dm-mono gap-2 mb-3">
                <span className="text-grn text-sm flex gap-1 items-center px-[9px] py-[3px] bg-opacity-40">
                    &gt; whoami
                </span>

             </div>

            {/* NAME */}
             <div className="leading-none text-section-heading font-dmserif flex flex-col items-start mb-6">
                John Rogee
                <em className="italic text-acc after:content-['|'] after:not-italic after:ml-[1px] after:animate-cursor-blink">
                    Turqueza
                </em>
             </div>

            {/* Titles */}
             <div className="flex font-syne text-base gap-2.5 text-muted mb-4">
                <p>Junior Software Engineer</p>
             </div>

            {/* QUOTE */}
             <p className="mb-5 font-dm-mono text-muted text-xs text-left max-w-[620px] w-3/6 flex">Building backend applications with Java - Spring Boot, C# - .NET, ReactJS, and modern software engineering practices.</p>

            {/* Titles */}
             <div className="text-grn flex gap-1 border- items-center px-[9px] py-[3px] bg-ltgrn bg-opacity-40">
               <span className="animate-pulse inline-block h-[10px] w-[10px]  rounded-[50%]  bg-grn"></span>
               <p>Available for Software Engineering opportunities</p>
             </div>


            {/*  */}
            <div className="flex gap-2 mb-5 text-xs font-dm-mono">
                <a href="mailto:jrogeet@gmail.com" className="bg-ink text-cr py-2 px-4 border border-muted no-underline">view projects</a>
                <a href="/John-Rogee-Turqueza-Resume.pdf" target="_blank" className="py-2 px-4 border border-bd2 no-underline">📄 resume</a>
                <a href="https://github.com/jnrgxx" target="_blank" className="bg-ink text-cr py-2 px-4 border border-muted no-underline">github</a>
            </div>

            {/* <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Rogee</div> */}
        </section>
    )
}