import React from 'react';
import './Contact.css';
import Header from '../headerfooter/Header';

function Contact() {
  return (
    <>
    <Header/>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Purpose:
          <textarea name="purpose" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
