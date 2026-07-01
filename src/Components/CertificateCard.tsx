import type { Certificate } from '../data/portfolioData'
import ExternalLink from './ExternalLink'

interface CertificateCardProps {
  certificate: Certificate
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  return (
    <ExternalLink
      href={certificate.url}
      className="section-shell flex flex-col gap-2 p-4 h-full text-left no-underline transition-colors hover:border-accent/40"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-mono text-sm font-semibold text-terminal m-0 leading-snug">
          {certificate.name}
        </h3>
        {certificate.verified && (
          <span className="shrink-0 font-mono text-xxs text-accent bg-surface-elevated border border-border rounded-sm px-2 py-0.5">
            ✓
          </span>
        )}
      </div>

      <p className="font-mono text-xs text-text-muted m-0">
        {certificate.company} · {certificate.source}
      </p>
    </ExternalLink>
  )
}