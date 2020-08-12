import React, { Component } from 'react';

import './item-add-form.sass';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    
    const { onAdded } = this.props;
    const { label } = this.state;

    onAdded(label);
    e.target.reset();
  };

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="What needs to be done" />
        <button className="btn btn-secondary">
          Add Item
        </button>
      </form>
    );
  }
}