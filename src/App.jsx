import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Components from './components/Components'
import Team from './components/Team'
import Documents from './components/Documents'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Components />
        <Team />
        <Documents />
      </main>
      <Footer />
    </div>
  )
}

export default App
