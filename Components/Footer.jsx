import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Saayo All Rights Reserved</p>
      <p className='icons'>
        <Link href='https://www.instagram.com/saayo_store/?hl=en' >
        <AiFillInstagram />
        </Link>
        <AiOutlineTwitter />
      </p>
      <p><AiOutlineWhatsApp/><a href='sms://+919870405708;?&body=Hello%20World'>+919870405708</a></p>
    </div>
  )
}

export default Footer