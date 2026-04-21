export default function Journey() {

    return (
        <section className="overflow-hidden relative flex flex-col h-hero-height border border-bd bg-cr p-section-pad">
             <div className="mb-5 tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 04 ]</p>
                <span className="text-acc">::</span>
                git log --oneline
             </div>

             <div className="w-full flex items-center justify-start ">

                {/* Left */}
                <div className="w-4/6 bg-red flex justify-start">
                    {/* Header */}
                    <h1 className="font-dmserif tracking-tight text-3xl">
                        Journey
                        <em className="text-acc"> So Far</em>
                    </h1>

                    {/* Main Content */}
                    <div className="flex">
                        <div className="w-px bg-bd absolute"></div>
                        <div className="">2024</div>
                    </div>
                </div>

                {/* Right */}
                <div className="">

                </div>
                

             </div>

             <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Journey</div>

        </section>
    )
}