import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import media from './style/mq';

import { useAuth } from './context/AuthContext';
import Login from './routes/Login';
import RegisterMain from './components/RegisterMain'

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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path='/register' component={RegisterMain} />
      </Switch>

    </AppContainer>
  );
}

export default App;
