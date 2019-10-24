import React, { useEffect } from 'react';

import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import Authlayout from '../components/AuthLayout';

const Login = () => {
  const { handleLogin } = useAuth();
  return (
    <Authlayout formAlign="right">
      <LoginForm handleLogin={handleLogin} />
    </Authlayout>
  );
};

export default Login;
