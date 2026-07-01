import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/#projects' },
  { label: 'journey', href: '/#journey' },
  { label: 'about', href: '/#about' },
  { label: 'skills', href: '/#skills' },
  { label: 'contact', href: '/#contact' },
] as const

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border border-border rounded-md flex items-center justify-between gap-4 min-h-14 px-4 py-2">
      <Link
        to="/"
        className="font-mono text-xs sm:text-sm no-underline text-text-primary shrink-0"
        aria-label="Home"
      >
        <span className="text-terminal">{siteConfig.terminalPrompt}</span>
        <span>:~$</span>
      </Link>

      <nav
        className="hidden md:flex items-center gap-4 lg:gap-5 font-mono text-xs"
        aria-label="Main navigation"
      >
        {links.map((link) => {
          const isActive = isHome && link.label === 'home'
          return (
            <a
              key={link.href}
              href={link.href}
              className={`no-underline transition-colors hover:text-terminal ${
                isActive ? 'text-terminal' : 'text-text-secondary'
              }`}
            >
              _{link.label}
            </a>
          )
        })}
      </nav>

      <nav
        className="flex md:hidden items-center gap-3 font-mono text-xxs overflow-x-auto"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="no-underline text-text-secondary hover:text-terminal whitespace-nowrap"
          >
            _{link.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />
    </header>
  )
}
