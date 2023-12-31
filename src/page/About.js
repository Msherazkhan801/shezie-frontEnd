import React from 'react'
import {BsFillEnvelopeFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import './style/about.css'
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate=useNavigate()
  const LearnMore=()=>{
    navigate('/contact')
  }
  return (
    <div className='about-page'>
    <div className='about-section'>
      <h1>About Us</h1>
      <p>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type specimen book. It has survived not only five 
        centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the
         1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className='btn-wrapper'>
          <button className='btn-about-more' onClick={LearnMore}>Learn More</button>
          </div>
    </div>
    <div className='about-card-wrapper'>
    <div className='about-card'>
      <div className='icon'><FaUser/></div>
      <div className='desc'>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took </div>
    </div>
    <div className='about-card'>
      <div className='icon'>< BsFillEnvelopeFill/></div>
      <div className='desc'>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took </div>
    </div>
    <div className='about-card'>
      <div className='icon'><TiTickOutline/></div>
      <div className='desc'>Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, 
        when an unknown printer took </div>
    </div>
    </div>

    </div>
  )
}

export default About