import React from 'react';
import Header from 'components/header';
import RandomPlanet from 'components/random-planet';
import ItemList from 'components/item-list';
import PersonDetails from 'components/person-details';

import './app.sass';

const App = () => {
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
          <ItemList />
        </div>
        <div className="app__col col-sm-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;