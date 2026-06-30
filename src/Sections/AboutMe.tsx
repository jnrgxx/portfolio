import { aboutContent } from '../data/siteConfig'
import SectionHeader from '../Components/SectionHeader'

export default function AboutMe() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-shell p-1 font-mono text-left h-full">
      <SectionHeader id="about-heading" command="about_me" />

      <div className="px-4 pb-4 space-y-4">
        <p className="text-xs text-text-secondary leading-relaxed m-0">
          {aboutContent.summary}
        </p>

        <ul className="text-xs text-text-secondary space-y-1.5 m-0 pl-4 pb-4  list-disc">
          {aboutContent.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>

        <p className="text-sm text-terminal m-0">{aboutContent.closing}</p>
      </div>
    </section>
  )
}
