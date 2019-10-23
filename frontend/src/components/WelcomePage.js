import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WelcomePage = () => {
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

    const [profileData, setProfileData] = useState([])

    useEffect(() => {
        axios
            .get(`https://expat-journal-lambda1.herokuapp.com/api/user_profile`)
            .then(response => console.log(response))
    }, [])

    return (
        <div></div>
    )
}

export default WelcomePage;

