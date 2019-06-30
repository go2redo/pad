import React from 'react';
import propTypes from 'prop-types';

import classes from '../Pad/index.module.scss';

const getPadClass = (isActive, isSelected) =>
  `${classes.SequencerPad} ${isActive ? classes.isActive : ''} ${
    isSelected ? classes.isSelected : ''
  }`;

const Pad = ({ padIndex, rowIndex, handleClick, isActive, isSelected }) => {
  return (
    <div
      className={getPadClass(isActive, isSelected)}
      onClick={() => handleClick(rowIndex, padIndex)}
    />
  );
};

Pad.propTypes = {
  padIndex: propTypes.number.isRequired,
  rowIndex: propTypes.number.isRequired,
  isActive: propTypes.bool.isRequired,
  isSelected: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Pad;
