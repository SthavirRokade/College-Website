import React, { useRef } from 'react'
import './Testimonails.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

const Testimonails = () => {
    const slider=useRef();
    let tx=0;
    const slideForward =()=>{
      if(tx>-50)
      {
        tx-=25
      }
      slider.current.style.transform=`translateX(${tx}%)`
    }
     const slideBackward =()=>{
        if(tx<0)
      {
        tx+=25
      }
      slider.current.style.transform=`translateX(${tx}%)`
        
    }
     

  return (
    <div className='testimonails'>
        <img className='next-btn' src={next_icon} alt="" onClick={slideForward} />
        <img className='back-btn' src={back_icon} alt=""  onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3> Gayatri Sthavir Rokade </h3>
                                <span>MIT ,Kothrud</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptates facilis similique. Modi optio, aperiam fugit facilis perspiciatis esse corrupti provident voluptatum dicta illum quia dolores tempora, placeat similique odit!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Sthavir Rokade </h3>
                                <span>MIT ,Kothrud</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptates facilis similique. Modi optio, aperiam fugit facilis perspiciatis esse corrupti provident voluptatum dicta illum quia dolores tempora, placeat similique odit!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Sthavir Rokade </h3>
                                <span>MIT ,Kothrud</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptates facilis similique. Modi optio, aperiam fugit facilis perspiciatis esse corrupti provident voluptatum dicta illum quia dolores tempora, placeat similique odit!</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3> Yashodhan Sthavir Rokade </h3>
                                <span>MIT ,Kothrud</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque voluptates facilis similique. Modi optio, aperiam fugit facilis perspiciatis esse corrupti provident voluptatum dicta illum quia dolores tempora, placeat similique odit!</p>
                    </div>
                </li>
                
            </ul>
        </div>

    </div>
  )
}

export default Testimonails