import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './hooks/useTheme'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Hero from './Sections/Hero'
import LoadingScreen from './Components/LoadingScreen'
import Snapshot from './Sections/Snapshot'
import Projects from './Sections/Projects'
import Journey from './Sections/Journey'
import Certificates from './Sections/Certificates'
import TechStack from './Sections/TechStack'
import AboutMe from './Sections/AboutMe'
import ContactSection from './Sections/ContactSection'
import ProjectsPage from './Pages/ProjectsPage'
import CertificatesPage from './Pages/Certificates'

function HomePage() {
  return (
    <main id="main-content" className="flex flex-col gap-3 flex-1">
      <Hero />
      <Snapshot />
      <Projects />
      <Journey />
      <Certificates />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <TechStack />
        <AboutMe />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  const handleLoadingFinished = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <ThemeProvider>
      {loading && <LoadingScreen onFinished={handleLoadingFinished} />}
      <div style={{ visibility: loading ? 'hidden' : 'visible' as const }} className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}
