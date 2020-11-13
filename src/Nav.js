import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='about'>
          <li>About</li>
        </Link>
        <Link to='/recipe'>
          <li>Recipes</li>
        </Link>
        <Link to='/movies'>
          <li>Movies</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;