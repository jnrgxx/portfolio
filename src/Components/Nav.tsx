import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../data/siteConfig'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'journey', href: '/#journey' },
  { label: 'about', href: '/#about' },
  { label: 'certificates', href: '/certificates' },
  { label: 'contact', href: '/#contact' },
] as const

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-bg md:bg-bg/80 md:backdrop-blur-md border border-border rounded-md flex items-center justify-between gap-4 min-h-14 px-4 py-2">
      <Link
        to="/"
        className="font-mono text-xs sm:text-sm no-underline text-text-primary shrink-0"
        aria-label="Home"
      >
        <span className="text-terminal">{siteConfig.terminalPrompt}</span>
        <span>:~$</span>
      </Link>

      {/* Desktop nav */}
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

      {/* Desktop theme toggle */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Hamburger button (mobile) */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col items-center justify-center gap-1 w-8 h-8 border border-border rounded-sm bg-surface hover:border-accent transition-colors cursor-pointer"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span className={`block w-4 h-[1.5px] bg-text-secondary transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
        <span className={`block w-4 h-[1.5px] bg-text-secondary transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-4 h-[1.5px] bg-text-secondary transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
      </button>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-64 bg-surface border-l border-border shadow-2xl z-60 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16 px-6 gap-6">
          <nav className="flex flex-col gap-4 font-mono text-sm" aria-label="Mobile navigation">
            {links.map((link) => {
              const isActive = isHome && link.label === 'home'
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`no-underline transition-colors hover:text-terminal ${
                    isActive ? 'text-terminal' : 'text-text-secondary'
                  }`}
                >
                  _{link.label}
                </a>
              )
            })}
          </nav>

          <div className="border-t border-border pt-6">
            <span className="block font-mono text-xxs text-text-muted uppercase tracking-wider mb-3">
              Theme
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
