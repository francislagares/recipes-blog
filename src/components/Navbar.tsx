import React from 'react';
import { Link } from 'gatsby';

const Navbar = (): JSX.Element => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
