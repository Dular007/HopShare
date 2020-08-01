import React from 'react';

import Button from '../shared/components/FormElements/Button';
// import Input from '../shared/components/FormElements/Input'
const InputForm =() =>{

    return (
        <div>
            <div className="authfy-heading center">
            <h3 className="auth-title">Login to your account</h3>
            </div>
            {/* <div className="row">
                <div className="col-xs-12 col-sm-12"> */}
            <form name="loginForm" className="loginForm"  method="">
                 {/* <div className="form-group"> */}
                     <input type="number" className="input-number" maxlength="10" name="phone" placeholder="Mobile Number"/>
                 {/* </div> */}
        <div className="form-group">

          <input type="password" className="form-control password" name="password" placeholder="Password"/>
        
         
        </div>
        <div className="row remember-row">
          
              <a className="forgotPwd lnk-toggler" data-panel=".panel-forgot" href="#">Forgot password?</a>
           
          </div>
      
        <div className="form-group">
          <button className="btn-login" type="submit">LOGIN</button>
        </div>
        <div className="form-group">
          <button className="btn-signup" type="submit">SIGNUP</button>          
        </div>
             </form>
              {/* </div>
            </div> */}

        </div>
        
    )
}


export default InputForm;

// <div className="authfy-login">
// <!-- panel-login start -->
// <div className="authfy-panel panel-login text-center active">
//   <div className="authfy-heading">
//     <h3 className="auth-title">Login to your account</h3>
//   </div>
//   <div className="row">
//     <div className="col-xs-12 col-sm-12">
//       <form name="loginForm" className="loginForm" action="index.html" method="">
//         <div className="form-group">
//           <input type="number" className="form-control" maxlength="10" name="phone" placeholder="Mobile Number">
//         </div>
//         <div className="form-group">
//           <div className="pwdMask">
//           <input type="password" className="form-control password" name="password" placeholder="Password">
//           <span className="fa fa-eye-slash pwd-toggle"></span>
//           </div>
//         </div>
//         <div className="row remember-row">
//           <div className="col-xs-12">
//             <p className="forgotPwd">
//               <a className="lnk-toggler" data-panel=".panel-forgot" href="#">Forgot password?</a>
//             </p>
//           </div>
//         </div> <!-- ./remember-row -->
//         <div className="form-group">
//           <button className="btn btn-lg btn-primary active btn-block" type="submit">LOGIN</button>
//         </div>
//       </form>
//       <div className="form-group">
//         <a className="lnk-toggler btn btn-lg btn-primary btn-block" data-panel=".panel-signup" href="#">SIGNUP</a>
//       </div>