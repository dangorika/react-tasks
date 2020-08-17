import React, { Component } from 'react';

import AppHeader from 'components/app-header';
import TodoList from 'components/todo-list';
import SearchPanel from 'components/search-panel';
import ItemStatusFilter from 'components/item-status-filter';
import ItemAddForm from 'components/item-add-form';

import { states } from 'consts';

import './app.sass';
export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Have a lunch'),
    ],
    searchedText: '',
    filterValue: 'all'
  };

  componentDidMount() {
    const { todoData, filterValue } = this.state;
    
    const localData = localStorage.getItem('todoData');
    const localFilterValue = localStorage.getItem('filterValue');
    
    this.setState({ 
      todoData: JSON.parse(localData) || todoData,
      filterValue: localFilterValue || filterValue
    });
  }

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];
      
      return {
        todoData: newArray
      };
    });
  };

  addItem = text => {
    const newItem = this.createItem(text);

    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = {
      ...oldItem, 
      [propName]: !oldItem[propName]
    };
    
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  toggleImportant = id => {
    this.setState(({ todoData }) => {
      const data = this.toggleProperty(todoData, id, states.important);
      localStorage.setItem('todoData', JSON.stringify(data));
      return {
        todoData: data
      };
    });
  };

  toggleDone = id => {
    this.setState(({ todoData }) => {
      const data = this.toggleProperty(todoData, id, states.done);
      localStorage.setItem('todoData', JSON.stringify(data));
      return {
        todoData: data
      };
    });
  };

  getSearchedText = text => {
    this.setState({
      searchedText: text
    });
  };
  
  filterItemsBySearch = (arr, text) => {
    return arr.filter(el => el.label.toLowerCase().includes(text.toLowerCase()));
  };

  getFilterValue = val => {
    localStorage.setItem('filterValue', val);
    this.setState({
      filterValue: val
    });
  };

  filterItemsByFilterValue = (arr, filterValue) => {
    switch(filterValue) {
      case 'done':
        return arr.filter(el => el.done);
      case 'active':
        return arr.filter(el => !el.done);
      case 'all':
        return arr;
      default:
        return arr;
    }
  };

  render() {

    const { todoData, searchedText, filterValue } = this.state;
    const filteredData = this.filterItemsByFilterValue(
      this.filterItemsBySearch(todoData, searchedText), 
      filterValue
    );

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader 
          toDo={todoCount} 
          done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onChanged={this.getSearchedText} />
          <ItemStatusFilter 
            filter={filterValue} 
            onChanged={this.getFilterValue} />
        </div>
        <TodoList 
          todos={filteredData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.toggleImportant}
          onToggleDone={this.toggleDone}
        />
        <ItemAddForm onAdded={this.addItem} />
      </div>
    );
  }
}