import React from 'react'
import { FooterBanner, HeroBanner, Product } from './Components'


const Home = () => {
  return (
    <>
      HeroBanner

      <div className='products-heading'>
        <h2>Our Best Pics</h2>
        <p>Books Of Many Genres</p>
      </div>

      <div className='products-container'>
        {
          ['Book 1 ' , 'Book 2'].map((product) => product)
        }
      </div>


      Footer
    </>
  )
}

export default Home