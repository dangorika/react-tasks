import React, { Component, Fragment } from 'react';
import Spinner from 'components/spinner';

import 'assets/sass/common.sass';
import './person-details.sass';

import SwapiService from 'services/swapi-service';

export default class  PersonDetails extends Component {
  
  swapiService = new SwapiService();

  state = {
    person: {},
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    
    this.setState({ loading: true });

    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({ person, loading: false });
      });
  }

  render() {
    const { person, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView person={person} /> : null;

    return (
      <div className="panel box">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <Fragment>
      <div className="panel__img">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="character"/>
      </div>
      <div className="panel__content">
        <h2 className="title title_h2">{name}</h2>
        <ul className="panel__list">
          <li className="panel__item">
            <span>Gender</span>
            <span>{gender}</span>
          </li>
          <li className="panel__item">
            <span>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="panel__item">
            <span>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}