import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ContactMe from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{height: "100vh"}}>
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
