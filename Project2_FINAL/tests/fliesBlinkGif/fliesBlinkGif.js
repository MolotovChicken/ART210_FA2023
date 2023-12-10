//Pulled from "fireflies" by slow_izzm on p5 web editor
//modified and joined with material from "Color Pulse" by jarivkin on p5 web editor

const fireFlies = [];
let flashOn = -1;
let leftX = 50;
let rightX = 200;
let topY = 50;
let bottomY = 300;

let alpha = 0;
let dir = 1; // how to change direction 
let acc = 10; // speed the color increases
let hue = 200;


let gif;

function preload() {
  gif = loadImage('data/test.gif');
}

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 1, 1, 1);

//whatever I is less than determines the number of fireflies
  for (let i = 0; i < 20; i++) {
    fireFlies.push(new FireFly({
      x: random(leftX, rightX),
      y: random(topY, bottomY)
    }, i / 2, 1));
  }
}

function draw() {
  background(340, 0.75, 0.1, 1);
  
  image(gif, 0, 0);

  if (flashOn < 0) {
  fireFlies.forEach(firefly => {
    firefly.render()
  });
}

//THESE SETTINGS ARE THE KEY TO HAVING A SINGLE INTERACTION QUE THE LIGHT PULSE, HMMMM
if (flashOn < 0) {
if (alpha > 0.8) {
    dir = -0.001; //change this (these) values to change how fast it lights up and dims
  }
  if (alpha <= 0) {
    dir = 0.001;
  }
}
if (flashOn > 0) {
    dir = -0.001;
}
  
  //the method to switch color
  alpha = alpha + (acc * dir);

  //MAYBE EXPERIMENT WITH DIFFERENT SHAPES
  //HAVE ACC or DIR TRIGGERED BY Motion or audio input????
  //fill with color
  fill(hue, 10, 10, alpha);
  noStroke();
  ellipse(width / 2, height / 2, 300);
  
  fill(hue, 10, 10, alpha);
  ellipse(width / 2, height / 2, 200);
  
  fill(hue, 10, 10, alpha);
  ellipse(width / 2, height / 2, 100);
  
  fill(hue, 10, 10, alpha);
  ellipse(width / 2, height / 2, 25);
  
  //blendMode(BLEND);
  
  
}

class FireFly {
  constructor(pos, r, v) {
    this.offset = (r / v) / 40;
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(random(-this.offset, this.offset), random(-0.5, 0.5));
    this.acc = createVector();
    //SIZE of the fireflies
    this.r = 50;
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
  flashOn = flashOn * -1;
  gif.pause();
}

function mouseReleased() {
  gif.play();
}
