/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Vibebe from './src/screens/Vibebe';

const screenHeight = Dimensions.get('window').height * 0.5;
console.log(`screenHeight : ${screenHeight}`);

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Vibebe />
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
