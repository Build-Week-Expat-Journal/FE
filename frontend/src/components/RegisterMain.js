import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const RegisterMain = ({ values, errors, touched }) => {

    // Styled Components 
    const RegisterMain = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: flex-end;
    `

    const RightSection = styled.div`
    border: 1px solid blue;
    color: white;
    width: 40%;
    background: linear-gradient(137.08deg, #230A11 -1.96%, #5D0D5F 97.8%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    `

    const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 80%;
    `

    const TopContent = styled.div`
    margin-bottom: 10%;
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


    return (
        <RegisterMain>
            <RightSection>
                <TopContent>
                    <h2>
                        Become apart of a 25 million expat network, with members across the
                        globe.
                    </h2>
                    <p>
                        New Town? Constantly on the move? Friends are thousands of miles away? 
                        Well, good thing is that you're not alone. <strong>Register down below </strong>
                        to say what's up to nearby Expats! 
                    </p>
                </TopContent>
                <StyledForm validateOnBlur={false} validateOnChange={false}>
                    <StyledField type='text' name='email' placeholder='Email' value={values.email}/>
                        {touched.email && errors.email ? (
                            <p>{errors.email}</p>
                        ) : undefined}
                    <StyledField type='text' name='username' placeholder='Username' />
                        {touched.username && errors.username && (<p>{errors.username}</p>)}
                    <StyledField type='text' name='password' placeholder='Password' />
                        {touched.password && errors.password && (<p>{errors.password}</p>)}
                    <StyledField type='text' name='confirm' placeholder='Confirm Password' />
                    <label className='checkbox-container'>
                    I agree to all terms and conditions<span>   </span>
                    <StyledField
                        type='checkbox'
                        name='terms'
                        value={values.terms}
                    />
                    </label>
                    <FormButton type='submit' className='register-button'><span>Register</span></FormButton>
                </StyledForm>
            </RightSection>
        </RegisterMain>
    )
}

const FormikRegisterMain = withFormik({
    mapPropsToValues({ email, username, password, confirm, terms }) {
        return {
            email: email || '',
            username: username || '',
            password: password || '',
            confirm: confirm || '',
            terms: terms || false // Currently unable to check and uncheck box
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        username: Yup.string()
            .min(2, 'Too short - at least 3 characters!')
            .max(20, 'Too Long - no more than 20 characters!')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Too short - at least 6 characters!')
            .max(20, 'Too Long - no more than 20 characters!')
            .required('Required'),
        confirm: Yup.string(),
    }),
    handleSubmit(values, {setStatus}) {
        axios
            .post('https://reqres.in/api/users/', values)
            .then(res => { console.log(res.data) })
            .catch(err => console.log( err.response ))
    }
})(RegisterMain)



export default FormikRegisterMain;
