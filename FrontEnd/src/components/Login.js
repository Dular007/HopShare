import React from 'react';

import HeaderImage from './HeaderImage';
import LoginInputForm from './LoginInputForm'

const Login =(props) =>{

    return (
        <div className="login">
            <HeaderImage/>
            <LoginInputForm setLoginMode={props.setLoginMode}/>
        </div>
    )
}


export default Login;