import React from 'react';
import PropTypes from 'prop-types';

import { P } from './UI';

const InputError = ({ error }) => (
  <P color="warning" fontSize="3">
    {error}
  </P>
);

InputError.propTypes = {
  error: PropTypes.string.isRequired,
};
export default InputError;
