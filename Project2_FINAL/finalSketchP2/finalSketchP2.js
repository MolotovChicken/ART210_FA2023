//compiled and designed by Loren Halmick
//ART 210: Creative Coding Final

//Pulled from "fireflies" by slow_izzm on p5 web editor
//modified and joined with material from "Color Pulse" by jarivkin on p5 web editor
//other sources cited in my process doc

const fireFlies = [];
let flashOn = -1;
let leftX = 250;
let rightX = 290;
let topY = 180;
let bottomY = 450;

let alpha = 0;
let dir = 1; // how to change direction 
let acc = 10; // speed the color increases
let hue = 210; //blue color

let gif;
let still;
let lantern;
let gifToggle = -1;

let video;

function preload() {
  gif = loadImage('data/final.gif');
  still = loadImage('data/still.png');
  lantern = loadImage('data/lanternShell.png');
}

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 1, 1, 1);
  
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

//whatever i is less than determines the number of fireflies
  for (let i = 0; i < 20; i++) {
    fireFlies.push(new FireFly({
      x: random(leftX, rightX),
      y: random(topY, bottomY)
    }, i / 2, 1));
  }
}

function draw() {
  //background(340, 0.75, 0.1, 1);
  
  //INTERACTIVITY :]
  //method for turning gif on and off
  //also regulates glow circles
  image(video, 0, 0);
  video.loadPixels();
  for (let y = 0; y < video.height; y++) {
    for (let x = 0; x < video.width; x++) {
      const index = (x + y * video.width) * 4;
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
        if (r < 20 && g < 20 && b < 20) {
        flashOn = 1;
        gifToggle = 1;
        } else {
          flashOn = -1;
          gifToggle = -1;
        }
    if (gifToggle > 0) {
    gif.pause();
    } else {
    gif.play();
    }
   }
  }
  updatePixels();
  
  //displays a still image when glow is inactive
  //and the gif when glow is active
  if (gifToggle > 0) {
  image(still, 0, 0);
  }
  if (gifToggle < 0) {
  image(gif, 0, 0);
  }
  
  fireFlies.forEach(firefly => {
    firefly.render()
  });

//light pulse
if (flashOn < 0) {
if (alpha > 0.5) {
    dir = -0.0005; //change this (these) values to change how fast it lights up and dims
  }
  if (alpha <= 0) {
    dir = 0.0005;
  }
}
if (flashOn > 0) {
    dir = -0.0005;
}
  
  //the method to fade
  alpha = alpha + (acc * dir);

  image(lantern, 0, 0); //LANTERN SHELL, so fireflies appear to be within

  //concentric ellipses to create glow
  fill(hue, 1, 1, alpha);
  noStroke();
  ellipse(270, 330, 300, 400);
  
  fill(hue, 0.9, 1, alpha);
  ellipse(270, 330, 200, 300);
  
  fill(hue, 0.8, 1, alpha);
  ellipse(270, 330, 100, 200);
  
  fill(hue, 0.7, 1, alpha);
  ellipse(270, 330, 25, 125);
 
}

class FireFly {
  constructor(pos, r, v) {
    this.offset = (r / v) / 40;
    this.pos = createVector(pos.x, pos.y);
    this.vel = createVector(random(-this.offset, this.offset), random(-0.5, 0.5));
    this.acc = createVector();
    //SIZE of the fireflies
    this.r = 40;
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
      fill(hue, 0.9, i, 0.7 - i);
      ellipse(this.pos.x, this.pos.y, this.r * i);
    }
    pop();

    return this;
  }

  //confines the fireflies to a box
  bounds() {
    if (this.pos.x < leftX || this.pos.x > rightX) this.vel.x *= -1;
    if (this.pos.y < topY || this.pos.y > bottomY) this.vel.y *= -1;

    return this;
  }

  render() {
    return this.update().display().bounds();
  }
}
