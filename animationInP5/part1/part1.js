let x = 50;
let y = 50;
let xSpeed = 2;
let ySpeed = 3;

function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  fill(200);
  ellipse(x, y, 50, 50);
  
  x += xSpeed;
  y += ySpeed;
  
  //-25 and 25 makes the ball appear to bounce from its edge
  //instead of its center. To center the ball, use 0.
  if (x > width-25 || x < 25){
    xSpeed *= -1;
  }
  if (y > height-25 || y < 25) {
    ySpeed *= -1;
  }
}
