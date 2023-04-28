import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useCompassHook} from './CompassRpm.hook';

export const CompassRpmView = props => {
  const {isTimerStart, callback} = props;

  const {mag} = useCompassHook();

  const getDirection = degree => {
    if (degree >= 22.5 && degree < 67.5) {
      return 'NE';
    } else if (degree >= 67.5 && degree < 112.5) {
      return 'E';
    } else if (degree >= 112.5 && degree < 157.5) {
      return 'SE';
    } else if (degree >= 157.5 && degree < 202.5) {
      return 'S';
    } else if (degree >= 202.5 && degree < 247.5) {
      return 'SW';
    } else if (degree >= 247.5 && degree < 292.5) {
      return 'W';
    } else if (degree >= 292.5 && degree < 337.5) {
      return 'NW';
    } else {
      return 'N';
    }
  };

  useEffect(() => {
    if (isTimerStart) {
      let direction = getDirection(mag);
      callback(direction);
    }
  }, [mag]);

  return (
    <>
      <View style={styles.magContainer}>
        <Text style={styles.buttonText}>{mag}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
    margin: 10,
  },
  magContainer: {
    backgroundColor: 'orange',
  },
});
