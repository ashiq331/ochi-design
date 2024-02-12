import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

const App = () => {
  return (
    <div className='w-full h-screen text-black font-["Neue_Montreal"]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />

    </div>
  )
}

export default App