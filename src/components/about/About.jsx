import React from 'react'
import './about.css'
import ME from '../../assets/donutrender.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>20+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Skills</h5>
              <small>Project Voice Data Cloud</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Large and Small</small>
            </article>
          </div>

          <p>
          Professional Project/Program Manager with experience working with teams to accomplish short- and long-term project goals. Managed budgets and monitored project costs. A Team Leader experienced in directing activities of workgroups. Develops strategies, provides training, sets goals, and obtains team feedback. Excellent interpersonal and communication skills. Big picture focus with excellence in communicating goals and vision to succeed. Problem solver, networker, and consensus builder.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About