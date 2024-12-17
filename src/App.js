import React from 'react';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


function App() {
  // const Navigate = useNavigate(); 
  <button >Go to Login</button>; 
  return (
   <Router>
    <Routes>
    {/* <Route path="/" element= {< Navigate to = "/login"/>}/> */}
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<RegisterPage/>}/>
    </Routes>
   </Router>
  
  );
}

export default App;
