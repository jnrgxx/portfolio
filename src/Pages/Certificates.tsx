import { certificates } from '../data/portfolioData'
import ExternalLink from '../Components/ExternalLink'
import Footer from '../Components/Footer'

export default function CertificatesPage() {
  return (
    <main id="main-content" className="py-4 flex flex-col flex-1">
      <header className="mb-6 text-left">
        <p className="font-mono text-sm text-terminal m-0 mb-2">&gt; certificates</p>
        <h1 className="font-heading text-2xl m-0">Certifications</h1>
        <a href="/" className="font-mono text-xs text-accent no-underline hover:underline">
          ← back home
        </a>
      </header>

      <div className="flex flex-col gap-2">
        {certificates.map((c) => (
          <ExternalLink
            key={c.url}
            href={c.url}
            className="section-shell flex justify-between items-center px-4 py-3 no-underline hover:border-accent/40 transition-colors"
          >
            <div className="flex flex-col items-start text-left">
              <h2 className="text-sm text-text-primary m-0">{c.name}</h2>
              <span className="font-mono text-text-muted mt-1 text-xxs">
                {c.company} · {c.source}
              </span>
            </div>

            {c.verified && (
              <span className="shrink-0 py-1 px-3 font-mono text-xxs text-accent bg-surface-elevated border border-border rounded-sm">
                verified ✓
              </span>
            )}
          </ExternalLink>
        ))}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  )
}
