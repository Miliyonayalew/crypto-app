import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { MdMic } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import logo from '../assest/logo.png';

const Navbar = (props) => {
  const { title } = props;

  return (
    <div className="header d-flex">
      <NavLink className="navLink" to="/">
        {title}
      </NavLink>
      <img src={logo} alt="logo" />
      <div className="icons d-flex">
        <MdMic className="icon" />
        <FiSettings className="icon" />
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
