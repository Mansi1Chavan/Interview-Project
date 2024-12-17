import React, { useState } from 'react';
import '../css/RegisterPage.css'
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';



const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='main-page'>
    <div className="login-container">
        <div className="img-container">
        <img src='/images/Vector.png' className='img' alt='vector'/>      
        </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            id="password"
            name="number"
            placeholder='Enter Mobile No'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="password"
            placeholder='Confirm Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className='submit-btn'>
        <button type="submit" className='submit'>Sign UP</button>
        </div>
        </form>
        <p>
        Already have an account? <Link to = "/login" >Login</Link>
      </p>
    </div>
    </div>
  );
};

export default RegisterPage;