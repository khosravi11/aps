import React from 'react';
import ContactButtons from './ContactButtons';

const FloatingTab = () => {
  return (
    <div className="floating-tab rounded-pill m-2">
      <ContactButtons direction="horizontal" colorMode="primary" />
    </div>
  );
};

export default FloatingTab;
