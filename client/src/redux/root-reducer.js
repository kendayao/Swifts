import {combineReducers} from 'redux';
import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer'
import orderReducer from './order/order.reducer'

const rootReducer=combineReducers({
    shop: shopReducer,
    cart: cartReducer,
    order: orderReducer
})


export default rootReducer