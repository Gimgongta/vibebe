import {COORDINATE_X_SIZE} from '../commons/constants';

export default function CoordinateToInt(coordinate) {
  return coordinate[1] * COORDINATE_X_SIZE + coordinate[0];
}
