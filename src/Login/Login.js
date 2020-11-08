import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';
import {handleLogin} from './../Redux/Action/UserAction';
import { Redirect } from 'react-router-dom';


function Login(){
    const [userName,setUserName] = useState("admin");
    const [password,setPassword] = useState("admin");
    const userDetails = useSelector(state=>state.userDetails);
    const dispatch = useDispatch();
    const history = useHistory();
    const [errMsg,setErrMsg] = useState();

    const changeuserName=(e)=>{
        setUserName(e.target.value);
    }

    const changePassword=(e)=>{
        setPassword(e.target.value);
    }

    const loginSubmit = ()=>{
        if(userName==="admin" && password==="admin"){
            dispatch(handleLogin({userName:userName}));
            history.push('/Checkout')
        }else{
            setErrMsg("Invalid Username and Password");
        }
        
    }

    return (
        <div style={{height: '500px'}}>
        <div className="login-form">
        <div className={"login-container"}>
        {
            userDetails?.userName ? <>
                <Redirect to="/" />
            </> :
            <>
            <div className="login-title">LOGIN</div>
            <div>
                <input type="text" value={userName} placeholder="Enter Username as admin" onChange={changeuserName} required></input>
            </div>
            <div>
                <input type="password" value={password} placeholder="Enter Password as admin" onChange={changePassword}></input>
            </div>
            {errMsg&&<div className="error-msg">{errMsg}</div>}
            <input type="submit" value="Login" onClick={loginSubmit}></input>
            </>
        }
        </div>
        </div>
    </div>
    );
}
export default Login;