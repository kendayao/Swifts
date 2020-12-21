import {createSelector} from 'reselect';

const selectCart=state=>state.cart

export const selectShoppingCart=createSelector(
    [selectCart],
    cart=>cart.shoppingCart
)
export const selectShoppingCartCount=createSelector(
    [selectShoppingCart],
    shoppingCart=>shoppingCart.reduce((accumaltedQuantity, shoppingCartItem)=>accumaltedQuantity+shoppingCartItem.quantity, 0)
)