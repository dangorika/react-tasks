import React, { Component } from 'react';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import PeoplePage from 'components/people-page';
import ErrorButton from 'components/error-button';
import ErrorMessage from 'components/error-message';
import ItemList from 'components/item-list';
import ItemDetails from 'components/item-details';

import './app.sass';
import SwapiService from 'services/swapi-service';
import ErrorBoundry from 'components/error-boundry';
import PageRow from 'components/page-row';


export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} />
    );


    return (
      <ErrorBoundry>
        <div className="app container">
          <Header />

          <PageRow
            left={personDetails}
            right={starshipDetails} />
        </div>
      </ErrorBoundry>

    );
  }
}