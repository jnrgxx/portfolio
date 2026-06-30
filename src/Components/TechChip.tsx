interface TechChipProps {
  label: string
}

export default function TechChip({ label }: TechChipProps) {
  return (
    <span className="inline-block font-mono text-xxs text-text-secondary bg-surface-elevated border border-border rounded-sm px-2 py-1">
      {label}
    </span>
  )
}
