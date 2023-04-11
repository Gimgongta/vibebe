import React from 'react';
import {Text} from 'react-native';
import TestComponent5 from './TestComponent5';

const TestComponent4 = () => {
  const testObj = {
    test: 'My Monster',
    have: 'My Happy Monster',
  };
  return (
    <>
      <Text>
        {testObj.have}
        <TestComponent5 />
      </Text>
    </>
  );
};

export default TestComponent4;
