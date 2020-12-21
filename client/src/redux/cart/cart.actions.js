export const addToCart=item=>({
    type: 'ADD_TO_CART',
    payload: item
})

export const clearItemFromCart=id=>({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: id
})

    
