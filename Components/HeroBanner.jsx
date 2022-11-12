import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src='' alt="Microeconomics Class 11" className='hero-banner-image' />
        <div>
          <Link href={`https://wa.me/+917428780132?text=I%20want%20to%20request%20a%20book%20named%20%3A%20`}>
            <button type='button' >{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner