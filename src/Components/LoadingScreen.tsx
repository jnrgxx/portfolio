import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onFinished: () => void
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Wait for the whole page (images, fonts, etc.) to load
    const handleLoad = () => {
      // Give a minimum of 1.5s so the loader is actually seen
      const elapsed = performance.now()
      const minDuration = 1500
      const remaining = Math.max(0, minDuration - elapsed)

      setTimeout(() => {
        setFadeOut(true)
        // After fade animation completes, signal parent
        setTimeout(onFinished, 500)
      }, remaining)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [onFinished])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#F8F2E4' }}
    >
      {/* Terminal-style loader */}
      <div className="font-mono text-sm text-[#333333] flex flex-col items-center gap-3">
        <p className="m-0 animate-pulse tracking-wider">{'>'} initializing portfolio...</p>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#AF3238] motion-safe:animate-bounce" style={{ animationDelay: '0s' }} />
          <span className="w-2 h-2 rounded-full bg-[#F48F48] motion-safe:animate-bounce" style={{ animationDelay: '0.15s' }} />
          <span className="w-2 h-2 rounded-full bg-[#F4BF4D] motion-safe:animate-bounce" style={{ animationDelay: '0.3s' }} />
          <span className="w-2 h-2 rounded-full bg-[#304D89] motion-safe:animate-bounce" style={{ animationDelay: '0.45s' }} />
        </div>
        <p className="text-xs text-[#888888] m-0 mt-1">loading assets...</p>
      </div>
    </div>
  )
}