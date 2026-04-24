//import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import Hero from './Sections/Hero'

import About from './Sections/About'
import Projects from './Sections/Projects'
import Journey from './Sections/Journey'
import Connect from './Sections/Connect'
import ProjectsPage from './Pages/ProjectsPage'
import CertificatesPage from './Pages/Certificates'

function HomePage() {
  return (
    <>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Connect />
    </>
  )
}

export default function App() {
  return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </>

  )
}