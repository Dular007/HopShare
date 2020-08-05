import React from "react";

import ReactCarousel from "../../components/ReactCarousel";
import "../../styles/components/SignupSteps.css";
import Stepper from 'react-stepper-horizontal';
import { Button } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import angleDoubleLeft from '@iconify/icons-uil/angle-double-left';
// import 'font-awesome/css/font-awesome.min.css';
// import -- npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';
// fa-info-circle
const SignupSteps = () => {
  return (
    <>
      <div className="signup-steps">
        <div class="authfy-heading">
        <div className="stepper">
      <Stepper  steps={ [{}, {}, {}, {}] } activeStep={ 0 } />
      
        </div>
        <br/>
        {/* <div className="break">
        <hr/>
        </div> */}
          <div className="loginForm"> 
          <h3 class="auth-title">Hello Omveer !</h3>
          <p className="para-desc">
            98% users prefer to travel with verified users. Verify you org.email
          </p>
          </div>
          <form name="loginForm" class="loginForm" action="index.html" method="">
                                 <div class="form-group">
                                  <input type="text"  name="org-name" placeholder="Organisation Name"/>
                                </div>
                                <div class="form-group">
                                  <input type="Email"  name="mailid" placeholder="Office Email Address"/>
                                </div>
                                <div class="row remember-row">
                                    <p>
                                   <i class="fas fa-exclamation-circle font-awesome-circle"></i>
                                                           
                                      <a class="lnk-toggler note" href="#">  We don't spam. it's only to send email OTP</a>
                                    </p>
                                
                                </div> 
                                <Button  className="btn btn-primary"  type="submit">CONTINUE</Button>
                              </form>

                              
        </div>
      </div>
      <ReactCarousel />
    </>
  );
};

export default SignupSteps;
