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
          product?.map((product) => <Product key={product.id} product = {product} />)
        }
      </div>


      <div className='products-heading'>
        <h2>New Arrivals</h2>
        <p>Books from Vendors near you</p>
      </div>

      <div className='products-container'>
        {
          product?.map((product) => <Product key={product.id} product = {product} />)
        }
      </div>



      {/* <FooterBanner footerbanner={bannerData && bannerData[0]} /> */}
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