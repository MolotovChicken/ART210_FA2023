//Pulled from LachlanQUT on p5 web editor

let flies = [];
let flashOn = -1; 

function setup() {
  createCanvas(960, 540);
  colorMode(HSB);
 
  let flyNum = 50;
  
  for (let i = 0; i < flyNum; i++) {
    flies.push(new Firefly(random(0, width), random(0, height)));
  }
  noStroke();
}

function draw() { 
  background(0);
  
  //fill(20);
  //rect(50, 50, 200, 400);
  
  //THIS IS THE KEY: SET SOME TRIGGER TO CHANGE THIS OTHER THAN MOUSE PRESSED AND I WILL BE SET!!!!!
  if (flashOn < 0) {
    for (let f of flies) {
      f.drawFlies();
      f.moveFlies();
      f.flashFlies();
    
      for (let f2 of flies) {
        if (f != f2) {
          f.ping(f2);
        }
      }
    }
  }
  
  push();
  fill(255);
  pop();
  }

let a, d, xD, yD, c;
let triggerUrge = 1;

class Firefly {
  constructor(x, y) {
    this.loc = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(1, 2));
    this.centerVel = createVector(0, 0);
    this.urge = random(0, triggerUrge);
    this.flash = false;
    this.dark = color(80, 100, 100, 0.005);
    this.bright = color(80, 80, 100);
    this.glow = color(80, 80, 100, 0.2);
    this.brightness = 0;
    this.size = 15;
  }

  drawFlies() {
    //this if loop confines the fireflies to the boundary of a box (which I have visualized above as a rectangle
    //perhaps add cue for sound or motion here above the boundaries loop
    //first it needs a cue, then it occurs within boundaries, maybe an else to stop the run????
  
    if (this.loc.x > 50 && this.loc.x < 250) {
      if (this.loc.y > 50 && this.loc.y < 450) {
   push();
    //colVar = map(this.brightness, 0, 1, 1, 0, true);
    c = lerpColor(this.dark, this.bright, this.brightness);
    fill(c);
    circle(this.loc.x, this.loc.y, this.size);
    
    c = lerpColor(this.dark, this.glow, this.brightness);
    fill(c);
    circle(this.loc.x, this.loc.y, this.size * 3);
    pop();  
    }
    }
  }

  moveFlies() {
    this.loc = p5.Vector.add(this.loc, this.vel);
    this.loc.x = constrain(this.loc.x, 0, width);
    this.loc.y = constrain(this.loc.y, 0, height);
    //this.vel.rotate((noise(this.loc.x * 0.1, this.loc.y * 0.1, millis() / 1000) - 0.46) * 0.5);

    this.centerVel = createVector(
      width / 2 - this.loc.x,
      height / 2 - this.loc.y
    )

    a = this.vel.angleBetween(this.centerVel);

    xD = abs(this.loc.x - width / 2) / width;
    yD = abs(this.loc.y - height / 2) / height;
    if (xD > yD) {
      d = xD;
    } else {
      d = yD;
    }
    this.vel.rotate(a * map(d, 0.4, 1, 0, 1, true));

    push();
    stroke(10);

    stroke(0, 100, 100);
    pop();
  }

  flashFlies() {
    this.urge += 0.01;

    if (this.urge > triggerUrge) {
      this.urge = random(-triggerUrge * 0.07, triggerUrge * 0.07);
      this.flash = true;
    } else {
      this.flash = false;
    }
    
    if (this.flash) {
      this.brightness = 1;
    }
    if (this.brightness > 0) {
      this.brightness -= 0.05;
    }
  }
  
  ping(f2) {
    if (f2.flash) {
      let d = dist(this.loc.x, this.loc.y, f2.loc.x, f2.loc.y);
      d = map(d, 0, 100, 0.2, 0, true);
      this.urge += this.urge * d;
    }    
  }
}

//THIS TO THE THING ABOVE!!!! IF A DIFFERENT FUNCTION TRIGGERS THIS, ALL GOOD!!!!!
//Maybe also use this to trigger the image change???
function mousePressed() {
  flashOn = flashOn * -1;
}
