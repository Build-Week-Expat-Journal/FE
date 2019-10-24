import React from 'react';
import styled from 'styled-components/macro';

import aboutHeader from '../assets/about-header.png';
import feature1 from '../assets/features1.svg';
import feature2 from '../assets/features2.svg';
import feature3 from '../assets/features3.svg';
import feature4 from '../assets/features4.svg';

import MainNav from '../components/MainNav';

const Wrapper = styled.section`
  position: relative;
  background-image: ${props => props.theme.gradients.purple};
  min-height: 100vh;
`;

const Hero = styled.div`
  background-image: url(${aboutHeader});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;

  .filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(54, 40, 55, 0.7);
    width: 100%;
    border-bottom-right-radius: 205px;
    border-bottom-left-radius: 205px;
    z-index: 1;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem 0;

  p {
    color: white;
    font-size: 1.25rem;
    text-align: center;
    max-width: 390px;
    padding-bottom: 2rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  h2 {
    color: white;
    font-size: 2.5rem;
    font-weight: 400;
    text-align: center;
    max-width: 390px;
    padding-bottom: 4rem;
  }
  .features {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 23%;
      margin: 0 0.5rem;
    }
  }
`;

const features = [feature1, feature2, feature3, feature4];

const About = () => (
  <Wrapper>
    <MainNav />
    <Hero />
    <Intro>
      <p>
        Our mission is to help facilate expats all over the world come together
        and do what they do best:
      </p>

      <p>Have the best kind of fun, only when the work is done.</p>
    </Intro>
    <Bottom>
      <h2>Feature</h2>
      <div className="features">
        {features.map((img, i) => (
          <img key={i} src={img} alt={`Feature ${i + 1}`} />
        ))}
      </div>
    </Bottom>
  </Wrapper>
);

export default About;
