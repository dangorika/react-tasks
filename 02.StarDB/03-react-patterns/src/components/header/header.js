import React from 'react';

import './header.sass';

const Header = ({ onServiceChange }) => {
  return (
    <header className="header">
      <a href="https://localhost:3000/" className="header__logo">StarDB</a>
      <nav className="header__nav">
        <button className="header__nav-item" href="https://localhost:3000/">People</button>
        <button className="header__nav-item" href="https://localhost:3000/">Planets</button>
        <button className="header__nav-item" href="https://localhost:3000/">Starships</button>
      </nav>
      <button className="header__button" onClick={onServiceChange}>Change service</button>
    </header>
  )
};

export default Header;