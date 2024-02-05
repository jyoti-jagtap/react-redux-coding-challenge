import React from 'react';
import UserInfo from '../UserInfo';
import './Navbar.sass';
import { NavLink, Link } from 'react-router-dom';
import NavConstants from '../../../routes/NavConstants';
import logo from '../../../logo.svg';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to={NavConstants.HOME}>
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to={NavConstants.HOME}>
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={NavConstants.USERS}>
              Users
            </NavLink>
          </li>
        </ul>
      </div>
      <UserInfo avatarUrl="" username="Jyoti" />
    </nav>
  );
};
export default Navbar;
