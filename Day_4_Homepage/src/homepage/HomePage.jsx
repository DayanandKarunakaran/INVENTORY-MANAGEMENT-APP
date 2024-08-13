import React ,{useState,useEffect} from 'react';
import './HomePage.css';
import Header from '../headerfooter/Header';
import Footer from '../headerfooter/Footer';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const nav=useNavigate();

  const gridAnimate=()=>{
    const handleScroll = () => {
      const elements = document.querySelectorAll('.homepage-offer-item, .homepage-grid-item, .homepage-premium-item');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }

  useEffect(() => {
    gridAnimate();
  }, []);
  
  return (

    <div>
      <Header />
      <div className="homepage-container">

        <div className="homepage-division division-one">
          <h2 className='division-topic'>Special Loans..!! Apply Now🥳</h2>
          <div className='homepage-offers'>
            <div className="homepage-offer-item">
              <img src='https://t4.ftcdn.net/jpg/02/31/56/61/360_F_231566167_DcxyiS11UCKdIoFpPdkXFpAzeVhh6qFA.jpg' alt='none' className='item-image'/>
              <h1>Website of National Agriculture Infra Financing Facility</h1>
              <p>The role of infrastructure is crucial for agriculture development and for taking the production dynamics to the next level. It is only through the development of infrastructure, especially at the post harvest stage that the produce can be optimally utilized with opportunity for value addition and fair deal for the farmers.</p>
              <br /><button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
            <div className="homepage-offer-item">
              <img src='https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg' alt='none' className='item-image'/>
              <h1>Website of National Agriculture Infra Financing Facility</h1>
              <p>The role of infrastructure is crucial for agriculture development and for taking the production dynamics to the next level. It is only through the development of infrastructure, especially at the post harvest stage that the produce can be optimally utilized with opportunity for value addition and fair deal for the farmers.</p>
              <br /><button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
          </div>
        </div>

        <div className="homepage-division division-two">
          <h2 className='division-topic'>New Loans</h2>
          <div className="homepage-grid-container">
            <div className="homepage-grid-item">
              <img src='https://i.pinimg.com/736x/b7/c5/7b/b7c57bec157ca3a03cafadc06ed512c4.jpg' alt='none' className='item-image'/>
              <h3>Website of Ministry of Agriculture & Farmers Welfare</h3>
              <p>Information is provided about the Ministry of Agriculture & Farmers Welfare.</p>
              <button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
            <div className="homepage-grid-item">
              <img src='https://static.vecteezy.com/system/resources/previews/003/334/408/non_2x/paddy-rice-and-rice-seed-in-farm-organic-rice-field-and-agriculture-free-photo.jpg' alt='none' className='item-image'/>
              <h3>Website of National Agriculture Infra Financing Facility</h3>
              <p>The role of infrastructure is crucial for agriculture development and for taking the production dynamics to the next level.</p>
              <button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
            <div className="homepage-grid-item">
              <img src='https://cdn.pixabay.com/photo/2014/09/09/19/07/corn-field-440338_640.jpg' alt='none' className='item-image'/>
              <h3>Website of Agriculture Department of Haryana</h3>
              <p>Detailed information on the Department of Agriculture of Haryana is provided. </p>
              <button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
            <div className="homepage-grid-item">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOmJpVcJSf3HKQajLzA0-eEEO1bs6awQW5Q&s' alt='none' className='item-image'/>
              <h3>Website of Agriculture Department of Haryana</h3>
              <p>Detailed information on the Department of Agriculture of Haryana is provided. </p>
              <button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
            <div className="homepage-grid-item">
              <img src='https://i.pinimg.com/736x/46/8d/dc/468ddcd9447f117ff9b193e845a2a043.jpg' alt='none' className='item-image'/>
              <h3>Website of Agriculture Department of Haryana</h3>
              <p>Detailed information on the Department of Agriculture of Haryana is provided. </p>
              <button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
            <div className="homepage-grid-item">
              <img src='https://www.shutterstock.com/image-photo/green-view-natural-environment-cornfields-600nw-1933145324.jpg' alt='none' className='item-image'/>
              <h3>Website of Agriculture Department of Haryana</h3>
              <p>Detailed information on the Department of Agriculture of Haryana is provided. </p>
              <button className='homepage-button' onClick={()=>nav('/loanform')}>Apply Now</button>
            </div>
          </div>
        </div>

        <div className="homepage-division division-three">
          <h2 className='division-topic'>Upcoming Loans</h2>
          <div className="homepage-premium-offers">
              <div className="homepage-premium-item">
                <img src='https://i.pinimg.com/originals/d1/d5/11/d1d5112b2eaacab46f11e4d03e3103e2.jpg' alt='none' className='item-image'/>
                <h3>Financing Agriclinics & Agribusiness Centres by Agriculture Graduates </h3>
                <p>Provides financial aid for setting up of Agriclinics and Agribusiness Centers by Agricultural Graduates and other technically qualified entrepreneurs. Maximum Loan of Rs 25.Lakhs for Project by individual is allowed  </p>
                <button className='homepage-button' onClick={()=>nav('/loanform')}>Reserve Now</button>
              </div>
              <div className="homepage-premium-item">
                <img src='https://i.pinimg.com/736x/a8/0f/b5/a80fb57e6ba8ef352fc1190e08fab856.jpg' alt='none' className='item-image'/>
                <h3>Baroda Animal Husbandry and Fisheries Kisan Credit Card (BAHFKCC) Scheme </h3>
                <p>Nil Processing Charges for aggregate loan upto Rs 3.00 Lakhs. Nil Inspection Charges for aggregate loan up to Rs 3.00 Lakhs. Simple interest is applied till due date of repayment </p>
                <button className='homepage-button' onClick={()=>nav('/loanform')}>Reserve Now</button>
              </div>
              <div className="homepage-premium-item">
                <img src='https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='none' className='item-image'/>
                <h3>Financing Tractors and Heavy Agriculture Machinery</h3>
                <p>Processing charges Nil for Aggregate Loan upto Rs 3.00 Lakhs. Inspection charges Nil for Aggregate Loan upto Rs 3.00 Lakh. Low Land Requirement. </p>
                <button className='homepage-button' onClick={()=>nav('/loanform')}>Reserve Now</button>
              </div>
              <div className="homepage-premium-item">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcBT9XGo6gvvzbtCI2RqRLAuvG2OSmBfK-Q&s' alt='none' className='item-image'/>
                <h3>Financing Tractors and Heavy Agriculture Machinery</h3>
                <p>Processing charges Nil for Aggregate Loan upto Rs 3.00 Lakhs. Inspection charges Nil for Aggregate Loan upto Rs 3.00 Lakh. Low Land Requirement. </p>
                <button className='homepage-button' onClick={()=>nav('/loanform')}>Reserve Now</button>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
