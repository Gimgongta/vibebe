import React from 'react';
import {Text} from 'react-native';

// 컴포넌트의 기본 형태
export default function TestComponent1(): JSX.Element {
  // 기본 자료형
  const num: Number = 3;
  const str: String = 'str';
  let bool: Boolean = true;
  const testObj = {
    test: 'My message',
    have: 'haha',
  };
  return <Text>{`${testObj.test} ${num} ${str} ${bool}`}</Text>;
}
