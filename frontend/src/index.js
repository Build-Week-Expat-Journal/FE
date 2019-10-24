import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import GlobalStyles from './style/GlobalStyles';
import theme from './style/theme';

import { AuthProvider } from './context/AuthContext';
import { reducer } from './context/AuthContext';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
