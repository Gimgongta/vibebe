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
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  row: {
    flexDirection: 'row',
  },
});

function Vibebe() {
  useEffect(() => {
    const interval = setInterval(() => {
      setColors(
        colors.map((color, index) => (index % 3 === 0 ? '#000' : '#fff')),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [colors, setColors] = useState(Array(32 * 16).fill('#fff'));

  const cells = [];

  for (let i = 0; i < cellHeightNum; i++) {
    const row = [];
    for (let j = 0; j < cellWidthNum; j++) {
      const index = i * 32 + j;
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
}

export default Vibebe;
