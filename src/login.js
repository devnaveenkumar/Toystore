import React, { useState } from 'react';
import './login.css';

function Login() {
  const [user, setUser] = useState({
    username:'',
    password:''
  })

  const handleNameChange = (event) =>{
    setUser((prevUser) => ({
      ...prevUser,
      username: event.target.value
    }));
  }

  const handlePasswordChange = (event) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: event.target.value
    }));
  }
  return (
    <div className="container">
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br />
        <button type="submit" className='button'>Login</button>
      </form>
    </div>
  );
}

export default Login;