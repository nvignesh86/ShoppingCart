import { combineReducers } from 'redux';
import CartReducer from './CartReducer';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';
import searchReducer from './SearchReducer';

const rootReducer = combineReducers({
  products:ProductReducer,  
  cartItems:CartReducer,
  userDetails:UserReducer,
  search:searchReducer
});

export default rootReducer;
