import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  COORDINATE_X_SIZE,
  COORDINATE_Y_SIZE,
  MOTION_DELAY,
  SCREEN_BORDER,
  SCREEN_BORDER_COLOR,
} from '../commons/constants';
import GetScreenSize from '../functions/GetScreenSize';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const screenSize = GetScreenSize(screenWidth, screenHeight);
const cellWidthSize = screenSize[0] / COORDINATE_X_SIZE;
const cellHeightSize = screenSize[1] / COORDINATE_Y_SIZE;

// const cellWidthSize = (screenWidth * widthRatio) / COORDINATE_X_SIZE;
// const cellHeightSize = (screenHeight * heightRatio) / COORDINATE_Y_SIZE;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    width: screenSize[0],
    height: screenSize[1],
    zIndex: 1,
  },
  back: {
    // position: 'absolute',
    width: screenSize[0],
    height: screenSize[1],
    backgroundColor: '#ff112233',
    zIndex: 2,
  },
  cell: {
    width: cellWidthSize,
    height: cellHeightSize,
    borderTopWidth: SCREEN_BORDER,
    borderLeftWidth: SCREEN_BORDER,
    borderColor: SCREEN_BORDER_COLOR,
  },
  cellRightSide: {
    borderRightWidth: SCREEN_BORDER,
  },
  cellBottomSide: {
    borderBottomWidth: SCREEN_BORDER,
  },
  row: {
    flexDirection: 'row',
  },
});

const Vibebe: Function = ({monster}: any) => {
  useEffect(() => {
    setColors(monster[0]);
    const interval = setInterval(() => {
      for (let i = 0; i < monster.length; i++) {
        if (i === 0) {
          setColors(monster[i]);
        } else {
          setTimeout(() => setColors(monster[i]), MOTION_DELAY * i);
        }
      }
    }, MOTION_DELAY * monster.length);
    return () => clearInterval(interval);
  }, [monster]);

  const [colors, setColors] = useState(
    Array(COORDINATE_X_SIZE * COORDINATE_Y_SIZE).fill('#fff'),
  );

  const cells = [];

  for (let i = 0; i < COORDINATE_Y_SIZE; i++) {
    const row = [];
    for (let j = 0; j < COORDINATE_X_SIZE; j++) {
      const index = i * COORDINATE_X_SIZE + j;
      if (j === COORDINATE_X_SIZE - 1 || i === COORDINATE_Y_SIZE - 1) {
        if (j === COORDINATE_X_SIZE - 1 && i === COORDINATE_Y_SIZE - 1) {
          row.push(
            <View
              key={`${i}-${j}`}
              style={[
                styles.cell,
                {backgroundColor: colors[index]},
                styles.cellRightSide,
                styles.cellBottomSide,
              ]}
            />,
          );
        } else if (j === COORDINATE_X_SIZE - 1) {
          row.push(
            <View
              key={`${i}-${j}`}
              style={[
                styles.cell,
                {backgroundColor: colors[index]},
                styles.cellRightSide,
              ]}
            />,
          );
        } else {
          row.push(
            <View
              key={`${i}-${j}`}
              style={[
                styles.cell,
                {backgroundColor: colors[index]},
                styles.cellBottomSide,
              ]}
            />,
          );
        }
      } else {
        row.push(
          <View
            key={`${i}-${j}`}
            style={[styles.cell, {backgroundColor: colors[index]}]}
          />,
        );
      }
    }
    cells.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }
  return (
    <View style={[styles.container]}>
      {cells}
      {/* <View style={[styles.back]} /> */}
    </View>
  );
};

export default Vibebe;
