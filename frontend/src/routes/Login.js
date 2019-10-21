import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import bgImg from '../assets/friends-background.png';

import LoginForm from '../components/LoginForm';

const LoginWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;

const LoginIntro = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  background: url(${bgImg});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(54, 40, 55, 0.7);
    width: 100%;
    z-index: 1;
  }

  h1 {
    align-self: center;
    font-size: ${rem(144)};
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    color: white;
    z-index: 2;
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <LoginIntro>
        <div className="filter"></div>
        <h1>
          Expat <br />
          Journel
        </h1>
      </LoginIntro>
      <LoginForm />
    </LoginWrapper>
  );
};

export default Login;
