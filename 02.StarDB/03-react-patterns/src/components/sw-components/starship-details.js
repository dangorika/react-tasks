import React from 'react';

import ItemDetails, { Record } from 'components/item-details';
import { withSwapiService } from 'components/hoc-helpers';

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
}

export default withSwapiService(StarshipDetails, mapMethodsToProps);