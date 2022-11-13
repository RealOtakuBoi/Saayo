import React, { useRef, useState } from 'react'
import Script from 'next/script'
import emailjs from '@emailjs/browser';

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


const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_6gl4a4j', 'template_0g21d3c', form.current, 'VAKUikMKqrmcm4Nrw')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  return (

    <>
    <div className='pt1'>
        <div className='sell-container'>
        <div className='sell-title'>Connect with Us</div>
        <form ref={form} onSubmit={sendEmail} className='sell-content'>
            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Full Name</span>
                    <input type="text" name="user_name" placeholder='Enter Your Full Name' id="name" required/>
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Phone Number</span>
                    <input type="tel" name="number" id="num" placeholder='enter your phone number' required  />
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Adress</span>
                    <input type="text" name="address" id="adress" required  />
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Book Name</span>
                    <input type="text" name="book" id="bookname" required  />
                </div>
            </div>

            {/* <div className='sell-user-details'>
                <div className='sell-input-box'>
                <select name="seller" id="seller" class="sell-box">
                    <option value="individual">Individual</option>
                    <option value="store">Store</option>
                </select>
                </div>
            </div> */}

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