import React, { useState } from 'react';
import '../css/LoginPage.css'
import { Link } from 'react-router-dom';
import Mainpage from './Mainpage';
import RegisterPage from './RegisterPage';


 const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 


  const handleLogin = (e) => {
    e.preventDefault();
  if (username && password) {
    setIsLoggedIn(true); 
  } else {
    alert('Please enter valid credentials');
  }
  }
if (isLoggedIn) {
  return <Mainpage username={username} />;
}

  return (
    <div className='main-page'>
    <div className="login-container">
        <div className="img-container">
        <img src='/images/Vector.png' className='img' alt='vector'/>      
        </div>
      <form onSubmit={ handleLogin }>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
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
   <p>Don't have an account? <b><Link to='/signup'>Sign up</Link><br/>
        Forgot Password?</b></p>
        <button type="submit" className='submit'>Login</button>
        </form>
    </div>
    </div>
  );
};
export default LoginPage;









// const navigate = useNavigate();  
  // useEffect(() => {
  //   if(localStorage.getItem('user-info')){
  //     navigate('/add');
  //   }
  // })

  //  const handleSubmit = async(event) => {
  //   event.preventDefault();

  //   console.log('Username:', username);
  //   console.log('Password:', password);

    // let item = {email, password}

    // let result = await fetch('http://localhost:3000/login',{
    //   method: 'POST',
    //   headers: {
    //     "Content-Type": 'application/json',
    //     "Accept": 'application/json',
    //   },
    //   body: JSON.stringify(item)
    // })
    // result = await result.json;
    // localStorage.setItem('user-info', JSON.stringify(result));
    // navigate('/add');
  // };
