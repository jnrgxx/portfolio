import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="font-mono text-xs px-2.5 py-1.5 border border-border rounded-sm text-text-secondary bg-surface hover:border-accent hover:text-accent transition-colors cursor-pointer"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}