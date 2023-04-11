import React from 'react';
import {Text} from 'react-native';

const TestComponent2 = () => {
  const testObj = {
    test: 'My message',
    have: 'mean',
  };
  return <Text>{testObj.test}</Text>;
};

export default TestComponent2;
