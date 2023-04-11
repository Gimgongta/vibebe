import React from 'react';
import {Text} from 'react-native';

const TestComponent5 = (): JSX.Element => {
  const testObj = {
    test: '',
    have: 'mean',
  };
  return <Text>{testObj.test}</Text>;
};

export default TestComponent5;
