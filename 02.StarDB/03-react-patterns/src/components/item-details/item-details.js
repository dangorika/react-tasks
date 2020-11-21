import React, { Component, Fragment } from 'react';
import Spinner from 'components/spinner';
import ErrorButton from 'components/error-button';

import 'assets/sass/common.sass';
import './item-details.sass';

import SwapiService from 'services/swapi-service';


const Record = ({ item, field, label }) => {
  return (
    <li className="panel__item">
      <span>{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: {},
    image: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    this.setState({ loading: true });

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      });
  }

  render() {
    const { item, image, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ItemView item={item} image={image} children={this.props.children} /> : null;

    return (
      <div className="panel box">
        {spinner}
        {content}
        <div className="error-toggle">
          <ErrorButton />
        </div>
      </div>
    );
  }
}

const ItemView = ({ item, image, children }) => {
  const { name } = item;

  return (
    <Fragment>
      <div className="panel__img">
        <img src={image} alt="character"/>
      </div>
      <div className="panel__content">
        <h2 className="title title_h2">{name}</h2>
        <ul className="panel__list">
          {
            React.Children.map(children, (child) => {
              return <>{React.cloneElement(child, { item })}</>;
            })
          }
        </ul>
      </div>
    </Fragment>
  );
}