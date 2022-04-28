import React from 'react'
import { Carousel } from 'antd'
import './carrousel.css'

const Carrousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img className='img-carousel' src="https://i.ibb.co/d41cpzV/slider-1.jpg" alt="slider-1" />
      </div>
      <div>
        <img className='img-carousel' src="https://i.ibb.co/3SGTWMG/slider-2.jpg" alt="slider-2" />
      </div>
      <div>
        <img className='img-carousel' src="https://i.ibb.co/hVPJdRH/slider-3.jpg" alt="slider-3" />
      </div>
      <div>
        <img className='img-carousel' src="https://i.ibb.co/BgyxdB3/slider-4.jpg" alt="slider-4" />
      </div>
    </Carousel>
  )
}

export default Carrousel