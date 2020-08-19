import React, { Component } from 'react';

import 'assets/sass/common.sass';
import './random-planet.sass';

import SwapiService from 'services/swapi-service';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2;
    this.swapiService.getPlanet(id)
      .then(planet => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        });
      });
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;

    return (
      <div className="panel box">
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
      </div>
    );
  }
}