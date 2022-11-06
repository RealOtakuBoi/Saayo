import '../styles/globals.css'
import React from 'react'
import { Layout } from '../Components';
import { StateContext } from '../Context/StateContext'
import { Toaster } from 'react-hot-toast'


function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
      <Layout>
        <Toaster />
     <Component {...pageProps} />
     </Layout>
    </StateContext>
    
     )

}

export default MyApp
