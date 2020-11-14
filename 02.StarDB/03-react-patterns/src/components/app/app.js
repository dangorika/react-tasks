import React, { Component } from 'react';
import Header from 'components/header';
import ItemDetails, { Record } from 'components/item-details';

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
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
      </ItemDetails>
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