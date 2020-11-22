import React, { Component } from 'react';

import Header from 'components/header';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from 'components/sw-components';
import { SwapiServiceProvider } from 'components/swapi-service-context';
import ErrorBoundry from 'components/error-boundry';
import PageRow from 'components/page-row';

import './app.sass';
import SwapiService from 'services/swapi-service';
import DummySwapiService from 'services/dummy-swapi-service';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="app container">
            <Header />

            <PersonDetails itemId={11} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <PlanetList />
            <StarshipList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}