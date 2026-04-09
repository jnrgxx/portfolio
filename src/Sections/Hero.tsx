import Clock from '../Components/Clock';

export default function Hero() {

    return (
        <div className="flex p-5 flex-col h-[67.5rem] border border-bd bg-cr">
             <div className="tracking-wider mb-5 border-[0.5px] border-acc py-[5px] px-[10px] flex gap-2 font-dm-mono text-xxs text-muted bg-abg">
                <p className="text-acc font-bold">[ 01 ]</p>
                <span className="text-acc">::</span>
                init portfolio
             </div>

             <div className="text-[9px] flex">
                <span className="text-[#2A6241] bg-[#2A6241] bg-opacity-40">
                    <span className="h-[5px] w-[5px] rounded-[50%] p-1 bg-[#2A6241]"></span>
                    open for work
                </span>
                <div className="">📍 manila, ph</div>
                <div className="">MNL <Clock timezone="Asia/Manila" /></div>
             </div>
        </div>
    )
}