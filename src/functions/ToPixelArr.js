export default function ToPixelArr(dotArr) {
  const result = [];
  for (let i of dotArr) {
    result.push(
      Array(32 * 16)
        .fill('#fff')
        .map((color, index) => (i.includes(index) ? '#000' : '#fff')),
    );
  }
  return result;
}
