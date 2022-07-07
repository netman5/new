import React from 'react';
import Abouts from '../About/Abouts';
import Blogs from '../Blogs/Blogs';
import Works from '../Works/Works';

function HomeContainer() {
  return (
    <main>
      <Abouts />
      <Works />
      <Blogs />
    </main>
  );
}

export default HomeContainer;
