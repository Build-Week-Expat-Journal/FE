import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import media from './style/mq';

import { useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Login from './routes/Login';
import RegisterMain from './components/RegisterMain'
import Home from './components/Home';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

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
          {!state.isAuthenticated ? <Redirect to="/login" /> : <Home />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path='/register' component={RegisterMain} />
        <Route exact path="/create" component={CreateForm} />
        <PrivateRoute exact path="/update/:id" component={UpdateForm} />
      </Switch>

    </AppContainer>
  );
}

export default App;
