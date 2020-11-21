import React from 'react';

import 'assets/sass/common.sass';
import './item-list.sass';

const ItemList = (props) => {

    const { data, children: renderLabel, onItemSelected } = props;

    const items = data.map(item => {
      const { id } = item;
      const label = renderLabel(item);
      return (
        <li className="item-list__item"
            key={id}
            onClick={ () => onItemSelected(id) }>
          {label}
        </li>
      );
    });

    return (
      <ul className="item-list box">
        {items}
      </ul>
    )
};

export default ItemList;