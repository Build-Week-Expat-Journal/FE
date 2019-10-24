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
  padding: 1rem;
  color: white;

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

  .message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    padding: 0 2rem;
    margin: 2rem 0;
    z-index: 2;

    p {
      font-weight: 500;
      font-size: 1.25rem;
    }
  }

  h1,
  h2 {
    font-size: ${rem(80)};
    font-weight: ${props => props.theme.typography.fontWeight.regular};
    color: white;
    z-index: 2;

    span {
      background: ${props => props.theme.gradients.purplePink};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  h2 {
    font-size: ${rem(56)};

    span {
      background: ${props => props.theme.gradients.purplePink};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const Form = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.gradients.purple};
  height: 100vh;
  padding: 1rem;

  > * {
    color: white;
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const AuthLayout = ({ formAlign = 'right', message, children }) => {
  return (
    <Wrapper formAlign={formAlign}>
      <Intro>
        <div className="filter"></div>
        {message ? (
          <div className="message">{message()}</div>
        ) : (
          <h1>
            Expat <br />
            Journel
          </h1>
        )}
      </Intro>
      <Form>{children}</Form>
    </Wrapper>
  );
};

export default AuthLayout;
