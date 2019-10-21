import React, { useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const RegisterMain = () => {
    return (
        <div className='register-main'>
            <Form>
                <Field type='text' name='email' placeholder='Email' />
                <Field type='text' name='username' placeholder='Username' />
                <Field type='text' name='password' placeholder='password' />
                <Field type='text' name='confirm' placeholder='Confirm Password' />
                <label className='checkbox-container'>
                I agree to all terms and conditions
                <Field
                    type='checkbox'
                    name='terms'
                />
                </label>
                <button className='register-button'>Register</button>
            </Form>
        </div>
    )
    
}

const FormikRegisterMain = withFormik({

})(RegisterMain)

export default FormikRegisterMain;
