const ctx = new (window.AudioContext || window.webkitAudioContext)();

const createOscillator = (notes = []) => {
  if (notes.length <= 0) return;

  // init

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const delay = ctx.createDelay();

  // config

  oscillator.type = 'triangle';
  oscillator.frequency.value = notes[0];
  gain.gain.value = 0.05;

  // connect
  oscillator.connect(gain);
  gain.connect(delay);
  gain.connect(ctx.destination);
  delay.connect(ctx.destination);

  oscillator.start(0);

  setTimeout(() => gain.gain.setTargetAtTime(0, ctx.currentTime, 0.015), 100);
};

export default createOscillator;
