import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Box, Icon, P } from './UI';

const NavbarLink = styled(Link)`
    font-family: roboto;
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    padding-left: ${({ theme }) => theme.spacing[4]};
    padding-right: ${({ theme }) => theme.spacing[4]};
    &:hover {
      text-decoration:  ${({ theme }) => `underline solid ${theme.colors.grayDark}`};
    }
    &:active {
      text-decoration:  ${({ theme }) => theme.colors.grayDark};
    }
`;

const Navbar = ({ navbarValues }) => {
  const [navbarColor, setNavbarColor] = useState('primary');

  const changeNavbarBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarColor('white');
    } else {
      setNavbarColor('primary');
    }
  };

  window.addEventListener('scroll', changeNavbarBackground);

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      height="50px"
      style={{
        position: 'sticky',
        top: 0,
      }}
      backgroundColor={navbarColor}
    >
      {navbarValues.map((val) => (
        <NavbarLink key={`navbar_values_${val.name}`} to={`/${val.link}`}>
          {val.icon && (
            <Icon
              icon={val.icon}
              pr="2"
              pl="2"
              pt="2"
              pb="2"
              mr="2"
              bordercolor="black"
              borderradius="9"
              color="black"
            />
          )}
          <P mb="2" color="black">
            {val.name}
          </P>
        </NavbarLink>
      ))}
    </Box>
  );
};

Navbar.propTypes = {
  navbarValues: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Navbar;
