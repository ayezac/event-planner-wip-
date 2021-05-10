import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { H1, Box, Image, P, Button, InputCheckbox } from '../../../components/UI';
import users from '../../../data/users';
import events from '../../../data/events';

const user = users.find((o) => o.name === 'Jane Doe');

const Overview = () => {
  const match = useRouteMatch();
  const { eventId } = match.params;
  const event = events.find((o) => o.id === eventId);
  const userResponse = user.events.find((e) => e.id === event.id).response;
  const [attending, setAttending] = useState(userResponse === 'attending');
  const handleChange = () => {
    setAttending(!attending);
  };

  const confirmAttendance = () => {
    // eslint-disable-next-line no-console
    console.log(attending);
  };

  return (
    <Box backgroundColor="grayLighter">
      <H1 ml="4" pt="4" color="primary2">
        {event.title}
      </H1>
      <Box backgroundColor="secondary2" width="270px" mt="4" ml="4">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <P mr="3" color="white" isBold>
            Attending
          </P>

          <InputCheckbox
            type="checkbox"
            onChange={handleChange}
            checked={attending}
            width="25px"
            height="25px"
          />

          <Button
            onClick={confirmAttendance}
            backgroundColor="primary3"
            borderColor="primary3"
            color="white"
            p="2"
            m="0"
          >
            Confirm
          </Button>
        </Box>
      </Box>

      <Box borderRadius="0" height="380px">
        <Image maxHeight="350px" src={event.image} />
      </Box>
      <Box mt="0">
        <P fontSize="5">{event.desc}</P>
      </Box>

      <Box display="flex" pb="0" alignItems="center">
        <P mr="4" fontSize="5" isBold color="primary2">
          LOCATION:
        </P>
        <P fontSize="5">{event.location}</P>
      </Box>
      <Box display="flex" pb="0" alignItems="center">
        <P mr="4" fontSize="5" isBold color="primary2">
          DATE and TIME:
        </P>
        <P fontSize="5">{event.time}</P>
      </Box>
    </Box>
  );
};

export default Overview;
