import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PageRow from 'components/page-row';
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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItems={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <PageRow left={itemList} right={personDetails} />
    );
  }
}