export default function Nav() {
    const links = [
        {label: "home", href: "/"},
        {label: "projects", href: "/#projects"},
        {label: "journey", href: "/#journey"},
        {label: "about", href: "/#about"},
        {label: "contact", href: "/#contact"}
    ]
    
    return (
        <header className="sticky top-0 z-50 bg-bg/55 backdrop-blur-md supports-[backdrop-filter]:bg-bg/45 shadow-[0_8px_24px_rgba(22,21,14,0.08)] border border-border flex items-center justify-between h-14 px-5">
            <a href="/" className="flex font-mono text-sm items-center justify-between w-10">
                <p className="font-bold text-acc">rogee</p>
                <p className="text-text-secondary">@dev</p>
                <p className="font-bold text-acc">:~$</p>
            </a>

            <nav className="flex font-heading justify-between h-6 w-nav-width items-center">

                {links.map(l => 
                    <a key={l.href} href={l.href} className="font-heading font-bold text-xs no-underline text-text-secondary">
                        {l.label}
                    </a>
                )}

            </nav>
        </header>
    )
}