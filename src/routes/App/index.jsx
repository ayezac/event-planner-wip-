import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { Page } from '../../components/UI';
import Navbar from '../../components/NavBar';

import Event from './Event';
import Explore from './Explore';
import UserProfile from './UserProfile';
import MyEvents from './MyEvents';

const navValues = [
  { name: 'EXPLORE', link: 'app', icon: 'search-plus' },
  { name: 'MY EVENTS', link: 'app/my_events', icon: 'calendar' },
  { name: 'PROFILE', link: 'app/me', icon: 'user' },
  { name: 'SIGN UP', link: 'signup', icon: 'user-plus' },
  { name: 'LOGIN', link: 'login', icon: 'sign-in-alt' },
];

const App = () => {
  const match = useRouteMatch();

  return (
    <Page height="calc(100% - 50px)" backgroundColor="primary">
      <Navbar navbarValues={navValues} />

      <Switch>
        <Route path={`${match.path}/me`} component={UserProfile} />
        <Route path={`${match.path}/my_events`} component={MyEvents} />
        <Route path={`${match.path}/event/:eventId`} component={Event} />
        <Route path={`${match.path}`} component={Explore} />
      </Switch>
    </Page>
  );
};

export default App;
