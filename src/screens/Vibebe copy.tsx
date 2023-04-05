import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const cellWidthNum = 16;
const cellHeightNum = 32;
const heightBias = 0.9;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const cellWidthSize = screenWidth / cellWidthNum;
const cellHeightSize = (screenHeight * heightBias) / cellHeightNum;

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
  const cells = [];
  for (let i = 0; i < cellHeightNum; i++) {
    const row = [];
    for (let j = 0; j < cellWidthNum; j++) {
      row.push(<View key={`${i}-${j}`} style={styles.cell} />);
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
