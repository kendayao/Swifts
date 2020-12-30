import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './StripeCheckoutButton.css'
import {connect} from 'react-redux'
import { emptyCart } from '../../redux/cart/cart.actions';
import {selectShoppingCart} from '../../redux/cart/cart.selectors'
import { fetchRecentOrder } from '../../redux/order/order.actions';
import {useHistory} from 'react-router-dom'

function StripeCheckoutButton({price, emptyCart, shoppingCart, fetchRecentOrder}) {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51Hd2wwD99Zg7DoCBCb1teG49Zx498uKexo7gQYEeyCu74jC5zILyS9i36ciltfcaUVMSzAVgQ8rj3bFb1wFgasrW00uILahd67'

    const history=useHistory();

    const onToken=token=>{
        console.log(token)
        fetchRecentOrder(shoppingCart)
        history.replace('/order')
        emptyCart();

    }

    return (
        <div className='stripeCheckoutButton'>
            <StripeCheckout 
                label='Pay Now'
                name='SWIFTS CHECKOUT'
                billingAddress
                shippingAddress
                image='../../logo/swifts-small-logo.png'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            >
            <button className="stripeCheckoutButton__button">Pay Now</button>
            </StripeCheckout>
            
        </div>
    )
}


const mapDispatchToProps=dispatch=>({
    emptyCart: ()=>(dispatch(emptyCart())),
    fetchRecentOrder: order=>(dispatch(fetchRecentOrder(order)))
})

const mapStateToProps=state=>({
    shoppingCart: selectShoppingCart(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton)
