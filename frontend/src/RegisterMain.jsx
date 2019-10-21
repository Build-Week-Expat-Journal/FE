import React, { useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const RegisterMain = ({ values, errors, touched }) => {
    return (
        <div className='register-main'>
            <Form>
                <Field type='text' name='email' placeholder='Email' value={values.email}/>
                <Field type='text' name='username' placeholder='Username' />
                <Field type='text' name='password' placeholder='Password' />
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
        email: Yup.string().reqiured,
        username: Yup.string().reqiured,
        password: Yup.string().reqiured,
        confirm: Yup.string().reqiured,
    })
})(RegisterMain)

export default FormikRegisterMain;
