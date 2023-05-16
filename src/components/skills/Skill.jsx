import React from 'react'
import './skill.css'

function Skill() {
  return (
    <div className="skill__container">
      <h1>Skills & Experiences</h1>
      <div className="both__skills">
        <div className="design__skills">
          <h2>Designing Skills</h2>
          <div className="skill-box">
            <h3>Figma</h3>
            <div className="skill__bar">
              <span className="skill-per html">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Design</h3>
            <div className="skill__bar">
              <span className="skill-per design">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Photoshop</h3>
            <div className="skill__bar">
              <span className="skill-per photoshop">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
        </div>

        {/*----------- DEVELOPMENT SKILLS ------------------------------------------ */}
        <div className="development__skills">
          <h2>Development Skils</h2>
          <div className="skill-box">
            <h3>HTML</h3>
            <div className="skill__bar">
              <span className="skill-per html">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>CSS</h3>
            <div className="skill__bar">
              <span className="skill-per css">
                <span className="tooltip">95%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Javascript</h3>
            <div className="skill__bar">
              <span className="skill-per javascript">
                <span className="tooltip">93%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>React</h3>
            <div className="skill__bar">
              <span className="skill-per react">
                <span className="tooltip">93%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Ruby on Rails</h3>
            <div className="skill__bar">
              <span className="skill-per ruby">
                <span className="tooltip">90%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Node Js</h3>
            <div className="skill__bar">
              <span className="skill-per node">
                <span className="tooltip">85%</span>
              </span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Express Js</h3>
            <div className="skill__bar">
              <span className="skill-per express">
                <span className="tooltip">83%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skill
