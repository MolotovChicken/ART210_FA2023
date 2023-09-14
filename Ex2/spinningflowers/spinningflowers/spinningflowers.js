//declare an array (dynamic variable) to store flowers
let flowers = [];

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);
}

function draw() {
  background(220);
  
  //draw the flores!
  for(let flower of flowers) {
    //increase flower rotation angle
    flower.angle += 0.02;
    if (flower.type === 'daisy') {
      drawDaisy(flower.x, flower.y, flower.size, flower.angle); //draws a Daisy based on parameters/variables from function drawDaisy
    } else {
      drawTulip(flower.x, flower.y, flower.size, flower.angle); //draws a Tulip based on parameters/variables from function drawTulip
    }
  }
}

//standard p5js function called every time a mouse click is registered
function mousePressed() {
  //create a flower at mouse position
  let flower = {
    x: mouseX, 
    y: mouseY,
    size: random(20, 50), 
    type: random(1) < 0.5 ? 'daisy' : 'tulip',
    angle: 0
  };
  
  flowers.push(flower);
}

//custom function that draws Daisy at a specific position, size, rotation
function drawDaisy(x, y, size, angle) {
  push(); //save the current transform (change/movement) matrix
  translate(x, y); //move origin to flower's position
  rotate(angle);
  
  fill(255, 255, 0); //yellow
  ellipse(0, 0, size, size); //center
  fill(255); //white
  //draws circles around circumference of center at a specific interval for a singular rotation
  for (let a = 0; a < TWO_PI; a += PI / 8) {
    let px = cos(a) * size / 2; //gets variable for petals
    let py = sin(a) * size / 2; //gets variable for petals
    ellipse(px, py, size / 2, size / 2); //draws petals
  }
  pop(); //restore normal matrix function
}

//custom function that draws Tulip at a specific position, size, rotation
function drawTulip(x, y, size, angle) {
  push(); //save the current transform matrix
  translate(x, y); //sets origin as mouseX, mouseY
  rotate(angle); //rotates the image
  
  fill(255, 0, 0); //red
  for (let a = 0; a < TWO_PI; a += PI / 6) {
    let px = cos(a) * size / 2; //get petal variable
    let py = sin(a) * size / 2; //get petal variable
    ellipse(px, py, size / 3, size / 2); //petals
  }
  fill(0, 128, 0); //green
  rect(0 - size / 20, 0, size / 10, size / 2); //stem
  
  pop(); //return normalcy to rest of matrix
}
