// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from 'sweetalert2';

function FormSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSignIn = () => {
    if (!email || !password) {
      Swal.fire('Error!', 'Please enter both email and password.', 'error');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('user'));

    if (userData && userData.email === email && userData.password === password) {
      setUserName(userData.name);
      Swal.fire('Success!', `Welcome, ${userName}! You have successfully signed in.`, 'success');
    } else {
      Swal.fire('Error!', 'Invalid email or password.', 'error');
    }
  };

  return (
    <div className="form sign_in">
      <h3>Sign In</h3>
      <span>or use your account</span>

      <div id="form_input">
        <div className="type">
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="type">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="forgot">
          <span>Forgot your password?</span>
        </div>

        <button className="btn bkg" onClick={handleSignIn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default FormSignin;