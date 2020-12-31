import React from 'react'
import './CheckoutItem.css'
import {clearItemFromCart, removeItemFromCart, addItemToCart} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'


function CheckoutItem({image, id, name, size, quantity, price, clearItemFromCart, removeItemFromCart,addItemToCart}) {

    const itemPrice=quantity*price
    itemPrice.toFixed(2)
    return (
        <div className='checkoutItem'>
            <div className='checkoutItem__left'>
                <img className='checkoutItem__image' src={`../../images/${image}.png`} alt='product'/>  
                <p className='checkoutItem__button' onClick={()=>clearItemFromCart(id)}>Remove from Cart</p>
            </div>
            <div className='checkoutItem__right'>
                <p className='checkoutItem__name'>{name}</p>
                <p className='checkoutItem__size'>Size: {size}</p>
                <p className='checkoutItem__quantity'>Qty: <span className='checkoutItem__quantity--left' onClick={()=>removeItemFromCart(id)}>&lt;</span> {quantity} <span className='checkoutItem__quantity--right' onClick={()=>addItemToCart(id)}>&gt;</span></p>
                <p className='checkoutItem__price'>{itemPrice.toFixed(2)}</p>
            </div> 
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    clearItemFromCart: id=>(dispatch(clearItemFromCart(id))),
    removeItemFromCart: id=>(dispatch(removeItemFromCart(id))),
    addItemToCart: id=>(dispatch(addItemToCart(id)))
})


export default connect(null, mapDispatchToProps)(CheckoutItem)
