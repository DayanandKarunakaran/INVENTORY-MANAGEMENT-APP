import React from 'react';
import './About.css';
import Header from '../headerfooter/Header';

function About() {
  return (
    <>
      <Header/>
    <div className="about-container">
      <div className="about-section">
        <img src="https://img.freepik.com/premium-photo/group-people-standing-hill-with-their-hands-air-looking-mountains_882954-8360.jpg" alt="About Image 1" className="about-image" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>
          We are a dynamic team dedicated to empowering individuals and businesses through innovative solutions and exceptional services. Our expertise spans various fields, allowing us to 
          deliver excellence and foster growth. We ensure our clients achieve their goals with confidence and efficiency by providing personalized, client-centric approaches. Understanding and addressing the
           unique needs of each client is at the core of our operations, enabling us to create impactful and sustainable outcomes.
          </p>
        </div>
      </div>
      <div className="about-section-reverse">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
          Our mission is to provide top-quality services that drive success and inspire progress. We are committed to innovation, integrity, and customer satisfaction. Continuously evolving
           to meet the needs of our clients and the ever-changing market, we aim to deliver solutions that are not only effective but also sustainable. Our mission is to be a trusted partner, helping clients
            navigate challenges and seize opportunities with confidence.
          </p>
        </div>
        <img src="https://cdn.pixabay.com/photo/2014/07/08/10/47/team-386673_1280.jpg" alt="About Image 2" className="about-image" />
      </div>
      <div className="about-section">
        <img src="https://c0.wallpaperflare.com/preview/691/127/600/man-twilight-happy-silhouette.jpg" alt="About Image 3" className="about-image" />
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
          Our vision is to be a global leader in our industry, recognized for our innovative approach, outstanding service, and unwavering commitment to excellence. We aspire to set new standards 
          for success and create a positive impact on the world. By fostering a culture of continuous improvement and embracing new technologies, we aim to shape the future of our industry and contribute
           to the advancement of society.
          </p>
        </div>
      </div>
      <div className="about-section-reverse">
        <div className="about-text">
          <h2>Our Values</h2>
          <p>
          Our values are rooted in integrity, innovation, and excellence. We believe in fostering a culture of respect, collaboration, and continuous improvement. These values guide our interactions and 
          decisions, ensuring that every engagement reflects our commitment to quality and customer satisfaction. We prioritize ethical practices and transparency, striving to build long-lasting relationships 
          based on trust and mutual respect. Our dedication to these values ensures that we remain a reliable and forward-thinking partner for all our clients.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXAlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D" alt="About Image 4" className="about-image" />
      </div>
    </div>
    </>
  );
}

export default About;
