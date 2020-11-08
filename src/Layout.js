import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Products from './Products/Products';
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import { useSelector } from 'react-redux';
import Success from './Checkout/Success';

function Layout(){
  const userDetails = useSelector(state=>state.userDetails);

    return (
        <>
        <Header/>
        <div style={{ background: '#f2f2f2' }}>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Checkout" >
                {userDetails?.userName ? <Checkout /> : <Redirect to="/Login" />}
            </Route>
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Success" component={Success} />
          </Switch>
        </div>
        </>
    );  
}
export default Layout;