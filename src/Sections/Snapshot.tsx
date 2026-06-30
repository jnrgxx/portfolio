import { siteConfig } from '../data/siteConfig'
import SectionHeader from '../Components/SectionHeader'
import StatusDot from '../Components/StatusDot'
import ExternalLink from '../Components/ExternalLink'

const stackLogos = [
  { src: '/java-logo.webp', alt: 'Java' },
  { src: '/spring-boot.webp', alt: 'Spring Boot' },
  { src: '/net-logo.webp', alt: '.NET' },
  { src: '/react-js-logo.webp', alt: 'React' },
  { src: '/postgresql-logo.webp', alt: 'PostgreSQL' },
] as const

export default function Snapshot() {
  return (
    <section id="snapshot" aria-labelledby="snapshot-heading" className="section-shell font-mono">
      <SectionHeader command="snapshot" flag="--status" />

      <div className="overflow-x-auto border-t border-border">
        <div className="flex min-w-[640px] divide-x divide-border justify-evenly px-4 py-4">
          <div className="flex flex-col items-start gap-2 pr-6 min-w-[120px]">
            <span id="snapshot-heading" className="text-xxs text-text-muted uppercase tracking-wider">
              Role
            </span>
            <span className="text-sm text-text-primary">{siteConfig.snapshotRole}</span>
          </div>

          <div className="flex flex-col items-start gap-2 px-6 min-w-[120px]">
            <span className="text-xxs text-text-muted uppercase tracking-wider">Status</span>
            <StatusDot label={siteConfig.snapshotStatus} className="text-sm text-text-primary" />
          </div>

          <div className="flex flex-col items-start gap-2 px-6 min-w-[180px]">
            <span className="text-xxs text-text-muted uppercase tracking-wider">Stack</span>
            <div className="flex gap-3 items-center">
              {stackLogos.map((logo) => (
                <img key={logo.alt} src={logo.src} className="h-6 w-6 object-contain" alt={logo.alt} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 px-6 min-w-[100px]">
            <span className="text-xxs text-text-muted uppercase tracking-wider">Location</span>
            <span className="text-sm text-text-primary">{siteConfig.location}</span>
          </div>

          <div className="flex flex-col items-start gap-2 pl-6 min-w-[120px]">
            <span className="text-xxs text-text-muted uppercase tracking-wider">Resume</span>
            <ExternalLink
              href={siteConfig.resumePath}
              className="flex items-center gap-2 text-sm text-text-primary no-underline hover:text-accent transition-colors"
            >
              resume.pdf
              <img src="/download-logo.svg" alt="" className="h-4 w-4 invert opacity-70" aria-hidden="true" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  )
}
