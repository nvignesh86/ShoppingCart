import React, { useEffect, useState } from 'react';
import logo from './../images/lazada.png';
import cart from './../images/cart.png';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {setSearchProducts} from './../Redux/Action/SearchAction';

export default function Header(){
    const [searchValue,setSearchValue] = useState("");
    const history = useHistory();
    const cartItems = useSelector(state=>state.cartItems);
    const userDetails = useSelector(state=>state.userDetails);
    const dispatch = useDispatch();
    const [showSearch,setShowSearch] = useState(true);


    useEffect(()=>{
        history.listen((location)=>{
          if(location?.pathname==="/"){
            setSearchValue("");           
            setShowSearch(true);
          }else if(location?.pathname==="/Login" && userDetails?.userName){
            setShowSearch(true);  
          }else{
            setShowSearch(false);
          }
        });    
    },[history,userDetails]);
    
    const checkOut=()=>{
        history.push("/checkout");
    }

    const home=()=>{
        history.push("/");
    }

   const searchProduct=(e)=>{
     setSearchValue(e.target.value);     
     dispatch(setSearchProducts({searchVal:e.target.value}));
   }

   const goClick=()=>{
    dispatch(setSearchProducts({searchVal:searchValue}));
   }

    return (
        <div className="header">
                <img src={logo} className="logo-cls" alt="Lazada" onClick={home}/>
                <div className="search-container">
                    {
                    showSearch&&<><input type="text" placeholder="Search a product" value={searchValue}  onChange={searchProduct}/>
                    <div className="search-cls" onClick={goClick}>GO</div></>
                    }
                </div>
                <div className="cart-container">
                    <img src={cart} alt="checkout" className={"checkout-img"} onClick={checkOut} />
                    <span className="cart-count-cls" onClick={checkOut}>{cartItems.length}</span>
                </div>
                {userDetails?.userName && <div className={"user-container"}>Username : {userDetails.userName}</div>}
        </div>
    );
}    