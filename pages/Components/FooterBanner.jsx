import Link from 'next/link'
import React from 'react'
import { urlFor } from '../../lib/client'


const FooterBanner = ({footerbanner}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
        <h3>{footerbanner.product}</h3>
        </div>
        <div className='right'>
          <p>{footerbanner.largeText2}</p>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner