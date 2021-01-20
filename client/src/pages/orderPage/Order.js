import React, {useEffect} from 'react'
import './Order.css'
import OrderItem from '../../components/order-item/OrderItem'
import {selectRecentOrder, selectRecentOrderTotal} from '../../redux/order/order.selectors'
import {selectPaymentInfo} from '../../redux/payment/payment.selectors'
import {connect} from 'react-redux'

function Orders({recentOrder, recentOrderTotal, paymentInfo}) {
    
    useEffect(() => {
        const sendEmail=(serviceId, templateId, variables)=>{
            window.emailjs.send(serviceId, templateId, variables).then(res=>{
                console.log('email sent')
            }).catch(err=>console.log(err))
        }
        sendEmail('service_gprdvaj','template_rb3ew4v', 
        {
            to_name: paymentInfo.card.name, 
            message: 'We received your Swifts order!', 
            email: paymentInfo.email, 
            order: recentOrder.map(orderItem=>(
                orderItem.name
            ))} )
    }, [paymentInfo])
    
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
