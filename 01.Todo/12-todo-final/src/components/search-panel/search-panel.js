import React, { Component } from 'react';

import './search-panel.sass';

export default class SearchPanel extends Component {

  state = {
    searchedText: ''
  };

  onSearch = e => {
    this.props.onChanged(e.target.value);
    this.setState({
      searchedText: e.target.value
    });
  };

  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="search"
             onChange={this.onSearch}
             value={this.state.searchedText} />
    );
  }
}