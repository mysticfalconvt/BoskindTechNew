export function getRandomPoints(range = 5) {
  const slope =
    (Math.ceil(Math.random() * 16) - 8) / Math.ceil(Math.random() * 4);
  const intercept = Math.ceil(Math.random() * 2 * range) - range;
  const x1 = Math.floor(Math.random() * 2 * range - range);
  let x2 = x1;
  while (x2 === x1) {
    x2 = Math.floor(Math.random() * 2 * range - range);
  }
  const x3 = 0 - range;
  const x4 = range;
  const y1 = Math.round((slope * x1 + intercept) * 100) / 100;
  const y2 = Math.round((slope * x2 + intercept) * 100) / 100;
  const y3 = Math.round((slope * x3 + intercept) * 100) / 100;
  const y4 = Math.round((slope * x4 + intercept) * 100) / 100;

  return { x1, y1, x2, y2, x3, y3, x4, y4, slope, intercept };
}
