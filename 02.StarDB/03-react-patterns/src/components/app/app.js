import React, { Component } from 'react';

import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
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

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
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

  toggleRandomPlanet = () =>{
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  }

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app container">
            <Header onServiceChange={this.onServiceChange} />

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