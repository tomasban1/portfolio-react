
import { useState } from 'react'
import { AboutMe } from './components/about-me/AboutMe'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Portfolio } from './components/portfolio/Portfolio'
import { Credentials } from './components/credentials/Credentials'
import MatrixRainingCode from './components/Matrix'


function App() {
  const [menu, setMenu] = useState('home');

  return (
    <>
     <div className="min-h-screen">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
          <Header menu={menu} setMenu={setMenu} /> 
          <Hero menu={menu} setMenu={setMenu} />
          <AboutMe />
          <Portfolio />
          <Credentials />
          <Footer menu={menu} setMenu={setMenu} />
      </div>
    </div>


      
     
    </>
  )
}

export default App


