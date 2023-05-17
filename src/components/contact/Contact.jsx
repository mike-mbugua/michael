import React from 'react'
import contact from './../../assets/images/contact-me.svg'
import { motion } from 'framer-motion'
import './contact.css'
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <div className="contact__container">
      <div className="leftContact">
        <div>
          <motion.div
            whileHover={{
              scale: 1,
              transition: { duration: 1 },
            }}
          >
            <img src={contact} alt="" height={200} width={'100%'} />
          </motion.div>
        </div>
        {/* < className="contact__paragraph"> */}
        <h1>Michael Kamiri Mbugua</h1>
        <p>
          Full Stack Developer <br />
          I am available for freelance work. Connect with me through a phone
          call or through my social media <br />
          <span className="phone">
            Phone:<span style={{ color: '#fb0700' }}>+254705197981</span>
          </span>{' '}
          <br />
          <span className="phone">
            Email:
            <span style={{ color: '#fb0700', fontSize: 'large' }}>
              kamirimichael369@gmail.com
            </span>
          </span>
        </p>

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
            <a href="www.linkedin.com/in/michael-kamiri-mbugua/">
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
        </div>
      </div>

      {/*Form ---------------------------------------------------------  */}
      <div className="right__contact">
        <h2>Send me a message/project</h2>
        <form action="">
          <div className="holder1">
            <div className="form1">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form1">
              <label htmlFor="name">Phone</label>
              <input type="number" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form1">
            <label htmlFor="name">Email</label>
            <input type="email" placeholder="example@gmail.com" />
          </div>
          {/* <br /> */}
          <div className="form1">
            <label htmlFor="name">Subject</label>
            <input type="text" placeholder="Subject" />
          </div>
          {/* <br /> */}
          <div className="form1">
            <label htmlFor="name">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <button className="primary__btn send">send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
