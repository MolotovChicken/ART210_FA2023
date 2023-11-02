//BEZIER one variables
let x = 150; //controlA x cooridinate
let y = 150; //controlA y coordinate
let xStep = 0.2; //how much x coordinate of controlA changes by each time draw is ran
let yStep = 0.3; //how much y coordinate of controlA changes by each time draw is ran

let a = 360; //controlB x cooridinate
let b = 360; //controlB y coordinate
let aStep = -0.4; //how much x coordinate of controlB changes by each time draw is ran
let bStep = -0.5; //how much y coordinate of controlB changes by each time draw is ran

let anch1X = 150;
let anch1Y = 150;
let anch1XStep = 0.2;
let anch1YStep = 0.1;

//BEZIER two variables
let x2 = 600;
let y2 = 200;
let x2Step = 0.3;
let y2Step = -0.2;

let a2 = 520;
let b2 = 330;
let a2Step = -0.5;
let b2Step = -0.4;

let anch2X = 600;
let anch2Y = 200;
let anch2XStep = 0.1;
let anch2YStep = 0.2;


//bubble variables for later
let bubXa = 50;
let bubXb = 400;
let bubXc = 1230;
let bubY = 750;
let bubYb = 750;
let bubYc = 750;
let bubStep = -0.5;

//particle "swarm" variables and array
let agents = [];

//prepares image for use as background
function preload(){
  whaleImg = loadImage('data/WhaleFall.png');
}

function setup() {
  createCanvas(1280, 800);
  whaleImg.resize(1280, 800);
  
  //part of particle swarm
  for (let i = 0; i < 30; i++){
    agents.push(new Agent());
  }
}


function draw() {
  image(whaleImg, 0, 0);
  
  //another part of particle swarm
  for (let agent of agents){
    agent.update();
    agent.show();
  }
  
  noFill();
  stroke(0);
  strokeWeight(10);
  
  //bezier("anchorA" x, y, "contolA" x, y, "controlB" x, y, "anchorB" x, y);  
  bezier(anch1X, anch1Y, x, y, a, b, 360, 360);
  x += xStep;
  y += yStep;
  a += aStep;
  b += bStep;
  anch1X += anch1XStep;
  anch1Y += anch1YStep;
  
  //#2
  bezier(anch2X, anch2Y, x2, y2, a2, b2, 520, 330);
  x2 += x2Step;
  y2 += y2Step;
  a2 += a2Step;
  b2 += b2Step;
  anch2X += anch2XStep;
  anch2Y += anch2YStep;
  
  //sets boundary for change of control points
  //Bezier 1
  if (x > 250 || x < 150){
    xStep *= -1;
  }
  if (y > 250 || y < 150){
    yStep *= -1;
  }
  //a and b will stay between 750 and 500
  if (a > 360 || a < 200){
    aStep *= -1;
  } 
  if (b > 360 || b < 200){
    bStep *= -1;
  }
  //Moves the anchorA point
  if (anch1X > 250 || anch1X < 150){
    anch1XStep *= -1;
  }
  if (anch1Y > 250 || anch1Y < 150){
    anch1YStep *= -1;
  }
  
  //Bezier 2
  if (x2 > 600 || x2 < 500){
    x2Step *= -1;
  }
  if (y2 > 200 || y2 < 100){
    y2Step *= -1;
  }
  if (a2 > 520 || a2 < 420){
    a2Step *= -1;
  } 
  if (b2 > 330 || b2 < 230){
    b2Step *= -1;
  }
  //Moves the anchorA point
  if (anch2X > 600 || anch2X < 500){
    anch2XStep *= -1;
  }
  if (anch2Y > 200 || anch2Y < 100){
    anch2YStep *= -1;
  }
  
  
  //BUBBLE LOOPS!!!!!! RESETS BUBBLE TO GROUND once it leaves the top of screen
  //and moves the bubble a bit everytime without leaving horizontally
 
 //BUBBLE 1, LEFT
  if (bubY > -20) { 
  fill(255, 160);
  noStroke();
  ellipse(bubXa, bubY, 10);
  bubY += bubStep;
  } else {
    bubY = 750;
    bubXa += random(-50, 100);
    if (bubXa < 0 || bubXa > width){
      bubXa = 50;
    }
    fill(255, 160);
    noStroke();
    ellipse(bubXa, bubY, 10);
    bubY += bubStep;
  }
  
  //BUBBLE 2, CENTER
  if (frameCount > 1080){ //starts bubble a few seconds after other
    if (bubYb > -20) { 
    fill(255, 160);
    noStroke();
    ellipse(bubXb, bubYb, 10);
    bubYb += bubStep;
    
  } else {
    bubYb = 750;
    bubXb += random(-50, 100);
    if (bubXb < 0 || bubXb > width){
      bubXb = 400;
    }
    fill(255, 160);
    noStroke();
    ellipse(bubXb, bubYb, 10);
    bubYb += bubStep;
  }
  }
  
  //BUBBLE 3, RIGHT
  if (frameCount > 620){ //starts bubble a few seconds after other
    if (bubYc > -20) { 
    fill(255, 160);
    noStroke();
    ellipse(bubXc, bubYc, 10);
    bubYc += bubStep;
    } else {
      bubYc = 750;
      bubXc += random(-50, 100);
      if (bubXc < 0 || bubXc > width){
        bubXc = 1230;
      }
      fill(255, 160);
      noStroke();
      ellipse(bubXc, bubYc, 10);
      bubYc += bubStep;
    }
  }
}

//class for particles
class Agent {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xoff = random(60);
    this.yoff = random(60);
    this.color = [100];
  }
  update(){
    this.x = map(noise(this.xoff), 0, 1, 0, width);
    this.y = map(noise(this.yoff), 0, 1, 0, height);
    this.xoff += 0.0002; //velocity
    this.yoff += 0.0002;
  }
  show(){
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 5);
  }
}
