import React from 'react'
import './Hero.css'
import dark_arrow from '../../Assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure Better Education for a Better World</h1>
            <p>Our Cutting-edge Ciruculam Is Designed To Empower Students With The Knowledge,Skills,,And Experience Needed to excel in The Dynamic Feild Of Education</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
        </div>

    </div>
  )
}
