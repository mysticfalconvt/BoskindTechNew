// sellect elements on the page
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 15;
// setup canvas for drawing
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let hue = Math.floor(Math.random() * 350);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(${hue},100%,50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Draw function
function draw({ key }) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  hue += 10;
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}
// handler for keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear / shake function
function shakeTheScreen() {
  canvas.classList.add('shake');
  canvas.addEventListener(
    'animationend',
    function () {
      canvas.classList.remove('shake');
      ctx.clearRect(0, 0, width, height);
    },
    { once: true }
  );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', shakeTheScreen);
