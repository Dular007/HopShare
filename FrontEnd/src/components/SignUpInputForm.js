import React, {useState, useContext} from 'react';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// angleDoubleLeft
// npm install --save-dev @iconify/react @iconify/icons-uil
import { Icon, InlineIcon } from '@iconify/react';
import angleDoubleLeft from '@iconify/icons-uil/angle-double-left';
import {Link} from 'react-router-dom';
// import { Icon, InlineIcon } from '@iconify/react';
// import angleDoubleLeft from '@iconify/icons-fa/angle-double-left';


import Button from '../shared/components/FormElements/Button';
// import Input from '../shared/components/FormElements/Input'
import {AuthContext} from '../shared/components/Context/auth-context';


const SignUpInputForm =(props) =>{
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div>
            <div className="authfy-heading center">
            <h3 className="auth-title">
            {/* <FontAwesomeIcon icon="check-square"  />  */}
           <Icon icon={angleDoubleLeft} className=".back-arrow" onClick={()=>{props.setLoginMode(true) ;}} color="blue" />
            {/* <Icon icon={angleDoubleLeft} color="blue" /> */}
            Sign up for free!</h3>
            </div>
            {/* <div className="row">
                <div className="col-xs-12 col-sm-12"> */}
            <form name="loginForm" className="loginForm"  method="">
                 {/* <div className="form-group"> */}
                     <input type="number" className="input-number" maxlength="10" name="phone" placeholder="Mobile Number"/>
                 {/* </div> */}
        <div className="form-group">

          <input type="password" className="form-control password" name="password" placeholder="Password"/>
        
         
        </div>
                <div className="form-group">

        <input type="name" className="form-control password" name="name" placeholder="Name"/>


        </div>
                <div className="form-group">

        <input type="password" className="form-control password" name="password" placeholder="Password"/>


        </div>
        <div class="form-group text-left">
                      <label>Gender</label>
                    </div>
                    <div class="form-group middle">
                      <label>
                        <input type="radio" name="radio" checked/>
                        <div class="front-end box">
                          <span>Male</span>
                        </div>
                      </label>

                      <label>
                        <input type="radio" name="radio"/>
                        <div class="back-end box">
                          <span>Female</span>
                        </div>
                      </label>
                        
                      <label>
                        <input type="radio" name="radio"/>
                        <div class="back-end box">
                          <span>Not To Say</span>
                        </div>
                      </label>
                    </div>
      

        <div className="form-group">
          <button className="btn-signup" type="submit">SIGNUP</button>          
        </div>
        <div class="form-group">
                      <p class="term-policy text-muted small center">By signing up, I agree to Quick Ride <a href="#"> Terms</a>.</p>
                    </div>
             </form>
              {/* </div>
            </div> */}

        </div>
        
    )
}


export default SignUpInputForm;
