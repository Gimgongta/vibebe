export default function CoordinateToInt(coordinate) {
  const maxXCoordinate = 32;
  const maxYCoordinate = 16;

  return coordinate[1] * maxXCoordinate + coordinate[0];
}
