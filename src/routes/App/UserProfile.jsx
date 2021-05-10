import React from 'react';

import { H5, Box, P, Icon, Image } from '../../components/UI';
import users from '../../data/users';

const user = users.find((o) => o.name === 'Jane Doe');

const UserProfile = () => (
  <Box height="100vh" backgroundColor="grayLighter">
    <Box borderColor="grayDark" width="100px" height="110px" display="flex" justifyContent="center">
      {user.image ? (
        <Image maxHeight="100px" src={user.image} alt="user" />
      ) : (
        <Icon icon="user" fontSize="8" color="grayDark" />
      )}
    </Box>
    <Box display="flex" pb="0" alignItems="center">
      <H5>Name</H5>:<P ml="2">{user.name}</P>
    </Box>
    <Box display="flex" pb="0" alignItems="center">
      <H5>Email</H5>:<P ml="2">{user.email}</P>
    </Box>
  </Box>
);

export default UserProfile;
