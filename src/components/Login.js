import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {    
    axios
      .post(`http://127.0.0.1:8000/login/`, { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('username', res.data.username);
        navigate('/Home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <label>
        <p>Username</p>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <div>
        <br />
        <button onClick={login}>Login</button>
      </div>
    </div>
  );
}
