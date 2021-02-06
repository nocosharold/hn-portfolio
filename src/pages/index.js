import React from "react"
import { Container, Button, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import "../assets/css/index.scss"

import "@fontsource/nunito-sans"
import "@fontsource/vollkorn/700.css"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import AnchorLink from 'react-anchor-link-smooth-scroll'

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container fluid id="home">
        <Container>
          <Row className="pt-5 mt-5">
            <Col className=" col-12 col-lg-4">
              <Container className="py-5 mb-5 d-flex justify-content-center align-items-center p-0">
                <Img fixed={data.imageProfile.childImageSharp.fixed} />
              </Container>
            </Col>
            <Col className="col-12 col-lg-8 d-flex justify-content-center align-items-center">
              <Container className="bg-trasparent p-0 pb-5 mb-5">
                <span>Hey, my name is</span>
                <h1>
                  Harold Nocos <br />
                  I’m a Web Dev.
                </h1>
                <p>
                  I am a web developer based in Pateros, Philippines. I build
                  websites to exercise my coding skills and to inspire
                  everyone's design perspective.
                </p>
                <Button
                className="my-5"
                variant="outline-warning"
                href="https://my.indeed.com/p/haroldn-rf8089m"
                target="_blank"
              >
                Download My Resume
              </Button>{" "}
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container
        id="about"
        fluid
        className="bg-dark py-5 d-flex align-items-center"
      >
        <Container className="pt-5 ">
          <Row className="pt-5">
            <Col className="d-flex align-items-center flex-column">
              <h3>About</h3>
              <p className="text-center w-75 mt-5">
                My goal is to have more substantial knowledge concerning
                programming languages, especially in web development. After
                finishing my course BS Computer Engineering, I joined Kodigo
                Code Camp, where I learned to code, enhance my skills, and
                collaborate with my fellow developers.
              </p>
              <p className="text-center py-4">
                Here are some <span>Tech Stacks</span> I've been working on
                recently:
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center flex-nowrap flex-column text-center pb-5">
            <Row>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.htmlLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.cssLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.jsLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.bsLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.reactLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.gatsbyLogo.childImageSharp.fluid}
                />
              </Col>
            </Row>
            <Row>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.gitLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.nodeLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.wpLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.figmaLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.psLogo.childImageSharp.fluid}
                />
              </Col>
              <Col className="logo-container col-4 col-md-2 col-lg-2">
                <Img
                  className="logo"
                  fluid={data.aiLogo.childImageSharp.fluid}
                />
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>

      <Container id="projects" fluid className="pt-5 mt-5">
        <Container className="pt-5">
          <h3 className="text-center my-5">Projects</h3>

          <Row className="d-flex flex-row-reverse my-5">
            <Col className="col-12 col-md-12 col-lg-6">
              <Container className="project mb-5">
                <h4>Project</h4>
                <h4>Project</h4>
                <h4>Project</h4>
              </Container>
            </Col>
            <Col className="col-12 col-md-12 col-lg-6">
              <Col className="project-title col-12 d-flex justify-content-start">
                <h5>Iko Website</h5>
              </Col>
              <Col className="col-12">
                <Container className="px-0">
                  <p className="text-left">
                  IKO is a great way to find the best vacation spots and resorts in the Philippines through shared vacation and lodging experiences.
                  </p>
                </Container>
                <div className="d-flex justify-content-start flex-wrap mb-5">
                <span className="mr-3">Mongo DB</span>
                <span className="mr-3">Express JS</span>
                <span className="mr-3">React JS</span>
                <span className="mr-3">Node JS</span>
                <span className="mr-3">Redux</span>
                </div>
              </Col>
            </Col>
          </Row>

          <Row className="my-5">
            <Col className="col-12 col-md-12 col-lg-6">
              <Container className="project mb-5">
                <h4>Project</h4>
                <h4>Project</h4>
                <h4>Project</h4>
              </Container>
            </Col>
            <Col className="col-12 col-md-12 col-lg-6">
              <Col className="project-title col-12 d-flex justify-content-end text-right">
                <h5>Pokemon Lite</h5>
              </Col>
              <Col className="col-12">
                <Container className="px-0">
                  <p className="text-right">
                  Pokemon Lite is a web application that will let the user view all pokemon and its characteristics. There is also a feature that the pokemon catcher/user will have access to catch different types of pokemon.
                  </p>
                </Container>
                <div className="d-flex justify-content-end flex-wrap mb-5">
                <span className="ml-3">HTML</span>
                <span className="ml-3">CSS</span>
                <span className="ml-3">JS</span>
                <span className="ml-3">Bootstrap 4.5</span>
                <span className="ml-3">Poke API</span>
                </div>
              </Col>
            </Col>
          </Row>

          <Row className="d-flex flex-row-reverse my-5">
            <Col className="col-12 col-md-12 col-lg-6">
              <Container className="project mb-5">
                <h4>Project</h4>
                <h4>Project</h4>
                <h4>Project</h4>
              </Container>
            </Col>
            <Col className="col-12 col-md-12 col-lg-6">
              <Col className="project-title col-12 d-flex justify-content-start">
                <h5>Solar View Website Redesign</h5>
              </Col>
              <Col className="col-12">
                <Container className="px-0">
                  <p className="text-left">
                  Solar System View is a website that will allow users to explore the planets and other celestial body in the solar system. Views of the Solar System gives everyone's exploration and educational enjoyment of the solar system and beyond.
                  </p>
                </Container>
                <div className="d-flex justify-content-start flex-wrap mb-5">
                <span className="mr-3">HTML</span>
                <span className="mr-3">CSS</span>
                <span className="mr-3">JavaScript</span>
                <span className="mr-3">Bootstrap 4.5</span>
                <span className="mr-3">Slick Slider Carousel</span>
                </div>
              </Col>
            </Col>
          </Row>

          <Row className="my-5">
            <Col className="col-12 col-md-12 col-lg-6">
              <Container className="project mb-5">
                <h4>Project</h4>
                <h4>Project</h4>
                <h4>Project</h4>
              </Container>
            </Col>
            <Col className="col-12 col-md-12 col-lg-6">
              <Col className="project-title col-12 d-flex justify-content-end text-right">
                <h5>Directly Landing Page Clone</h5>
              </Col>
              <Col className="col-12">
                <Container className="px-0">
                  <p className="text-right">
                  It is a great challenge to make the page responsive without using any frameworks.
                  </p>
                </Container>
                <div className="d-flex justify-content-end flex-wrap mb-5">
                <span className="ml-3">HTML</span>
                <span className="ml-3">CSS</span>
                </div>
              </Col>
            </Col>
          </Row>

        </Container>
      </Container>

      <Container id="contact" fluid className="bg-dark pt-5">
        <Container>
          <Row className="py-5">
            <Col className="d-flex flex-column align-items-center">
              <h3 className="my-5">Contact Me</h3>
              <h4 className="">Lets Code!</h4>
              <p className="text-center w-50 mb-4">
                I’m currently open for any great opportunity of discovering and
                expanding my skills as a developer.
              </p>
              <Button
                className="my-5"
                variant="outline-warning"
                href="mailto:haroldnocos.me@gmail.com"
              >
                Send Me An Email
              </Button>{" "}
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="pb-5">
        <Container className="mb-5">
          <Row className="my-5">
            <h6 className="text-left pl-4">hn</h6>
          </Row>
          <Row className="d-flex mb-5">
            <Col className="col-12 col-md-12 col-lg-9 p-0 d-flex flex-wrap ml-auto">
              <Col>
                <Container className="d-flex justify-content-center justify-content-lg-start">
                  <ul>
                    <strong className="mb-2">Useful Links</strong>
                    <li>
                      <AnchorLink className="useful-links" offset='100' href="#home">
                        Home
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink className="useful-links" offset='100' href="#about">
                        About
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink className="useful-links" offset='100' href="#projects">
                        Projects
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink className="useful-links" offset='100' href="#contact">
                        Contact
                      </AnchorLink>
                    </li>
                  </ul>
                </Container>
              </Col>
              <Col>
                <strong>Phone</strong>
                <p>
                  <FaPhone /> +63909 133 2057
                </p>
                <strong>Address</strong>
                <p>
                  <FaMapMarkerAlt /> Sta. Ana, Pateros, Metro Manila
                </p>
                <strong>Email</strong>
                <p>
                  <FaEnvelope /> haroldnocos.me@gmail.com
                </p>
              </Col>
              <Col>
                <Container className="d-flex flex-column align-items-center align-items-sm-start">
                  <strong className="mb-2">Keep In Touch</strong>
                  <Container className="d-flex p-0 justify-content-center justify-content-sm-start">
                    <Link to="https://github.com/nocosharold" target="_blank">
                      <FaGithub className="footer-links mr-3 mb-2" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/hnocos/" target="_blank">
                      <FaLinkedin className="footer-links mr-3 mb-2" />
                    </Link>
                    <Link to="https://www.facebook.com/hnocos/" target="_blank">
                      <FaFacebook className="footer-links mr-3 mb-2" />
                    </Link>
                  </Container>
                </Container>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query Images {
    imageProfile: file(relativePath: { eq: "harold.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    htmlLogo: file(relativePath: { eq: "html-5.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    cssLogo: file(relativePath: { eq: "css-3.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    jsLogo: file(relativePath: { eq: "javascript.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    bsLogo: file(relativePath: { eq: "bootstrap.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    reactLogo: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gatsbyLogo: file(relativePath: { eq: "gatsby.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    gitLogo: file(relativePath: { eq: "git.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    nodeLogo: file(relativePath: { eq: "nodejs.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    wpLogo: file(relativePath: { eq: "wordpress.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    figmaLogo: file(relativePath: { eq: "figma.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    psLogo: file(relativePath: { eq: "photoshop.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    aiLogo: file(relativePath: { eq: "illustrator.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    
  }
`


