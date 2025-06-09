// **Bharath Kumar K**  
// 🔗 [LinkedIn](https://www.linkedin.com/in/bharath-kmr)  
// 📧 bharth.kmrk@gmail.com
// 🛠️ git https://github.com/bharath-kumr


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSignUp = () => {
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/');
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleSignUp}>Register</button>
    </div>
  );
};

export default SignUp;
