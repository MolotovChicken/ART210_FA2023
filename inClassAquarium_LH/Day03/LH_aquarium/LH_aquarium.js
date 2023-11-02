//NEED TO WORK ON bezier 2, and fix once I get the points worked out
//consider adding a swarm, slow moving, of dust aprticles around the whale fall????

//BEZIER one variables
let x = 50; //controlA x cooridinate
let y = 50; //controlA y coordinate
let xStep = 2; //how much x coordinate of controlA changes by each time draw is ran
let yStep = 3; //how much y coordinate of controlA changes by each time draw is ran

let a = 400; //controlB x cooridinate
let b = 400; //controlB y coordinate
let aStep = -4; //how much x coordinate of controlB changes by each time draw is ran
let bStep = -5; //how much y coordinate of controlB changes by each time draw is ran

let anch1X = 50;
let anch1Y = 50;
let anch1XStep = 2;
let anch1YStep = 1;

//BEZIER two variables
let x2 = 300;
let y2 = 300;
let x2Step = 3;
let y2Step = 2;

let a2 = 600;
let b2 = 600;
let a2Step = -5;
let b2Step = -4;

let anch2X = 300;
let anch2Y = 300;
let anch2XStep = 1;
let anch2YStep = 2;


//bubble variables for later
let bubXa = 50;
let bubXb = 400;
let bubXc = 1230;
let bubY = 750;
let bubYb = 750;
let bubYc = 750;
let bubStep = -0.5;

//prepares image for use as background, can easily substitute my drawing here
function preload(){
  whaleImg = loadImage('data/whale.jpeg');
}

function setup() {
  createCanvas(1280, 800);
  whaleImg.resize(1280, 800);
}


function draw() {
  image(whaleImg, 0, 0);
  noFill();
  stroke(0);
  strokeWeight(10);
  
  //bezier("anchorA" x, y, "contolA" x, y, "controlB" x, y, "anchorB" x, y);  
  bezier(anch1X, anch1Y, x, y, a, b, 400, 400);
  x += xStep;
  y += yStep;
  a += aStep;
  b += bStep;
  anch1X += anch1XStep;
  anch1Y += anch1YStep;
  
  bezier(anch2X, anch2Y, x2, y2, a2, b2, 600, 600);
  x2 += x2Step;
  y2 += y2Step;
  a2 += a2Step;
  b2 += b2Step;
  anch2X += anch2XStep;
  anch2Y += anch2YStep;
  
  //sets boundary for change of control points
  //x and y will stay between 50 and 300 (to the right/down of the anchor out to 300px)
  //Bezier 1
  if (x > 300 || x < 50){
    xStep *= -1;
  }
  if (y > 300 || y < 50){
    yStep *= -1;
  }
  //a and b will stay between 750 and 500
  if (a > 400 || a < 300){
    aStep *= -1;
  } 
  if (b > 400 || b < 300){
    bStep *= -1;
  }
  //Moves the anchorA point
  if (anch1X > 200 || anch1X < 50){
    anch1XStep *= -1;
  }
  if (anch1Y > 80 || anch1Y < 50){
    anch1YStep *= -1;
  }
  
  //Bezier 2
  //(300, 300, 300, 300, 600, 600, 600, 600)
  //anch2X, anch2Y, x2, y2, a2, b2, 600, 600);
  if (x2 > 300 || x2 < 200){
    x2Step *= -1;
  }
  if (y2 > 300 || y2 < 200){
    y2Step *= -1;
  }
  if (a2 > 600 || a2 < 500){
    a2Step *= -1;
  } 
  if (b2 > 600 || b2 < 500){
    b2Step *= -1;
  }
  //Moves the anchorA point
  if (anch2X > 400 || anch2X < 200){
    anch2XStep *= -1;
  }
  if (anch2Y > 300 || anch2Y < 250){
    anch2YStep *= -1;
  }
  
  
  //BUBBLE LOOPS!!!!!! RESETS BUBBLE TO GROUND once it leaves the top of screen
  //and moves the bubble a bit everytime without leaving horizontally
 
 //BUBBLE 1, LEFT
  if (bubY > -20) { 
  fill(255);
  noStroke();
  ellipse(bubXa, bubY, 10);
  bubY += bubStep;
  } else {
    bubY = 750;
    bubXa += random(-50, 100);
    if (bubXa < 0 || bubXa > width){
      bubXa = 50;
    }
    fill(255);
    noStroke();
    ellipse(bubXa, bubY, 10);
    bubY += bubStep;
  }
  
  //BUBBLE 2, CENTER
  if (frameCount > 1080){ //starts bubble a few seconds after other
    if (bubYb > -20) { 
    fill(255);
    noStroke();
    ellipse(bubXb, bubYb, 10);
    bubYb += bubStep;
    
  } else {
    bubYb = 750;
    bubXb += random(-50, 100);
    if (bubXb < 0 || bubXb > width){
      bubXb = 400;
    }
    fill(255);
    noStroke();
    ellipse(bubXb, bubYb, 10);
    bubYb += bubStep;
  }
  }
  
  //BUBBLE 3, RIGHT
  if (frameCount > 620){ //starts bubble a few seconds after other
    if (bubYc > -20) { 
    fill(255);
    noStroke();
    ellipse(bubXc, bubYc, 10);
    bubYc += bubStep;
    } else {
      bubYc = 750;
      bubXc += random(-50, 100);
      if (bubXc < 0 || bubXc > width){
        bubXc = 1230;
      }
      fill(255);
      noStroke();
      ellipse(bubXc, bubYc, 10);
      bubYc += bubStep;
    }
  }
}
