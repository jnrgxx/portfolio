interface JourneyStructure {
    date: string,
    role: string,
    company: string,
    type: string,
}

const journeys: JourneyStructure[] = [
    {date: "2025 - Present", role: "Test Engineer", company: "East West Banking Corporation", type: "WORK"},
    {date: "2025", role: "QA Intern", company: "East West Banking Corporation", type: "INTERNSHIP"},
    {date: "2021 - 2025", role: "BS Computer Science", company: "Our Lady of Fatima University", type: "EDU"},
    {date: "2025", role: "CCST Cybersecurity", company: "Cisco · Certiport", type: "CERT"},
    {date: "2024 - 2025", role: "4th Year Representative", company: "Junior Philippine Computer Society", type: "ORG"},
    {date: "2023", role: "Dean Lister", company: "Our Lady of Fatima University", type: "EDU"},
]

export default function Journey() {

    return (
        <section className="overflow-hidden relative flex flex-col h-auto border border-bd bg-cr p-section-pad">
             <div className="mb-5 tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 04 ]</p>
                <span className="text-acc">::</span>
                git log --oneline
             </div>

             <div className="w-full flex relative ">
                <div className="w-4/6 flex flex-col gap-4 items-start">
                    {/* Header */}
                    <h1 className="font-dmserif tracking-tight text-3xl">
                        Journey
                        <em className="text-acc"> So Far</em>
                    </h1>

                    {/* Left */}
                    <div className="bg-red flex justify-start">
                        {/* Main Content */}
                        <div className="h-auto min-h-fit flex gap-4">
                            <div className="w-px h-full bg-bd"></div>

                            <div className="flex flex-col gap-5 items-start">

                                {journeys.map((j, index) => 
                                    <div key={index} className="flex">
                                        <div className={`h-2 w-2 absolute -left-1  ${index === 0 ? "bg-acc" : "bg-cr border-[0.5px] border-sub"}`}  ></div>
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="font-dm-mono text-acc text-xs">{j.date}</span>
                                            <p className="text-sm">{j.role}</p>
                                            <p className="font-dm-mono text-muted text-xs">{j.company}</p>
                                            <p className=
                                                {`
                                                    bg-acc/5 opacity-80 py-0.5 px-1 font-dm-mono text-xxs inline-block border-[0.5px]
                                                    ${
                                                        j.type === "ORG" ? "text-[#8B7355] border-[#8B7355]/60" 
                                                        : j.type === "CERT" ? "text-[#2A6241] border-[#2A6241]/60" 
                                                        : j.type === "EDU" ? "text-[#185FA5] border-[#185FA5]/60" 
                                                        : "text-acc  border-acc/60"
                                                    }
                                                `}
                                                >
                                                    {j.type}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                    <div className="flex opacity-40">
                                        <div className="h-2 w-2 absolute -left-1 bg-cr border-[0.5px] border-sub"></div>
                                        <div className="flex flex-col items-start gap-0.5">
                                            <span className="font-dm-mono text-acc text-xs">???</span>
                                            <p className="text-sm">next chapter...</p>
                                            <p className="font-dm-mono text-muted text-xs">something good is coming.</p>
                                            <p className="bg-acc/5 font-dm-mono text-xxs inline-block text-acc border-[0.5px] border-acc/60 py-0.5 px-1">???</p>
                                        </div>
                                    </div>


                            </div>

                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="w-2/6">

                </div>
             </div>



             <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Journey</div>

        </section>
    )
}