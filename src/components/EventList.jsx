import React from 'react';
import PropTypes from 'prop-types';

import { Box } from './UI';
import Card from './Card';

const EventList = ({ events }) => (
  <Box backgroundColor="grayLighter">
    {events.map((event) => (
      <Card
        key={`event_title_${event.id}_${event.time}`}
        image={event.image}
        title={event.title}
        tagline={event.tagline || ''}
        desc={event.desc}
        where={event.location}
        when={event.time}
        eventLink={`/app/event/${event.id}`}
        response={event.response}
      />
    ))}
  </Box>
);

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default EventList;
