import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import media from './style/mq';

import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Login from './routes/Login';
import RegisterMain from './components/RegisterMain';
import Home from './components/Home';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import CreateProfile from './routes/CreateProfile';

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
        <Route exact path="/register" component={RegisterMain} />
        <Route exact path="/create" component={CreateForm} />
        <PrivateRoute exact path="/update/:id" component={UpdateForm} />
        <Route exact path="/createprofile" component={CreateProfile} />
      </Switch>
    </AppContainer>
  );
}

export default App;
