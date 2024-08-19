import React from 'react'; 

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a dedicated team of plumbing professionals, providing top-notch services for all your plumbing needs. From repairs to installations, we've got you covered.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#top" className="text-white">Home</a></li>
              <li><a href="#WhatWeDo" className="text-white">What We Do</a></li>
              <li><a href="#SendUsAnEmail" className="text-white">Send Us An Email</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Phone:</strong> <a className='text-white' href='tel:4158275709'>(415) 827-5709</a><br />
              <strong>Email:</strong> <a className='text-white' href='mailto:filhernandez@allplumbingservices.org'>filhernandez@allplumbingservices.org</a>
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2024 All Plumbing Systems LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
