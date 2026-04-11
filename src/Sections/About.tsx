export default function About() {

    return (
        <section className="overflow-hidden relative flex flex-col h-[67.5rem] border border-bd bg-cr  p-5 ">
             <div className="tracking-wider border-[0.5px] border-acc py-[5px] px-[10px] flex gap-2 font-dm-mono text-[10px] text-muted bg-abg">
                <p className="text-acc font-med">[ 02 ]</p>
                <span className="text-acc">::</span>
                cat about.md
             </div>
             <div className="select-none font-syne absolute text-[80px] -bottom-2 right-2 text-sectext">STACK</div>
        </section>
    )
}