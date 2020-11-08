import {LOGIN_USER, LOGOUT_USER} from './../Action/UserAction';

const userReducer = (userDetails = {}, action) => {
    switch (action.type) {  
      case LOGIN_USER:
           return Object.assign({},action.payload) ;
      case LOGOUT_USER:
          return [];  
      default:
          return userDetails;
    }
}

export default userReducer;

