import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function NavbarDropDownLinks(props) {
  let navLinks = props.navs.filter((navLink) => {
    if (props.isLoggedIn) {
      return navLink.afterLogin;
    } else {
      return navLink.beforeLogin;
    }
  });

  return navLinks.map((navLink, index) => {
    return (
      <li key={index}>
        <Link className="dropdown-item fw-bolder" to={navLink.link}>
          {navLink.name}
        </Link>
      </li>
    );
  });
}

NavbarDropDownLinks.propTypes = {
  navs: PropTypes.array,
};
