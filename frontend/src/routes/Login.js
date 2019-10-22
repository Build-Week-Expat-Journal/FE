import React from 'react';

import LoginForm from '../components/LoginForm';
import Authlayout from '../components/AuthLayout';

const Login = () => {
  return (
    <Authlayout formAlign="right">
      <LoginForm />
    </Authlayout>
  );
};

export default Login;
