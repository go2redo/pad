import { SET_PAD_MAP, SET_STEP } from './actions';

import updateObject from '../utils/updateObject';
import getNotes from '../utils/getNotes';

import initialPads from '../data/initialPads';

const defaultState = {
  pads: [...initialPads],
  step: 0,
  steps: 8,
  notes: getNotes(),
};

const getPadMap = ({ pads, rowIndex, padIndex }) => {
  const padMap = pads.slice(0);
  const padState = padMap[rowIndex][padIndex];
  padMap[rowIndex] = Array(8).fill(0);
  padMap[rowIndex][padIndex] = padState === 1 ? 0 : 1;
  return padMap;
};

const getStep = ({ step, steps }) => (step < steps - 1 ? step + 1 : 0);

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_PAD_MAP:
      return updateObject(state, { pads: getPadMap(payload) });
    case SET_STEP:
      return updateObject(state, { step: getStep(payload) });
    default:
      return state;
  }
};

export default reducer;
