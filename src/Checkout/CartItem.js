import React from 'react';
import { PlusIcon, MinusIcon, TrashIcon } from '../icons';
import './Checkout.css';
import { increaseCartItem, decreaseCartItem, removeProduct } from './../Redux/Action/CartAction';
import { useDispatch } from 'react-redux';
const CartItem = ({product}) => {
    const dispatch = useDispatch();

    const increaseCart=(item)=>{
        dispatch(increaseCartItem(item));
    }

    const decreaseCart=(item)=>{
        dispatch(decreaseCartItem(item));
    }

    const removeItem=(item)=>{
        dispatch(removeProduct(item));
    }

    return ( 
        <div className={"cart-item"}>
            <div className={"img-width"}>
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={product.photo+"?c="+product.id} />
            </div>
            <div className={"prod-info"}>
                <h5>{product.name}</h5>
                <p>Price: {product.price}$</p>                
            </div>
            <div className={"prod-action"}>
                 <p>Qty: {product.quantity}</p>
                 <button 
                 onClick={increaseCart.bind(this,product)}
                 >
                     <PlusIcon width={"20px"}/>
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={decreaseCart.bind(this,product)}
                    >
                        <MinusIcon width={"20px"}/>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={removeItem.bind(this,product)}
                    >
                        <TrashIcon width={"20px"}/>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;