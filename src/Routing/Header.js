import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cat-facts">Number facts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
