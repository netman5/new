/* eslint-disable react/prop-types */
import React from 'react';

const NoData = ({ error }) => (
  <div className="container">
    <div className="no-data">
      <h1>Oops! Something went wrong</h1>
      <p>
        Check your network and try again
        {' '}
        {error}
      </p>
    </div>
  </div>
);

export default NoData;
