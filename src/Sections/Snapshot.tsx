export default function Snapshot() {

    return (  
        <section className="font-mono border-black border-1 rounded-sm">
            <div className="flex text-sm mb-2 gap-2 px-4 pt-2">
                <span className="text-success">&gt; snapshot</span>
                 --status
            </div>

            <div className="flex justify-between gap-2 place-items-center border-t px-4 py-2">
                <div className="pr-2 flex flex-col items-start justify-between bg-amber-80 gap-2">
                    <span className="text-sm">ROLE</span>
                    <span className="text-sm">Software Test Engineer</span>
                </div>

                <div className="w-px self-stretch bg-black"></div>
                
                <div className="flex flex-col gap-2 items-start">
                    <span className="text-sm">STATUS</span>
                    <div className="flex items-center gap-3">
                        <span className="animate-pulse inline-block h-[10px] w-[10px]  rounded-[50%]  bg-success"></span>
                        <span className="text-sm">Open to Work</span>
                    </div>
                    
                </div>

                <div className="w-px self-stretch bg-black"></div>


                <div className="flex flex-col  gap-2  items-start">
                    <span className="text-sm">STACK</span>
                    <div className="flex gap-5 h-4/6">
                        <img src="java-logo.webp" className="h-6" alt="java logo"/>
                        <img src="spring-boot.webp" className="h-6" alt="spring boot logo"/>
                        <img src="net-logo.webp" className="h-6"  alt="net logo"/>
                        <img src="react-js-logo.webp" className="h-6"  alt="reactjs logo"/>
                        <img src="postgresql-logo.webp" className="h-6"  alt="postgresql logo"/>
                    </div>
                </div>

                <div className="w-px self-stretch bg-black"></div>

                <div className="flex flex-col items-start gap-2">
                    <span className="text-sm">LOCATION</span>
                    <span className="text-sm">Philippines</span>
                </div>

                <div className="w-px self-stretch bg-black"></div>


                    
                <a href="/John-Rogee-Turqueza-Resume.pdf" target="_blank" className="w-32 flex items-center justify-between py-2 px-4 no-underline">
                    <span className="text-sm">RESUME</span>
                    <img src="download-logo.svg" className="h-6"/>
                </a>

            </div>
        </section>
    )
}