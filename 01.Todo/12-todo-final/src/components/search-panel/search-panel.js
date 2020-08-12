import React from 'react';

import './search-panel.sass';

const SearchPanel = ({ onChanged }) => {
  return (
    <input type="text"
           className="form-control search-input"
           placeholder="search"
           onChange={e => onChanged(e.target.value)} />
  );
};

export default SearchPanel;