import {createSelector} from 'reselect';

const selectOrder=state=>state.order

export const selectRecentOrder=createSelector(
    [selectOrder],
    order=>order.recentOrder
)