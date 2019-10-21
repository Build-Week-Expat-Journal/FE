import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import media from './style/mq';

import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import LoginForm from './components/LoginForm';
import CreateForm from './components/CreateForm';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fontFamily.base};
  width: 100%;

  ${media.md`
    min-height: 100vh;
  `}
`;

function App() {
  const [state] = useAuth();
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/">
          {!state.isAuthenticated ? <Redirect to="/login" /> : <h1>Home</h1>}
        </Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/create" component={CreateForm} />
        <Route exact path="/update/:id" /*component={UpdateForm}*/ />
      </Switch>
    </AppContainer>
  );
}

export default App;
