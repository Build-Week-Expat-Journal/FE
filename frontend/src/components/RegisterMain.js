import React, { useState} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const StyledField = styled.input`
  color: white;
  font-size: 14px;
  background: transparent;
  padding: 4%;
  border-radius: 10px;
  margin-bottom: 2%;
`;

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
`;

const RegisterMain = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    username: '',
    password: '',
    confirm_password: ''
  })

  const handleChanges = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(credentials);
    axios
    .post('https://expat-journal-lambda1.herokuapp.com/api/users/register', {...credentials})
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', JSON.stringify(res.data.token));
    })
    .catch(err => console.log(err.data))

  }

  return(
    <>
      <StyledForm onSubmit={handleSubmit} >
        <StyledField type="text" name="email" value={credentials.email} placeholder="email" onChange={handleChanges} />
        <StyledField type="text" name="username" value={credentials.username} placeholder="username" onChange={handleChanges} />
        <StyledField type="password" name="password" value={credentials.password} placeholder="password" onChange={handleChanges} />
        <StyledField type="password" name="confirm_password" value={credentials.confirm_password} placeholder="confirm_password" onChange={handleChanges} />
        <Link to='/'><FormButton type="submit">Submit</FormButton></Link>
      </StyledForm>
    </>
  )

}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error
});

export default connect(mapStateToProps, { })(RegisterMain);