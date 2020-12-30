import React from 'react'
import './Order.css'
import {selectRecentOrder, selectRecentOrderTotal} from '../../redux/order/order.selectors'
import {connect} from 'react-redux'
import OrderItem from '../../components/order-item/OrderItem'
import {selectPaymentInfo} from '../../redux/payment/payment.selectors'

function Orders({recentOrder, recentOrderTotal, paymentInfo}) {
    console.log(paymentInfo)
    return (
        <div className='order'>
            <p className='order__heading'>Thank you for your order!</p>

            <div className='order__body'>
                <p className='order__title'>Order Summary</p>
                <div className='order__items'>
                    {recentOrder.map(orderItem=>(
                    <OrderItem
                        image={orderItem.image}
                        name={orderItem.name}
                        price={orderItem.price}
                        quantity={orderItem.quantity}
                        size={orderItem.size}
                    />
                    ))}
                </div>
                <div className='order__footer'>
                    <div className='order__payment'>
                        <p>Payment Details</p>
                        <p>{paymentInfo.card.brand} ******{paymentInfo.card.last4}</p>
                    </div>
                    <div className="order__address">
                        <p>Billing Address</p>
                        <p>{paymentInfo.card.name}</p>
                        <p>{paymentInfo.card.address_line1}</p>
                        <p>{paymentInfo.card.address_city}, {paymentInfo.card.address_zip}</p>
                    </div>
                    <div className='order__total'>
                        <p>Order Total: ${recentOrderTotal}</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    recentOrder: selectRecentOrder(state),
    recentOrderTotal: selectRecentOrderTotal(state),
    paymentInfo: selectPaymentInfo(state)
})

export default connect(mapStateToProps, null)(Orders)
