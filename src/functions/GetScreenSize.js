export default function GetScreenSize(w, h) {
  // TODO 스크린에 맞는 크기 비율 구해서 리턴하기
  // 최소값 200
  let ratio = 1;
  let width = 0;

  if (w >= h) {
    ratio = w / h;
    width = h / 3;
  } else {
    ratio = h / w;
    width = w / 3;
  }

  if (width < 200) {
    width = 200;
  }

  return [width, width / 2];
}
