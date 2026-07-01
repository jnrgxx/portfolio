import { useMemo, useState } from 'react'
import JourneyCard from '../Components/JourneyCard'
import SectionHeader from '../Components/SectionHeader'
import { journeys } from '../data/portfolioData'

const ITEMS_PER_PAGE = 4

export default function Journey() {
  const [page, setPage] = useState(0)

  const pages = useMemo(() => {
    const result: typeof journeys[] = []
    for (let i = 0; i < journeys.length; i += ITEMS_PER_PAGE) {
      result.push(journeys.slice(i, i + ITEMS_PER_PAGE))
    }
    return result
  }, [])

  const maxPage = pages.length - 1

  return (
    <section id="journey" aria-labelledby="journey-heading" className="section-shell pb-3 font-mono">
      <SectionHeader
        id="journey-heading"
        command="journey"
        flag="--experience"
        action={
          <div className="flex" role="group" aria-label="Timeline pagination">
            <button
              type="button"
              onClick={() => setPage(Math.max(page - 1, 0))}
              disabled={page === 0}
              aria-label="Previous page"
              className="border border-border px-3 py-1.5 text-text-secondary hover:text-text-primary hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-transparent transition-colors"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setPage(Math.min(page + 1, maxPage))}
              disabled={page === maxPage}
              aria-label="Next page"
              className="border border-border border-l-0 px-3 py-1.5 text-text-secondary hover:text-text-primary hover:border-accent disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-transparent transition-colors"
            >
              →
            </button>
          </div>
        }
      />

      <div className="relative overflow-hidden pt-4 px-4 border-t border-border">
        <div className="absolute top-[26px] left-0 w-full h-px bg-border-subtle" aria-hidden="true" />

        <div
          className="flex motion-safe:transition-transform motion-safe:duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {pages.map((group, index) => (
            <div key={index} className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-1">
              {group.map((item) => (
                <JourneyCard
                  key={`${item.title}-${item.year}`}
                  item={item}
                  isActive={item.year.includes('Present')}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
