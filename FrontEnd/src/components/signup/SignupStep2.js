import React from "react";
import { Button } from "react-bootstrap";
import PrevNext from "./PrevNext";
import ReactModal from '../shared/Modal';
import OfferRideModal from './OfferRideModal';
const SignupStep2 = (props) => {
  return (
    <>
      <div className="authfy-heading signup-steps">
        <h3 className="auth-title">Your ride details</h3>
        <p className="auth-title__ride">Select your preference</p>
      </div>
      <form name="ride-detail" className="loginForm" method="">
        <div className="form-group  ride-detail">
          {/* <Button className="ride-car" onClick={openModal}>
            <i className="fa fa-users"></i> | Offer Rides
          </Button>
         
        <ReactModal /> */}
        <OfferRideModal className="Offer-modal" />
        </div>
        <div className="form-group  ride-detail">
          <Button className="ride-car">
            <i className="fa fa-car"></i> | Find Rides
          </Button>
        </div>
        <p>
          <i class="fas fa-exclamation-circle font-awesome-circle"></i>

          <a class="lnk-toggler note" href="#">
            You can change preference anytime
          </a>
        </p>

        <div className="form-group">
          <input
            type="text"
            className="form-control full"
            name="home-location"
            placeholder="Set Home Location"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control full"
            name="set-time"
            placeholder="Set Time"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control full"
            name="office-location"
            placeholder="Set Office Location"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control full"
            name="leave-office"
            placeholder="Leave Office Around"
          />
        </div>
        <Button
          onClick={() => {
            props.setStep(2);
          }}
          className="btn btn-primary btn-signup"
          type="button"
        >
          CONTINUE
        </Button>
        <PrevNext setStep={props.setStep} step={1} />
      </form>
    </>
  );
};

export default SignupStep2;
