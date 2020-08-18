import React from 'react';
import classnames from 'classnames';

import './todo-list-item.sass';

 const TodoListItem = props => {
    const { 
      label, 
      onDeleted, 
      onToggleImportant, 
      onToggleDone, 
      important, 
      done 
    } = props;

    const classNames = classnames({
      'todo-list-item': true,
      'done': done,
      'important': important
    });

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
}

export default TodoListItem;