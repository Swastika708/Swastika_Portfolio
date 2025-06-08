import React from 'react'
import './Hero.css'
import profile from '../assets/profile.jpg';


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt=''/>
        <h1><span>I'm Swastika Kumari,</span> Fullstack Developer Based in India</h1>
        <p>Self-driven, quick starter, passionate programmer with a curious mind who enjoys solving a complex and challenging real-world problems.</p>
        <div className='hero-action'>
            <div className="hero-connect"><a href='#contact'>Connect with Me</a></div>
            <div className="hero-resume"><a href="/swastika_resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
