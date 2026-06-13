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
  return (
    <>
      <Navigation />
      <main className="bg-dark">
        <section id="hero">
          <Hero />
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
