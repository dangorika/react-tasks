import React, { Component } from 'react';

import { StarshipDetails, StarshipList } from 'components/sw-components';
import PageRow from 'components/page-row';

export default class StarshipsPage extends Component {

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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />} />
    );
  }

}