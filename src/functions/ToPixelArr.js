import {
  COORDINATE_X_SIZE,
  COORDINATE_Y_SIZE,
  THEME_WHITE,
  THEME_BLACK,
} from '../commons/constants';

export default function ToPixelArr(dotArr) {
  const result = [];
  for (let i of dotArr) {
    result.push(
      Array(COORDINATE_X_SIZE * COORDINATE_Y_SIZE)
        .fill('#fff')
        .map((color, index) => (i.includes(index) ? THEME_BLACK : THEME_WHITE)),
    );
  }
  return result;
}
