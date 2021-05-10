import React from 'react';

import { H1, H3, Box } from '../../components/UI';
import EventList from '../../components/EventList';
import users from '../../data/users';
import events from '../../data/events';

const user = users.find((o) => o.name === 'Jane Doe');
const userEvents = user.events.map((o) => {
  const event = events.find((e) => e.id === o.id);
  return { ...event, response: o.response };
});

const MyEvents = () => (
  <Box height="100vh" backgroundColor="grayLighter">
    <Box>
      <H1>My Events</H1>
    </Box>
    {userEvents.length ? (
      <EventList events={userEvents} />
    ) : (
      <Box>
        <H3>You are not attending any events at the moment</H3>
      </Box>
    )}
  </Box>
);

export default MyEvents;
