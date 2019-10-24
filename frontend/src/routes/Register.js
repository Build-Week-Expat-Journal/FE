import React from 'react';

import RegisterMain from '../components/RegisterMain';
import Authlayout from '../components/AuthLayout';

const Register = () => {
  return (
    <Authlayout
      message={() => (
        <>
          Become apart of a 25 million expat network, with members across the
          globe.
        </>
      )}
      formAlign="right"
    >
      <RegisterMain />
    </Authlayout>
  );
};

export default Register;
