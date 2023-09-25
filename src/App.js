import React from "react"
import Home from "./components/Home/Home"
import Skills from "./components/Skills/Skills"
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Projects from "./components/Projects/Projects"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

library.add(faBars, faTimes);


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
