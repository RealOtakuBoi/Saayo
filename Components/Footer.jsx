import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Saayo All Rights Reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      <p><AiOutlineWhatsApp/>+919870405708</p>
    </div>
  )
}

export default Footer