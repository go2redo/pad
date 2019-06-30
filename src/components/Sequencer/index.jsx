import React from 'react';
import propTypes from 'prop-types';

import classes from './index.module.scss';

const Sequencer = ({ children }) => (
  <main className={classes.SequencerContainer}>{children}</main>
);

Sequencer.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default Sequencer;
