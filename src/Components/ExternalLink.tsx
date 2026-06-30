interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export default function ExternalLink({ href, children, className = '', ...props }: ExternalLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')

  return (
    <a
      href={href}
      className={className}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
