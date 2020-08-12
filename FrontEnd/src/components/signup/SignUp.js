import React from 'react';

import HeaderImage from '../HeaderImage';
import SignUpInputForm from './SignUpInputForm'
import ReactCarousel from '../ReactCarousel';
// import '../../styles/components/signup.css';

const SignUp =(props) =>{

    return (
        
        <div className="login">
    
           <HeaderImage/>
            <SignUpInputForm setLoginMode={props.setLoginMode}/>
           
            </div>
         
    )
}


export default SignUp;