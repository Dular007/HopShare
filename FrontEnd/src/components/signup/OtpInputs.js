import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
 
export default class OtpInputs extends Component {
  state = { otp: '' };
 
  handleChange = otp => {
    console.log(otp)
    this.setState({ otp });
  }
  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={4}
        autoFocus
        separator={<span></span>}
        // shouldAutoFocus={true}
        // hasErrored ={true}
        inputStyle={"otpIp"}
        isInputNum={true}
      />
    );
  }
}
