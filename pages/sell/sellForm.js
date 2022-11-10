import React, { useState } from 'react'
import Script from 'next/script'

const sellForm = () => {


// const submitHandler = () => {
//     const config = {
//         SecureToken: "37083fca-878f-4692-b437-c134f92cf8c3",
//         To : 'Saayo600@gmail.com',
//         From : "you@isp.com",
//         Subject : "Want to Contact you to sell Books",
//         Body : `I am ${name}`
//     }
//     if(window.Email){
//         window.Email.send(config)
//     }
// }


  return (

    <>
    <div className='pt1'>
        <div className='sell-container'>
        <div className='sell-title'>Connect with Us</div>
        <form action="#" className='sell-content'>
            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Full Name</span>
                    <input type="text" name="name" placeholder='Enter Your Full Name' id="name" required/>
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Phone Number</span>
                    <input type="tel" name="phone" id="num" placeholder='enter your phone number' required  />
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Adress</span>
                    <input type="text" name="Address" id="adress" required  />
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                <select name="seller" id="seller" class="sell-box">
                    <option value="individual">Individual</option>
                    <option value="store">Store</option>
                </select>
                </div>
            </div>

            <button className='sell-btn'>
                Submit
            </button>
        </form>
        </div>
        </div>

        <script src='https://smtpjs.com/v3/smtp.js'/>
        

    </>
    



  )
}

export default sellForm