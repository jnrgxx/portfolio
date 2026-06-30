import { useState } from 'react'
import { topSkills, allSkills } from '../data/siteConfig'
import SectionHeader from '../Components/SectionHeader'
import TechChip from '../Components/TechChip'

export default function TechStack() {
  const [expanded, setExpanded] = useState(false)
  const skills = expanded ? allSkills : topSkills

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-shell p-1 font-mono text-left h-full">
      <SectionHeader id="skills-heading" command="tech_stack" flag="(top skills)" />

      <div className="flex flex-wrap gap-2 px-4 py-2">
        {skills.map((skill) => (
          <TechChip key={skill} label={skill} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="font-mono text-xs text-accent bg-transparent border-none cursor-pointer px-4 pb-2 hover:underline"
      >
        &gt; {expanded ? 'show top skills' : 'show all skills'}
      </button>
    </section>
  )
}
