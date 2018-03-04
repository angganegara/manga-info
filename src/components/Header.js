import React from 'react';
import HeaderSearch from './HeaderSearch';

const Header = ({ history, location, match }) => (
  <header>
    <h1 className="logo" onClick={() => location.pathname !== "/" ? history.push("/") : ""} style={{ cursor: 'pointer' }}>manga info database</h1>
    <HeaderSearch history={history}/>
  </header>
);

export default Header;