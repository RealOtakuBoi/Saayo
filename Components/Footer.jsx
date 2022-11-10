import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Saayo All Rights Reserved</p>
      <p className='icons'>
        <Link>
        <AiFillInstagram href='https://www.instagram.com/saayo_store/?hl=en' />
        </Link>
        <AiOutlineTwitter />
      </p>
      <p><AiOutlineWhatsApp/>+919870405708</p>
    </div>
  )
}

export default Footer