import {createSelector} from 'reselect';

const selectCart=state=>state.cart

export const selectShoppingCart=createSelector(
    [selectCart],
    cart=>cart.shoppingCart
)