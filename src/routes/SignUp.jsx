import React from 'react';

import { Box, Page, H4, H2, NavLinkButton, Icon } from '../components/UI';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => (
  <Page backgroundColor="grayLighter" p="4" display="flex">
    <Box flex="0.75" backgroundColor="primary" height="100%">
      <Box>
        <NavLinkButton to="/app/explore" p="3" backgroundcolor="white" color="primary">
          Home
        </NavLinkButton>
      </Box>
      <Box
        height="85%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Icon icon="calendar-day" fontSize="12" />
        <H2 color="white">My Event Planner</H2>
      </Box>
    </Box>
    <Box flex="1">
      <H4 pl="5" pt="5" color="primary">
        Sign Up Here
      </H4>
      <SignUpForm />
    </Box>
  </Page>
);

export default SignUp;
