import React, { Component } from 'react';

import './item-add-form.sass';

export default class ItemAddForm extends Component {

  render() {
    const { onAdded } = this.props;

    return (
      <div className="item-add-form">
        <button className="btn btn-secondary"
                onClick={() => onAdded('Hello world')}>
          Add Item
        </button>
      </div>
    );
  }
}