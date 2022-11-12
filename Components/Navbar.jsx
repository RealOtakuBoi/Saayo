import React from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlinePhone, AiOutlineShop, AiOutlineShopping, AiOutlineWhatsApp } from 'react-icons/ai'
import  Cart  from './Cart';
import { useStateContext } from '../Context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Saayo</Link>
      </p>

      <p className="logo">
        <Link href={`/sell/sellForm`}>Sell</Link>
      </p>

      <p className="logo">
      <Link href={`https://wa.me/+919870405708?text=Hello%20I%20want%20to%20Contact%20you%20About%20some%20queries`}>Contact</Link>
      </p>

      

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>

    <div className='bottom-navbar'>
    <a><Link href="/"><AiOutlineHome/></Link></a>
    <a><Link href={`/sell/sellForm`}><AiOutlineShop/></Link></a>
    <a><Link href={`https://wa.me/+919870405708?text=Hello%20I%20want%20to%20Contact%20you%20About%20some%20queries`}><AiOutlinePhone/></Link></a>
    <a><button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}</a>
    </div>
    </>

  )
}

export default Navbar