import React ,{useState} from 'react';
import '../styles/Form.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const nav=useNavigate();
    const LoginForm=()=>{
        if(email==='guru@gmail.com' && password==='guru'){
            alert('Login Successful');
        }
        else{
            alert('Login Failed');
        }
    }
      return (
            <div className="form-container">
              <form>
                <input className="form-group" type="email" required placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)}/><br></br><br></br>
                <input className="form-group" type="password" required placeholder='Your Password' onChange={(e)=>setPassword(e.target.value)} /><br></br><br></br>
                <button type="submit" className="submit-button" onClick={()=>LoginForm()}>Login</button>
                <a  className='p-text' href='/forgot'><p>Forgot Password</p></a>
                <p className='p-text'>New User?</p><button className="submit-button" onClick={()=>nav('/signup')}>Sign Up</button>
              </form>
            </div>
          );
        };
        
        export default Login;
        