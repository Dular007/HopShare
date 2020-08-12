import React from "react";
import { Button } from "react-bootstrap";
import PrevNext from "./PrevNext";
import ImageUpload from './ImageUpload';
import AvatarUpload from './AvatarUpload';
// import bootstrap from

const SignupStep3 = (props) => {
  return (
    <>
      <div class="authfy-heading">
        <h3 class="auth-title">Smile Please</h3>
        <p>
          A profile picture improves trust and helps in identification while
          sharing ride
        </p>
        <p></p>
      </div>
      <div>
        <form name="loginForm" class="loginForm" action="index.html" method="">
          {/* <div class="form-group">
            <div class="avatar-upload">
              <div class="avatar-edit">
                <input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                />
                <label for="imageUpload"></label>
              </div>
              <div class="avatar-preview">
                <div
                  id="imagePreview"
                  style="background-image: url(images/avatar.png)"
                ></div>
              </div>
            </div>
          </div>
          <div class="row remember-row">
            <div class="col-xs-12">
              <p class="text-center">
                <a class="lnk-toggler note" href="#">
                  Profile picture is mandatory for profile verification
                </a>
              </p>
            </div>
          </div> */}
          <div class="avatar-preview">
                                          <div id="imagePreview">
                                              {/* <img src="/public/images/avatar.png" width="500" height="600"/> */}
                                          </div>
                                      </div>
          <ImageUpload />
          {/* <AvatarUpload /> */}
      
          <p>
            <i class="fas fa-exclamation-circle font-awesome-circle"></i>

            <a class="lnk-toggler note" href="#">
              
              Profile picture is mandatory for profile verification
            </a>
          </p>
          
          <Button
            onClick={() => {
              props.setStep(3);
            }}
            className="btn btn-primary btn-signup"
            type="button"
          >
            CONTINUE
          </Button>
          <PrevNext setStep={props.setStep} step={2}/>
        </form>
      </div>
    </>
  );
};

export default SignupStep3;
