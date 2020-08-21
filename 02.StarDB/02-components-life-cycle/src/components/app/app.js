import React, { Component } from 'react';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';
import ErrorButton from 'components/error-button';
import ErrorMessage from 'components/error-message';

import './app.sass';

export default class App extends Component {

  state = {
    selectedPerson: 1,
    hasError: false
  };
  
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
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
          <div className="app__col col-sm-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="app__col col-sm-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}