import React from 'react'
import './Nav.css'
import { motion } from 'framer-motion'
import { Link, ScrollLink } from 'react-scroll'
import BouncingText from 'react-bouncing-text'

import {
  faHome,
  faAddressCard,
  faScrewdriverWrench,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Nav() {
  return (
    <div className="nav__container">
      {/* <motion.div
        className="icon__container"
        whileHover={{
          scale: 1.3,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link
          to="www.youtube.com"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <h5>home</h5>
      </motion.div>

      <motion.div
        className="icon__container"
        whileHover={{
          scale: 1.3,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to={'#about__container'}>
          {' '}
          <FontAwesomeIcon icon={faAddressCard} className="icon" />
        </Link>
        <h5>About me</h5>
      </motion.div>

      <motion.div
        className="icon__container"
        whileHover={{
          scale: 1.3,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faScrewdriverWrench} className="icon" />
        <h5>Skills</h5>
      </motion.div>

      <motion.div
        className="icon__container"
        whileHover={{
          scale: 1.3,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon
          icon={faComment}
          className="icon"
          style={{ textShadow: '2px 2px 4px #000000' }}
        />
        <h5>Contact</h5>
      </motion.div> */}
    </div>
  )
}

export default Nav
