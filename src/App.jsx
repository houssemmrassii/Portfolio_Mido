import { useState } from 'react'
import './index.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import MyApproach from './components/MyApproach'
import Work from './components/Work'
import Food from './components/Food'
import Accolades from './components/Accolades'
import FeaturedWork from './components/FeaturedWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isReady, setIsReady] = useState(false)

  return (
    <>
      {/* Loading splash - covers the page until the hero video is ready */}
      <div
        className={`fixed inset-0 z-[100] bg-dark flex items-center justify-center transition-opacity duration-700 ease-out ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <span className="text-gold text-3xl sm:text-4xl font-light tracking-widest" style={{fontWeight: 300}}>AG</span>
      </div>

      <Navigation />
      <main className="bg-dark">
        <section id="hero">
          <Hero onReady={() => setIsReady(true)} />
        </section>
        
        <section id="work">
          <Work />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
    </>
  )
}

export default App
