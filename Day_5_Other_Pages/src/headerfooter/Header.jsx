import React from 'react';
// import LoanImg from '../Loan.png';
import './HeaderFooter.css';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav=useNavigate();
  return (

    <header className="header">
      <div className="left-header">
        <img src="https://www.pngall.com/wp-content/uploads/2017/11/Loan-PNG-Picture.png" alt="Logo" className="logo" />
        <span className="app-name">GreenLoan</span>
      </div>
      <div className="center-header">
        <button onClick={()=>nav('/home')} className="header-button">Loans</button>
        {/* <button className="header-button">About</button>
        <button className="header-button">Service</button>
        <button className="header-button">Service</button> */}
        <button onClick={()=>nav('/service')} className="header-button">Service</button>
        <button onClick={()=>nav('/about')} className="header-button">About</button>
        <button onClick={()=>nav('/contact')} className="header-button">Contact</button>
        <button onClick={()=>nav('/login')} className="header-login-button" >Login</button>
      </div>
      {/* <div className="right-header">
      </div> */}
    </header>
  );
}

export default Header;
