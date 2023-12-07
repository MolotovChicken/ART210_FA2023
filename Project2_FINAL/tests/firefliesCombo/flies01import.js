const fireFlies = [];
let flash = -1;
let leftX = 50;
let rightX = 200;
let topY = 50;
let bottomY = 300;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL, 360, 1, 1, 1);

  for (let i = 0; i < 100; i++) {
    fireFlies.push(new FireFly({
      x: random(leftX, rightX),
      y: random(topY, bottomY)
    }, i / 2, 1));
  }
}

function draw() {
  background(340, 0.75, 0.1, 1);

  if (flash < 0) {
  fireFlies.forEach(firefly => {
    firefly.render()
  });
}
}

class FireFly {
  constructor(pos, r, v) {
    this.offset = (r / v) / 40;
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(random(-this.offset, this.offset), random(-1, 1));
    this.acc = createVector();
    this.r = r;
    this.col = {
      h: null,
      s: null,
      b: null,
      a: 1
    };

    this.rot = 0;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    return this;
  }

  display() {
    push();
    blendMode(ADD);
    noStroke();

    for (let i = 0; i < 1; i += 0.1) {
      fill(200, 0.9, i, 0.7 - i);
      ellipse(this.pos.x, this.pos.y, this.r * i);
    }
    pop();

    return this;
  }

  //confines the fireflies to a box, have to check against for loop in setup
  bounds() {
    if (this.pos.x < leftX || this.pos.x > rightX) this.vel.x *= -1;
    if (this.pos.y < topY || this.pos.y > bottomY) this.vel.y *= -1;

    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}

function mousePressed() {
  flash = flash * -1;
}
