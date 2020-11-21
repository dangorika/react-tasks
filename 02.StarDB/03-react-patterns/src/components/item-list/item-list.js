import React from 'react';

import { withData } from '../hoc-helpers';

import 'assets/sass/common.sass';
import './item-list.sass';
import SwapiService from 'services/swapi-service';

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

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);