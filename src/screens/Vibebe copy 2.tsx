import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

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
  let id = 0;

  const handlePressIn = (key: string) => {
    const interval = setInterval(() => {
      console.log(key);
    }, 100);
    // Store the interval ID in state so we can clear it later
    id = interval;
  };

  const handlePressOut = () => {
    // Stop incrementing the count when the button is released
    clearInterval(id);
  };

  const cells = [];
  for (let i = 0; i < cellHeightNum; i++) {
    const row = [];
    for (let j = 0; j < cellWidthNum; j++) {
      row.push(
        <TouchableOpacity
          onPressIn={() => handlePressIn(`${i}-${j}`)}
          onPressOut={handlePressOut}
          key={`${i}-${j}`}
          style={styles.cell}
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
