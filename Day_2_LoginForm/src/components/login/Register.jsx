import React, { useState } from 'react';
import '../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const nav=useNavigate();

    const  RegisterForm = () => {
        alert('Your Username: '+username+'\nYour Email: '+email);
        nav('/login')
    }

      return (
            <div className="form-container">
              <form>
                <input className="form-group" type="text" required placeholder='Your Name'  onChange={(e)=>setUserName(e.target.value)}/><br></br><br></br>
                <input className="form-group" type="email" required placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
                <input className="form-group" type="password" required placeholder='Your Password'  onChange={(e)=>setPassword(e.target.value)}/><br></br><br></br>
                <button type="submit" className="submit-button" onClick={()=>RegisterForm()}>Register</button>
                <p className='p-text'>Already Registered ?</p><button className="submit-button" onClick={()=>nav('/login')}>Login</button>
              </form>
            </div>
          );
};
        
export default Register;
        