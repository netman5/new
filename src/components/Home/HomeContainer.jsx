import React, { Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const Abouts = React.lazy(() => import('../About/Abouts'));
const Works = React.lazy(() => import('../Works/Works'));
const Blogs = React.lazy(() => import('../Blogs/Blogs'));
const Contact = React.lazy(() => import('../contact/Contact'));

const override = {
  display: 'block',
  margin: '20px auto',
  borderColor: 'red',
};

function HomeContainer() {
  const color = '#65d493';
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<BeatLoader color={color} cssOverride={override} size={15} />}>
          <Abouts />
          <Works />
          <Blogs />
          <Contact />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default HomeContainer;
