export const addItemToCart=(cartItems, cartItemToAdd)=>{
    const existingCartItem=cartItems.find(cartItem=>cartItem.productId===cartItemToAdd)

    if(existingCartItem){
        return cartItems.map(cartItem=>
            cartItem.productId===cartItemToAdd?{...cartItem, quantity: cartItem.quantity+1}: cartItem)
    }

    return[...cartItems]
}


export const removeItemFromCart=(cartItems, cartItemToRemove)=>{

    const existingCartItem=cartItems.find(cartItem=>cartItem.productId===cartItemToRemove)

    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.productId!==cartItemToRemove)
    }

    return cartItems.map(cartItem=>(
        cartItem.productId===cartItemToRemove?{...cartItem, quantity: cartItem.quantity-1}: cartItem
    ))
}