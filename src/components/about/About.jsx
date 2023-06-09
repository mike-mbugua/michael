import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import AboutImage from '../../assets/images/about.svg'
function About() {
  return (
    <div className="about__container" id="about__container">
      <div className="left">
        <img className="about__img" src={AboutImage} alt="" />
      </div>
      <div className="right">
        <h1>Who i am</h1>
        <div className="about__paragraph">
          <div className="correct">
            I am a full stack Developer based in kenya, with a passion for
            creating beautiful and intuitive user experience <br />I have a
            strong background in both front-end and back-end development. I am a
            self-motivated, hard-working and dedicated individual. Also team
            player, and always looking to learn new skills and techniques.
          </div>

          <div className="about__btn">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 1.3 }}
            >
              <button className="primary__btn">Contact Me</button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
