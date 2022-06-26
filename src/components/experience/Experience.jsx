import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Program/Project Management</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
            <div>
              <h4>Leadership</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Team Building</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Project Management</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Budget Control</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Time Management</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Customer Relations</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>

{/* ---------------------------  End of FrontEnd ------------------------ */}

      <div className="experience__backend">
      <h3>Technical Skillset</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Voice IP and TDM</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Data Infrastructure</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Cloud Architecture</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>Programing</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'  />
            <div>
              <h4>System Administration</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience