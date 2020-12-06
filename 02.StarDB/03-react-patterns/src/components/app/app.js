import React, { Component } from 'react';

import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import { PeoplePage, PlanetsPage, StarshipsPage } from 'components/pages';
import { SwapiServiceProvider } from 'components/swapi-service-context';
import ErrorBoundry from 'components/error-boundry';

import './app.sass';
import SwapiService from 'services/swapi-service';
import DummySwapiService from 'services/dummy-swapi-service';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService :
        SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app container">
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}