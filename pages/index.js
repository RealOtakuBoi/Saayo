import React from 'react'
import { client } from '../lib/client'
import { FooterBanner, HeroBanner, Product } from './Components'


const Home = ({product , bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Our Best Pics</h2>
        <p>Books Of Many Genres</p>
      </div>

      <div className='products-container'>
        {
          product?.map((product) => product.name)
        }
      </div>


      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const product = await client.fetch(query)

  const BannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(BannerQuery)

  return{
    props: { product , bannerData }
}

}

export default Home