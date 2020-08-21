import React, { Component, Fragment } from 'react';
import Spinner from 'components/spinner';
import ErrorMessage from 'components/error-message';

import 'assets/sass/common.sass';
import './random-planet.sass';

import SwapiService from 'services/swapi-service';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  onPlanetLoaded = planet => {
    this.setState({ 
      planet, 
      loading: false,
      error: false
    });
  }

  onError = err => {
    this.setState({
      loading: false,
      error: true
    });
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="panel box">
        {errorMessage}
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
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
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