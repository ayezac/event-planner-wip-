import React from 'react';

import { Box, Page, H1, NavLinkButton } from '../components/UI';

const Home = () => (
  <Page backgroundColor="primary">
    <Box display="flex" justifyContent="flex-end" mr="6">
      <NavLinkButton to="/login" backgroundColor="white" p="3">
        Login
      </NavLinkButton>
      <NavLinkButton to="/signup" backgroundColor="white" p="3">
        Sign up
      </NavLinkButton>
    </Box>
    <Box width="40%" mt="11" ml="10" pb="5">
      <H1 fontWeight="400" mb="8" color="white">
        Schedule and plan your event
      </H1>

      <NavLinkButton to="/app" backgroundColor="white">
        Explore
      </NavLinkButton>
    </Box>
  </Page>
);

export default Home;
