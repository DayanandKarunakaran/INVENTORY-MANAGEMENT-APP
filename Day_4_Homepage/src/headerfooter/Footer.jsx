import React from 'react';
import './HeaderFooter.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>123 Green St.</p>
        <p>Farmville, FV 12345</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.twitter.com">Twitter</a>
        <a href="https://www.instagram.com">Instagram</a>
      </div>
      <div className="footer-section">
        <h4>Other Links</h4>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
