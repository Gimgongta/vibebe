import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  gyroscope,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors';

export default function GyroscopeTest() {
  const [SensorX, setSensorX] = useState(0);
  //   const [SensorY, setSensorY] = useState(0);
  //   const [SensorZ, setSensorZ] = useState(0);

  // useEffect(() => {
  //   setUpdateIntervalForType(SensorTypes.accelerometer, 10000); // defaults to 100ms

  //   const subscription = gyroscope.subscribe(({x, y, z, timestamp}) => {
  //     setSensorX(x * Math.PI);
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  return <Text>{}</Text>;
}
