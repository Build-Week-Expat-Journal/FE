import React from 'react';

import WelcomePage from '../components/WelcomePage';
import Authlayout from '../components/AuthLayout';

const Welcome = () => {
  return (
    <Authlayout
      message={() => (
        <>
          Welcome <span>John Smith!</span>
        </>
      )}
      formAlign="left"
    >
      <WelcomePage />
    </Authlayout>
  );
};

export default Welcome;