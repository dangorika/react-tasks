import React, { Component } from 'react';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import PeoplePage from 'components/people-page';
import ErrorButton from 'components/error-button';
import ErrorMessage from 'components/error-message';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';

import './app.sass';
import SwapiService from 'services/swapi-service';


export default class App extends Component {

  swapiService = new SwapiService();

  state = {

    hasError: false
  };

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({ hasError: true });
  }

  render() {

    if (this.state.hasError) {
      return (
        <div className="app-error">
          <ErrorMessage />
        </div>
      );
    }

    return (
      <div className="app container">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <div className="app__row row">
          <div className="col-sm-12">
            <RandomPlanet />
          </div>
        </div>
        <div className="app__row row">
          <div className="col-sm-12">
            <ErrorButton />
          </div>
        </div>
        <div className="app__row row">
          <div className="col-sm-12">

            <PeoplePage />

            <div className="people-page row">
              <div className="people-page__col col-sm-6">
                <ItemList
                  onItemSelected={this.onPersonSelected}
                  getData={this.swapiService.getAllPlanets}
                  renderItems={item => (<span>{item.name}<button>!</button></span>)} />
              </div>
              <div className="people-page__col col-sm-6">
                <PersonDetails personId={this.state.selectedPerson} />
              </div>
            </div>

            <div className="people-page row">
              <div className="people-page__col col-sm-6">
                <ItemList
                  onItemSelected={this.onPersonSelected}
                  getData={this.swapiService.getAllStarships}
                  renderItems={item => item.name} />
              </div>
              <div className="people-page__col col-sm-6">
                <PersonDetails personId={this.state.selectedPerson} />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}