import { siteConfig } from '../data/siteConfig'
import SectionHeader from '../Components/SectionHeader'
import ExternalLink from '../Components/ExternalLink'

const contactLinks = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'jrogeet',
    href: siteConfig.social.linkedin,
    icon: 'in',
  },
  {
    label: 'GitHub',
    value: 'jnrgxx',
    href: siteConfig.social.github,
    icon: 'gh',
  },
  {
    label: 'Location',
    value: siteConfig.location,
    href: undefined,
    icon: '📍',
  },
] as const

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-shell p-1 font-mono text-left h-full">
      <SectionHeader id="contact-heading" command="contact" />

      <ul className="px-4 pb-7 space-y-3 m-0 list-none">
        {contactLinks.map((item) => (
          <li key={item.label}>
            {item.href ? (
              <ExternalLink
                href={item.href}
                className="flex items-center gap-3 text-sm text-text-secondary no-underline hover:text-accent transition-colors group"
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-sm border border-border bg-surface-elevated text-xxs text-text-muted group-hover:border-accent/50"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span>
                  <span className="block text-xxs text-text-muted">{item.label}</span>
                  <span className="text-text-primary text-xs">{item.value}</span>
                </span>
              </ExternalLink>
            ) : (
              <div className="flex items-center gap-3 text-sm">
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-sm border border-border bg-surface-elevated text-xxs"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span>
                  <span className="block text-xxs text-text-muted">{item.label}</span>
                  <span className="text-text-primary text-xs">{item.value}</span>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>

      <p className="px-4 pb-2 text-sm text-terminal m-0">&gt; let&apos;s connect!</p>
    </section>
  )
}
