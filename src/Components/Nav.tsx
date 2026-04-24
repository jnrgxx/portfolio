export default function Nav() {
    const links = [
        {label: "ABOUT", href: "/#about"},
        {label: "PROJECTS", href: "/#projects"},
        {label: "JOURNEY", href: "/#journey"},
        {label: "CONNECT", href: "/#connect"}
    ]
    
    return (
        <header className="sticky top-0 z-50 bg-cr/55 backdrop-blur-md supports-[backdrop-filter]:bg-cr/45 shadow-[0_8px_24px_rgba(22,21,14,0.08)] border border-bd flex items-center justify-between h-14 px-5">
            <a href="/" className="flex font-dm-mono text-sm items-center justify-between w-10">
                <p className="font-bold text-acc">[</p>
                <p className="text-muted">JRT</p>
                <p className="font-bold text-acc">]</p>
            </a>

            <nav className="flex font-syne justify-between h-6 w-nav-width items-center">

                {links.map(l => 
                    <a key={l.href} href={l.href} className="font-syne font-bold text-xs no-underline text-muted">
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

                <button className="bg-black py-2 px-4 font-dm-mono text-white h-8 text-xs">
                    resume ↗
                </button>
            </nav>
        </header>
    )
}