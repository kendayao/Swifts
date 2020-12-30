import {combineReducers} from 'redux';
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer'
import orderReducer from './order/order.reducer'
import paymentReducer from './payment/payment.reducer'

const rootReducer=combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    order: orderReducer,
    payment: paymentReducer
})


export default rootReducer