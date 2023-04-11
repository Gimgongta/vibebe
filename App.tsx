/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Vibebe from './src/screens/Vibebe';
import TestComponent4 from './src/components/TestComponent4';
import Monster2 from './src/datas/Monster2';

const screenHeight = Dimensions.get('window').height * 0.5;
console.log(`screenHeight : ${screenHeight}`);

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Vibebe monster={Monster2()} />
      <TestComponent4 />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
