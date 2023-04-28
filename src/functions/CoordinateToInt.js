import {COORDINATE_X_SIZE} from '../commons/constants';

export default function CoordinateToInt(coordinate, x, y) {
  return (coordinate[1] + y) * COORDINATE_X_SIZE + coordinate[0] + x;
}
