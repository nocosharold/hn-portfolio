import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"

import headerStyles from "./header.module.scss"

import "@fontsource/nunito-sans"
import "@fontsource/vollkorn/700.css"

import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
  return (
    <Container fluid className="bg-black shadow p-0 py-3 fixed-top">
      <Container className="bg-black p-0">
        <Navbar expand="lg" variant="dark" className="p-0 px-3">
          <Navbar.Brand>
            <AnchorLink
              className={headerStyles.navbarLogoitem}
              offset="100"
              href="#home"
            >
              <h2 className={headerStyles.navbarLogo}>hn</h2>
            </AnchorLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <AnchorLink
                className={headerStyles.link}
                offset="100"
                href="#home"
              >
                Home
              </AnchorLink>

              <AnchorLink
                className={headerStyles.link}
                offset="100"
                href="#about"
              >
                About
              </AnchorLink>
              <AnchorLink
                className={headerStyles.link}
                offset="100"
                href="#projects"
              >
                Projects
              </AnchorLink>
              <AnchorLink
                className={headerStyles.link}
                offset="100"
                href="#contact"
              >
                Contact
              </AnchorLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default Header
