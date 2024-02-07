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
        <div className="container-fluid">
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
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
