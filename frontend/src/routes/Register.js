import React from 'react';

import { useAuth } from '../context/AuthContext';
import RegisterMain from '../components/RegisterMain';
import Authlayout from '../components/AuthLayout';

const Register = () => {
  const { handleRegister } = useAuth();
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
      <RegisterMain handleRegister={handleRegister} />
    </Authlayout>
  );
};

export default Register;
