import React, { Component } from 'react';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import PeoplePage from 'components/people-page';
import ErrorButton from 'components/error-button';
import ErrorMessage from 'components/error-message';

import './app.sass';


export default class App extends Component {

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
            <PeoplePage />
            <PeoplePage />
          </div>
        </div>
      </div>
    );
  }
}