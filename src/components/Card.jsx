import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Box, P, H3, Image, Icon } from './UI';

const CardWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: space-between;
  width: 99%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.grayLighter};
  overflow: auto;
  border: ${({ theme }) => `0.5px solid ${theme.colors.grayLighter}`};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  &:hover {
    box-shadow: ${({ theme }) => `1px 1px 6px 2px ${theme.colors.grayLight}`};
  }
`;

const Card = ({ image, title, tagline, desc, where, when, eventLink, response }) => (
  <CardWrapper to={eventLink}>
    <Box display="flex" flex="2" alignItems="space-between">
      <Box borderRadius="0" width="20%" display="flex" justifyContent="center">
        {image ? (
          <Image maxHeight="230px" src={image} alt="card" />
        ) : (
          <Icon icon="image" fontSize="10" color="grayDark" />
        )}
      </Box>
      <Box>
        <H3 color="grayDark">{title}</H3>

        {tagline && <P fontSize="3">{tagline}</P>}

        <Box display="flex" pb="0" pl="0" justifyContent="center">
          <P fontSize="3">{desc}</P>
        </Box>
        <Box display="flex" pb="0" pl="0" alignItems="center">
          <P mr="4" fontSize="3" isBold color="primary2">
            WHERE:
          </P>
          <P fontSize="3">{where}</P>
        </Box>
        <Box display="flex" pb="0" pl="0" alignItems="center">
          <P mr="4" fontSize="3" isBold color="primary2">
            WHEN:
          </P>
          <P fontSize="3">{when}</P>
        </Box>
      </Box>
    </Box>
    {response && (
      <Box display="flex" alignItems="center" mr="6">
        <Box backgroundColor="primary">
          <P fontSize="4" isBold color="white">
            {response.toUpperCase()}
          </P>
        </Box>
      </Box>
    )}
  </CardWrapper>
);
Card.defaultProps = {
  tagline: '',
  response: null,
  image: null,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string,
  image: PropTypes.string,
  desc: PropTypes.string.isRequired,
  where: PropTypes.string.isRequired,
  when: PropTypes.string.isRequired,
  eventLink: PropTypes.string.isRequired,
  response: PropTypes.string,
};
export default Card;
