import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorMessage from 'components/error-message';

import './people-page.sass';

export default class PeoplePage extends Component {

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
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="people-page__col col-sm-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}