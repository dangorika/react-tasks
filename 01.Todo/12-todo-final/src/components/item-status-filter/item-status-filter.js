import React, { Component } from 'react';

import './item-status-filter.sass';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All', active: true},
    {name: 'active', label: 'Active', active: false},
    {name: 'done', label: 'Done', active: false}
  ];
  
  render() {
    const { filter, onChanged } = this.props;

    const buttons = this.buttons.map(({ name, label, active }) => {
      const isActive = filter === name;
      const activeClass = isActive ? 'btn-info' : 'btn-outline-secondary';

      return (
        <button key={name}
                type="button"
                className={`btn ${activeClass}`}
                onClick={() => onChanged(name)}>
          { label }
        </button>
      );
    });
    return (
      <div className="btn-group">
        { buttons }
      </div>
    );
  }
}