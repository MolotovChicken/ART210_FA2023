//based on light blink (between black and white)

let alpha = 50;
let dir = 1; // how to change direction 
let acc = 10; // speed the color increases

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0)

  //use an if statement to check if
  //the color is at the min or max

  if (alpha > 100) {
    dir = -0.1; //change this (these) values to change how fast it lights up and dims
  }
  if (alpha < 10) {
    dir = 0.3;
  }


  //the method to switch color
  alpha = alpha + (acc * dir);

  //MAYBE EXPERIMENT WITH DIFFERENT SHAPES
  //HAVE ACC or DIR TRIGGERED BY Motion or audio input????
  //fill with color
  fill(0, 0, 255, alpha);
  noStroke();
  ellipse(width / 2, height / 2, 300);
  
  fill (100, 100, 255, alpha);
  ellipse(width / 2, height / 2, 200);
  
  fill (200, 200, 255, alpha);
  ellipse(width / 2, height / 2, 100);
  
  fill (255, alpha);
  ellipse(width / 2, height / 2, 25);
   
   
   //debug
  textSize(15);
  fill(255);
  text("The current transparency is: " + alpha, 20, 20);
  text("acc + dir is: " + (acc * dir), 20, 40);

}
