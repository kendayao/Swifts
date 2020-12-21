export const addToCart=item=>({
    type: 'ADD_TO_CART',
    payload: item
})

export const addItemToCart=item=>({
    type: 'ADD_ITEM_TO_CART',
    payload: item
})

export const removeItemFromCart=id=>({
    type: 'REMOVE_ITEM_FROM_CART',
    payload: id
})


export const clearItemFromCart=id=>({
    type: 'CLEAR_ITEM_FROM_CART',
    payload: id
})

    
