import React from 'react';
import UserInfo from '../UserInfo';
import './Navbar.sass';
import { NavLink, Link } from 'react-router-dom';
import NavConstants from '../../../routes/NavConstants';
import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.png';
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to={NavConstants.HOME}>
          <img
            src={logo}
            width="40"
            height="40"
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
            <li className="nav-item">
              <NavLink className="nav-link" to={NavConstants.HOME}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={NavConstants.USERS}>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
        <UserInfo avatarUrl={avatar} username="Jyoti" />
      </nav>
    </div>
  );
};
export default Navbar;
