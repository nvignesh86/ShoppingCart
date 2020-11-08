import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Success(){
const history = useHistory();
    
   const home=()=>{       
     history.push("/")
   }

    return (
        <div>
            <div className={"card-text-align-center"}>
                <h1>Cart</h1>
                <p>This is the Cart Page.</p>
                <p>Checkout completed successfully.</p>
            </div>
            <div className={"home-link"} onClick={home}>
                Back to Home
            </div>
        </div>
    );
}