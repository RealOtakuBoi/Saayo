import React from 'react'

const sellForm = () => {
  return (

    <>

    <div className='pt1'>
        <div className='sell-container'>
        <div className='sell-title'>Connect with Us</div>
        <form action="#" className='sell-content'>
            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Full Name</span>
                    <input type="text" name="fname" placeholder='Enter Your Full Name' id="fname" required />
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Phone Number</span>
                    <input type="tel" name="Phone-Number" id="num" placeholder='enter your phone number' required />
                </div>
            </div>

            <div className='sell-user-details'>
                <div className='sell-input-box'>
                    <span className='sell-details'>Adress</span>
                    <input type="text" name="Adress" id="adress" required />
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

    </>
    



  )
}

export default sellForm