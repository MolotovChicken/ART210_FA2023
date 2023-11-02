let bubbles = [];

let x = 50; //controlA x cooridinate
let y = 50; //controlA y coordinate
let xStep = 2; //how much x coordinate of controlA changes by each time draw is ran
let yStep = 3; //how much y coordinate of controlA changes by each time draw is ran

let a = 750; //controlB x cooridinate
let b = 750; //controlB y coordinate
let aStep = -4; //how much x coordinate of controlB changes by each time draw is ran
let bStep = -5; //how much y coordinate of controlB changes by each time draw is ran

let anchAX = 50;
let anchAY = 50;
let anchAXStep = 4;
let anchAYStep = 2;

let bubX = 50;
let bubY = 750;
let bubStep = -1;
let bubOp = 0;
let bubOpStep = 2;

function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(200);
  noFill();
  stroke(0);
  strokeWeight(15);
  
  //bezier("anchorA" x, y, "contolA" x, y, "controlB" x, y, "anchorB" x, y);  
  bezier(anchAX, anchAY, x, y, a, b, 750, 750);
  //bezier(50, 750, xT, yT, aT, bT, 300, 700);
  
  //bit of code to show bezier handles
  stroke(255, 0, 0);
  strokeWeight(5);
  line(anchAX, anchAY, x, y);
  line(750, 750, a, b);
  
  x += xStep;
  y += yStep;
  a += aStep;
  b += bStep;
  anchAX += anchAXStep;
  anchAY += anchAYStep;
  
  
  //sets boundary for change of control points
  //x and y will stay between 50 and 300 (to the right/down of the anchor out to 300px)
  if (x > 300 || x < 50){
    xStep *= -1;
  }
  if (y > 300 || y < 50){
    yStep *= -1;
  }
  //a and b will stay between 625 and 800
  if (a > 750 || a < 500){
    aStep *= -1;
  } 
  if (b > 750 || b < 500){
    bStep *= -1;
  }
  //Moves the anchorA point
  if (anchAX > 200 || anchAX < 50){
    anchAXStep *= -1;
  }
  if (anchAY > 100 || anchAY < 50){
    anchAYStep *= -1;
  }
  
  
  //BUBBLE LOOOP!!!!!! RESETS BUBBLE TO GROUND once it leaves the top of screen
  //and moves the bubble a bit everytime without leaving horizontally
 
  if (bubY > -20) { 
  fill(255);
  noStroke();
  ellipse(bubX, bubY, 20);
  bubY += bubStep;
  } else {
    bubY = 750;
    bubX += random(-50, 100);
    if (bubX < 0 || bubX > width){
      bubX = 50;
    }
    fill(255);
    noStroke();
    ellipse(bubX, bubY, 20);
    bubY += bubStep;
  }
}
