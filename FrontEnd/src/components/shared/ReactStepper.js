import React from 'react';
import "../../styles/components/SignupSteps.css";
import Stepper from 'react-stepper-horizontal';
import { Icon, InlineIcon } from '@iconify/react';
// import 'font-awesome/css/font-awesome.min.css';
// import -- npm install --save-dev @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';
// fa-info-circle

const ReactStepper = (props)=>{
return (
    <div className="stepper">
    <Stepper defaultTitleColor={'#30c73b'} activeColor={'#d7dbf6'} steps={ [{}, {}, {}, {}] } activeStep={ props.step} />
    
      </div>
)

}

export default ReactStepper;