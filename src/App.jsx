import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {


  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
