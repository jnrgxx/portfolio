// import Clock from '../Components/Clock';

export default function Hero() {

    return (
        <section className="flex flex-col justify-between p-section-pad h-[24rem] border border-black rounded-sm p-6">

            <div className="flex flex-col">
                {/* Chips */}
                <div className=" text-success flex font-mono gap-2">
                    <span className="text-success text-sm flex gap-1 items-center px-[9px] py-[3px] bg-opacity-40">
                        &gt; whoami
                    </span>
                </div>

                {/* NAME */}
                <div className="leading-none text-h2 font-serif flex items-start mb-3 gap-2">
                    John Rogee
                    <em className="italic text-acc after:content-['|'] after:not-italic after:ml-[1px] after:animate-cursor-blink">
                        Turqueza
                    </em>
                </div>

                {/* Titles */}
                <div className="flex font-heading text-lg gap-2.5 text-text-secondary">
                    <p>Junior Software Engineer</p>
                </div>
            </div>
           

            {/* QUOTE */}
             <p className="mb-5 font-mono text-text-secondary text-sm text-left max-w-[620px] w-3/6 flex">Building backend applications with Java - Spring Boot, C# - .NET, ReactJS, and modern software engineering practices.</p>

            {/* Titles */}
             <div className="text-success border-success w-fit border-2 border-dashed rounded-xs flex gap-2 items-center px-[9px] py-[3px] bg-ltgrn bg-opacity-40">
               <span className="animate-pulse inline-block h-[8px] w-[8px]  rounded-[50%]  bg-success"></span>
               <p className="font-mono text-sm">Available for Software Engineering opportunities</p>
             </div>


            {/*  */}
            <div className="flex gap-2 my-5 text-xs font-mono">
                <a href="mailto:jrogeet@gmail.com" className="bg-text-primary text-bg py-2 px-4 border border-text-secondary no-underline">&gt; view projects</a>
                <a href="/John-Rogee-Turqueza-Resume.pdf" target="_blank" className="py-2 px-4 border border-bd2 no-underline">📄 resume</a>
                <a href="https://github.com/jnrgxx" target="_blank" className="bg-text-primary text-bg py-2 px-4 border border-text-secondary no-underline">github</a>
            </div>

            {/* <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Rogee</div> */}
        </section>
    )
}