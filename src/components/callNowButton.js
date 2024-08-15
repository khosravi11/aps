import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faSms, faPhone } from '@fortawesome/free-solid-svg-icons';

const ButtonGroup = ({ direction = 'horizontal', colorMode = 'white' }) => {
  const isVertical = direction === 'vertical';
  const isPrimaryMode = colorMode === 'primary';

  return (
    <div className={`${isVertical ? 'btn-group-vertical' : 'btn-group'}`}>
      <a 
        href="https://wa.me/yourphonenumber" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
      </a>
      <a 
        href="sms:+yourphonenumber" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faSms} size="2xl" />
      </a>
      <a 
        href="https://m.me/yourfacebookusername" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faFacebookMessenger} size="2xl" />
      </a>
      <a 
        href="tel:+yourphonenumber" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faPhone} size="2xl" />
      </a>
    </div>
  );
};

export default ButtonGroup;
