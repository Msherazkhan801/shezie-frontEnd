import React from 'react'
import './style/contact.css'
import { AiFillHome,AiFillPhone } from "react-icons/ai";
import {BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='body'>
  <section>
    
    <div className="section-header">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    <div className="container">
      <div className="row">
        
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-info-icon">
          <AiFillHome/>
            </div>
            
            <div className="contact-info-content">
              <h4>Address</h4>
              <p>4671 Shew adda Road,<br/> Owatonna, Minnesota, <br/>55060</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <AiFillPhone/>
            </div>
            
            <div className="contact-info-content">
              <h4>Phone</h4>
              <p>03213-323-423</p>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-info-icon">
            <BsFillEnvelopeFill/>
            </div>
            
            <div className="contact-info-content">
              <h4>Email</h4>
             <p>test@mfano.ga</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div className="input-box">
              <input type="text" required="true" name=""/>
              <span>Full Name</span>
            </div>
            
            <div className="input-box">
              <input type="email" required="true" name=""/>
              <span>Email</span>
            </div>
            
            <div className="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div className="input-box">
              <input type="submit" value="Send" name=""/>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>

    </div>
  )
}

export default Contact