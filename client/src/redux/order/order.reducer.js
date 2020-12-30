const INITIAL_STATE={
    recentOrder: []
}

const orderReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'FETCH_RECENT_ORDER':
            return{
                ...state,
                recentOrder: action.payload
            }
        default:
            return state
    }
}

export default orderReducer