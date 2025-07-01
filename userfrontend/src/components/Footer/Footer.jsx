import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo_bottom} alt="" />
          <p>Food Prep is a full-stack project designed for hands-on teaching, helping students learn full-stack development.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href="https://foodprep.edmingle.com/"></a>Home</li>
            <li><a href="https://foodprep.edmingle.com/contact-us"></a>About us</li>
            <li><a href="https://foodprep.edmingle.com/courses"></a>Courses</li>
            <li><a href="https://foodprep.edmingle.com/reviews"></a>Reviews</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+91 19823 23654</li>
            <li>enquiry@foodprep.in</li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className='footer-copyright'>Copyright 2024 © 2021 FoodPrep. All rights reserved.</p>
    </div>
  )
}

export default Footer
