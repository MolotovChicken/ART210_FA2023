let x = 5;
let y = 5;
let xStep = 2;
let yStep = 3;
let a = 755;
let b = 755;
let aStep = -2;
let bStep = -3;


function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(230);
  noFill();
  stroke(0);
  strokeWeight(10);
  bezier(50, 50, x, y, a, b, 750, 750);
  
  x += xStep;
  y += yStep;
  a += aStep;
  b += bStep;
  
  if (x > 200 || x < 5){
    xStep *= -1;
  }
  if (y > 200 || y < 5){
    yStep *= -1;
  }
  if (a > 800 || a < 625){
    aStep *= -1;
  }
  if (b > 800 || b < 625){
    bStep *= -1;
  }
  //NEEDS TWEAKING, BUT IT WORKS!!!!!
}
