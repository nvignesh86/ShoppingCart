import {CLEAR_SEARCH_VAL, SEARCH_PRODUCTS} from './../Action/SearchAction';

const searchReducer = (search = {}, action) => {
    switch (action.type) {  
      case SEARCH_PRODUCTS:
           return Object.assign({},action.payload) ;
      case CLEAR_SEARCH_VAL:
          return {}; 
      default:
          return search;
    }
}

export default searchReducer;

