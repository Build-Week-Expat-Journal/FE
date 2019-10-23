import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import media from './style/mq';

import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Login from './routes/Login';
import Register from './routes/Register';
import Home from './components/Home';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import CreateProfile from './routes/CreateProfile';
import UserInterests from './routes/Register/Interests';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fontFamily.base};
  width: 100%;

  ${media.md`
    min-height: 100vh;
  `}
`;

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <AppContainer>
      <Switch>
        {/* <Route exact path="/">
          {!isAuthenticated ? <Redirect to="/login" /> : <Home />}
        </Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/create" component={CreateForm} />
        <PrivateRoute exact path="/update/:id" component={UpdateForm} />
        <Route exact path="/createprofile" component={CreateProfile} />
        <Route exact path="/interests">
          <UserInterests />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;
