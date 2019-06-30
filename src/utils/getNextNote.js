const notesArray = notes =>
  Object.keys(notes)
    .reverse()
    .map(key => notes[key]);

const next = (pads, step, notes) =>
  pads[step]
    .map((pad, i) => (pad === 1 ? notesArray(notes)[i] : null))
    .filter(x => x);

export default next;
