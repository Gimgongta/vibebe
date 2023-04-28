import {useState, useEffect} from 'react';
import {
  magnetometer,
  setUpdateIntervalForType,
  SensorTypes,
  accelerometer,
  orientation,
} from 'react-native-sensors';

export const useCompassHook = compassOn => {
  const [mag, setMag] = useState(0);
  const [acc, setAcc] = useState(0);
  const [lastDegree, setLastDegree] = useState(0);
  const [directionArr, setDirectionArr] = useState([]);

  useEffect(() => {
    // LPF.init([]);
    // LPF.smoothing = 0.2;

    // setUpdateIntervalForType(SensorTypes.magnetometer, 16);
    // setUpdateIntervalForType(SensorTypes.accelerometer, 16);

    // const mSubscription = magnetometer.subscribe(
    //     sensorData => {
    //         //this.setState({ magnetometer: _angle(sensorData) })
    //         //setMag(_angle(sensorData))
    //         setMag({ x: sensorData.x, y: sensorData.y, z: sensorData.z })
    //     },
    //     error => console.log("The sensor is not available"),
    // );
    // const aSubscription = accelerometer.subscribe(
    //     sensorData => {
    //         setAcc({ x: sensorData.x, y: sensorData.y, z: sensorData.z })
    //     },
    //     error => console.log("The sensor is not available"),
    // );
    setUpdateIntervalForType(SensorTypes.orientation, 100);
    const oSubscription = orientation.subscribe(sensorData => {
      // console.log(sensorData.yaw);
      let degree = 0;
      if (sensorData.yaw >= 0) {
        degree = sensorData.yaw * (180 / Math.PI);
      } else {
        degree = (sensorData.yaw + 2 * Math.PI) * (180 / Math.PI);
      }
      //setLastDegree(degree);
      console.log('>>' + Math.floor(degree % 360));
      // console.log(">>>.....>" + (Math.floor(360 - (sensorData.yaw * 180 / 3.14))))
      // console.log(">>>....." + (Math.floor(360 - (sensorData.yaw * 180 / 3.14)) % 360))

      setMag(Math.floor(degree % 360));
    });

    return () => {
      // mSubscription.unsubscribe()
      oSubscription.unsubscribe();
    };
  }, []);
  return {mag};
};

// Match the device top with pointer 0° degree. (By default 0° starts from the right of the device.)
_degree = magnetometer => {
  return magnetometer - 90 >= 0 ? magnetometer - 90 : magnetometer + 271;
};

_angle = magnetometer => {
  let angle = 0;
  if (magnetometer) {
    let {x, y} = magnetometer;
    if (Math.atan2(y, x) >= 0) {
      angle = Math.atan2(y, x) * (180 / Math.PI);
    } else {
      angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
    }
  }
  return Math.round(LPF.next(angle));
};
