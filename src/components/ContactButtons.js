import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faSms, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactButtons = ({ direction = 'horizontal', colorMode = 'white' }) => {
  const isVertical = direction === 'vertical';
  const isPrimaryMode = colorMode === 'primary';

  return (
    <div className={`${isVertical ? 'btn-group-vertical' : 'btn-group'}`}>
      <a 
        href="https://wa.me/4158275709" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
      </a>
      <a 
        href="sms:415-827-5709" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faSms} size="2xl" />
      </a>
      {/* <a 
        href="https://m.me/allplumbingsystems" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faFacebookMessenger} size="2xl" />
      </a> */} 
      <a 
        href="tel:415-827-5709" 
        className={`btn ${isPrimaryMode ? 'bg-primary text-white' : 'bg-white text-primary'}`}
      >
        <FontAwesomeIcon icon={faPhone} size="2xl" />
      </a>
    </div>
  );
};

export default ContactButtons;
