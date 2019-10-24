import React from 'react';

import LoginForm from '../components/LoginForm';
import Authlayout from '../components/AuthLayout';

const Login = () => {
  return (
    <Authlayout
      message={() => (
        <>
          <h2>Expat Journal</h2>
          <br />
        </>
      )}
      formAlign="right"
    >
      <LoginForm />
    </Authlayout>
  );
};

export default Login;
