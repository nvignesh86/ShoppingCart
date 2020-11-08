import React from 'react';
import CartItem from './CartItem';
import styles from './Checkout.css';

const CartItemList = ({cartItems}) => {

    return (
            <div className={styles.cardContainer}>

                {
                    cartItems.map(product =>  <CartItem key={product.id} product={product} />)
                }

            </div>

     );
}
 
export default CartItemList;