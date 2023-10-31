// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from 'sweetalert2';

function FormSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !email || !password) {
      Swal.fire('Error!', 'Please fill in all fields.', 'error');
    } else {
      const userData = { name, email, password };
      localStorage.setItem('user', JSON.stringify(userData));
      Swal.fire('Success!' , 'You have successfully registered.', 'success');
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="form sign_up">
      <h3>Sign Up</h3>
      <span>or use your email for register</span>
      <div id="form_input">
        <div className="type">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="type">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="type">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn bkg" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default FormSignup;