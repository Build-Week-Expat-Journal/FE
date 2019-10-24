import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from 'polished';

import { useAuth } from '../context/AuthContext';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  z-index: 1;
  .auth-buttons {
    display: flex;
    flex: 0 1 30%;
    justify-content: flex-end;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex: 0 1 40%;
  justify-content: space-between;
`;
const StyledNavLink = styled(NavLink)`
  position: relative;
  color: #ffffff;
  font-size: ${rem(32)};
  font-weight: 500;
  opacity: 0.5;

  &.active {
    color: white;
    opacity: 1;

    &:after {
      content: '';

      width: 100%;
      position: absolute;
      left: 0;
      bottom: 3px;

      border-width: 0 0 3px;
      border-style: solid;
    }
  }
`;
const Button = styled.button`
  position: relative;
  background-image: linear-gradient(
    90deg,
    rgba(109, 88, 198, 1) 0%,
    rgba(249, 119, 161, 1) 100%
  );
  border-radius: 30px;
  box-sizing: border-box;
  color: #111;
  display: block;
  width: 100%;
  max-width: 168px;
  height: 48px; /* make theme variable: inputHeight? */
  letter-spacing: 1px;
  margin: ${props => props.theme.spacing.md};
  padding: 2px;
  border: none;
  text-decoration: none;
  z-index: 2;
  span {
    align-items: center;
    background: ${props => (props.register ? 'none' : '#e5e5e5')};
    color: ${props => (props.register ? 'white' : 'inherit')};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }
`;

const MainNav = () => {
  const history = useHistory();
  const { isAuthenticated, handleLogout } = useAuth();
  return (
    <Header>
      <Nav>
        <StyledNavLink exact to="/" activeClassName="active">
          Home
        </StyledNavLink>
        <StyledNavLink exact to="/discover" activeClassName="active">
          Discover
        </StyledNavLink>
        <StyledNavLink exact to="/about-us" activeClassName="active">
          About Us
        </StyledNavLink>
      </Nav>
      <div className="auth-buttons">
        <Button onClick={() => history.push('/register')} register>
          <span>Register</span>
        </Button>
        {isAuthenticated ? (
          <Button onClick={() => handleLogout()}>
            <span>Logout</span>
          </Button>
        ) : (
          <Button onClick={() => history.push('/login')}>
            <span>Login</span>
          </Button>
        )}
      </div>
    </Header>
  );
};

export default MainNav;
