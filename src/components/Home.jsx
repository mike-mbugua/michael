import React from 'react'
import { motion } from 'framer-motion'
import './home.css'
import Nav from './Nav'
import { Typewriter } from 'react-simple-typewriter'
import Mike from '../assets/images/mike.jpg'
import BouncingText from 'react-bouncing-text'
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import About from './about/About'
import Service from './services/Service'
import Skill from './skills/Skill'
import Contact from './contact/Contact'
import { Container, Row, Col } from 'reactstrap'
function Home() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" sm="3">
            <div className="home__container">
              {/* <Nav /> */}
              <div className="home__nav">
                <div className="logo">
                  Michael{' '}
                  <span className="primary__span" style={{ color: '#fb0700' }}>
                    Mbugua
                  </span>
                </div>

                <div className="home__section">
                  <div className="image">
                    <img className="mike" src={Mike} alt="" />
                  </div>
                  <div className="home__info">
                    <h1>
                      Hi, I'm <span className="name">Mike</span> <br />
                    </h1>
                    <span className="typewriter">
                      <Typewriter
                        cursor
                        cursorStyle="|"
                        words={[
                          'UI/UX Designer',
                          'Frontend Developer',
                          'Backend Developer',
                          'Professional Coder',
                        ]}
                        loop={true}
                      />
                    </span>
                    <div className="home__paragraph">
                      <p>
                        Experienced Full Stack Developer with a demonstrated
                        history of working in the internet industry. Building
                        Web applications with React, Ruby on rails, Laravel,
                        javascrippt, Angular, Typescript, MySQL/Postgres/MongoDb
                        and some other cool libraries and frameworks.
                      </p>
                    </div>
                    <div className="icons">
                      <motion.div
                        className="socials"
                        whileHover={{
                          scale: 1.3,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a href="https://www.instagram.com/mikey_mbugua/">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ fontSize: '35', color: 'white' }}
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        className="socials"
                        whileHover={{
                          scale: 1.3,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a href="https://twitter.com/MichaelKamiri2">
                          <FontAwesomeIcon
                            className="insta"
                            icon={faTwitter}
                            style={{ fontSize: '35', color: 'white' }}
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        className="socials"
                        whileHover={{
                          scale: 1.3,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a href="https://linkedin.com/in/michael-kamiri-mbugua/">
                          <FontAwesomeIcon
                            icon={faLinkedin}
                            size={20}
                            style={{ fontSize: '35', color: 'white' }}
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        className="socials"
                        whileHover={{
                          scale: 1.3,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <a href="https://github.com/mike-mbugua/">
                          <FontAwesomeIcon
                            icon={faGithub}
                            style={{ fontSize: '35', color: 'white' }}
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.5 }}
                      >
                        <button className="primary__btn">Contact Me</button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <About />

            <div className="hr"></div>
            <div id="service_container">
              <Service />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div>
              <Skill />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
