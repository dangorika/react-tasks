import React, { Component } from 'react';

import Header from 'components/header';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './app.sass';
import SwapiService from 'services/swapi-service';
import ErrorBoundry from 'components/error-boundry';
import PageRow from 'components/page-row';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div className="app container">
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />

          <PersonList />
          <PlanetList />
          <StarshipList />

        </div>
      </ErrorBoundry>
    );
  }
}