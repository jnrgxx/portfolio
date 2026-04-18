export default function Journey() {

    return (
        <section className="overflow-hidden relative flex flex-col h-section-height-base border border-bd bg-cr p-section-pad">
             <div className="tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-2 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 04 ]</p>
                <span className="text-acc">::</span>
                git log --oneline
             </div>
             <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Journey</div>

        </section>
    )
}