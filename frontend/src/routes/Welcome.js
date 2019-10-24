import React from 'react';

import WelcomePage from '../components/WelcomePage';
import Authlayout from '../components/AuthLayout';

const Welcome = () => {
  return (
    <Authlayout
      titleSize={32}
      subTitle={() => (
        <>
          Welcome <span>Marty Smith!</span>
        </>
      )}
      formAlign="left"
    >
      <WelcomePage />
    </Authlayout>
  );
};

export default Welcome;
