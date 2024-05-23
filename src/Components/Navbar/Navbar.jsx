import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import { Link } from 'react-scroll';

export const Navbar = () => {
  const[sticky,setSticky]= useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >500 ? setSticky(true):setSticky(false);
    })
},[]);
  return (
    <nav className={`container ${sticky? "dark-nav": ''}`}>
        <img  classname="logo" src={logo} alt="" />
        <ul>
          <li><Link to='hero container' smooth={true} offset={0} duration={500} >Home</Link></li>
          <li><Link to='programs' smooth={true} offset={-260} duration={500} >Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} >About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
          <li><Link to='testimonails' smooth={true} offset={-260} duration={500} >Testimonails</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
    </nav>
  )
}
