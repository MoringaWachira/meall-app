import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
function Contact() {
  return (
    <div className='icons'>
       <h1>Contact Us</h1>
       <div className='social-icons'>
        <AiFillTwitterCircle />
        <AiFillInstagram />
        <FaTiktok />
       </div>
    </div>
  )
}

export default Contact