import React, { useState } from 'react';
import './Loanform.css';
import { useNavigate } from 'react-router-dom';
import Header from '../headerfooter/Header';

function Loanform() {
  const nav=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    aadhaarId: '',
    panID:'',
    bankAccountNo: '',
    income: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
    <Header/>
    <div className="form-container">
      <h2 className="form-title">Application Form</h2>
      <form className="application-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            max="99"
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadhaarId">Aadhaar ID</label>
          <input
            type="text"
            id="aadhaarId"
            name="aadhaarId"
            value={formData.aadhaarId}
            onChange={handleChange}
            pattern="[0-9]{12}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="panCard">Pan ID</label>
          <input
            type="text"
            id="panID"
            name="panID"
            value={formData.panID}
            onChange={handleChange}
            pattern="[0-9A-Z]{12}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bankAccountNo">Bank Account No</label>
          <input
            type="text"
            id="bankAccountNo"
            name="bankAccountNo"
            value={formData.bankAccountNo}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="income">Income</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            min="0"
            max="99999999"
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Loanform;
