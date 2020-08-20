import React from 'react';

import 'assets/sass/common.sass';
import './item-list.sass';

const ItemList = () => {
  return (
    <ul className="item-list box">
      <li className="item-list__item">Item 1</li>
      <li className="item-list__item">Item 2</li>
      <li className="item-list__item">Item 3</li>
      <li className="item-list__item">Item 4</li>
      <li className="item-list__item">Item 5</li>
      <li className="item-list__item">Item 6</li>
      <li className="item-list__item">Item 7</li>
      <li className="item-list__item">Item 8</li>
      <li className="item-list__item">Item 9</li>
    </ul>
  )
};

export default ItemList;