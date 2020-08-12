import React from "react";

import PrevNext from "./PrevNext";
import OtpInputs from "./OtpInputs";

const VerifyOtp = (props) => {
  return (
    <div className="authfy-heading-verify">
      <h3 className="auth-title">OTP Verification</h3>
      <p>OTP sent through SMS on 7019136819</p>
      <OtpInputs />
      <p>
            <a className="lnk-toggler" href="#">
              Resend Code
            </a>
          </p>
      <div className="form-group verify-code">
        <div className="col-xs-12">
         
        </div>
      </div>
      <p>
        <a className="lnk-toggler" href="#">
          need help? support@domain.in
        </a>
      </p>
      <div className="form-group">
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          CONTINUE
        </button>
      </div>
      <PrevNext setStep={props.setStep} step={2} />
    </div>
  );
};

export default VerifyOtp;
