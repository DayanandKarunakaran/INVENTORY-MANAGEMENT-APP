import React from 'react';
import './Service.css';
import Header from '../headerfooter/Header';

function Service() {
  const services = [
    {
      title: 'Loan Consultation',
      content: 'Get expert advice on the best loan options for your agricultural needs.',
      image: 'https://www.shutterstock.com/image-photo/young-india-bank-officer-completing-260nw-2073999182.jpg',
    },
    {
      title: 'Loan Application Assistance',
      content: 'We assist you in filling out and submitting your loan applications.',
      image: 'https://www.shutterstock.com/image-photo/happy-rural-indian-farmer-family-260nw-2027840414.jpg',
    },
    {
      title: 'Loan Management',
      content: 'Manage your loans efficiently with our loan management services.',
      image: 'https://t4.ftcdn.net/jpg/06/28/59/29/360_F_628592909_QCPjZktG5LaH1oK3nBEgZiNzjECrktkE.jpg',
    },
    {
      title: 'Financial Planning',
      content: 'Plan your finances with our expert financial planning services.',
      image: 'https://t3.ftcdn.net/jpg/08/18/58/62/360_F_818586224_3d4IoLWQaL7omdWbgJpjC0rn3dLoaFlF.jpg',
    },
  ];

  return (
    <>
    <Header/>
    <div className="service-container">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.content}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Service;
