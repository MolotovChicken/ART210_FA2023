//based on radial gradient by p5js, edited by me

let dim;

function setup() {
  createCanvas(710, 400);
  dim = width / 2;
  background(0);
  colorMode(RGB, 255, 255, 255);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(1); //fps
}

function draw() {
  background(0);
  for (let x = 0; x <= width; x += dim) {
    drawGradient(x, height / 2);
  }
}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 255);
  for (let r = radius; r > 0; --r) {
    fill(h, h, h);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
