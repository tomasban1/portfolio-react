
import './App.css'
import { AboutMe } from './components/about-me/AboutMe'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Portfolio } from './components/portfolio/Portfolio'


function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App


