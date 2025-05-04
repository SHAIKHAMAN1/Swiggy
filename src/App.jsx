import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Hero from './components/Hero.jsx'
import Category from './components/Category.jsx'
import Toprestraunts from './components/Toprestraunts.jsx'
import Online from './components/Online.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Category/>
      <Hero/>
      <Toprestraunts/>
      <Online/>
      <Footer/>
    </>
  )
}

export default App
