import React, { useEffect } from 'react';
import { withFormik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components/macro';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';

import RegisterMain from '../components/RegisterMain';

const Register = ({ values, status }) => {
  const { handleLogin, isAuthenticated } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (status) handleLogin(values);
    if (isAuthenticated) history.replace(from);
  }, [history, location, from, status, values, isAuthenticated, handleLogin]);
  return (
    <Switch>
      <Route path="/register">
        <RegisterMain />
      </Route>
    </Switch>
  );
};

export default withFormik({
  mapPropsToValues: ({
    email,
    username,
    password,
    confirm,
    terms,
    firstname,
    lastname,
    dob,
    occupation,
    location,
    bio,
  }) => {
    return {
      email: email || '',
      username: username || '',
      password: password || '',
      confirm: confirm || '',
      terms: terms || false,
      firstname: firstname || '',
      lastname: lastname || '',
      dob: dob || new Date(),
      occupation: occupation || '',
      location: location || '',
      bio: bio || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    username: Yup.string()
      .min(2, 'Too short - at least 3 characters!')
      .max(20, 'Too Long - no more than 20 characters!')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required(),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required(),
    terms: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    firstname: Yup.string()
      .min(2, 'Too short - at least 3 characters!')
      .max(20, 'Too Long - no more than 20 characters!')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too short - at least 3 characters!')
      .max(20, 'Too Long - no more than 20 characters!')
      .required('Required'),
    dob: yup
      .date()
      .nullable()
      .notRequired()
      .min(new Date(1900, 0, 1)),
    occupation: string()
      .nullable()
      .notRequired(),
    location: string()
      .nullable()
      .notRequired(),
    bio: string()
      .nullable()
      .notRequired(),
  }),
  handleSubmit: (values, { setStatus, resetForm }) => {
    setStatus(values);
    resetForm();
  },
})(Register);
