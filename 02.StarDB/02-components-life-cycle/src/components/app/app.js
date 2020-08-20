import React, { Component } from 'react';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';

import './app.sass';

export default class App extends Component {

  state = {
    selectedPerson: null
  };
  
  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
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