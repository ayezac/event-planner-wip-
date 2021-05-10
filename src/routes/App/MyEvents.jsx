import React, { useState } from 'react';

import { H1, H3, Box, SlideInPortal, Button, Icon } from '../../components/UI';
import EventList from '../../components/EventList';
import CreateEventForm from '../../components/CreateEventForm';
import users from '../../data/users';
import events from '../../data/events';

const user = users.find((o) => o.name === 'Jane Doe');
const userEvents = user.events.map((o) => {
  const event = events.find((e) => e.id === o.id);
  return { ...event, response: o.response };
});

const MyEvents = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Box>
      <Box>
        <H1>MY EVENTS</H1>
        <Button onClick={() => setOpenForm(true)}>Create an Event</Button>
      </Box>
      {userEvents.length ? (
        <EventList events={userEvents} />
      ) : (
        <Box>
          <H3>You are not attending any events at the moment</H3>
        </Box>
      )}

      <SlideInPortal isOpen={openForm}>
        <Button
          onClick={() => setOpenForm(false)}
          p="2"
          borderRadius="1"
          backgroundColor="primary"
          m="0"
          style={{ float: 'right' }}
        >
          <Icon icon="times" fontSize="5" />
        </Button>
        <CreateEventForm />
      </SlideInPortal>
    </Box>
  );
};

export default MyEvents;
