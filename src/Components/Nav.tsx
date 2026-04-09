export default function Nav() {
    const links = [
        {label: "ABOUT", href: "#about"},
        {label: "PROJECTS", href: "#work"},
        {label: "JOURNEY", href: "#journey"},
        {label: "CONNECT", href: "#connect"}
    ]
    
    return (
        <div className="border border-bd flex items-center justify-between h-12 px-4">
            <a href="#" className="flex font-dm-mono text-xs items-center justify-between w-10">
                <p className="font-bold text-acc">[</p>
                <p className="text-muted">JRT</p>
                <p className="font-bold text-acc">]</p>
            </a>

            <div className="flex font-syne justify-between h-6 w-96 items-center">

                {links.map(l => 
                    <a key={l.href} href={l.href} className="font-syne font-bold text-xxs no-underline text-muted">
                        {l.label}
                    </a>
                )}

                {/* 
                <ul className="list-none gap-5 p-0 flex items-center">
                    {links.map(l => 
                        <li className="" key={l.href}>
                            <a href={l.href} className="text-xs no-underline text-black">
                                {l.label}
                            </a>
                        </li>
                    )}
                </ul> */}

                <button className="bg-black py-1 px-3 font-dm-mono text-white p-1 h-6 text-xxs">
                    resume ↗
                </button>
            </div>
        </div>
    )
}