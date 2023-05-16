import React from 'react'
import './service.css'
import { motion } from 'framer-motion'

function Service() {
  return (
    <div className="service">
      <h1>What I Do</h1>
      <div className="service__container">
        <motion.div
          className="left__service"
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          //   whileTap={{ scale: 0.5 }}
        >
          <h1>Payment Integration</h1>
          <p>
            I do payment Integration to automate the process of payment. I can
            integrate with payment gateways.
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          //   whileTap={{ scale: 0.5 }}
          className="center__service"
        >
          <h1>Web Development</h1>
          <p>
            I do web development for both frontend and backend. I can build a
            website for you or your business.
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 1 },
          }}
          //   whileTap={{ scale: 0.5 }}
          whileDrag={{ scaleY: 50 }}
          className="right__service"
        >
          <h1>API/Integrations</h1>
          <p>
            Developing highly secure, fast and scalable Restful API for your
            application.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Service
