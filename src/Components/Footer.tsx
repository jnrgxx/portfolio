import { siteConfig } from '../data/siteConfig'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="section-shell flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 py-4 mt-2 font-mono text-xs text-text-secondary">
      <p className="m-0 text-left">
        <span className="text-terminal">{siteConfig.terminalPrompt}</span>
        <span className="text-text-primary">:~$ </span>
        Thanks for stopping by!
      </p>

      <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
        <span>{siteConfig.copyright}</span>
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center justify-center h-8 w-8 border border-border rounded-sm bg-surface-elevated text-text-primary cursor-pointer hover:border-accent transition-colors"
        >
          ↑
        </button>
      </div>
    </footer>
  )
}
