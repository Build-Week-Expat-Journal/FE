import React from 'react';

import Interests from '../../components/Interests';
import Authlayout from '../../components/AuthLayout';

const UserInterest = () => {
  return (
    <Authlayout
      message={() => (
        <>
          <h1>
            What are you <span>interested</span> in?
          </h1>
        </>
      )}
      formAlign="left"
    >
      <Interests />
    </Authlayout>
  );
};

export default UserInterest;
