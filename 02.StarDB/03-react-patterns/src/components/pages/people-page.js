import React, { Component } from 'react';

import { PersonDetails, PersonList } from 'components/sw-components';
import PageRow from 'components/page-row';

export default class PeoplePage extends Component {

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
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />} />
    );
  }

}