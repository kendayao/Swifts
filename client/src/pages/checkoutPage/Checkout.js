import React from 'react'
import './Checkout.css'
import {connect} from 'react-redux'
import {selectShoppingCart} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'

function Checkout({shoppingCart}) {

    console.log(shoppingCart)

    return (
        <div className='checkout'>
            <div className='checkout__body'>
                <div className='checkout__title'>
                    <p>Shopping Cart</p>
                </div>
                <div className='checkout__content'>
                    {shoppingCart.map(item=>(
                        <CheckoutItem 
                            image={item.image}
                            name={item.name}
                            color={item.color}
                            size={item.size}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    shoppingCart: selectShoppingCart(state)
})

export default connect(mapStateToProps)(Checkout)
