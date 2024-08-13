import React from 'react';
import './Landingpage.css';
import Header from '../headerfooter/Header';
import { useNavigate } from 'react-router-dom';

function Landingpage() {
  const nav = useNavigate();

  return (
    <div>
      <Header />
      <div className="landing-container">
        <div className="landing-content">
          <h1>Empower Your Farming Future with Our Agri Loans</h1>
          <p>
            Unlock the potential of your agricultural business with our tailored loan solutions. Whether you're looking to expand, innovate, or sustain your operations, we provide the financial support you need to thrive. Apply now and take the first step towards a prosperous future.
          </p>
          <div className="landing-buttons">
            <button onClick={() => nav('/login')}>Login</button>
            <button onClick={() => nav('/home')}>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
