import React, {useState, useEffect} from 'react';
import {Button} from 'react-native';
import {Audio} from 'react-native-audio-toolkit';

const MyOscillator = () => {
  const [oscillator, setOscillator] = useState(null);

  useEffect(() => {
    const newOscillator = new Audio('sine', 440, 0.5);
    setOscillator(newOscillator);

    return () => {
      if (oscillator) {
        oscillator.destroy();
      }
    };
  }, []);

  const handleStartOscillator = () => {
    if (oscillator) {
      oscillator.play();
    }
  };

  const handleStopOscillator = () => {
    if (oscillator) {
      oscillator.stop();
    }
  };

  return (
    <>
      <Button onClick={handleStartOscillator} title="sdd">
        Start Oscillator
      </Button>
      <Button onClick={handleStopOscillator} title="33">
        Stop Oscillator
      </Button>
    </>
  );
};

export default MyOscillator;
