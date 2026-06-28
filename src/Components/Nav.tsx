export default function Nav() {
    const links = [
        {label: "home", href: "/"},
        {label: "projects", href: "/#projects"},
        {label: "journey", href: "/#journey"},
        {label: "about", href: "/#about"},
        {label: "contact", href: "/#contact"}
    ]
    
    return (
        <header className="sticky top-0 z-50 bg-cr/55 backdrop-blur-md supports-[backdrop-filter]:bg-cr/45 shadow-[0_8px_24px_rgba(22,21,14,0.08)] border border-bd flex items-center justify-between h-14 px-5">
            <a href="/" className="flex font-dm-mono text-sm items-center justify-between w-10">
                <p className="font-bold text-acc">rogee</p>
                <p className="text-muted">@dev</p>
                <p className="font-bold text-acc">:~$</p>
            </a>

            <nav className="flex font-syne justify-between h-6 w-nav-width items-center">

                {links.map(l => 
                    <a key={l.href} href={l.href} className="font-syne font-bold text-xs no-underline text-muted">
                        {l.label}
                    </a>
                )}

            </nav>
        </header>
    )
}