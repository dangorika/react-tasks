import React from 'react';

import './error-message.sass';
import icon from './death-star.png';

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <img className="error-message__img" 
           src={icon} 
           alt="error icon"
      />
      <div className="error-message__text">
        Something went terribly wrong, but we've already sent droids to fix that.
      </div>
    </div>
  );
};

export default ErrorMessage;