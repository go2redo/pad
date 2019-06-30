import NOTES from '../data/notes';

const getNotes = () =>
  Object.keys(NOTES).reduce((state, note) => {
    state[note] = NOTES[note];
    return state;
  }, {});

export default getNotes;
