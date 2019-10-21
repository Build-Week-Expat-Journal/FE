import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const RegisterMain = ({ values, errors, touched }) => {
    return (
        <div className='register-main'>
            <Form>
                <Field type='text' name='email' placeholder='Email' value={values.email}/>
                    {touched.email && errors.email ? (
                        <p>{errors.email}</p>
                    ) : undefined}
                <Field type='text' name='username' placeholder='Username' />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}
                <Field type='text' name='password' placeholder='Password' />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                <Field type='text' name='confirm' placeholder='Confirm Password' />
                <label className='checkbox-container'>
                I agree to all terms and conditions
                <Field
                    type='checkbox'
                    name='terms'
                    value={values.terms}
                />
                </label>
                <button type='submit' className='register-button'>Register</button>
            </Form>
        </div>
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
