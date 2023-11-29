import React, { useState } from 'react';
import './index.css'
import '../footer/index.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.length === 0) {
      alert('Please fill in email');
    } else if (password.length === 0) {
      alert('Please fill in password');
    } else {
      check(email, password);
      checkAdmin(email, password);
    }
    setPassword('');
    setEmail('');
  };




  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="e">
            <img src="" alt="" />
            <input
              type="email"
              placeholder="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="pass">
            <img src="" alt="" />
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="reminder">
            <label className="Rememberid">Remember me</label>
            <input type="radio" className="Remember" />
          </div>
          <button id="log">Login</button>
          <button id="sign">
            <a href=""> Sign up</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;




