import React, { Component } from 'react';
import Spinner from 'components/spinner';

import 'assets/sass/common.sass';
import './item-list.sass';

export default class ItemList extends Component {

  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(itemList => {
        this.setState({ itemList })
      });
  }

  renderItems(items) {
    return items.map(item => {
      const { id } = item;
      const label = this.props.renderItems(item);
      return (
        <li className="item-list__item"
            key={id}
            onClick={ () => this.props.onItemSelected(id) }>
          {label}
        </li>
      );
    })
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />
    }

    const items = this.renderItems(itemList);

    return (
      <ul className="item-list box">
        {items}
      </ul>
    )
  }
};