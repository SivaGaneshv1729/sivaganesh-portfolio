import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills, { Marquee } from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Spotlight from './components/Spotlight'

function App() {
  return (
    <div className="min-h-screen relative">
      <Spotlight />
      <Preloader />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Journey />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
