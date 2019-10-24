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
    props.formAlign === 'right' ? '1fr 400px' : '400px 1fr'};
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
    font-size: ${rem(64)};
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

const IntroContent = styled.section`
  display: grid;
  grid-template-areas:
    'header'
    'middle'
    'bottom';
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: 0 4rem;
  z-index: 1;

  header {
    grid-area: header;
    h1 {
      font-size: ${props => (props.titleSize ? rem(props.titleSize) : rem(64))};
      font-weight: ${props => props.theme.typography.fontWeight.regular};
      color: white;
      text-align: ${props => (props.titleSize < 64 ? 'center' : 'left')};
      z-index: 2;
    }
  }
  .middle {
    grid-area: middle;
    h2 {
      font-size: ${rem(64)};
      font-weight: ${props => props.theme.typography.fontWeight.regular};
      color: white;
      text-align: center;
      z-index: 2;
      span {
        background: ${props => props.theme.gradients.purplePink};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .bottom {
    grid-area: bottom;
    display: flex;
    width: 80%;
    padding: 0 2rem;
    z-index: 2;

    p {
      font-weight: 500;
      font-size: 1.25rem;
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

const AuthLayout = ({
  formAlign = 'right',
  titleSize,
  subTitle,
  message,
  children,
}) => {
  return (
    <Wrapper formAlign={formAlign}>
      <Intro>
        <div className="filter"></div>
        <IntroContent titleSize={titleSize}>
          <header>
            <h1>Expat Journel</h1>
          </header>
          <section className="middle">
            {subTitle ? <h2>{subTitle()}</h2> : null}
          </section>
          <section className="bottom">
            {message ? <p>{message()}</p> : null}
          </section>
        </IntroContent>
      </Intro>
      <Form>{children}</Form>
    </Wrapper>
  );
};

export default AuthLayout;
