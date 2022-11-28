import React from 'react';
import PropTypes from 'prop-types';
import NavbarDropDown from './NavbarDropDown';

export default function Navbar(props) {
  return (
    <div className="col-xl-8 offset-xl-2 d-flex justify-content-between align-items-center">
      <div className="navbar-brand">
        <a
          className="navbar-brand fs-2"
          href="/"
          style={{ fontFamily: 'var(--header-font)', color: 'var(--my-red)' }}
        >
          {props.brandName}
        </a>
      </div>
      <NavbarDropDown navs={props.navs} isLoggedIn={props.isLoggedIn} />
    </div>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string.isRequired,
  navs: PropTypes.array,
};
