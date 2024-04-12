import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';

const CustomNavbar = () => { 

  const [sticky, setSticky] = useState(false)
  
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky (false);
    })
  },[]);

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}> 
      <img src={logo} alt=""  className='logo'/>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  );
}

export default CustomNavbar; 
