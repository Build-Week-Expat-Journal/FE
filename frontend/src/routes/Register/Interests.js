import React from 'react';

import Interests from '../../components/Interests';
import Authlayout from '../../components/AuthLayout';

const UserInterest = () => {
  return (
    <Authlayout
      message={() => (
        <>
          What are you <span>interested</span> in?
        </>
      )}
      formAlign="right"
    >
      <Interests />
    </Authlayout>
  );
};

export default UserInterest;
