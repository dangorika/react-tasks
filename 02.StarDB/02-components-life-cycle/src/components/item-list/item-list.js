import React, { Component } from 'react';
import Spinner from 'components/spinner';

import 'assets/sass/common.sass';
import './item-list.sass';

import SwapiService from 'services/swapi-service';

export default class ItemList extends Component {
  
  swapiService = new SwapiService();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => {
        this.setState({ peopleList })
      });
  }

  renderItems(items) {
    return items.map(({ id, name }) => {
      return (
        <li className="item-list__item"
            key={id}
            onClick={ () => this.props.onItemSelected(id) }>
          {name}
        </li>
      );
    })
  } 

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />
    }

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list box">
        {items}
      </ul>
    )
  }
};