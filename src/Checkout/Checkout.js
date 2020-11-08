import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearSearchValue } from '../Redux/Action/SearchAction';
import { handleLogout } from '../Redux/Action/UserAction';
import {clearCart} from './../Redux/Action/CartAction'
import CartItemList from './CartItemList';
import './Checkout.css';

function Checkout(){
   const cartItems = useSelector(state=>state.cartItems);
   const dispatch = useDispatch();
   const history = useHistory();

   const handleCheckout=()=>{   
        dispatch(clearCart());
        dispatch(handleLogout());
        dispatch(clearSearchValue());
        history.push("/Success");
   }

   const backToHome=()=>{
    dispatch(clearSearchValue());
    history.push("/");
   }

   const clearCheckoutCart=()=>{
        dispatch(clearCart());
   }
   
    return (
        <div >
        <div className={"card-text-align-center"}>
            <h1>Cart</h1>
            <p>This is the Cart Page.</p>
        </div>

        <div>
            <div>
                {
                    cartItems?.length > 0 ?
                    <CartItemList cartItems={cartItems}/>
                    :
                    <>
                        <div className={"card-text-align-center"}>
                            Your cart is empty
                        </div>
                        <div className={"home-link"} onClick={backToHome}>
                            Click to buy more
                        </div>
                    </>    
                    
                }
            </div>
            {
                cartItems.length > 0 && 
                <div className="checkout-footer">
                    <div className={"cart-total-items"}>
                        <p>Total Items</p>
                        <h4>{cartItems.reduce((s,item)=>s+item.quantity,0)}</h4>
                    </div>
                    <div className={"cart-total-price"}>
                        <p>Total Payment</p>
                        <h3>{cartItems.reduce((s,item)=>s+(item.price * item.quantity),0)+"$(SGD)"}</h3>
                    </div>
                    <div className="text-center">                        
                        <button className={"checkout-btn"} style={{marginLeft:"10px"}} onClick={clearCheckoutCart}>CLEAR</button>
                        <button className={"checkout-btn"} onClick={handleCheckout}>CHECKOUT</button>
                    </div>
                </div>
            }
            
        </div>
    </div>


    );
}
export default Checkout;