// eslint-disable-next-line no-unused-vars
import React from "react";





// eslint-disable-next-line react/prop-types
function Overlay({ onSignUpClick , onSignInClick }) {
  return (
    <div className="overlay">
      <div className="page page_signIn">
        <h3>Welcome Back!</h3>
        <p>To keep with us please login with your personal info</p>
        <button className="btn btnSign-in" onClick={onSignInClick}>
          Sign Up <i className="bi bi-arrow-right" />
        </button>
      </div>
      <div className="page page_signUp">
        <h3>Hello Friend!</h3>
        <p>Enter your personal details and start journey with us</p>
        <button className="btn btnSign-up" onClick={onSignUpClick} >
          <i className="bi bi-arrow-left" /> Sign In
        </button>
      </div>
    </div>
  );
}
export default Overlay;