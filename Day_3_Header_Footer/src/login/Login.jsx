// import React, { useState } from 'react';
// // import LoanImg from '../Loan.png';
// import './Login.css';
// import Header from '../headerfooter/Header';
// import { useNavigate } from 'react-router-dom';

// function LoginSignup() {
//   const [isLogin, setIsLogin] = useState(true);
//   const nav=useNavigate();

//   // Login form states
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');

//   // Signup form states
//   const [username, setUsername] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     nav('/')
//     // Handle login logic here
//     console.log('Logging in with:', loginEmail, loginPassword);
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (signupPassword !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     setIsLogin(true)
//     // Handle signup logic here
//     console.log('Signing up with:', username, signupEmail, signupPassword);
//   };

//   return (
//     <div>
//         <Header/>
//         <div className='login-flex'>
//           <div className='login-image'>
//             <img src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"  className='login-main-image' alt='none' />
//           </div>
//       <div className="container">
//       <img src="https://www.pngall.com/wp-content/uploads/2017/11/Loan-PNG-Picture.png" alt="Logo" className="logo" />
//       <h2 className='login-h2'>GreenLoan</h2>
//       {isLogin ? (
//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <input
//               type="email"
//               id="loginEmail"
//               value={loginEmail}
//               className="login-input"
//               placeholder="Email"
//               onChange={(e) => setLoginEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               id="loginPassword"
//               value={loginPassword}
//               className="login-input"
//               placeholder="Password"
//               onChange={(e) => setLoginPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className='login-button'>Login</button>
//           <div className="options">
//             <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
//             <a onClick={() => setIsLogin(false)} className="signup">Sign Up</a>
//           </div>
//         </form>
//       ) : (
//         <form className='login-form' onSubmit={handleSignup}>
//           <div className="form-group">
            
//             <input
//               type="text"
//               id="username"
//               value={username}
//               className="login-input"
//               placeholder="Username"
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
            
//             <input
//               type="email"
//               id="signupEmail"
//               value={signupEmail}
//               className="login-input"
//               placeholder="Email"
//               onChange={(e) => setSignupEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
            
//             <input
//               type="password"
//               id="signupPassword"
//               value={signupPassword}
//               className="login-input"
//               placeholder="Password"
//               onChange={(e) => setSignupPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
            
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               className="login-input"
//               placeholder="Confirm Password"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className='login-button'>Sign Up</button>
//           <p className="toggle-link">
//             Already have an account? <a onClick={() => setIsLogin(true)}>Login</a>
//           </p>
//         </form>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// }

// export default LoginSignup;

import React, { useState } from 'react';
import './Login.css';
import Header from '../headerfooter/Header';
import { useNavigate } from 'react-router-dom';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const nav = useNavigate();

  // Login form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup form states
  const [username, setUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    nav('/');
    // Handle login logic here
    console.log('Logging in with:', loginEmail, loginPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    setIsLogin(true);
    // Handle signup logic here
    console.log('Signing up with:', username, signupEmail, signupPassword);
  };

  return (
    <>
      <Header />
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">
          {isLogin ? 'Login to your account' : 'Create an Account'}
        </h2>
        {isLogin ? (
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label" htmlFor="loginEmail">Email</label>
              <input
                className="form-input"
                id="loginEmail"
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="loginPassword">Password</label>
              <input
                className="form-input"
                id="loginPassword"
                type="password"
                placeholder="**********"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="form-button">Login</button>
            <div className="form-options">
              <a href="/forgot-password" className="form-link">Forgot Password?</a>
              <a onClick={() => setIsLogin(false)} className="form-link">Sign Up</a>
            </div>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSignup}>
            <div className="form-group">
              <label className="form-label" htmlFor="username">Username</label>
              <input
                className="form-input"
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="signupEmail">Email</label>
              <input
                className="form-input"
                id="signupEmail"
                type="email"
                placeholder="Email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="signupPassword">Password</label>
              <input
                className="form-input"
                id="signupPassword"
                type="password"
                placeholder="**********"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
              <input
                className="form-input"
                id="confirmPassword"
                type="password"
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="form-button">Sign Up</button>
            <p className="form-toggle-link">
              Already have an account? <a onClick={() => setIsLogin(true)} className="form-link">Login</a>
            </p>
          </form>
        )}
        <p className="footer-text">©2023 Acme Corp. All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default LoginSignup;
