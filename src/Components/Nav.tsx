export default function Nav() {
    const links = [
        {label: "About", href: "#about"},
        {label: "Work", href: "#work"},
        {label: "Journey", href: "#journey"},
        {label: "Connect", href: "#connect"}
    ]
    
    return (
        <div className="flex flex-row">
            <div className="">
                <p>rogee portfolio</p>
            </div>

            <div className="">
                <ul className="list-none p-0">
                    {links.map(l => 
                        <li className="">
                            <a key={l.href} href={l.href} className="no-underline text-black">
                                {l.label}
                            </a>
                        </li>
                    )}
                </ul>

                <button>
                    Resume
                </button>
            </div>
        </div>
    )
}