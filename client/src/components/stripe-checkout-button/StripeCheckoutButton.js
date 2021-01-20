import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './StripeCheckoutButton.css'
import {connect} from 'react-redux'
import { emptyCart } from '../../redux/cart/cart.actions';
import {selectShoppingCart} from '../../redux/cart/cart.selectors'
import { fetchRecentOrder } from '../../redux/order/order.actions';
import {storePaymentInfo} from '../../redux/payment/payment.actions'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function StripeCheckoutButton({price, emptyCart, shoppingCart, fetchRecentOrder, storePaymentInfo}) {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51Hd2wwD99Zg7DoCBCb1teG49Zx498uKexo7gQYEeyCu74jC5zILyS9i36ciltfcaUVMSzAVgQ8rj3bFb1wFgasrW00uILahd67'

    const history=useHistory();

    const onToken=token=>{
        storePaymentInfo(token)
        axios({
            url: 'payment',
            method: 'post',
            data:{
                amount: priceForStripe,
                token
            }
        }).then(response=>{
            console.log(response)
            fetchRecentOrder(shoppingCart)
            history.replace('/order')
            emptyCart();
            
        }).catch(error=>{
            console.log('Payment error: ', error);
        })
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
    fetchRecentOrder: order=>(dispatch(fetchRecentOrder(order))),
    storePaymentInfo: token=>(dispatch(storePaymentInfo(token)))
})

const mapStateToProps=state=>({
    shoppingCart: selectShoppingCart(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButton)
