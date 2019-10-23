import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

// Styled Components 
    

const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
width: 80%;
`



const StyledField = styled(Field)`
color: white;
font-size: 14px;
background: transparent;
padding: 4%;
border-radius: 10px;
margin-bottom: 2%;
`


const FormButton = styled.button`
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
height: 48px; /* make theme variable: inputHeight? */
letter-spacing: 1px;
margin: calc(${props => props.theme.spacing.md} * 2) auto;
padding: 2px;
border: none;
text-decoration: none;
text-transform: uppercase;
width: 100%;
z-index: 2;
span {
    align-items: center;
    background: #e5e5e5;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    height: 100%;
    transition: background 0.5s ease;
    width: 100%;
}
&:hover {
    cursor: pointer;
}
`

const ErrorMessage = styled.div`
    font-family: inherit;
    color: #e5195f;
    font-size: 12px;
`


const CreateProfileForm = ({ values, errors, touched }) => {

    


    return (
        <>
            <h2>Tell us about yourself:</h2>
            <StyledForm>
                <StyledField type='text' name='firstname' placeholder='First Name' value={values.firstname}/>
                    {touched.firstname && errors.firstname ? (
                        <ErrorMessage>{errors.firstname}</ErrorMessage>
                    ) : undefined}
                <StyledField type='text' name='lastname' placeholder='Last Name' />
                    {touched.lastname && errors.lastname && (<ErrorMessage>{errors.lastname}</ErrorMessage>)}
                <StyledField type='date' name='dob' placeholder='Date of Birth (MM/DD/YYYY)' />
                    {touched.dob && errors.dob && (<ErrorMessage>{errors.dob}</ErrorMessage>)}
                <StyledField type='text' name='occupation' placeholder='Occupation' />
                    {touched.occupation && errors.occupation && (<ErrorMessage>{errors.occupation}</ErrorMessage>)}
                <StyledField type='text' name='location' placeholder='Location' />
                    {touched.location && errors.location && (<ErrorMessage>{errors.location}</ErrorMessage>)}
                <h2>Write a bio:</h2>
                <StyledField component='textarea' type='text' name='bio' placeholder='No more than 200 character...' />
                <FormButton type='submit'><span>Create Profile</span></FormButton>
            </StyledForm>
        </>
    )
}

const FormikCreateProfileForm = withFormik({
    mapPropsToValues({ firstname, lastname, dob, occupation, location, bio }) {
        return {
            firstname: firstname || '',
            lastname: lastname || '',
            dob: dob || '',
            occupation: occupation || '',
            location: location || '',
            bio: bio || ''
        }
    },
    validationSchema: Yup.object().shape({
        firstname: Yup.string()
            .required('Required'),
        lastname: Yup.string()
            .required('Required'),
        dob: Yup.string()
            .required('Required'),
        occupation: Yup.string()
            .required('Required'),
        location: Yup.string()
            .required('Required'),
        bio: Yup.string()
            .max(200, 'Too Long - no more than 200 characters!')
    }),
    handleSubmit(values) {
        axios
            .post('https://reqres.in/api/users/', values)
            .then(res => { console.log(res.data) })
            .catch(err => console.log( err.response ))
    }
})(CreateProfileForm)



export default FormikCreateProfileForm;