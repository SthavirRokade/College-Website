import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import white_arrow from '../../Assets/white-arrow.png'



const Contact = () => {

    


// export default App;
  return (
    <div className='contact'>
        <div className="contact-col">
       <h3>Send Us A Message <img src={msg_icon} alt="" /> </h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non voluptatum consectetur numquam quia architecto maiores nemo debitis, voluptatem amet explicabo, excepturi, fugit voluptate rerum. Nihil, tempora. Dolores, dolor velit!</p>
       <ul>
        <li> <img src={mail_icon} alt="" /> sthavirrokade2001@gmail.com</li>
        <li><img src={phone_icon} alt="" /> 9823758373</li>
        <li><img src={location_icon} alt="" /> Shivaji Nagar ,Pune</li>
       </ul>
        </div>
        <div className="contact-col">
            <form>
                <label >Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' required />
                <label>Phone Number</label>
                <input type="tell" name="phone" placeholder='Enter Your Phone Number' required />
                <label>Write Your Message Here</label>
                <textarea name="message" placeholder='Enter Your Message' rows="6" required></textarea>
                <button className='btn dark-btn' type='Submit'>Submit Now <img src={white_arrow} alt="" /> </button>

            </form>
            <span></span>
            </div>

    </div>
  )
}

export default Contact