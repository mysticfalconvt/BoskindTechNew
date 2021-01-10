export function getRandomPoints(range = 8) {
  const points = [];
  for (let i = 0; i < 4; i += 1) {
    points.push(Math.floor(Math.random() * 2 * range - range));
  }
  if (points[0] === points[2]) {
    points[2] -= 1;
  }
  return { x1: points[0], y1: points[1], x2: points[2], y2: points[3] };
}
