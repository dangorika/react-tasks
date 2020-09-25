import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorMessage from 'components/error-message';

import './people-page.sass';
import SwapiService from 'services/swapi-service';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorMessage />
      );
    }

    return (
      <div className="people-page row">
        <div className="people-page__col col-sm-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItems={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />
        </div>
        <div className="people-page__col col-sm-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}