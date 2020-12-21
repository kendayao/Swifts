const INITIAL_STATE={
    shoppingCart: []
}

const cartReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
                
            }
        case 'CLEAR_ITEM_FROM_CART':
            return{
                ...state,
                shoppingCart: state.shoppingCart.filter(shoppingCartItem=>(
                    shoppingCartItem.productId!==action.payload
                ))
            }
        default:
            return state;
    }
}

export default cartReducer