
const canvas = document.getElementById('canvas2d');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

// Lando 128x192 = 32x48
const player = {
  x: 200,
  y: 300,
  width: 32,
  height: 48,
  frameX: 0,
  frameY: 0,
  speed: 3,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = '../assets/lando.png';
const background = new Image();
background.src = '../assets/background.png';

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  drawSprite(
    playerSprite, //image source
    player.width * player.frameX, //where to cut in the sprite X axis
    player.height * player.frameY,//where to cut in the sprite Y axis
    player.width, //how much X value to cut in the sprite
    player.height, //how much Y value to cut in the sprite
    player.x, //where to draw in the canvas X axis
    player.y, //where to draw in the canvas Y axis
    player.width, //how much X value to draw in the canvas
    player.height //how much Y value to draw in the canvas
  );
  movePlayer()
  requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown', (e) => {
  keys.push(e.key);
});

window.addEventListener('keyup', (e) => {
  keys.pop(e.key);
});

function movePlayer() {
  if (keys[0] === 'ArrowUp' && player.y > 100) {
    player.y -= player.speed;
    player.frameY = 3
  }
  if (keys[0] === 'ArrowDown' && player.y < canvas.height) {
    player.y += player.speed
    player.frameY = 0
  }
  if (keys[0] === 'ArrowLeft') {
    player.x -= player.speed
  }
  if (keys[0] === 'ArrowRight') {
    player.x += player.speed
  }
}
