import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { rem } from 'polished';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const mockInterests = [
  'Blockchain',
  'Chess',
  'Photography',
  'A.I',
  'Movies',
  'Hiking',
  'E-Commerce',
];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  h2 {
    font-size: ${rem(28)};
  }
`;

const Pill = styled.span`
  color: white;
  background: ${props => props.theme.gradients.purplePink};
  padding: 0.5rem 1.25rem;
  margin: 0.25rem;
  border-radius: 30px;
  cursor: pointer;

  &.selected {
    border: 1px solid white;
    transition: all 0.3s;
  }
`;

const Button = styled.button`
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
  width: 80%;
  height: 48px; /* make theme variable: inputHeight? */
  letter-spacing: 1px;
  margin: calc(${props => props.theme.spacing.md} * 2) auto;
  padding: 2px;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
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

const Interests = () => {
  const history = useHistory();
  const [myInterest, setMyInterest] = useState([]);

  const addInterest = interest => {
    myInterest.includes(interest)
      ? setMyInterest(myInterest.filter(i => i !== interest))
      : setMyInterest([...myInterest, interest]);
  };

  return (
    <>
      <Header>
        <h2>Choose at least 3 or more interests!</h2>
      </Header>
      <Wrapper>
        {mockInterests.map((interest, index) => (
          <Pill
            className={myInterest.includes(interest) ? 'selected' : ''}
            key={index}
            onClick={() => addInterest(interest)}
          >
            {interest}
          </Pill>
        ))}
      </Wrapper>
      <Button
        ready={myInterest.length >= 3}
        onClick={() => history.push('/welcome')}
      >
        <span>Continue</span>
      </Button>
    </>
  );
};

export default Interests;
