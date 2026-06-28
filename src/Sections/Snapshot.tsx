export default function Snapshot() {

    return (  
        <section className="font-dm-mono">
            <div className="flex">
                <span className="text-grn">&gt; snapshot</span>
                -- status
            </div>

            <div className="flex">
                <div className="flex flex-col items-start">
                    <span>ROLE</span>
                    <span>Software Test Engineer</span>
                </div>

                <div className="flex flex-col items-start">
                    <span>STATUS</span>
                    <span>Open to Work</span>
                </div>

                <div className="flex flex-col items-start">
                    <span>STACK</span>
                    <div className="flex">
                        <img />
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <span>LOCATION</span>
                    <span>Philippines</span>
                </div>

                <div className="flex">
                    <span>RESUME</span>
                    <a href="/John-Rogee-Turqueza-Resume.pdf" target="_blank" className="py-2 px-4 border border-bd2 no-underline"> V </a>
                </div>


            </div>
        </section>
    )
}