// **Bharath Kumar K**  
// 🔗 [LinkedIn](https://www.linkedin.com/in/bharath-kmr)  
// 📧 bharth.kmrk@gmail.com
// 🛠️ git https://github.com/bharath-kumr


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === form.username && user.password === form.password) {
      navigate('/todo');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default Login;
