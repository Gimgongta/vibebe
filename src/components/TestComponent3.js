import React from 'react';
import {Text} from 'react-native';

// 컴포넌트의 기본 형태
export default function TestComponent3() {
  // 기본 자료형
  const num = 3;
  const str = 'str';
  let a = num + str;
  let bool = true;
  const testObj = {
    test: 'My message',
    have: 'haha',
  };
  return <Text>{`${testObj.test} ${num} ${str} ${bool}`}</Text>;
}
