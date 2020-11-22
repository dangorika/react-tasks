import React from 'react';

import ItemDetails, { Record } from 'components/item-details';
import { SwapiServiceConsumer } from 'components/swapi-service-context';

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
          return (
            <ItemDetails
              itemId={itemId}
              getData={getStarship}
              getImageUrl={getStarshipImage}
            >
              <Record field="model" label="Model" />
              <Record field="length" label="Length" />
            </ItemDetails>
          );
        }
      }
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;