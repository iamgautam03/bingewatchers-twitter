import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

export default function Header(props) {
  return (
    <>
      <div
        className="row-fluid w-100 p-2"
        style={{ backgroundColor: 'var(--header-white)' }}
      >
        <Navbar
          isLoggedIn={props.isLoggedIn}
          brandName={props.brandName}
          navs={props.navs}
        />
      </div>
      <div className="header-divider"></div>
    </>
  );
}

Header.propTypes = {
  brandName: PropTypes.string.isRequired,
  navs: PropTypes.array,
};
