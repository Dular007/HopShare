import React from 'react';
import { Button } from 'react-bootstrap';

const SignupStep1 = (props) =>{
    return (
        <>
        <div className="loginForm"> 
        <h3 class="auth-title">Hello Omveer !</h3>
        <p className="para-desc">
          98% users prefer to travel with verified users. Verify you org.email
        </p>
        </div>
        <form name="loginForm" class="loginForm" action="index.html" method="">
                               <div class="form-group">
                                <input type="text"  name="org-name" className="full" placeholder="Organisation Name"/>
                              </div>
                              <div class="form-group">
                                <input type="Email"  name="mailid" className="full"  placeholder="Office Email Address"/>
                              </div>
                              <div class="row remember-row">
                                  <p>
                                 <i class="fas fa-exclamation-circle font-awesome-circle"></i>
                                                         
                                    <a class="lnk-toggler note" href="#">  We don't spam. it's only to send email OTP</a>
                                  </p>
                              
                              </div> 
                              <Button  
                               onClick={()=>{
                                    props.setStep(1);
                               }}
                              className="btn btn-primary btn-signup"  type="button">CONTINUE</Button>
                             
                            
                              
                            </form>
        </>
                            
    )
}

export default SignupStep1;