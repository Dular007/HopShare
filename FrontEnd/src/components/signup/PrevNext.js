import React from 'react';
import { Button } from "react-bootstrap";

const PrevNext =(props)=>{
 return (
    <div>
    <div className="prev-step">
      <Button
       onClick={() => {
        props.setStep(props.step-1);
      }}
      className="prev-btn">Back</Button>
    </div>
    <div className="next-step">
      <Button 
       onClick={() => {
        props.setStep(props.step+1);
      }}
      className="next-btn">Skip</Button>
    </div>
  </div>
 )
}

export default PrevNext;