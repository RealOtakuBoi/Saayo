import Link from 'next/link'
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Saayo</Link>
      </p>
      <button type='button' className='cart-icon'>
        <AiOutlineShopping />
        <span className='cart-item-qty'>4</span>
      </button>
    </div>
  )
}

export default Navbar