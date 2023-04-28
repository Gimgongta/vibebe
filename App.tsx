/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Vibebe from './src/screens/Vibebe';
import Monster2 from './src/datas/Monster2';
import {CompassRpmView} from './src/components/CompassRpm.view';
import GyroscopeTest from './src/components/GyroscopeTest';

const screenHeight = Dimensions.get('window').height * 0.5;
console.log(`screenHeight : ${screenHeight}`);

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <Vibebe monster={Monster2()} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
