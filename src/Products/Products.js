import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from './../Redux/Action/ProductAction'; 
import Product from './Product';
import './Products.css';


function Products(){
    const dispatch = useDispatch();
    let products = useSelector(state=>state.products);
    const searchVal = useSelector(state=>state.search?.searchVal);
    
    products = products.filter(product=>product.name?.toLowerCase().match(searchVal?.toLowerCase()));

    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch]);

    return (
        <div className={"container"}>
            <div className={"product-grid"}>
                {
                    products.map(item => (
                        <Product key={item.id} item={item} />
                    ))
                }

            </div>
        </div>        
    );
}
export default Products;

