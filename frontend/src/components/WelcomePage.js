import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const mockProfileData=[
    {
        id: 1,
        first_name: 'Marty',
        last_name: 'Smith',
        date_of_birth: '3/4/1992',
        occupation: 'React Developer',
        location: 'CA',
        bio: 'React Developer from Cali'
    }
]

const ProfileCard = styled.div`
height: 400px;
margin-top: 0;
background: ${props => props.theme.gradients.purplePink}
border-radius: 30px;
padding: 30px;
box-shadow: 10px 5px 5px black;
`

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
`

const LocationInfo = styled.div`
margin: 30px 0 30px 0;
`



const WelcomePage = (props) => {

    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        setProfileData(mockProfileData)
    }, [])


    // useEffect(() => {    -- Temporarily using mock data
    //     axios
    //         .get(`https://expat-journal-lambda1.herokuapp.com/api/user_profile`)
    //         .then(response => console.log(response))
    // }, [])  

    return (
        <>
            {profileData.map((user, index) => {
                return (
                    <ProfileCard>
                        <h2>{`${user.first_name} ${user.last_name}`}</h2>
                        <LocationInfo>
                            <h3>Location:</h3>
                            <p>{user.location}</p>
                        </LocationInfo>
                        <div className='bio-info'>
                            <h3>Bio:</h3>
                            <p>{user.bio}</p>
                        </div>
                    </ProfileCard>
                )
            })}
            <Button>Home</Button>
        </>
    )
}

export default WelcomePage;
