import React from 'react'
import './CheckoutItem.css'
import {clearItemFromCart} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'


function CheckoutItem({image, id, name, size, quantity, price, clearItemFromCart}) {


    return (
        <div className='checkoutItem'>
            <div className='checkoutItem__left'>
                <img className='checkoutItem__image' src={`../../images/${image}.png`} alt='product'/>  
                <p className='checkoutItem__button' onClick={()=>clearItemFromCart(id)}>Remove from Cart</p>
            </div>
            <div className='checkoutItem__right'>
                <p className='checkoutItem__name'>{name}</p>
                <p className='checkoutItem__size'>Size: {size}</p>
                <p className='checkoutItem__quantity'><span>&lt;</span> {quantity} <span>&gt;</span></p>
                <p className='checkoutItem__price'>{price}</p>
            </div> 
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    clearItemFromCart: id=>(dispatch(clearItemFromCart(id)))
})


export default connect(null, mapDispatchToProps)(CheckoutItem)
