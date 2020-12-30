import React from 'react'
import './Order.css'
import {selectRecentOrder} from '../../redux/order/order.selectors'
import {connect} from 'react-redux'

function Orders({recentOrder}) {
    console.log(recentOrder)
    return (
        <div className='orders'>
            <h1>Order Success</h1>
        </div>
    )
}

const mapStateToProps=state=>({
    recentOrder: selectRecentOrder(state)
})

export default connect(mapStateToProps, null)(Orders)
