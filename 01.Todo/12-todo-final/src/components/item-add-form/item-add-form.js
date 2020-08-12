import React, { Component } from 'react';

import './item-add-form.sass';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  };

  updateLabel(text) {
    this.setState({
      label: text
    });
  }

  onLabelChange = e => {
    this.updateLabel(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    
    const { onAdded } = this.props;
    const { label } = this.state;

    onAdded(label);
    this.updateLabel('');
  };

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
               placeholder="What needs to be done"
               value={label} />
        <button className="btn btn-secondary">
          Add Item
        </button>
      </form>
    );
  }
}