import React from 'react';
import propTypes from 'prop-types';

import classes from '../Row/index.module.scss';

const Row = ({ children }) => (
  <div className={classes.SequencerRow}>{children}</div>
);

Row.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Row;
