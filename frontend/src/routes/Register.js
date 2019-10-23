import React from 'react';

import RegisterMain from '../components/RegisterMain';
import Authlayout from '../components/AuthLayout';

const Register = () => {
  return (
    <Authlayout
      message={() => (
        <>
          Expat <span>Journal</span>
        </>
      )}
      formAlign="left"
    >
      <RegisterMain />
    </Authlayout>
  );
};

export default Register;
