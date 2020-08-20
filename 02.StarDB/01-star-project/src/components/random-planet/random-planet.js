import React, { Component, Fragment } from 'react';
import Spinner from 'components/spinner';

import 'assets/sass/common.sass';
import './random-planet.sass';

import SwapiService from 'services/swapi-service';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = planet => {
    this.setState({ 
      planet, 
      loading: false 
    });
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;

    return (
      <div className="panel box">
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <Fragment>
      <div className="panel__img">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
      </div>
      <div className="panel__content">
        <h2 className="title title_h2">{name}</h2>
        <ul className="panel__list">
          <li className="panel__item">
            <span>Population</span>
            <span>{population}</span>
          </li>
          <li className="panel__item">
            <span>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="panel__item">
            <span>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}