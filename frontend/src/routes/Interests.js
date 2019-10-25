import React from 'react';

import Interests from '../components/Interests';
import Authlayout from '../components/AuthLayout';

const UserInterest = () => {
  return (
    <Authlayout
      titleSize={32}
      subTitle={() => (
        <>
          What are you <br />
          <span>interested</span> in?
        </>
      )}
      formAlign="left"
    >
      <Interests />
    </Authlayout>
  );
};

export default UserInterest;
