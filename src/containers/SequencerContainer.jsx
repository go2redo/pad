import React, { useEffect } from 'react';

import propTypes from 'prop-types';

import { connect } from 'react-redux';

import { setActivePad, setStep } from '../store/actions';

import Sequencer from '../components/Sequencer';
import Row from '../components/Row';
import Pad from '../components/Pad';

import createOscillator from '../utils/createOscillator';
import getNextNote from '../utils/getNextNote';

import useInterval from '../hooks/useInterval';

const SequencerContainer = ({
  step,
  steps,
  pads,
  notes,
  setActivePad,
  setStep,
}) => {
  useInterval(() => {
    setStep({ step, steps });
    createOscillator(getNextNote(pads, step, notes));
  }, (60 * 1000) / 100 / 2);

  useEffect(() => {
    alert('Press any key');
  }, []);

  const handleClick = (rowIndex, padIndex) =>
    setActivePad({ pads, rowIndex, padIndex });

  return (
    <Sequencer>
      {pads.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((pad, padIndex) => (
            <Pad
              key={padIndex}
              padIndex={padIndex}
              rowIndex={rowIndex}
              handleClick={handleClick}
              isActive={rowIndex === step}
              isSelected={pad === 1}
            />
          ))}
        </Row>
      ))}
    </Sequencer>
  );
};

SequencerContainer.propTypes = {
  pads: propTypes.arrayOf(propTypes.arrayOf(Number)).isRequired,
  step: propTypes.number.isRequired,
  steps: propTypes.number.isRequired,
  notes: propTypes.shape({}).isRequired,
  setActivePad: propTypes.func.isRequired,
  setStep: propTypes.func.isRequired,
};

export default connect(
  ({ pads, step, steps, notes }) => ({
    pads,
    step,
    steps,
    notes,
  }),
  disaptch => ({
    setActivePad: payload => disaptch(setActivePad(payload)),
    setStep: payload => disaptch(setStep(payload)),
  }),
)(SequencerContainer);
