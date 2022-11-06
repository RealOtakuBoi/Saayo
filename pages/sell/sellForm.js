import React from 'react'

const sellForm = () => {
  return (

    <div className='pt1'>
        <div className='container'>
        <div className='title'>Registeration</div>
        <form action="#">
            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Full Name</span>
                    <input type="text" name="fname" placeholder='Enter Your Full Name' id="fname" required />
                </div>
            </div>

            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Phone Number</span>
                    <input type="number" name="Phone-Number" id="num" placeholder='enter your phone number' required />
                </div>
            </div>

            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Adress</span>
                    <input type="text" name="Adress" id="adress" required />
                </div>
            </div>

            <div className='user-details'>
                <div className='input-box'>
                <select name="seller" id="seller" class="box">
                    <option value="individual">Individual</option>
                    <option value="store">Store</option>
                </select>
                </div>
            </div>
        </form>
        </div>
    </div>
    



  )
}

export default sellForm