import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Box, Input } from './UI';

const Search = ({ onInputChange }) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    onInputChange(searchInput);
  }, [searchInput]);

  return (
    <Box>
      <Input
        type="text"
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for an event"
      />
    </Box>
  );
};

Search.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
export default Search;
