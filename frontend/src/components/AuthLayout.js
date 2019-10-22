import React from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';

import bgImg from '../assets/friends-background.png';

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: ${props =>
    props.formAlign === 'right' ? "'intro form'" : "'form intro'"};
  grid-template-columns: ${props =>
    props.formAlign === 'right' ? '1fr 40%' : '40% 1fr'};
  grid-column-gap: 0px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;

const Intro = styled.div`
  position: relative;
  grid-area: intro;
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

const Form = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.gradients.purple};
  height: 100vh;
`;

const AuthLayout = ({ formAlign = 'right', children }) => {
  return (
    <Wrapper formAlign={formAlign}>
      <Intro>
        <div className="filter"></div>
        <h1>
          Expat <br />
          Journel
        </h1>
      </Intro>
      <Form>{children}</Form>
    </Wrapper>
  );
};

export default AuthLayout;
