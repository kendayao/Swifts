import React from 'react'
import './Return.css'

function Return() {
    return (
        <div className='return'>
            <div className='return__logo'>
                <img src='../../logo/main-swifts-logo.png' alt='swifts logo'/>
            </div>

            <div className='return__body'>
                <div className='return__header'>
                    <p className='privacy__title'>Return Policy</p>
                </div>

                <div className='return__paragraph'>
                    <p>Here at Swifts, we like to keeps things simple. That goes for our returns and refund policy as well. Instead of returning items, you can contact us for a full refund. Why? Returns run counter to our emphasis on sustainability as every return has a carbon footprint. To be eligible for a full refund, provide us with the order number, tell us what went wrong, and send us a picture of the item to support@swifts.com.  After that, you can either keep the item, or you might want to donate it.</p>
                    <p>Once a refund is approved, we will email you letting you know that the refund has been issued. Please note that all refunds are returned to the original form of payment. Please allow 3-5 business days for the refund to be processed and returned to the original form of payment. </p>
                </div>
            </div>
        </div>
    )
}

export default Return
