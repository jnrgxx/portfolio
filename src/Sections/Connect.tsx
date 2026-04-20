export default function Connect() {

    return (
        <section className="overflow-hidden relative flex flex-col  border border-bd bg-cr p-section-pad">
             <div className="mb-5 tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 05 ]</p>
                <span className="text-acc">::</span>
                establish connection
             </div>

             <div className="">
                <div className="flex gap-12 items-center w-full mb-7">
                    <div className="flex flex-col items-start w-3/6 tracking-wide">
                        <h1 className="font-dmserif font-bold text-3xl tracking-tight text-ink mb-2.5">
                            Got something
                            <em className="text-acc"> interesting?</em>
                        </h1>
                        
                        <p className="text-left text-muted text-xs w-9/12">
                            Open to work opportunities, project collabs, or just a good conversation. Let's build something worth keeping.
                        </p>
                    </div>

                    <div className="flex flex-col items-start">
                        <span className="font-dm-mono text-xxs text-sub mb-2">[ quick contact ]</span>

                        <div className="bg-ink py-2 px-4 text-cr font-dm-mono text-xxs">jrogee@gmail.com</div>
                    </div>
                </div>

                <div className="border-t-[0.5px] border-bd pt-4 mb-4 grid grid-cols-3 w-full gap-3.5">
                    <div className="flex flex-col items-start ">
                        <div className="font-dm-mono text-xxs text-sub mb-2">
                            [ member of ]
                        </div>

                        <div className="font-dm-mono text-xs text-left w-full">
                            <a href="#" target="_blank" className="py-1.5 flex justify-between flex gap-1.5">
                                <span className="text-acc">↗</span>
                                Junior Philippine Computer Society (JPCS)
                            </a>

                        </div>
                    </div>

                    <div className="flex flex-col items-start ">
                        <div className="font-dm-mono text-xxs text-sub mb-2">
                            [ social links ]
                        </div>

                        <div className="font-dm-mono text-xs text-left w-full">
                            <a href="https://www.linkedin.com/in/jrogeet/" target="_blank" className="border-b-[0.5px] border-bd py-1.5 flex justify-between">
                                LinkedIn
                                <span className="text-acc">↗</span>
                            </a>
                            <a href="https://github.com/jnrgxx" target="_blank" className="border-b-[0.5px] border-bd py-1.5 flex justify-between">
                                GitHub
                                <span className="text-acc">↗</span>
                            </a>
                            <a href="https://www.instagram.com/rogee.archive/" target="_blank" className=" py-1.5 flex justify-between">
                                Instagram
                                <span className="text-acc">↗</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-start ">
                        <div className="font-dm-mono text-xxs text-sub mb-3">
                            [ contact ]
                        </div>

                        <div className="font-dm-mono text-xs text-left w-full">
                            <a href="#" target="_blank" className="border-b-[0.5px] border-bd py-1.5 flex justify-between">
                                <div className="">
                                    <span>✉ email</span>
                                    <p className="text-xxs text-muted">jrogeet@gmail.com</p>
                                </div>
                                <span className="text-sub font-dm-mono">&gt;</span>
                            </a>
                            <a href="#" target="_blank" className="border-b-[0.5px] border-bd py-1.5 flex justify-between">
                                <div className="">
                                    <span>📅 schedule a call</span>
                                    <p className="text-xxs text-muted">pick a time</p>
                                </div>
                                <span className="text-sub font-dm-mono">&gt;</span>
                            </a>
                            <a href="#" target="_blank" className=" py-1.5 flex justify-between">
                                <div className="">
                                    <span>📝 blog</span>
                                    <p className="text-xxs text-muted">read my thoughts</p>
                                </div>
                                <span className="text-sub font-dm-mono">&gt;</span>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t-[0.5px] pt-4 border-bd w-full flex items-start font-dm-mono text-xxs text-sub">
                    <div className="">© 2026 [ john rogee turqueza ]</div>
                </div>
                
             </div>

             <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Connect</div>
        </section>
    )
}