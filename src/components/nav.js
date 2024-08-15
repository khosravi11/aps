import React from 'react';
import CallNow from './callNowButton';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <a className="nav-link active fs-4 fw-semibold" aria-current="page" href="#Home">Home</a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link fs-4 fw-semibold" href="#WhatWeDo">What We Do</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4 fw-semibold" href="#SendUsAnEmail">Send Us An Email</a>
            </li>
          </ul>          
          <p className='pt-2 text-white fw-bold fs-4 me-3'>Contact Us 24/7:</p><CallNow direction="horizontal" colorMode="white" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
