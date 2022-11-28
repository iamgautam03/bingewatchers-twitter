import React from 'react';
import PropTypes from 'prop-types';
import NavbarDropDownLinks from './NavbarDropDownLinks';

export default function NavbarDropDown(props) {
  return (
    <div className="d-flex main-dropdown">
      <button
        className="btn border rounded-1 border-dark main-dropdown dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDIgNSBMIDIgNyBMIDIyIDcgTCAyMiA1IEwgMiA1IHogTSAyIDExIEwgMiAxMyBMIDIyIDEzIEwgMjIgMTEgTCAyIDExIHogTSAyIDE3IEwgMiAxOSBMIDIyIDE5IEwgMjIgMTcgTCAyIDE3IHoiPjwvcGF0aD48L3N2Zz4="
        />
      </button>
      <ul
        className="dropdown-menu"
        style={{ backgroundColor: 'var(--header-white)' }}
        aria-labelledby="navbarDropdown"
      >
        <NavbarDropDownLinks isLoggedIn={props.isLoggedIn} navs={props.navs} />
      </ul>
    </div>
  );
}

NavbarDropDown.propTypes = {
  navs: PropTypes.array,
};
