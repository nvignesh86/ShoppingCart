import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_PRODUCT_TO_CART} from './../Redux/Action/CartAction';

function Product({index,item}){
    const dispatch = useDispatch();
    const cartItems = useSelector(state=>state.cartItems);

    const addToCart=(cartItem)=>{
        dispatch({type:ADD_PRODUCT_TO_CART, payload:cartItem});
    }

    const isProductInCart=()=>{
        return cartItems?.some(citem=>citem.id === item.id);
    }

    return (        
        <div className="product">
                    <img width={250} height={150} className="product-img" alt={item.name} src={item.photo + '?pid=' + item.id}></img>
                    <div className="product-name">{item.name}</div>                    
                    <div className="product-footer">
                        <div  className="product-price">{`${item.price}$(SGD)`}</div>
                        <button  className='addto-cart-btn-cls' onClick={addToCart.bind(this, item)}>{isProductInCart()?"Add More":"Add To Cart"}</button>
                    </div>
         </div>
    );
}
export default Product;
