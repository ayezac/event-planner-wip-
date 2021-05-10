import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Overview from './Overview';

const Event = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`} component={Overview} />
    </Switch>
  );
};

export default Event;
