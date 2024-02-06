import React from 'react';
import NavConstants from './NavConstants';

import { lazy } from 'react';
const Home = lazy(() => import('../components/pages/Home'));
const Users = lazy(() => import('../components/pages/Users'));
const UserDetails = lazy(() => import('../components/pages/UserDetails'));
const SelectedUsers = lazy(() => import('../components/pages/SelectedUsers'));
const PageNotFound = lazy(() => import('../components/pages/PageNotFound'));

const routes = [
  {
    path: NavConstants.HOME,
    element: <Home />
  },
  {
    path: NavConstants.USERS,
    element: <Users />,
    exact: true
  },
  {
    path: NavConstants.SELECTED_USERS,
    element: <SelectedUsers />,
    exact: true
  },

  {
    path: NavConstants.USER_DETAILS,
    element: <UserDetails />,
    exact: true
  },

  {
    path: '*',
    element: <PageNotFound />
  }
];

export default routes;
