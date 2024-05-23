import React from 'react'
import './About.css'
import About_img from '../../Assets/about.png'
import play_icon from '../../Assets/play-icon.png'


export const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
       <img src={About_img} alt=""  className='about-img'/>
       <img src={play_icon} alt=""  className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sequi explicabo, minima possimus necessitatibus inventore repellat aspernatur maiores voluptates, officia deserunt. Sint nemo voluptates mollitia ea quisquam officia vero provident.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque alias soluta aspernatur enim dignissimos obcaecati perferendis magnam esse quas repellat quaerat quod non, in voluptatem eius modi commodi aut.</p>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nostrum excepturi distinctio vero consequatur officiis quasi, rerum harum, et labore corrupti voluptate quos alias tempora impedit quisquam dicta unde eius?</p>
            
            </div>
    </div>
  )
}
