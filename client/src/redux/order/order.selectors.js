import {createSelector} from 'reselect';

const selectOrder=state=>state.order

export const selectRecentOrder=createSelector(
    [selectOrder],
    order=>order.recentOrder
)

export const selectRecentOrderTotal=createSelector(
    [selectRecentOrder],
    recentOrder=>recentOrder.reduce((accumaltedQuantity, orderItem)=>accumaltedQuantity+orderItem.quantity*orderItem.price, 0)
)