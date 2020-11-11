import React from 'react';

import './spinner.sass';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__circles">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;