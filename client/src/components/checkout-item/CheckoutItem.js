import React from 'react'
import './CheckoutItem.css'



function CheckoutItem({image, name, color, size, quantity, price}) {
    return (
        <div className='checkoutItem'>
            <img className='checkoutItem__image' src={`../../images/${image}.png`} alt='product'/>
            <p className='checkoutItem__name'>{name}</p>
            <p className='checkoutItem__color'>Color: {color}</p>
            <p className='checkoutItem__size'>Size: {size}</p>
            <p className='checkoutItem__quantity'>Quantity: {quantity}</p>
            <p className='checkoutItem__price'>${price}</p>
        </div>
    )
}


export default CheckoutItem
