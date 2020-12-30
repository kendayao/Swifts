import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import './StripeCheckoutButton.css'
import {connect} from 'react-redux'
import { emptyCart } from '../../redux/cart/cart.actions';

function StripeCheckoutButton({price, emptyCart}) {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51Hd2wwD99Zg7DoCBCb1teG49Zx498uKexo7gQYEeyCu74jC5zILyS9i36ciltfcaUVMSzAVgQ8rj3bFb1wFgasrW00uILahd67'

    const onToken=token=>{
        console.log(token)
        alert('payment success')
        emptyCart();

    }

    return (
        <div className='stripeCheckoutButton'>
            <StripeCheckout 
                label='Pay Now'
                name='Swifts Checkout'
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
    emptyCart: ()=>(dispatch(emptyCart()))
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton)
