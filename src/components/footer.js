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
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              <strong>Phone:</strong> (123) 456-7890<br />
              <strong>Email:</strong> info@plumbing.com
            </p>
            <p>
              <strong>Address:</strong><br />
              123 Plumbing St.,<br />
              Pipe City, PC 12345
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col text-center">
            <p>&copy; 2024 Plumbing Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
