import React, { useEffect } from 'react';
import { withFormik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import loginLocked from '../assets/login-locked.svg';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.gradients.purple};
  height: 100vh;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    width: 0;
    height: 0;
    visibility: hidden;
  }
`;

const FormInput = styled.input`
  color: white;
  font-family: inherit;
  font-size: 14px;
  background: transparent;
  width: 100%;
  height: 48px; /* make theme variable: inputHeight? */
  padding: ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.lightPurple};
  border-radius: calc(${props => props.theme.spacing.sm} * 2);

  &::-moz-placeholder {
    color: white;
  }
  &::-ms-input-placeholder {
    color: white;
  }
  &::-webkit-input-placeholder {
    color: white;
  }

  &:focus {
    outline: 0;

    &::-moz-placeholder {
      color: transparent;
    }
    &::-ms-input-placeholder {
      color: transparent;
    }
    &::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

const FormError = styled.div`
  font-family: inherit;
  color: #e5195f;
  font-size: 12px;
`;

export const FormButton = styled.button`
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(109, 88, 198, 1) 0%,
    rgba(249, 119, 161, 1) 100%
  );
  border-radius: 12px;
  box-sizing: border-box;
  color: #111;
  display: block;
  height: 48px; /* make theme variable: inputHeight? */
  letter-spacing: 1px;
  margin: calc(${props => props.theme.spacing.md} * 2) auto;
  padding: 2px;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  z-index: 2;
  span {
    align-items: center;
    background: ${props => (props.ready ? 'none' : '#e5e5e5')};
    color: ${props => (props.ready ? 'white' : 'inherit')};
    border-radius: 12px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: all 0.5s ease;
    width: 100%;
  }
`;

const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormField>
      <label>{label}</label>
      <FormInput {...field} {...props} />
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
    </FormField>
  );
};

const LoginForm = ({ values, status }) => {
  const { handleLogin, isAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (status) handleLogin(values);
    if (isAuthenticated) history.push('/');
  }, [history, status, values, isAuthenticated, handleLogin]);
  return (
    <>
      <FormWrapper>
        <header>
          <img src={loginLocked} alt="Login locked" />
        </header>
        <StyledForm>
          <CustomField
            name="email"
            type="email"
            label="Email"
            placeholder="Email"
          />
          <CustomField
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
          />
          <FormButton ready={values.password} type="submit">
            <span>Login</span>
          </FormButton>
        </StyledForm>
        {/* Add forgot password component as nested route? */}
        {/* Add social oauth component */}
      </FormWrapper>
    </>
  );
};

export default withFormik({
  mapPropsToValues: ({ email, password }) => {
    return {
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required(),
  }),
  handleSubmit: (values, { setStatus, resetForm }) => {
    setStatus(values);
    resetForm();
  },
})(LoginForm);
