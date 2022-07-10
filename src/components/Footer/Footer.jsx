import React from 'react';

const Footer = () => (
  <div>
    <div className="footer">
      <h1 className="brandName">
        {' '}
        <span>Ola</span>
        {' '}
        Ishola
      </h1>

      <p>
        &copy;
        {' '}
        <span>{new Date().getFullYear()}</span>
        {' '}
        <span>All rights reserved</span>
      </p>
    </div>
  </div>
);

export default Footer;
