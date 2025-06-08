import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li><a href='#home'>Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#mywork">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='nav-connect'><a href='#contact'>Connect with Me</a></div>
    </div>
  );
};

export default Navbar;
