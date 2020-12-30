import React from 'react'
import './Order.css'
import {selectRecentOrder} from '../../redux/order/order.selectors'
import {connect} from 'react-redux'
import OrderItem from '../../components/order-item/OrderItem'

function Orders({recentOrder}) {

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
                        <p>Visa ******4242</p>
                    </div>
                    <div className="order__address">
                        <p>Billing Address</p>
                        <p>123 Main Street</p>
                        <p>Los Angeles, 90335</p>
                    </div>
                    <div className='order__total'>
                        <p>Order Total: $59.99</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    recentOrder: selectRecentOrder(state)
})

export default connect(mapStateToProps, null)(Orders)
