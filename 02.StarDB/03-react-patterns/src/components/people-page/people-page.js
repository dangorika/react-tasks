import React, { Component } from 'react';
import ItemList from 'components/item-list';
import PageRow from 'components/page-row';
import ItemDetails from 'components/item-details';
import ErrorBoundry from 'components/error-boundry';

import './people-page.sass';
import SwapiService from 'services/swapi-service';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

          {(i) => (
            `${i.name} (${i.birthYear})`
          )}

        </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <PageRow left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}