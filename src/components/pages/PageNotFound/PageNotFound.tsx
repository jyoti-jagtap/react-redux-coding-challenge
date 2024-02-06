import React from 'react';
import './PageNotFound.sass';
import Title from '../../atoms/Title';
const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <Title>404</Title>
        <h1>Page Not Found</h1>
        <h2>We are sorry, but the page you requested was not found</h2>
      </div>
    </div>
  );
};

export default PageNotFound;