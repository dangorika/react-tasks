import React, { Component } from 'react';
import classnames from 'classnames';

import './item-status-filter.sass';

export default class ItemStatusFilter extends Component {

  buttons = [
    {name: 'all', label: 'All', active: true},
    {name: 'active', label: 'Active', active: false},
    {name: 'done', label: 'Done', active: false}
  ];
  
  render() {
    const { filter, onChanged } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;

      const classNames = classnames({
        btn: true,
        'btn-info': isActive,
        'btn-outline-secondary': !isActive
      });

      return (
        <button key={name}
                type="button"
                className={classNames}
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