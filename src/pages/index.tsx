import * as React from "react"
import "../styles/globals.css"

import Nav from "../components/Nav"
import Heading from "../components/Heading"
import About from "../components/About"
import Features from "../components/Features"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <main>
      <title>genGreen</title>
      <Nav />
      <Heading />
      <About />
      <Features />
      <Footer />
    </main>
  )
}

export default IndexPage
