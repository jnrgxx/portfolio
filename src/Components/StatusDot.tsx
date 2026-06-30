interface StatusDotProps {
  label?: string
  className?: string
}

export default function StatusDot({ label, className = '' }: StatusDotProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className="inline-block h-2 w-2 rounded-full bg-success motion-safe:animate-pulse-soft"
        aria-hidden="true"
      />
      {label && <span>{label}</span>}
    </span>
  )
}
