import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
      avatar: AVTR1,
      name: 'Made Up 1',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate deserunt facere ipsum incidunt numquam odit inventore, perspiciatis alias! Aliquid sed quos neque nobis explicabo est ipsum placeat asperiores nam!'
  },
  {
      avatar: AVTR2,
      name: 'Made Up 2',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate deserunt facere ipsum incidunt numquam odit inventore, perspiciatis alias! Aliquid sed quos neque nobis explicabo est ipsum placeat asperiores nam!'
  },
  {
      avatar: AVTR3,
      name: 'Made Up 3',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate deserunt facere ipsum incidunt numquam odit inventore, perspiciatis alias! Aliquid sed quos neque nobis explicabo est ipsum placeat asperiores nam!'
  },
  {
      avatar: AVTR4,
      name: 'Made Up 4',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate deserunt facere ipsum incidunt numquam odit inventore, perspiciatis alias! Aliquid sed quos neque nobis explicabo est ipsum placeat asperiores nam!'
  }
]



function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>References from Mangers and Peers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map (({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className='client__avatar'>
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials