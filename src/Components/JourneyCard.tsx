import type { JourneyItem } from '../data/portfolioData'

interface Props {
  item: JourneyItem
  isActive?: boolean
}

export default function JourneyCard({ item, isActive }: Props) {
  return (
    <article className="flex flex-col items-start text-left font-mono min-w-0">
      <div className="relative h-8 w-full">
        <div
          className={`absolute top-1 left-0 w-3 h-3 rounded-full border  z-10 ${
            isActive
              ? 'bg-accent-orange border-accent-orange shadow-[0_0_8px_rgba(244,143,72,0.8)] motion-safe:animate-pulse-soft'
              : 'bg-bg border-text-muted'
          }`}
          aria-hidden="true"
        />
      </div>

      <time className="font-semibold text-success text-sm mb-1">{item.year}</time>

      <h3 className="font-semibold text-sm text-text-primary m-0 mb-0.5">{item.title}</h3>

      <p className="text-xs text-text-secondary m-0 mb-2">{item.subtitle}</p>

      <p className="text-xs text-text-muted leading-relaxed m-0">{item.description}</p>
    </article>
  )
}
