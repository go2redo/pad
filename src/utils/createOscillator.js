let audioContext;

try {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (error) {
  window.alert(`Sorry, but your browser doesn't support the Web Audio API!`);
}

const createOscillator = (notes = []) => {
  if (notes.length <= 0) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = 'triangle';
  oscillator.frequency.value = notes[0];
  gain.gain.value = 1;

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start(0);

  setTimeout(
    () => gain.gain.setTargetAtTime(0, audioContext.currentTime, 0.015),
    100,
  );
};

export default createOscillator;
