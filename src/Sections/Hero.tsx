import Clock from '../Components/Clock';

export default function Hero() {

    return (
        <section className="relative overflow-hidden flex p-section-pad flex-col h-hero-height border border-bd bg-cr">
             <div className="tracking-wider mb-5 border-[0.5px] border-abr py-[5px] px-[10px] flex gap-4 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-med">[ 01 ]</p>
                <span className="text-acc">::</span>
                init portfolio
             </div>

            {/* Chips */}
             <div className="text-chip flex font-dm-mono gap-2 mb-3">
                <span className="text-grn flex gap-1 items-center px-[9px] py-[3px] bg-ltgrn bg-opacity-40">
                    <span className="animate-pulse inline-block h-[5px] w-[5px]  rounded-[50%]  bg-grn"></span>
                    open for work
                </span>
                <div className="border border-[0.5px] border-bd py-[3px] px-[9px]">📍 manila, ph</div>
                <div className="border border-[0.5px] border-bd py-[3px] px-[9px] text-muted">MNL <Clock timezone="Asia/Manila" /></div>
             </div>

            {/* NAME */}
             <div className="leading-none text-hero-name font-dmserif flex flex-col items-start mb-6">
                John Rogee
                <em className="italic text-acc after:content-['|'] after:not-italic after:ml-[1px] after:animate-cursor-blink">
                    Turqueza
                </em>
             </div>

            {/* Titles */}
             <div className="flex font-dm-mono text-xs gap-2.5 text-muted mb-4">
                <p>QA Test Engineer</p>
                <span className="text-acc">·</span>
                <p>Developer</p>
                <span className="text-acc">·</span>
                <p>CS Graduate</p>
             </div>

            {/* QUOTE */}
             <p className="italic mb-5 font-syne text-muted text-base max-w-[620px] flex">“Make it work, make it right, make it fast.” — Kent Beck</p>

            {/*  */}
            <div className="flex gap-2 mb-5 text-xs font-dm-mono">
                <div className="bg-ink text-cr py-2 px-4 border border-muted">📅 schedule a call</div>
                <div className="py-2 px-4 border border-bd2">✉ send email</div>
                <div className="py-2 px-4 border border-bd2">📄 resume</div>
            </div>
        
            <div className="mt-34 border-t-[0.5px] border-bd">
                <span className="text-sub font-dm-mono text-xs select-none">scroll ↓</span>
            </div>

            <div className="select-none font-descal absolute text-section-watermark -bottom-2 right-2 text-sectext">Rogee</div>

        
        </section>
    )
}