import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

// const mockProfileData=[  --> No longer in use; Fetching user_profile data from API
//     {
//         id: 1,
//         first_name: 'Marty',
//         last_name: 'Smith',
//         date_of_birth: '3/4/1992',
//         occupation: 'React Developer',
//         location: 'CA',
//         bio: 'React Developer from Cali'
//     }
// ]

const ProfileCard = styled.div`
  height: 500px;
  margin-top: 0;
  background: ${props => props.theme.gradients.purplePink};
  border-radius: 30px;
  padding: 30px;
  box-shadow: 10px 5px 5px black;
`;

const Button = styled.button`
  background-image: linear-gradient(
    90deg,
    rgba(109, 88, 198, 1) 0%,
    rgba(249, 119, 161, 1) 100%
  );
  width: 50%;
  border-radius: 12px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const LocationInfo = styled.div`
  margin: 30px 0 30px 0;
`;

const Pill = styled.div`
  color: white;
  background: ${props => props.theme.gradients.purplePink};
  padding: 5%;
  border-radius: 30px;
  cursor: pointer;
  border: 3px solid white;
  width: 50%;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 2%;
`;

const InterestInfo = styled.div`
  margin-top: 15%;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const WelcomePage = props => {
  const [profileData, setProfileData] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  //     setProfileData(mockProfileData)
  // }, [])

  useEffect(() => {
    axios
      .get(`https://expat-journal-lambda1.herokuapp.com/api/user_profile`)
      .then(response => setProfileData(response.data[0]))
      .catch(error => {
        console.log('Error Alert!!', error);
      });
  }, []);

  return (
    <>
      <ProfileCard>
        <h2>{`${profileData.first_name} ${profileData.last_name}`}</h2>
        <LocationInfo>
          <h3>Location:</h3>
          <p>{profileData.location}</p>
        </LocationInfo>
        <div className="bio-info">
          <h3>Bio:</h3>
          <p>{profileData.bio}</p>
        </div>
        <InterestInfo>
          <h3>Interests:</h3>
          <Pill>Chess</Pill>
          <Pill>Business</Pill>
        </InterestInfo>
      </ProfileCard>
      <Button onClick={() => history.push('/')}>Home</Button>
    </>
  );
};

export default WelcomePage;
