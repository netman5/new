import React from 'react';
import Abouts from '../About/Abouts';
import Blogs from '../Blogs/Blogs';
import Contact from '../contact/Contact';
import Works from '../Works/Works';

function HomeContainer() {
  return (
    <>
      <Abouts />
      <Works />
      <Blogs />
      <Contact />
    </>
  );
}

export default HomeContainer;
