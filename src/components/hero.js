import React from 'react';
import CallNowHero from './callNowButton';

const HeroSection = () => {
  return (
    <div className='container-fluid'>
      <div className="row min-vh-75 align-items-center d-flex align-items-md-stretch">
        <div className="col-md-8 p-0 bg-primary text-center text-md-start">
          <h1 className="display-4 fw-bold text-white p-4">24/7 Plumbing<br />Service</h1>
          <ul className='text-white display-6 ms-5 p-4 mb-4'>
            <li>Industrial, Commercial, Residential</li>
            <li>Affordable, Flat Rate Pricing</li>
            <li>No Emergency Service Fees</li>
          </ul>
          <div className='bg-dark p-2 d-flex'>
            <div className='mx-4'>
              <p className='pt-1 text-white fw-bold fs-4 m-0 p-0 text-center'>Contact Us 24/7:</p>
            </div>
            <CallNowHero direction="horizontal" colorMode="white" />
          </div>
        </div>
        <div className="hero-section col-md-4 p-0">
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
