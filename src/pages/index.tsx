import * as React from "react"
import "../styles/globals.css"

import Nav from "../components/Nav"
import Heading from "../components/Heading"
import StyledSquare from "../styles/StyledSquare"
import About from "../components/About"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Nav />
      <Heading />
      <About />
    </main>
  )
}

export default IndexPage
