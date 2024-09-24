
import { useState } from 'react'
import { AboutMe } from './components/about-me/AboutMe'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Portfolio } from './components/portfolio/Portfolio'


function App() {
  const [menu, setMenu] = useState('home');

  return (
    <>
      <Header menu={menu} setMenu={setMenu} /> 
      <Hero menu={menu} setMenu={setMenu} />
      <AboutMe />
      <Portfolio />
      <Footer menu={menu} setMenu={setMenu} />
    </>
  )
}

export default App


