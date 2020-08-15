import React, { useState, useContext } from "react";
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// angleDoubleLeft
// npm install --save-dev @iconify/react @iconify/icons-uil
import { Icon, InlineIcon } from "@iconify/react";
import angleDoubleLeft from "@iconify/icons-uil/angle-double-left";
import angleLeft from "@iconify/icons-uil/angle-left";
import { Link, Redirect } from "react-router-dom";
// import { Icon, InlineIcon } from '@iconify/react';
// import angleDoubleLeft from '@iconify/icons-fa/angle-double-left';

import { Button } from "react-bootstrap";

// import Button from '../shared/components/FormElements/Button';
// import Input from '../shared/components/FormElements/Input'
import { AuthContext } from "../../shared/components/Context/auth-context";

const dummy = 
  {
    id: null,
    name: null,
    password: null,
    email: null,
    number: null,
    gender:null
  }
;

const SignUpInputForm = (props) => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [signupData, updateSignupData] = useState(dummy);

  const onNumberChange =(num)=>{
  const number = num.target.value;
  updateSignupData({...signupData,number})
  }


  const onNameChange =(data)=>{
    const name = data.target.value;
    updateSignupData({...signupData,name})
    }


    const onPasswordChange =(data)=>{
      const password = data.target.value;
      updateSignupData({...signupData,password})
      }
      const onEmailChange =(data)=>{
        const email = data.target.value;
        updateSignupData({...signupData,email})
        }

        const handleOptionChange=(data)=>{
        const gender = data.target.value;
        updateSignupData({...signupData,gender})
        console.log(gender)
        }

  return (
    <div>
      <div className="authfy-heading center">
        <h3 className="auth-title">
          {/* <FontAwesomeIcon icon="check-square"  />  */}
          <Icon
            icon={angleLeft}
            className=".back-arrow"
            onClick={() => {
              props.setLoginMode(true);
            }}
            color="blue"
          />
          {/* <Icon icon={angleDoubleLeft} color="blue" /> */}
          Sign up for free!
        </h3>
      </div>
      {/* <div className="row">
                <div className="col-xs-12 col-sm-12"> */}
      <form
        name="loginForm"
        className="loginForm"
        method=""
        onClick={(e) => {
          e.preventDefault();
          updateSignupData({...signupData,gender:'male'})
          console.log(signupData)
        }}
      >
        {/* <div className="form-group"> */}
        <input
          type="number"
          className="input-number"
          name="phone"
          placeholder="Mobile Number"
          onChange={onNumberChange}
        />
        {/* </div> */}
        <div className="form-group">
          <input
            type="password"
            className="form-control password"
            name="password"
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </div>
        <div className="form-group">
          <input
            type="name"
            className="form-control password"
            name="name"
            placeholder="Name"
            onChange={onNameChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control password"
            name="email"
            placeholder="Email"
            onChange={onEmailChange}
          />
        </div>
        <div class="form-group text-left">
          <label>Gender</label>
        </div>
        <div class="form-group form-group-1  middle"    onChange={handleOptionChange}>
          <label>
            <input type="radio" name="radio" value="male" checked
              // checked={signupData.gender === 'male'} 
            />
            <div class="front-end box">
              <span>Male</span>
            </div>
          </label>

          <label>
            <input type="radio" name="radio" value="female"/>
            <div class="back-end box">
              <span>Female</span>
            </div>
          </label>

          <label>
            <input type="radio" name="radio" value="NotToSay"/>
          
            <div class="back-end box">
              <span>Not To Say</span>
            </div>
          </label>
        </div>

        <div className="form-group">
          <Link to="/signup">
            <Button className="btn-signup" type="button">
              SIGNUP
            </Button>{" "}
          </Link>
        </div>
        <div class="form-group">
          <p class="term-policy text-muted small center">
            By signing up, I agree to Quick Ride <a href="#"> Terms</a>.
          </p>
        </div>
      </form>
      {/* </div>
            </div> */}
    </div>
  );
};

export default SignUpInputForm;
