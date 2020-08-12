import React  from "react";

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

import ReactStepper from '../shared/ReactStepper';
import SignupStep1 from "./SignupStep1";
import SignupStep2 from './SignupStep2';
import SignupStep3 from './SignupStep3';
import VerifyOtp from './VerifyOtp';
import { useState, useContext } from "react";

const SignupSteps = () => {
const [step,setStep] = useState(0);

  return (
    <>
      <div className="signup-steps">
        <div class="authfy-heading">
        <ReactStepper step={step}/>
        <br/>
      {step===0 && <SignupStep1 setStep={setStep}/>   }
                                   
         {step === 1 && <SignupStep2 setStep={setStep}/>}

         {step === 2 && <SignupStep3 setStep={setStep}/>}

          
          {step === 3 && <VerifyOtp  setStep={setStep}/>}

          
         </div>
         </div>
      <ReactCarousel />
    </>
  );
};

export default SignupSteps;
