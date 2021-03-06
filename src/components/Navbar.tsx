/* eslint-disable react/void-dom-elements-no-children */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaAlignJustify } from 'react-icons/fa';
import logo from '@/assets/images/logo.svg';

const Navbar = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Simply Recipes" />
          </Link>
          <button
            type="button"
            className="nav-btn"
            onClick={() => setShow(!show)}
          >
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? `nav-links show-links` : `nav-links`}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            Recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            Tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            About
          </Link>
        </div>
        <div className="nav-lilnks contact-link">
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
