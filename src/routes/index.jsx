import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faCalendar,
  faSignInAlt,
  faUserPlus,
  faSearchPlus,
} from '@fortawesome/free-solid-svg-icons';

import { theme } from '../constants';

import App from './App';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';

library.add(faUser, faCalendar, faSignInAlt, faUserPlus, faSearchPlus);

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/app" component={App} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default Root;
