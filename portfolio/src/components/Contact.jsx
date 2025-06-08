import React from 'react';
import './Contact.css';
import gmail from '../assets/gmail.png';
import phone from '../assets/phone.png';
import placeholder from '../assets/placeholder.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b73389f2-f414-403d-a9e7-ff99ad68e5eb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset(); // Clear the form
    } else {
      alert("Message failed to send. Please try again.");
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>I'm currently available to take on new projects. You can contact me anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={gmail} alt='' className="contact-icon" /> <p>swastikathakur2345@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt='' className="contact-icon" /> <p>+91 7250393297</p>
            </div>
            <div className="contact-detail">
              <img src={placeholder} alt='' className="contact-icon" /> <p>Dumka, Jharkhand</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt='' className="contact-icon" /> <p><a href='https://www.linkedin.com/in/swastika-kumari-a7bb61228/'>Swastika Kumari</a></p>
            </div>
            <div className="contact-detail">
              <img src={github} alt='' className="contact-icon" /> <p><a href='https://github.com/Swastika708'>Swastika708</a></p>
            </div>
          </div>
        </div>
        <form className='contact-right' onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" placeholder='Enter your Name' name='name' required />
          <label>Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email' required />
          <label>Write your message here</label>
          <textarea name="message" rows={8} placeholder='Enter your message' required></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
