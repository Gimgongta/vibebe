import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const cellWidthNum = 32;
const cellHeightNum = 16;
const heightRatio = 0.2;
const widthRatio = 0.7;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const cellWidthSize = (screenWidth * widthRatio) / cellWidthNum;
const cellHeightSize = (screenHeight * heightRatio) / cellHeightNum;

const styles = StyleSheet.create({
  cell: {
    width: cellWidthSize,
    height: cellHeightSize,
    borderWidth: 0.5,
    borderColor: '#eeeeee',
  },
  row: {
    flexDirection: 'row',
  },
});

const Vibebe: Function = ({monster}: any) => {
  const delay = 600;

  useEffect(() => {
    setColors(monster[0]);
    const interval = setInterval(() => {
      for (let i = 0; i < monster.length; i++) {
        if (i === 0) {
          setColors(monster[i]);
        } else {
          setTimeout(() => setColors(monster[i]), delay * i);
        }
      }
    }, delay * monster.length);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  const [colors, setColors] = useState(
    Array(cellWidthNum * cellHeightNum).fill('#fff'),
  );

  const cells = [];

  for (let i = 0; i < cellHeightNum; i++) {
    const row = [];
    for (let j = 0; j < cellWidthNum; j++) {
      const index = i * cellWidthNum + j;
      row.push(
        <View
          key={`${i}-${j}`}
          style={[styles.cell, {backgroundColor: colors[index]}]}
        />,
      );
    }
    cells.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }
  return <View>{cells}</View>;
};

export default Vibebe;
