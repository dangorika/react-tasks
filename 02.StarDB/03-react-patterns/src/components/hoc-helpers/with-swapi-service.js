import React from 'react';

import { SwapiServiceConsumer } from 'components/swapi-service-context';
import SwapiService from 'services/swapi-service';
import withData from './with-data';

const withSwapiService = (Wrapperd) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return <Wrapperd {...props} swapiService={swapiService} />
          }
        }
      </SwapiServiceConsumer>
    );
  }
};

export default withSwapiService;