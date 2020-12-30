import {createSelector} from 'reselect';

const selectPayment=state=>state.payment

export const selectPaymentInfo=createSelector(
    [selectPayment],
    payment=>payment.paymentInfo
)