import React from 'react';

const TopBanner = () => {
  return (
    <div className='container py-2'>
      <div className='row'>
        <div className='col-md-4 d-flex justify-content-md-start justify-content-center'>
          <a href="#home">
            <img id="logo" src="/images/logo.png" alt="MyApp Logo" className="" />
          </a>
        </div>
        <div className='col-md-4 d-flex justify-content-center d-lg-block d-none'>
          <p className='pt-3 text-primary fw-bold h4 ms-3'>
            Serving Bay Area<br /><br />
            EMERGENCY SERVICE<br />
            24 hours a day, 7 days a week
          </p>
        </div>
        <div className='col-md-4'>
          <p className='pt-3 h3 text-lg-end text-center'>
            415-827-5709<br />
            FOR SAME DAY SERVICE<br />
            Call today!<br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
