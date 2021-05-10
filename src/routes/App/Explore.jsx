import React, { useState, useEffect } from 'react';

import { Box, H1 } from '../../components/UI';
import EventList from '../../components/EventList';
import Search from '../../components/Search';
import events from '../../data/events';

const Overview = () => {
  const [searchInput, setSearchInput] = useState('');
  const [eventList, setEventList] = useState(events);

  useEffect(() => {
    const query = searchInput?.toLowerCase();
    const filteredEvents = events.filter((v) => v.title?.toLowerCase().indexOf(query) !== -1);

    setEventList(filteredEvents);
  }, [searchInput]);

  return (
    <>
      <Box display="flex">
        <Box>
          <H1>EXPLORE ALL EVENTS</H1>{' '}
        </Box>
        <Box width="400px">
          <Search onInputChange={setSearchInput} />
        </Box>
      </Box>
      <EventList events={eventList} />
    </>
  );
};

export default Overview;
