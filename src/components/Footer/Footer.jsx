import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem Ipsium is simply dummy text of the of the printing and typesetting. when an unknown printer a gallery of type and scrambled it to make a type of specimen book.</p>
            <div className="social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="content-right">
        <h2>GET IN TOUCH</h2>
            <ul>
                <li>+234-904-666-0706</li>
                <li>emmywiser3@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright 2024 &#169;  Tomato.com - All Right Reserved.</p>
        <span>Crafted by ♥ EmmyCodeRigi</span>
      </div>
    </div>
  )
}

export default Footer
