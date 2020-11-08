import {ADD_PRODUCT_TO_CART, CLEAR_CART, DECREASE_CART_ITEM, INCREASE_CART_ITEM, REMOVE_PRODUCT_FROM_CART} from './../Action/CartAction';

const cartReducer = (cartItems = [], action) => {
    switch (action.type) {    	  
      case ADD_PRODUCT_TO_CART:
          let selectedItems = cartItems.filter(item=>item.id === action.payload.id);
          if (selectedItems.length === 1){
            selectedItems[0].quantity += 1;
          } else {
            action.payload.quantity=1;
            cartItems.push(action.payload);
          }
          return [...cartItems]; 
          
        case INCREASE_CART_ITEM:
            let seleIItems = cartItems.filter(item=>item.id === action.payload.id);
            if (seleIItems.length === 1){
                seleIItems[0].quantity += 1;
            } 
            return [...cartItems];
            
        case DECREASE_CART_ITEM:
            let seleDItems = cartItems.filter(item=>item.id === action.payload.id);
            if (seleDItems.length === 1){
                seleDItems[0].quantity -= 1;
            } 
            return [...cartItems];

        case REMOVE_PRODUCT_FROM_CART:
            let delIndex = cartItems.findIndex(item=>item.id === action.payload.id);
            cartItems.splice(delIndex,1);    
            return [...cartItems];
        case CLEAR_CART:
            return [];
      default:
          return cartItems;
    }
}

export default cartReducer;

