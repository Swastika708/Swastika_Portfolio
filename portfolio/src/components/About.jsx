import React from 'react'
import './About.css'
import profile from '../assets/profile.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Hello! I'm Swastika Kumari, a passionate and results-driven Computer Science graduate from Dumka Engineering College, class of 2024, with a strong foundation in programming, web development, and artificial intelligence.</p>
                    <p>I specialize in Python, Java, JavaScript, and have hands-on experience with Flask, HTML, CSS, and database systems like MySQL and PostgreSQL. I enjoy building practical solutions to real-world problems through technology.</p>
                    <p>I’m a curious learner, problem-solver, and team player, always striving to contribute to meaningful projects that make a difference.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About