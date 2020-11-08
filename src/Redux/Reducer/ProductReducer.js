import {LOAD_PRODUCTS} from './../Action/ProductAction';

const productReducer = (state = [], action) => {
    switch (action.type) {    
	  case LOAD_PRODUCTS:
          return [...action.payload]; 
      default:
          return state;
    }
}

export default productReducer;

