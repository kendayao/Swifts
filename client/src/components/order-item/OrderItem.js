import React from 'react'
import './OrderItem.css'

function OrderItem({image, name, price, quantity, size}) {

    
    const itemPrice=quantity*price
    itemPrice.toFixed(2)

    return (
        <div className='orderItem'>
            <div className='orderItem__left'>
                <img src={`../../images/${image}.png`} alt='product'/>  
            </div>
           <div className='orderItem__right'>
                <p>{name}</p>
                <p>Size: {size}</p>
                <p>Qty: {quantity}</p>
                <p>{itemPrice}</p>
           </div>
        </div>
    )
}

export default OrderItem
