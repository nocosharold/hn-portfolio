import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

import headerStyles from './header.module.scss'

import '@fontsource/nunito-sans'
import '@fontsource/vollkorn/700.css'

import { Link } from 'gatsby'

const Header = () => {
  return (
    <Container
      fluid
      className="bg-black shadow p-0 py-3 fixed-top"
    >
      <Container className="bg-black p-0">
        <Navbar expand="lg" variant="dark" className="p-0 px-4">
          <Navbar.Brand href="#">
            <h2 className={headerStyles.navbarLogo}>hn</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className={headerStyles.Link}
                to="/#"
              >
                Home
              </Link>
              <Link
                className={headerStyles.Link}
                to="/#about"
              >
                About
              </Link>
              <Link
                className={headerStyles.Link}
                to="/#projects"
              >
                Projects
              </Link>
              <Link
                className={headerStyles.Link}
                to="/#contact"
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default Header
