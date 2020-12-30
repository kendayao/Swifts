const INITIAL_STATE={
    paymentInfo: {}
}

const paymentReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'STORE_PAYMENT_INFO':
            return{
                ...state,
                paymentInfo: action.payload
            }
            default:
                return state
    }
}

export default paymentReducer