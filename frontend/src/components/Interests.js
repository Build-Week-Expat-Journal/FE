import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';

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

const Interests = () => {
  const [myInterest, setMyInterest] = useState([]);

  const addInterest = interest => {
    myInterest.includes(interest)
      ? setMyInterest(myInterest.filter(i => i !== interest))
      : setMyInterest([...myInterest, interest]);
  };

  return (
    <>
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
    </>
  );
};

export default Interests;
