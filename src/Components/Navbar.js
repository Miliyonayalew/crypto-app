import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdMic } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import logo from '../assest/logo.png';

const Navbar = (props) => {
  const { title } = props;

  return (
    <div className="header d-flex" data-testid="testNavbar">
      <NavLink className="navLink d-flex" to="/">
        <img src={logo} alt="logo" />
        {title}
      </NavLink>
      <div className="icons d-flex">
        <MdMic className="icon" />
        <FiSettings className="icon" />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default Navbar;
