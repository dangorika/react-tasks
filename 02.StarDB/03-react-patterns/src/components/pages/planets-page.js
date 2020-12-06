import React, { Component } from 'react';

import { PlanetDetails, PlanetList } from 'components/sw-components';
import PageRow from 'components/page-row';

export default class PlanetsPage extends Component {

  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <PageRow
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />} />
    );
  }

}