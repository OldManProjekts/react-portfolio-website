import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Program & Project Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>   
          </ul>
        </article>
        {/*--------------------- End of PM --------------------- */}

        <article className='service'>
          <div className='service__head'>
            <h3>Voice & Data Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>   
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>   
          </ul>
        </article>
        {/*--------------------- End of VD --------------------- */}

        <article className='service'>
          <div className='service__head'>
            <h3>Cloud Architecture</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
            </li>   
          </ul>
        </article>
        {/*--------------------- End of Cloud --------------------- */}
      </div>
    </section>
  )
}

export default services