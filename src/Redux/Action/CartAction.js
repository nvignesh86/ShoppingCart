export const ADD_PRODUCT_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const INCREASE_CART_ITEM = "INCREASE_CART_ITEM";
export const DECREASE_CART_ITEM = "DECREASE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const addProductToCart = () =>{
    return {type:ADD_PRODUCT_TO_CART};
}
export const increaseCartItem = payload => {
    return {type: INCREASE_CART_ITEM, payload}
}
export const decreaseCartItem = payload => {
    return {type: DECREASE_CART_ITEM, payload}
}
export const removeProduct = payload => {
    return {type: REMOVE_PRODUCT_FROM_CART, payload}
}

export const clearCart = () => {
    return {type: CLEAR_CART}
}

export const handleCheckout = () => {
    return {type: 'CHECKOUT'}
}

