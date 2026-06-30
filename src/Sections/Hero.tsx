import { useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import ExternalLink from '../Components/ExternalLink'
import StatusDot from '../Components/StatusDot'

function ProfilePhoto() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative flex items-center justify-center w-full max-w-[280px] mx-auto aspect-square">
      <span className="bubble w-16 h-16 top-[8%] right-[12%] opacity-60" aria-hidden="true" />
      <span className="bubble w-10 h-10 top-[20%] left-[8%] opacity-40" aria-hidden="true" />
      <span className="bubble w-6 h-6 bottom-[25%] right-[5%] opacity-50" aria-hidden="true" />
      <span className="bubble w-20 h-20 bottom-[10%] left-[15%] opacity-30" aria-hidden="true" />

      <div className="relative z-10 rounded-sm p-1 border-2 border-accent/40 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
        <div className="rounded-sm overflow-hidden w-48 h-48 sm:w-56 sm:h-56 bg-surface-elevated flex items-center justify-center">
          {!hasError ? (
            <img
              src={siteConfig.profileImage}
              alt="John Turqueza"
              className="w-full h-full object-cover"
              onError={() => setHasError(true)}
            />
          ) : (
            <span className="font-serif text-4xl text-accent" aria-hidden="true">
              JT
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="section-shell relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8 min-h-[28rem]"
    >
      <div className="flex flex-col items-start text-left gap-4">
        <p className="font-mono text-sm text-terminal m-0">&gt; whoami</p>

        <div>
          <h1 id="hero-heading" className="font-heading text-3xl sm:text-4xl lg:text-h2 font-bold leading-tight m-0 mb-1">
            {siteConfig.name}
          </h1>
          <p className="font-mono text-accent-orange text-sm m-0 mb-2">{siteConfig.nickname}</p>
          <p className="font-heading text-lg text-accent m-0">{siteConfig.title}</p>
        </div>

        <p className="font-mono text-sm text-text-secondary leading-relaxed max-w-lg m-0">
          {siteConfig.bio}
        </p>

        <div className="flex items-center gap-2 border border-dashed border-success/60 rounded-sm px-3 py-2 bg-success/5">
          <StatusDot />
          <p className="font-mono text-xs sm:text-sm text-success m-0">{siteConfig.status}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-1">
          <a
            href="/#projects"
            className="font-mono text-xs px-4 py-2 border border-success text-success rounded-sm no-underline hover:bg-success/10 transition-colors"
          >
            View Projects
          </a>
          <ExternalLink
            href={siteConfig.resumePath}
            className="font-mono text-xs px-4 py-2 border border-accent text-accent rounded-sm no-underline hover:bg-accent/10 transition-colors inline-flex items-center gap-1.5"
          >
            <img src="/download-logo.svg" alt="" className="h-3.5 w-3.5 invert opacity-80" aria-hidden="true" />
            Resume
          </ExternalLink>
          <ExternalLink
            href={siteConfig.social.github}
            className="font-mono text-xs px-4 py-2 border border-border text-text-secondary rounded-sm no-underline hover:border-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
          >
            <img src="/GitHub_Invertocat_Black.svg" alt="" className="h-4 w-4 invert opacity-70" aria-hidden="true" />
            GitHub
          </ExternalLink>
        </div>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <ProfilePhoto />
        <a
          href="#snapshot"
          className="absolute bottom-0 right-0 font-mono text-xs text-accent no-underline hidden lg:flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
          aria-label="Scroll to snapshot section"
        >
          <span>scroll</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
