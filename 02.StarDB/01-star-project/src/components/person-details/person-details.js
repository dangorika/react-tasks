import React from 'react';

import 'assets/sass/common.sass';
import './person-details.sass';

const PersonDetails = () => {
  return (
    <div className="panel box">
      <div className="panel__img">
        <img src="https://via.placeholder.com/150" alt=""/>
      </div>
      <div className="panel__content">
        <h2 className="title title_h2">Title</h2>
        <ul className="panel__list">
          <li className="panel__item">item 1</li>
          <li className="panel__item">item 2</li>
          <li className="panel__item">item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonDetails;