import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Spots from '../Components/Spots/Spots'
import Footer from '../Components/Footer/Footer'
import Fest from '../Components/fest/Fest'
import Bookride from '../Components/Bookride/Bookride'
const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Spots/>
      <Fest/>
      <Bookride/>
      <Footer/>
    </div>
  )
}

export default Homepage
