function setup() {
  createCanvas(800, 800);
}


function draw() {
  background(220);
  
  //display mouseX and mouseY coordinates on screen
  fill(0);
  textSize(16);
  text(`X: ${mouseX}`, 10, 20);
  text(`Y: ${mouseY}`, 10, 40);
  
  //rectangle follow mouse with dynamic size
  let rectWidth = map(mouseX, 0, width, 10, 100);
  let rectHeight = map(mouseY, 0, height, 10, 100);
  
  fill(100, 200, 255);
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, rectWidth, rectHeight);
}
