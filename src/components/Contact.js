import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
function Contact() {
  return (
    <div className='icons'>
       <h1>Contact Us</h1>
       <div className='social-icons'>
          <AiFillTwitterCircle className='social-icon'/>
          <AiFillInstagram className='social-icon'/>
          <FaTiktok className='social-icon'/>
       </div>
       <div>
            <p>Email:chakula@gmail.com</p>
            <p>+254 700000000</p>
            <p>+254 735009000</p>
       </div>
    </div>
  )
}

export default Contact