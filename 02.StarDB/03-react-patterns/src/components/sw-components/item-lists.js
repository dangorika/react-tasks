import React from 'react';

import ItemList from 'components/item-list/item-list';
import { withData } from '../hoc-helpers';
import SwapiService from 'services/swapi-service';

const swapiService = new SwapiService();
const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService;

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
};

const PersonList = withData(
                    withChildFunction(ItemList,renderName),
                    getAllPeople
                  );
const PlanetList = withData(
                    withChildFunction(ItemList,renderName),
                    getAllPlanets
                  );
const StarshipList = withData(
                      withChildFunction(ItemList,renderModelAndName),
                      getAllStarships
                    );

export {
  PersonList,
  PlanetList,
  StarshipList
};