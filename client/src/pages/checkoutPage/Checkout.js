import React from 'react'
import './Checkout.css'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripeCheckoutButton from '../../components/stripe-checkout-button/StripeCheckoutButton'
import {connect} from 'react-redux'
import {selectShoppingCart, selectShoppingCartTotal} from '../../redux/cart/cart.selectors'
import {Link} from 'react-router-dom'

function Checkout({shoppingCart, shoppingCartTotal}) {
    return (
        <div className='checkout'>
            <div className='checkout__body'>
                <div className='checkout__title'>
                    {shoppingCart.length>0?<p className='checkout__link--big'>Shopping Cart</p>:
                    <p className='checkout__link--small'>Shopping cart is empty. Click <Link to='/shop'>here</Link> to continue shopping </p>
                    }
                </div>
                <div className='checkout__content'>
                    {shoppingCart.map(item=>(
                        <CheckoutItem 
                            id={item.productId}
                            image={item.image}
                            name={item.name}
                            color={item.color}
                            size={item.size}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                </div>
                {shoppingCart.length>0?
                <div className='checkout__totalContainer'>
                    <p className='checkout__total'>Total: ${shoppingCartTotal.toFixed(2)}</p>
                    <StripeCheckoutButton price={shoppingCartTotal.toFixed(2)} />
                    <div className='checkout__notice'>
                        <p>*This is not a real ecommerce store. Do not enter a real credit card. Please use the following test credit card for payments*</p>
                        <p>4242 4242 4242 4242 - Exp:04/24 - CVC:123</p>
                    </div>
                </div>:
            null
            }
            </div>

        </div>
    )
}

const mapStateToProps=state=>({
    shoppingCart: selectShoppingCart(state),
    shoppingCartTotal: selectShoppingCartTotal(state)
})

export default connect(mapStateToProps)(Checkout)
