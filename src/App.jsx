// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import "./style/style.css";
import Overlay from "./components/Overlay";
import FormSignin from "./components/FormSignin";
import FormSignup from "./components/FormSignup";
function App() {

  const containerRef = useRef(null);

  const handleSignInClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.add('active');
    }
  };

  const handleSignUpClick = () => {
    if (containerRef.current) {
      containerRef.current.classList.remove('active');
    }
  };
  return (
    <div className="App">
      <div className="container" ref={containerRef}>
        <div className="box">
          <FormSignin />
          <FormSignup />
        </div>

        <Overlay onSignInClick={handleSignInClick}  onSignUpClick={handleSignUpClick}/>
        
      </div>
    </div>
  );
}

export default App;