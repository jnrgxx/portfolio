import type { ReactNode } from 'react'

interface SectionHeaderProps {
  command: string
  flag?: string
  action?: ReactNode
  className?: string
  id?: string
}

export default function SectionHeader({ command, flag, action, className = '', id }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between gap-4 px-4 pt-4 pb-2 ${className}`}>
      <h2 id={id} className="font-mono text-sm m-0">
        <span className="text-terminal">&gt; {command}</span>
        {flag && <span className="text-text-secondary"> {flag}</span>}
      </h2>
      {action}
    </div>
  )
}
