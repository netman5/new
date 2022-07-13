import React, { Suspense } from 'react';

const Abouts = React.lazy(() => import('../About/Abouts'));
// import Abouts from '../About/Abouts';
const Works = React.lazy(() => import('../Works/Works'));
const Blogs = React.lazy(() => import('../Blogs/Blogs'));
const Contact = React.lazy(() => import('../contact/Contact'));
// import Blogs from '../Blogs/Blogs';
// import Contact from '../contact/Contact';
// import Works from '../Works/Works';

function HomeContainer() {
  return (
    <>
      <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
        <Abouts />
        <Works />
        <Blogs />
        <Contact />
      </Suspense>
    </>
  );
}

export default HomeContainer;
