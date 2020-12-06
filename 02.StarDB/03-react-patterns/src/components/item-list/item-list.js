import React from 'react';

import { withData } from 'components/hoc-helpers';
import SwapiService from 'services/swapi-service';

import 'assets/sass/common.sass';
import './item-list.sass';

const ItemList = (props) => {

    const { data, children: renderLabel, onItemSelected } = props;

    const items = data.map((item) => {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li className="item-list__item"
            key={label.props.children}
            onClick={ () => onItemSelected(id) }>
          {label}
        </li>
      );
    });

    return (
      <ul className="item-list box">
        {items}
      </ul>
    );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);